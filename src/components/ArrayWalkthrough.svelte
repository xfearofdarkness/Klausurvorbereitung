<script lang="ts">
  import type { Walkthrough } from "../types/content";
  import { arrayKey, arrayRows, arrayStepState, type ArrayRowDefinition } from "../lib/walkthroughState";

  interface Props {
    walkthrough: Walkthrough;
    stepIndex: number;
  }

  const BAR_MIN_PERCENT = 8;

  let { walkthrough, stepIndex }: Props = $props();
  let scrollArea = $state<HTMLDivElement | null>(null);
  const reduceMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  let visual = $derived(walkthrough.visual.kind === "array" ? walkthrough.visual : null);
  let rows = $derived(visual ? arrayRows(visual) : []);
  let renderState = $derived(visual ? arrayStepState(visual, walkthrough.steps, stepIndex) : null);
  let barScales = $derived(computeBarScales(rows));
  let hasPointers = $derived(walkthrough.steps.some((step) => (step.pointers?.length ?? 0) > 0));

  function computeBarScales(arrayRows: ArrayRowDefinition[]): Map<string, number> {
    const scales = new Map<string, number>();
    for (const row of arrayRows) {
      let max = 0;
      for (const value of row.values) if (typeof value === "number") max = Math.max(max, value);
      for (const step of walkthrough.steps) {
        for (const update of step.values || []) {
          if (update.kind === "array-index" && arrayKey(update.array, 0) === arrayKey(row.id, 0) && typeof update.value === "number") {
            max = Math.max(max, update.value);
          }
        }
      }
      scales.set(row.id, max > 0 ? max : 1);
    }
    return scales;
  }

  /** Reihen, in denen irgendein Schritt Zeiger setzt; sie behalten die Zeigerzeile, damit die Höhe nicht springt. */
  function rowHasPointers(row: ArrayRowDefinition): boolean {
    return walkthrough.steps.some((step) => step.pointers?.some((pointer) => arrayKey(pointer.array, 0) === arrayKey(row.id, 0)));
  }

  function rowHasRanges(row: ArrayRowDefinition): boolean {
    return walkthrough.steps.some((step) => step.ranges?.some((range) => arrayKey(range.array, 0) === arrayKey(row.id, 0)));
  }

  /** Hält bei breiten Arrays den hervorgehobenen Bereich im sichtbaren Ausschnitt, ohne die Seite zu scrollen. */
  $effect(() => {
    renderState;
    const area = scrollArea;
    if (!area || area.scrollWidth <= area.clientWidth) return;
    const marked = [...area.querySelectorAll<HTMLElement>("[data-state], .walk-pointer:not(:empty)")];
    if (marked.length === 0) return;
    const areaLeft = area.getBoundingClientRect().left - area.scrollLeft;
    const left = Math.min(...marked.map((element) => element.getBoundingClientRect().left - areaLeft));
    const right = Math.max(...marked.map((element) => element.getBoundingClientRect().right - areaLeft));
    if (left < area.scrollLeft || right > area.scrollLeft + area.clientWidth) {
      area.scrollTo({ left: Math.max(0, (left + right - area.clientWidth) / 2), behavior: reduceMotion ? "auto" : "smooth" });
    }
  });

  function valueAt(row: ArrayRowDefinition, index: number): number | string | undefined {
    return renderState?.values.get(row.id)?.[index];
  }

  function stateAt(row: ArrayRowDefinition, index: number): string | undefined {
    return renderState?.states.get(arrayKey(row.id, index));
  }

  function barHeight(row: ArrayRowDefinition, index: number): number {
    const value = valueAt(row, index);
    if (typeof value !== "number") return 0;
    return Math.max((value / (barScales.get(row.id) || 1)) * 100, BAR_MIN_PERCENT);
  }

  function classes(row: ArrayRowDefinition, index: number, base: string): string {
    const state = stateAt(row, index);
    return state ? `${base} walk-${state}` : base;
  }
</script>

{#if visual && renderState}
  <div class="walk-visual">
    {#if visual.label && rows.length === 1}
      <div class="walk-matrix-title">{visual.label}</div>
    {/if}
    <div class="walk-array-scroll" bind:this={scrollArea}>
      <div class:walk-array-stack={rows.length > 1}>
        {#each rows as row}
          <div class="walk-array-row">
            {#if row.label}
              <div class="walk-array-label">{row.label}</div>
            {/if}
            <div class="walk-array" class:walk-array-bars={row.bars} style={`--walk-len: ${row.values.length}`}>
              {#if rowHasRanges(row)}
                <div class="walk-ranges">
                  {#each renderState.ranges.get(row.id) || [] as range}
                    <div class="walk-range" style={`grid-column: ${range.from + 1} / ${range.to + 2}`}>
                      <span>{range.label}</span>
                    </div>
                  {/each}
                </div>
              {/if}
              {#each row.values as _, index}
                {@const key = arrayKey(row.id, index)}
                <div class="walk-array-item" class:walk-dim={renderState.dimmed.has(key)} style={`grid-column: ${index + 1}`}>
                  {#if row.bars}
                    <div class="walk-bar-box">
                      {#if typeof valueAt(row, index) === "number"}
                        <span class="walk-bar-value">{valueAt(row, index)}</span>
                        <div class={classes(row, index, "walk-bar")} data-state={stateAt(row, index)} style={`height: ${barHeight(row, index)}%`}></div>
                      {/if}
                    </div>
                  {:else}
                    <div class={classes(row, index, "walk-array-cell")} data-state={stateAt(row, index)}>
                      <span>{valueAt(row, index)}</span>
                    </div>
                  {/if}
                  <span class="walk-array-index">{index}</span>
                  {#if hasPointers && rowHasPointers(row)}
                    <span class="walk-pointer">{(renderState.pointers.get(key) || []).join(", ")}</span>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}
