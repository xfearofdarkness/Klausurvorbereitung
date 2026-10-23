<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { Tween } from "svelte/motion";
  import type { TreeVisual, Walkthrough, WalkthroughStep } from "../types/content";

  interface Props {
    walkthrough: Walkthrough;
    stepIndex: number;
  }

  interface TreeNodeState {
    value: number | string;
    note: string | null;
    hidden: boolean;
    marked: boolean;
    changed: boolean;
    left?: string;
    right?: string;
  }

  interface Point {
    x: number;
    y: number;
  }

  interface TreeRenderState {
    nodes: Map<string, TreeNodeState>;
    root: string | null;
    nodeRoles: Map<string, string[]>;
    edgeRoles: Map<string, string[]>;
  }

  const COL_WIDTH = 13;
  const ROW_HEIGHT = 17;
  const NODE_RADIUS = 5;
  const PADDING = 8;
  const NOTE_SPACE = 5;
  const NOTE_OFFSET = NODE_RADIUS + 2;
  const MOVE_DURATION_MS = 420;
  const PIXELS_PER_UNIT = 3.6;
  const MIN_SVG_WIDTH_PX = 120;
  const MAX_SVG_WIDTH_PX = 320;

  let { walkthrough, stepIndex }: Props = $props();

  let visual = $derived(walkthrough.visual.kind === "tree" ? walkthrough.visual : null);
  let hasNotes = $derived(visual ? treeHasNotes(visual, walkthrough.steps) : false);
  let topPadding = $derived(hasNotes ? PADDING + NOTE_SPACE : PADDING);
  let currentStep = $derived(walkthrough.steps[stepIndex]);
  let renderState = $derived(buildRenderState(visual, walkthrough.steps, currentStep, stepIndex));
  let layout = $derived(buildLayout(renderState, topPadding));
  let size = $derived(stableSize(visual, walkthrough.steps, topPadding));

  const reduceMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const positions = new Tween<Record<string, Point>>({}, {
    duration: reduceMotion ? 0 : MOVE_DURATION_MS,
    easing: cubicOut,
    interpolate: interpolatePositions
  });

  $effect(() => {
    positions.target = Object.fromEntries(layout);
  });

  function interpolatePositions(from: Record<string, Point>, to: Record<string, Point>): (t: number) => Record<string, Point> {
    return (t) => {
      const result: Record<string, Point> = {};
      for (const [id, target] of Object.entries(to)) {
        const start = from[id] ?? target;
        result[id] = { x: start.x + (target.x - start.x) * t, y: start.y + (target.y - start.y) * t };
      }
      return result;
    };
  }

  function treeHasNotes(treeVisual: TreeVisual, steps: WalkthroughStep[]): boolean {
    return (
      treeVisual.nodes.some((node) => node.note) ||
      steps.some((step) => step.values?.some((update) => update.kind === "tree-node" && typeof update.note === "string"))
    );
  }

  function buildLayout(state: TreeRenderState, top: number): Map<string, Point> {
    const result = new Map<string, Point>();
    let inorderIndex = 0;

    const place = (nodeId: string | undefined, depth: number): void => {
      if (!nodeId) return;
      const node = state.nodes.get(nodeId);
      if (!node || result.has(nodeId)) return;
      place(node.left, depth + 1);
      result.set(nodeId, { x: PADDING + inorderIndex * COL_WIDTH, y: top + depth * ROW_HEIGHT });
      inorderIndex += 1;
      place(node.right, depth + 1);
    };

    place(state.root ?? undefined, 0);
    return result;
  }

  /** Größte Ausdehnung über alle Schritte, damit die Grafik beim Blättern nicht springt. */
  function stableSize(treeVisual: TreeVisual | null, steps: WalkthroughStep[], top: number): { width: number; height: number } {
    let maxX = 0;
    let maxY = 0;
    const stepCount = Math.max(steps.length, 1);
    for (let index = 0; index < stepCount; index += 1) {
      for (const point of buildLayout(buildRenderState(treeVisual, steps, steps[index], index), top).values()) {
        maxX = Math.max(maxX, point.x);
        maxY = Math.max(maxY, point.y);
      }
    }
    return { width: maxX + PADDING, height: maxY + PADDING + 2 };
  }

  function buildRenderState(
    treeVisual: TreeVisual | null,
    steps: WalkthroughStep[],
    activeStep: WalkthroughStep | undefined,
    activeStepIndex: number
  ): TreeRenderState {
    const nodes = new Map<string, TreeNodeState>();
    const nodeRoles = new Map<string, string[]>();
    const edgeRoles = new Map<string, string[]>();
    let root = treeVisual?.root ?? null;
    if (!treeVisual) return { nodes, root, nodeRoles, edgeRoles };

    for (const node of treeVisual.nodes) {
      nodes.set(node.id, {
        value: node.value,
        note: node.note ?? null,
        hidden: node.hidden === true,
        marked: false,
        changed: false,
        left: node.left,
        right: node.right
      });
    }

    for (let index = 0; index <= activeStepIndex; index += 1) {
      const isActiveStep = index === activeStepIndex;
      for (const update of steps[index]?.values || []) {
        if (update.kind === "tree-root") {
          root = update.root;
          continue;
        }
        if (update.kind !== "tree-node") continue;
        const state = nodes.get(update.node);
        if (!state) continue;
        if (update.value !== undefined) {
          if (isActiveStep && state.value !== update.value) state.changed = true;
          state.value = update.value;
        }
        if (update.note !== undefined) {
          if (isActiveStep && state.note !== update.note) state.changed = true;
          state.note = update.note;
        }
        if (update.hidden !== undefined) state.hidden = update.hidden;
        if (update.mark !== undefined) state.marked = update.mark === "done";
        if (update.left !== undefined) state.left = update.left ?? undefined;
        if (update.right !== undefined) state.right = update.right ?? undefined;
      }
    }

    for (const highlight of activeStep?.highlights || []) {
      if (highlight.kind === "tree-node") {
        const roles = nodeRoles.get(highlight.node) || [];
        roles.push(highlight.role);
        nodeRoles.set(highlight.node, roles);
      } else if (highlight.kind === "tree-edge") {
        const key = edgeKey(highlight.from, highlight.to);
        const roles = edgeRoles.get(key) || [];
        roles.push(highlight.role);
        edgeRoles.set(key, roles);
      }
    }

    return { nodes, root, nodeRoles, edgeRoles };
  }

  function edgeKey(from: string, to: string): string {
    return `${from}->${to}`;
  }

  function pointOf(nodeId: string): Point | undefined {
    return positions.current[nodeId] ?? layout.get(nodeId);
  }

  function edges(): Array<{ from: Point; to: Point; key: string }> {
    const result: Array<{ from: Point; to: Point; key: string }> = [];
    for (const nodeId of layout.keys()) {
      const state = renderState.nodes.get(nodeId);
      if (!state || state.hidden) continue;
      for (const childId of [state.left, state.right]) {
        if (!childId || !layout.has(childId) || isHidden(childId)) continue;
        const from = pointOf(nodeId);
        const to = pointOf(childId);
        if (from && to) result.push({ from, to, key: edgeKey(nodeId, childId) });
      }
    }
    return result;
  }

  function isHidden(nodeId: string): boolean {
    return renderState.nodes.get(nodeId)?.hidden === true;
  }

  function nodeClasses(nodeId: string): string {
    const state = renderState.nodes.get(nodeId);
    const classes = ["walk-node"];
    if (state?.marked) classes.push("walk-done");
    if (state?.changed) classes.push("walk-changed");
    for (const role of renderState.nodeRoles.get(nodeId) || []) {
      classes.push(`walk-${role}`);
    }
    return classes.join(" ");
  }

  function edgeClasses(key: string): string {
    const classes = ["walk-edge"];
    for (const role of renderState.edgeRoles.get(key) || []) {
      classes.push(`walk-${role}`);
    }
    return classes.join(" ");
  }

  function svgStyle(): string {
    const maxWidth = Math.max(MIN_SVG_WIDTH_PX, Math.min(MAX_SVG_WIDTH_PX, size.width * PIXELS_PER_UNIT));
    return `--walk-tree-max-width: ${maxWidth}px`;
  }
</script>

{#if visual}
  <div class="walk-visual">
    {#if visual.label}
      <div class="walk-matrix-title">{visual.label}</div>
    {/if}
    <svg
      class="walk-svg walk-tree-svg"
      style={svgStyle()}
      viewBox={`0 0 ${size.width} ${size.height}`}
      role="img"
      aria-label={visual.label || walkthrough.title}
    >
      {#each edges() as edge (edge.key)}
        <line class={edgeClasses(edge.key)} x1={edge.from.x} y1={edge.from.y} x2={edge.to.x} y2={edge.to.y} />
      {/each}
      {#each [...layout.keys()] as nodeId (nodeId)}
        {@const point = pointOf(nodeId)}
        {@const state = renderState.nodes.get(nodeId)}
        {#if point && state && !state.hidden}
          <g class={nodeClasses(nodeId)}>
            <circle cx={point.x} cy={point.y} r={NODE_RADIUS} />
            <text x={point.x} y={point.y}>{state.value}</text>
            {#if state.note}
              <text class="walk-node-note" x={point.x} y={point.y - NOTE_OFFSET}>{state.note}</text>
            {/if}
          </g>
        {/if}
      {/each}
    </svg>
  </div>
{/if}
