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

  const BAR_MIN_PERCENT = 8;

  let { walkthrough, stepIndex }: Props = $props();

  let visual = $derived(walkthrough.visual.kind === "array" ? walkthrough.visual : null);
  let currentStep = $derived(walkthrough.steps[stepIndex]);
  let renderState = $derived(buildRenderState(visual, walkthrough.steps, currentStep, stepIndex));
  let barScale = $derived(computeBarScale(visual, walkthrough.steps));

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

  function computeBarScale(arrayVisual: ArrayVisual | null, steps: WalkthroughStep[]): number {
    if (!arrayVisual?.bars) return 1;
    let max = 0;
    for (const value of arrayVisual.values) {
      if (typeof value === "number") max = Math.max(max, value);
    }
    for (const step of steps) {
      for (const update of step.values || []) {
        if (update.kind === "array-index" && typeof update.value === "number") {
          max = Math.max(max, update.value);
        }
      }
    }
    return max > 0 ? max : 1;
  }

  function valueAt(index: number): number | string | undefined {
    return renderState.values[index];
  }

  function barHeight(index: number): number {
    const value = valueAt(index);
    if (typeof value !== "number") return 0;
    return Math.max((value / barScale) * 100, BAR_MIN_PERCENT);
  }

  function roleClasses(index: number, base: string): string {
    const classes = [base];
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
    <div class="walk-array-scroll">
      <div class="walk-array" class:walk-array-bars={visual.bars}>
        {#each visual.values as _, index}
          <div class="walk-array-item">
            {#if visual.bars}
              <div class="walk-bar-box">
                {#if typeof valueAt(index) === "number"}
                  <span class="walk-bar-value">{valueAt(index)}</span>
                  <div class={roleClasses(index, "walk-bar")} style={`height: ${barHeight(index)}%`}></div>
                {/if}
              </div>
            {:else}
              <div class={roleClasses(index, "walk-array-cell")}>
                <span>{valueAt(index)}</span>
              </div>
            {/if}
            <span class="walk-array-index">{index}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}
