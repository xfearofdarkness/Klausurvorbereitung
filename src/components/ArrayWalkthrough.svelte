<script lang="ts">
  import type { ArrayVisual, Walkthrough, WalkthroughStep } from "../types/content";

  interface Props {
    walkthrough: Walkthrough;
    stepIndex: number;
  }

  interface ArrayRenderState {
    values: Array<number | string>;
    roles: Map<number, string[]>;
  }

  let { walkthrough, stepIndex }: Props = $props();

  let visual = $derived(walkthrough.visual.kind === "array" ? walkthrough.visual : null);
  let currentStep = $derived(walkthrough.steps[stepIndex]);
  let renderState = $derived(buildRenderState(visual, walkthrough.steps, currentStep, stepIndex));

  function buildRenderState(
    arrayVisual: ArrayVisual | null,
    steps: WalkthroughStep[],
    activeStep: WalkthroughStep | undefined,
    activeStepIndex: number
  ): ArrayRenderState {
    const values = [...(arrayVisual?.values || [])];
    const roles = new Map<number, string[]>();

    for (let index = 0; index <= activeStepIndex; index += 1) {
      for (const update of steps[index]?.values || []) {
        if (update.kind === "array-index") {
          values[update.index] = update.value;
        }
      }
    }

    for (const highlight of activeStep?.highlights || []) {
      if (highlight.kind !== "array-index") continue;
      const nextRoles = roles.get(highlight.index) || [];
      nextRoles.push(highlight.role);
      roles.set(highlight.index, nextRoles);
    }

    return { values, roles };
  }

  function valueAt(index: number): number | string | undefined {
    return renderState.values[index];
  }

  function cellClasses(index: number): string {
    const classes = ["walk-array-cell"];
    for (const role of renderState.roles.get(index) || []) {
      classes.push(`walk-${role}`);
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
