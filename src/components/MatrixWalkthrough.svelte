<script lang="ts">
  import type { MatrixDefinition, MatrixValue, Walkthrough } from "../types/content";
  import { matrixHeaderKey, matrixKey, matrixStepState } from "../lib/walkthroughState";

  interface Props {
    walkthrough: Walkthrough;
    stepIndex: number;
  }

  let { walkthrough, stepIndex }: Props = $props();

  let visual = $derived(walkthrough.visual.kind === "matrix" ? walkthrough.visual : null);
  let matrices = $derived(visual?.matrices || []);
  let operators = $derived(visual?.operators || []);
  let hasTableMatrix = $derived(matrices.some((matrix) => matrix.layout === "table"));
  let currentStep = $derived(walkthrough.steps[stepIndex]);
  let renderState = $derived(visual ? matrixStepState(visual, walkthrough.steps, stepIndex) : null);

  function cellValue(matrix: MatrixDefinition, row: number, col: number): MatrixValue {
    return renderState?.values.get(matrixKey(matrix.id, row, col)) ?? null;
  }

  function highlightClasses(matrix: MatrixDefinition, row: number, col: number, baseClass = "walk-matrix-cell"): string {
    const classes = [baseClass];
    if (cellValue(matrix, row, col) === null) classes.push("walk-empty");
    const state = renderState?.states.get(matrixKey(matrix.id, row, col));
    if (state) classes.push(`walk-${state}`);
    return classes.join(" ");
  }

  function headerClasses(matrix: MatrixDefinition, axis: "row" | "col", index: number, baseClass: string): string {
    const state = renderState?.headers.get(matrixHeaderKey(matrix.id, axis, index));
    return state ? `${baseClass} walk-head-${state}` : baseClass;
  }

  function display(value: MatrixValue, emptyValue = "?"): string {
    return value === null ? emptyValue : String(value);
  }

  function rowLabel(matrix: MatrixDefinition, row: number): string {
    return String(matrix.rowLabels?.[row] ?? row);
  }

  function colLabel(matrix: MatrixDefinition, col: number): string {
    return String(matrix.colLabels?.[col] ?? col);
  }

  function cellAria(matrix: MatrixDefinition, row: number, col: number): string {
    const value = cellValue(matrix, row, col);
    const renderedValue = value === null ? "noch offen" : String(value);
    const changedNote = renderState?.states.get(matrixKey(matrix.id, row, col)) === "changed" ? ", in diesem Schritt geändert" : "";
    return `${matrix.label}, Zeile ${rowLabel(matrix, row)}, Spalte ${colLabel(matrix, col)}: ${renderedValue}${changedNote}`;
  }
</script>

{#if currentStep}
  <div class:walk-table-visual={hasTableMatrix} class="walk-visual walk-matrix-visual">
    {#each matrices as matrix, matrixIndex}
      <div class:walk-matrix-table-block={matrix.layout === "table"} class="walk-matrix-block">
        <div class="walk-matrix-title">{matrix.label}</div>
        {#if matrix.layout === "table"}
          <div class="walk-data-table-wrap">
            <table class="walk-data-table" style={`--walk-cols: ${matrix.values[0]?.length || 1}`} aria-label={matrix.label}>
              <thead>
                <tr>
                  <th class="walk-table-corner" scope="col">{matrix.cornerLabel || ""}</th>
                  {#each matrix.values[0] || [] as _, colIndex}
                    <th class={headerClasses(matrix, "col", colIndex, "walk-table-col-head")} scope="col">{colLabel(matrix, colIndex)}</th>
                  {/each}
                </tr>
              </thead>
              <tbody>
                {#each matrix.values as row, rowIndex}
                  <tr>
                    <th class={headerClasses(matrix, "row", rowIndex, "walk-table-row-head")} scope="row">{rowLabel(matrix, rowIndex)}</th>
                    {#each row as _, colIndex}
                      {@const value = cellValue(matrix, rowIndex, colIndex)}
                      <td
                        aria-label={cellAria(matrix, rowIndex, colIndex)}
                        class={highlightClasses(matrix, rowIndex, colIndex, "walk-data-cell")}
                      >
                        {display(value, "")}
                      </td>
                    {/each}
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        {:else}
          <div class="walk-matrix-paren">
            <table class="walk-matrix" aria-label={matrix.label}>
              <tbody>
                {#each matrix.values as row, rowIndex}
                  <tr>
                    {#each row as _, colIndex}
                      <td class={highlightClasses(matrix, rowIndex, colIndex)}>
                        {display(cellValue(matrix, rowIndex, colIndex))}
                      </td>
                    {/each}
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        {/if}
      </div>
      {#if operators[matrixIndex]}
        <div class="walk-operator">{operators[matrixIndex]}</div>
      {/if}
    {/each}
  </div>
{/if}
