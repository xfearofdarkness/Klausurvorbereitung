<script lang="ts">
  import type { MatrixDefinition, MatrixValue, Walkthrough, WalkthroughHighlight, WalkthroughStep } from "../types/content";

  interface Props {
    walkthrough: Walkthrough;
    stepIndex: number;
  }

  let { walkthrough, stepIndex }: Props = $props();

  let matrices = $derived(walkthrough.visual.kind === "matrix" ? walkthrough.visual.matrices : []);
  let currentStep = $derived(walkthrough.steps[stepIndex]);

  function cellValue(matrix: MatrixDefinition, row: number, col: number): MatrixValue {
    let value = matrix.values[row]?.[col] ?? null;
    for (let index = 0; index <= stepIndex; index += 1) {
      for (const update of walkthrough.steps[index]?.values || []) {
        if (update.kind === "matrix-cell" && update.matrix === matrix.id && update.row === row && update.col === col) {
          value = update.value;
        }
      }
    }
    return value;
  }

  function isPreviouslySet(matrix: MatrixDefinition, row: number, col: number): boolean {
    for (let index = 0; index < stepIndex; index += 1) {
      if (
        walkthrough.steps[index]?.values?.some(
          (update) => update.kind === "matrix-cell" && update.matrix === matrix.id && update.row === row && update.col === col
        )
      ) {
        return true;
      }
    }
    return false;
  }

  function highlightClasses(matrix: MatrixDefinition, row: number, col: number, step?: WalkthroughStep): string {
    const classes = ["walk-matrix-cell"];
    if (cellValue(matrix, row, col) === null) classes.push("walk-empty");
    if (isPreviouslySet(matrix, row, col)) classes.push("walk-done");

    for (const highlight of step?.highlights || []) {
      if (matchesCellHighlight(highlight, matrix.id, row, col)) {
        classes.push(`walk-${highlight.role}`);
      }
    }

    return classes.join(" ");
  }

  function matchesCellHighlight(highlight: WalkthroughHighlight, matrixId: string, row: number, col: number): boolean {
    if (highlight.kind === "matrix-cell") {
      return highlight.matrix === matrixId && highlight.row === row && highlight.col === col;
    }
    if (highlight.kind === "matrix-row") {
      return highlight.matrix === matrixId && highlight.row === row;
    }
    if (highlight.kind === "matrix-col") {
      return highlight.matrix === matrixId && highlight.col === col;
    }
    return false;
  }

  function display(value: MatrixValue): string {
    return value === null ? "?" : String(value);
  }
</script>

{#if currentStep}
  <div class="walk-visual walk-matrix-visual">
    {#each matrices as matrix, matrixIndex}
      <div class="walk-matrix-block">
        <div class="walk-matrix-title">{matrix.label}</div>
        <table class="walk-matrix" aria-label={matrix.label}>
          <tbody>
            {#each matrix.values as row, rowIndex}
              <tr>
                {#each row as _, colIndex}
                  <td class={highlightClasses(matrix, rowIndex, colIndex, currentStep)}>
                    <span class="cell-label">{matrix.id}{rowIndex + 1}{colIndex + 1}</span>
                    <span>{display(cellValue(matrix, rowIndex, colIndex))}</span>
                  </td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      {#if matrixIndex === 0}
        <div class="walk-operator">*</div>
      {:else if matrixIndex === 1}
        <div class="walk-operator">=</div>
      {/if}
    {/each}
  </div>
{/if}
