<script lang="ts">
  import type { Walkthrough } from "../types/content";
  import { timelineStepState } from "../lib/walkthroughState";

  interface Props {
    walkthrough: Walkthrough;
    stepIndex: number;
  }

  const MAX_AXIS_LABELS = 10;

  let { walkthrough, stepIndex }: Props = $props();

  let visual = $derived(walkthrough.visual.kind === "timeline" ? walkthrough.visual : null);
  let renderState = $derived(visual ? timelineStepState(visual, walkthrough.steps, stepIndex) : null);
  let hasNotes = $derived(walkthrough.steps.some((step) => step.values?.some((update) => update.kind === "timeline-note")));
  let hasQueue = $derived(walkthrough.steps.some((step) => step.values?.some((update) => update.kind === "timeline-queue")));
  let ticks = $derived(visual ? Array.from({ length: visual.length + 1 }, (_, index) => index) : []);
  let labelEvery = $derived(visual ? Math.max(1, Math.ceil(visual.length / MAX_AXIS_LABELS)) : 1);

  function percent(value: number): string {
    return `${(value / (visual?.length || 1)) * 100}%`;
  }

  function span(from: number, to: number): string {
    return `left: ${percent(from)}; width: ${percent(to - from)}`;
  }

  function laneSummary(laneId: string, label: string): string {
    const lane = renderState?.lanes.get(laneId);
    const parts = (lane?.segments || []).map((segment) => `${segment.from} bis ${segment.to}`);
    const worked = parts.length > 0 ? `läuft ${parts.join(", ")}` : "läuft noch nicht";
    return [label, worked, lane?.note || ""].filter(Boolean).join(", ");
  }
</script>

{#if visual && renderState}
  <div class="walk-visual">
    {#if visual.label}
      <div class="walk-matrix-title">{visual.label}</div>
    {/if}
    <div class="walk-timeline" class:walk-timeline-notes={hasNotes} style={`--walk-cursor: ${percent(renderState.cursor)}`}>
      {#each visual.lanes as lane (lane.id)}
        {@const laneState = renderState.lanes.get(lane.id)}
        <div class={`walk-lane-label${laneState?.state ? ` walk-head-${laneState.state}` : ""}`}>{lane.label}</div>
        <div class="walk-lane-track" role="img" aria-label={laneSummary(lane.id, lane.label)}>
          {#each laneState?.waiting || [] as gap}
            <span class="walk-lane-wait" style={span(gap.from, gap.to)}></span>
          {/each}
          {#each laneState?.segments || [] as segment}
            <span class={`walk-lane-segment${segment.state ? ` walk-${segment.state}` : ""}`} style={span(segment.from, segment.to)}></span>
          {/each}
          <span class="walk-timeline-cursor" aria-hidden="true"></span>
          {#if lane.start !== undefined}
            <span class="walk-lane-start" style={`left: ${percent(lane.start)}`} title={`Ankunft bei ${lane.start}`}></span>
          {/if}
        </div>
        {#if hasNotes}
          <div class={`walk-lane-note${laneState?.state ? ` walk-head-${laneState.state}` : ""}`}>{laneState?.note || ""}</div>
        {/if}
      {/each}

      <div class="walk-timeline-axis" aria-hidden="true">
        {#each ticks as tick}
          <span class="walk-tick" class:walk-tick-major={tick % labelEvery === 0} style={`left: ${percent(tick)}`}>
            {#if tick % labelEvery === 0}{tick}{/if}
          </span>
        {/each}
        <span class="walk-timeline-cursor" aria-hidden="true"></span>
        {#if visual.unit}
          <span class="walk-timeline-unit">{visual.unit}</span>
        {/if}
      </div>
    </div>

    {#if hasQueue}
      <div class="walk-timeline-queue">
        <span class="walk-timeline-queue-label">{visual.queueLabel || "Liste"} bei {renderState.queueAt ?? renderState.cursor}{visual.unit ? ` ${visual.unit}` : ""}:</span>
        {#if renderState.queue && renderState.queue.length > 0}
          <ol>
            {#each renderState.queue as item}
              <li>{item}</li>
            {/each}
          </ol>
        {:else}
          <span class="walk-timeline-queue-empty">leer</span>
        {/if}
      </div>
    {/if}
  </div>
{/if}
