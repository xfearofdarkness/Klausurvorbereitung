<script lang="ts">
  import type { ArrayDefinition, ArrayVisual, Walkthrough, WalkthroughStep } from "../types/content";

  interface Props {
    walkthrough: Walkthrough;
    stepIndex: number;
  }

  interface ArrayRenderState {
    values: Map<string, Array<number | string>>;
    roles: Map<string, string[]>;
  }

  interface ArrayRow {
    id: string;
    label?: string;
    values: Array<number | string>;
    bars?: boolean;
  }

  const BAR_MIN_PERCENT = 8;
  const DEFAULT_ARRAY_ID = "__default";

  let { walkthrough, stepIndex }: Props = $props();

  let visual = $derived(walkthrough.visual.kind === "array" ? walkthrough.visual : null);
  let rows = $derived(buildRows(visual));
  let currentStep = $derived(walkthrough.steps[stepIndex]);
  let renderState = $derived(buildRenderState(rows, walkthrough.steps, currentStep, stepIndex));
  let barScales = $derived(computeBarScales(rows, walkthrough.steps));

  function buildRows(arrayVisual: ArrayVisual | null): ArrayRow[] {
    if (!arrayVisual) return [];
    if (arrayVisual.arrays?.length) {
      return arrayVisual.arrays.map((row: ArrayDefinition) => ({
        id: row.id,
        label: row.label,
        values: row.values,
        bars: row.bars ?? arrayVisual.bars
      }));
    }

    return [
      {
        id: DEFAULT_ARRAY_ID,
        label: arrayVisual.label,
        values: arrayVisual.values,
        bars: arrayVisual.bars
      }
    ];
  }

  function buildRenderState(
    arrayRows: ArrayRow[],
    steps: WalkthroughStep[],
    activeStep: WalkthroughStep | undefined,
    activeStepIndex: number
  ): ArrayRenderState {
    const values = new Map<string, Array<number | string>>();
    const roles = new Map<string, string[]>();

    for (const row of arrayRows) {
      values.set(row.id, [...row.values]);
    }

    for (let index = 0; index <= activeStepIndex; index += 1) {
      for (const update of steps[index]?.values || []) {
        if (update.kind === "array-index") {
          const rowValues = values.get(update.array || DEFAULT_ARRAY_ID);
          if (rowValues) {
            rowValues[update.index] = update.value;
          }
        }
      }
    }

    for (const highlight of activeStep?.highlights || []) {
      if (highlight.kind !== "array-index") continue;
      const key = roleKey(highlight.array || DEFAULT_ARRAY_ID, highlight.index);
      const nextRoles = roles.get(key) || [];
      nextRoles.push(highlight.role);
      roles.set(key, nextRoles);
    }

    return { values, roles };
  }

  function computeBarScales(arrayRows: ArrayRow[], steps: WalkthroughStep[]): Map<string, number> {
    const scales = new Map<string, number>();
    for (const row of arrayRows) {
      if (!row.bars) {
        scales.set(row.id, 1);
        continue;
      }
      let max = 0;
      for (const value of row.values) {
        if (typeof value === "number") max = Math.max(max, value);
      }
      for (const step of steps) {
        for (const update of step.values || []) {
          if (update.kind === "array-index" && (update.array || DEFAULT_ARRAY_ID) === row.id && typeof update.value === "number") {
            max = Math.max(max, update.value);
          }
        }
      }
      scales.set(row.id, max > 0 ? max : 1);
    }
    return scales;
  }

  function roleKey(rowId: string, index: number): string {
    return `${rowId}:${index}`;
  }

  function valueAt(row: ArrayRow, index: number): number | string | undefined {
    return renderState.values.get(row.id)?.[index];
  }

  function barHeight(row: ArrayRow, index: number): number {
    const value = valueAt(row, index);
    if (typeof value !== "number") return 0;
    return Math.max((value / (barScales.get(row.id) || 1)) * 100, BAR_MIN_PERCENT);
  }

  function roleClasses(row: ArrayRow, index: number, base: string): string {
    const classes = [base];
    for (const role of renderState.roles.get(roleKey(row.id, index)) || []) {
      classes.push(`walk-${role}`);
    }
    return classes.join(" ");
  }
</script>

{#if visual}
  <div class="walk-visual">
    {#if visual.label && rows.length === 1}
      <div class="walk-matrix-title">{visual.label}</div>
    {/if}
    <div class="walk-array-scroll">
      <div class:walk-array-stack={rows.length > 1}>
        {#each rows as row}
          <div class="walk-array-row">
            {#if row.label}
              <div class="walk-array-label">{row.label}</div>
            {/if}
            <div class="walk-array" class:walk-array-bars={row.bars}>
              {#each row.values as _, index}
                <div class="walk-array-item">
                  {#if row.bars}
                    <div class="walk-bar-box">
                      {#if typeof valueAt(row, index) === "number"}
                        <span class="walk-bar-value">{valueAt(row, index)}</span>
                        <div class={roleClasses(row, index, "walk-bar")} style={`height: ${barHeight(row, index)}%`}></div>
                      {/if}
                    </div>
                  {:else}
                    <div class={roleClasses(row, index, "walk-array-cell")}>
                      <span>{valueAt(row, index)}</span>
                    </div>
                  {/if}
                  <span class="walk-array-index">{index}</span>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}
