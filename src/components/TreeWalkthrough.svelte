<script lang="ts">
  import type { TreeNodeDefinition, TreeVisual, Walkthrough, WalkthroughStep } from "../types/content";

  interface Props {
    walkthrough: Walkthrough;
    stepIndex: number;
  }

  interface TreeNodeState {
    value: number | string;
    hidden: boolean;
    marked: boolean;
  }

  interface TreeLayoutNode {
    node: TreeNodeDefinition;
    x: number;
    y: number;
  }

  interface TreeRenderState {
    nodes: Map<string, TreeNodeState>;
    nodeRoles: Map<string, string[]>;
    edgeRoles: Map<string, string[]>;
  }

  const COL_WIDTH = 13;
  const ROW_HEIGHT = 17;
  const NODE_RADIUS = 5;
  const PADDING = 8;

  let { walkthrough, stepIndex }: Props = $props();

  let visual = $derived(walkthrough.visual.kind === "tree" ? walkthrough.visual : null);
  let currentStep = $derived(walkthrough.steps[stepIndex]);
  let layout = $derived(buildLayout(visual));
  let renderState = $derived(buildRenderState(visual, walkthrough.steps, currentStep, stepIndex));

  function buildLayout(treeVisual: TreeVisual | null): Map<string, TreeLayoutNode> {
    const positions = new Map<string, TreeLayoutNode>();
    if (!treeVisual) return positions;

    const nodeById = new Map(treeVisual.nodes.map((node) => [node.id, node]));
    let inorderIndex = 0;

    const place = (nodeId: string | undefined, depth: number): void => {
      if (!nodeId) return;
      const node = nodeById.get(nodeId);
      if (!node || positions.has(nodeId)) return;
      place(node.left, depth + 1);
      positions.set(nodeId, {
        node,
        x: PADDING + inorderIndex * COL_WIDTH,
        y: PADDING + depth * ROW_HEIGHT
      });
      inorderIndex += 1;
      place(node.right, depth + 1);
    };

    place(treeVisual.root, 0);
    return positions;
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
    if (!treeVisual) return { nodes, nodeRoles, edgeRoles };

    for (const node of treeVisual.nodes) {
      nodes.set(node.id, { value: node.value, hidden: node.hidden === true, marked: false });
    }

    for (let index = 0; index <= activeStepIndex; index += 1) {
      for (const update of steps[index]?.values || []) {
        if (update.kind !== "tree-node") continue;
        const state = nodes.get(update.node);
        if (!state) continue;
        if (update.value !== undefined) state.value = update.value;
        if (update.hidden !== undefined) state.hidden = update.hidden;
        if (update.mark !== undefined) state.marked = update.mark === "done";
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

    return { nodes, nodeRoles, edgeRoles };
  }

  function edgeKey(from: string, to: string): string {
    return `${from}->${to}`;
  }

  function edges(): Array<{ from: TreeLayoutNode; to: TreeLayoutNode; key: string }> {
    const result: Array<{ from: TreeLayoutNode; to: TreeLayoutNode; key: string }> = [];
    for (const entry of layout.values()) {
      for (const childId of [entry.node.left, entry.node.right]) {
        if (!childId) continue;
        const child = layout.get(childId);
        if (!child) continue;
        if (isHidden(entry.node.id) || isHidden(childId)) continue;
        result.push({ from: entry, to: child, key: edgeKey(entry.node.id, childId) });
      }
    }
    return result;
  }

  function isHidden(nodeId: string): boolean {
    return renderState.nodes.get(nodeId)?.hidden === true;
  }

  function nodeClasses(nodeId: string): string {
    const classes = ["walk-node"];
    if (renderState.nodes.get(nodeId)?.marked) classes.push("walk-done");
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

  function viewBox(): string {
    let maxX = 0;
    let maxY = 0;
    for (const entry of layout.values()) {
      maxX = Math.max(maxX, entry.x);
      maxY = Math.max(maxY, entry.y);
    }
    return `0 0 ${maxX + PADDING} ${maxY + PADDING + 2}`;
  }
</script>

{#if visual}
  <div class="walk-visual">
    {#if visual.label}
      <div class="walk-matrix-title">{visual.label}</div>
    {/if}
    <svg class="walk-svg" viewBox={viewBox()} role="img" aria-label={visual.label || walkthrough.title}>
      {#each edges() as edge (edge.key)}
        <line class={edgeClasses(edge.key)} x1={edge.from.x} y1={edge.from.y} x2={edge.to.x} y2={edge.to.y} />
      {/each}
      {#each [...layout.values()] as entry (entry.node.id)}
        {#if !isHidden(entry.node.id)}
          <g class={nodeClasses(entry.node.id)}>
            <circle cx={entry.x} cy={entry.y} r={NODE_RADIUS} />
            <text x={entry.x} y={entry.y}>{renderState.nodes.get(entry.node.id)?.value}</text>
          </g>
        {/if}
      {/each}
    </svg>
  </div>
{/if}
