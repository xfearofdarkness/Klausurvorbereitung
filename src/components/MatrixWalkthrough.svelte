<script lang="ts">
  import type { MatrixDefinition, MatrixValue, Walkthrough, WalkthroughHighlight, WalkthroughStep } from "../types/content";

  interface Props {
    walkthrough: Walkthrough;
    stepIndex: number;
  }

  interface MatrixRenderState {
    values: Map<string, MatrixValue>;
    done: Set<string>;
    roles: Map<string, string[]>;
  }

  let { walkthrough, stepIndex }: Props = $props();

  let matrices = $derived(walkthrough.visual.kind === "matrix" ? walkthrough.visual.matrices : []);
  let operators = $derived(walkthrough.visual.kind === "matrix" ? walkthrough.visual.operators || [] : []);
  let hasTableMatrix = $derived(matrices.some((matrix) => matrix.layout === "table"));
  let currentStep = $derived(walkthrough.steps[stepIndex]);
  let renderState = $derived(buildRenderState(matrices, walkthrough.steps, currentStep, stepIndex));

  function buildRenderState(
    matrixList: MatrixDefinition[],
    steps: WalkthroughStep[],
    step: WalkthroughStep | undefined,
    activeStepIndex: number
  ): MatrixRenderState {
    const values = new Map<string, MatrixValue>();
    const done = new Set<string>();
    const roles = new Map<string, string[]>();
    const matrixById = new Map(matrixList.map((matrix) => [matrix.id, matrix]));

    for (const matrix of matrixList) {
      matrix.values.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
          values.set(cellKey(matrix.id, rowIndex, colIndex), value);
        });
      });
    }

    for (let index = 0; index <= activeStepIndex; index += 1) {
      const isPreviousStep = index < activeStepIndex;
      for (const update of steps[index]?.values || []) {
        if (update.kind !== "matrix-cell") continue;
        const key = cellKey(update.matrix, update.row, update.col);
        values.set(key, update.value);
        if (isPreviousStep) {
          done.add(key);
        }
      }
    }

    for (const highlight of step?.highlights || []) {
      for (const key of highlightedCellKeys(highlight, matrixById)) {
        const nextRoles = roles.get(key) || [];
        nextRoles.push(highlight.role);
        roles.set(key, nextRoles);
      }
    }

    return { values, done, roles };
  }

  function highlightedCellKeys(highlight: WalkthroughHighlight, matrixById: Map<string, MatrixDefinition>): string[] {
    if (highlight.kind === "matrix-cell") {
      return [cellKey(highlight.matrix, highlight.row, highlight.col)];
    }

    if (highlight.kind === "matrix-row") {
      const matrix = matrixById.get(highlight.matrix);
      if (!matrix) return [];
      return matrix.values[highlight.row]?.map((_, col) => cellKey(highlight.matrix, highlight.row, col)) || [];
    }

    if (highlight.kind === "matrix-col") {
      const matrix = matrixById.get(highlight.matrix);
      if (!matrix) return [];
      return matrix.values.map((_, row) => cellKey(highlight.matrix, row, highlight.col));
    }

    return [];
  }

  function cellKey(matrixId: string, row: number, col: number): string {
    return `${matrixId}:${row}:${col}`;
  }

  function cellValue(matrix: MatrixDefinition, row: number, col: number): MatrixValue {
    return renderState.values.get(cellKey(matrix.id, row, col)) ?? null;
  }

  function highlightClasses(matrix: MatrixDefinition, row: number, col: number, baseClass = "walk-matrix-cell"): string {
    const key = cellKey(matrix.id, row, col);
    const classes = [baseClass];
    if (cellValue(matrix, row, col) === null) classes.push("walk-empty");
    if (renderState.done.has(key)) classes.push("walk-done");
    for (const role of renderState.roles.get(key) || []) {
      classes.push(`walk-${role}`);
    }
    return classes.join(" ");
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
    return `${matrix.label}, k ${rowLabel(matrix, row)}, w ${colLabel(matrix, col)}: ${renderedValue}`;
  }
</script>

{#if currentStep}
  <div class:walk-table-visual={hasTableMatrix} class="walk-visual walk-matrix-visual">
    {#each matrices as matrix, matrixIndex}
      <div class:walk-matrix-table-block={matrix.layout === "table"} class="walk-matrix-block">
        <div class="walk-matrix-title">{matrix.label}</div>
        {#if matrix.layout === "table"}
          <div class="walk-data-table-wrap">
            <table class="walk-data-table" aria-label={matrix.label}>
              <thead>
                <tr>
                  <th class="walk-table-corner" scope="col">{matrix.cornerLabel || ""}</th>
                  {#each matrix.values[0] || [] as _, colIndex}
                    <th class="walk-table-col-head" scope="col">{colLabel(matrix, colIndex)}</th>
                  {/each}
                </tr>
              </thead>
              <tbody>
                {#each matrix.values as row, rowIndex}
                  <tr>
                    <th class="walk-table-row-head" scope="row">{rowLabel(matrix, rowIndex)}</th>
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
