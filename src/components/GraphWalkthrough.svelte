<script lang="ts">
  import type { GraphEdgeDefinition, GraphNodeDefinition, GraphVisual, Walkthrough, WalkthroughStep } from "../types/content";

  interface Props {
    walkthrough: Walkthrough;
    stepIndex: number;
  }

  interface GraphNodeState {
    note: string | null;
    marked: boolean;
  }

  interface GraphRenderState {
    nodes: Map<string, GraphNodeState>;
    nodeRoles: Map<string, string[]>;
    edgeMarks: Map<string, boolean>;
    edgeRoles: Map<string, string[]>;
  }

  const NODE_RADIUS = 5;
  const PADDING = 10;

  let { walkthrough, stepIndex }: Props = $props();

  let visual = $derived(walkthrough.visual.kind === "graph" ? walkthrough.visual : null);
  let currentStep = $derived(walkthrough.steps[stepIndex]);
  let nodeById = $derived(new Map((visual?.nodes || []).map((node) => [node.id, node])));
  let renderState = $derived(buildRenderState(visual, walkthrough.steps, currentStep, stepIndex));

  function buildRenderState(
    graphVisual: GraphVisual | null,
    steps: WalkthroughStep[],
    activeStep: WalkthroughStep | undefined,
    activeStepIndex: number
  ): GraphRenderState {
    const nodes = new Map<string, GraphNodeState>();
    const nodeRoles = new Map<string, string[]>();
    const edgeMarks = new Map<string, boolean>();
    const edgeRoles = new Map<string, string[]>();
    if (!graphVisual) return { nodes, nodeRoles, edgeMarks, edgeRoles };

    for (const node of graphVisual.nodes) {
      nodes.set(node.id, { note: node.note ?? null, marked: false });
    }

    for (let index = 0; index <= activeStepIndex; index += 1) {
      for (const update of steps[index]?.values || []) {
        if (update.kind === "graph-node") {
          const state = nodes.get(update.node);
          if (!state) continue;
          if (update.note !== undefined) state.note = update.note;
          if (update.mark !== undefined) state.marked = update.mark === "done";
        } else if (update.kind === "graph-edge") {
          if (update.mark !== undefined) {
            edgeMarks.set(edgeKey(update.from, update.to), update.mark === "done");
          }
        }
      }
    }

    for (const highlight of activeStep?.highlights || []) {
      if (highlight.kind === "graph-node") {
        const roles = nodeRoles.get(highlight.node) || [];
        roles.push(highlight.role);
        nodeRoles.set(highlight.node, roles);
      } else if (highlight.kind === "graph-edge") {
        const key = edgeKey(highlight.from, highlight.to);
        const roles = edgeRoles.get(key) || [];
        roles.push(highlight.role);
        edgeRoles.set(key, roles);
      }
    }

    return { nodes, nodeRoles, edgeMarks, edgeRoles };
  }

  function edgeKey(from: string, to: string): string {
    return [from, to].sort().join("--");
  }

  function nodeClasses(nodeId: string): string {
    const classes = ["walk-node"];
    if (renderState.nodes.get(nodeId)?.marked) classes.push("walk-done");
    for (const role of renderState.nodeRoles.get(nodeId) || []) {
      classes.push(`walk-${role}`);
    }
    return classes.join(" ");
  }

  function edgeClasses(edge: GraphEdgeDefinition): string {
    const key = edgeKey(edge.from, edge.to);
    const classes = ["walk-edge"];
    if (renderState.edgeMarks.get(key)) classes.push("walk-done");
    for (const role of renderState.edgeRoles.get(key) || []) {
      classes.push(`walk-${role}`);
    }
    return classes.join(" ");
  }

  function endpoints(edge: GraphEdgeDefinition): { x1: number; y1: number; x2: number; y2: number } | null {
    const from = nodeById.get(edge.from);
    const to = nodeById.get(edge.to);
    if (!from || !to) return null;
    if (!visual?.directed) {
      return { x1: from.x, y1: from.y, x2: to.x, y2: to.y };
    }
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.hypot(dx, dy) || 1;
    const trim = NODE_RADIUS + 1.4;
    return {
      x1: from.x + (dx / length) * NODE_RADIUS,
      y1: from.y + (dy / length) * NODE_RADIUS,
      x2: to.x - (dx / length) * trim,
      y2: to.y - (dy / length) * trim
    };
  }

  function labelPosition(edge: GraphEdgeDefinition): { x: number; y: number } | null {
    const from = nodeById.get(edge.from);
    const to = nodeById.get(edge.to);
    if (!from || !to) return null;
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.hypot(dx, dy) || 1;
    return {
      x: (from.x + to.x) / 2 - (dy / length) * 2.6,
      y: (from.y + to.y) / 2 + (dx / length) * 2.6
    };
  }

  function notePosition(node: GraphNodeDefinition): { x: number; y: number } {
    return { x: node.x, y: node.y - NODE_RADIUS - 2 };
  }

  function viewBox(): string {
    let maxX = 0;
    let maxY = 0;
    for (const node of visual?.nodes || []) {
      maxX = Math.max(maxX, node.x);
      maxY = Math.max(maxY, node.y);
    }
    return `0 0 ${maxX + PADDING} ${maxY + PADDING}`;
  }
</script>

{#if visual}
  <div class="walk-visual">
    {#if visual.label}
      <div class="walk-matrix-title">{visual.label}</div>
    {/if}
    <svg class="walk-svg" viewBox={viewBox()} role="img" aria-label={visual.label || walkthrough.title}>
      {#if visual.directed}
        <defs>
          <marker id="walk-arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 6 3 L 0 6 z" />
          </marker>
        </defs>
      {/if}
      {#each visual.edges as edge (edgeKey(edge.from, edge.to) + edge.from)}
        {@const line = endpoints(edge)}
        {#if line}
          <line
            class={edgeClasses(edge)}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            marker-end={visual.directed ? "url(#walk-arrow)" : undefined}
          />
        {/if}
      {/each}
      {#each visual.edges as edge (edgeKey(edge.from, edge.to) + edge.from + "-label")}
        {@const pos = labelPosition(edge)}
        {#if pos && edge.label !== undefined}
          <text class="walk-edge-label" x={pos.x} y={pos.y}>{edge.label}</text>
        {/if}
      {/each}
      {#each visual.nodes as node (node.id)}
        <g class={nodeClasses(node.id)}>
          <circle cx={node.x} cy={node.y} r={NODE_RADIUS} />
          <text x={node.x} y={node.y}>{node.label ?? node.id}</text>
          {#if renderState.nodes.get(node.id)?.note}
            <text class="walk-node-note" x={notePosition(node).x} y={notePosition(node).y}>
              {renderState.nodes.get(node.id)?.note}
            </text>
          {/if}
        </g>
      {/each}
    </svg>
  </div>
{/if}
