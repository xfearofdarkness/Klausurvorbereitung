<script lang="ts">
  import type { Walkthrough } from "../types/content";

  interface Props {
    walkthrough: Walkthrough;
    stepIndex: number;
  }

  let { walkthrough, stepIndex }: Props = $props();

  let visual = $derived(walkthrough.visual.kind === "array" ? walkthrough.visual : null);
  let currentStep = $derived(walkthrough.steps[stepIndex]);

  function valueAt(index: number): number | string | undefined {
    if (!visual) return undefined;
    let value = visual.values[index];
    for (let step = 0; step <= stepIndex; step += 1) {
      for (const update of walkthrough.steps[step]?.values || []) {
        if (update.kind === "array-index" && update.index === index) {
          value = update.value;
        }
      }
    }
    return value;
  }

  function cellClasses(index: number): string {
    const classes = ["walk-array-cell"];
    for (const highlight of currentStep?.highlights || []) {
      if (highlight.kind === "array-index" && highlight.index === index) {
        classes.push(`walk-${highlight.role}`);
      }
    }
    return classes.join(" ");
  }
</script>

{#if visual}
  <div class="walk-visual">
    {#if visual.label}
      <div class="walk-matrix-title">{visual.label}</div>
    {/if}
    <div class="walk-array">
      {#each visual.values as _, index}
        <div class={cellClasses(index)}>
          <span class="cell-label">{index}</span>
          <span>{valueAt(index)}</span>
        </div>
      {/each}
    </div>
  </div>
{/if}
