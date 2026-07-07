<script lang="ts">
  import Source from "./Source.svelte";
  import MatrixWalkthrough from "./MatrixWalkthrough.svelte";
  import ArrayWalkthrough from "./ArrayWalkthrough.svelte";
  import TreeWalkthrough from "./TreeWalkthrough.svelte";
  import GraphWalkthrough from "./GraphWalkthrough.svelte";
  import type { Walkthrough, WalkthroughStep } from "../types/content";

  interface Props {
    walkthrough: Walkthrough;
  }

  let { walkthrough }: Props = $props();
  let stepIndex = $state(0);
  let stepCount = $derived(walkthrough.steps.length);
  let currentStep = $derived(walkthrough.steps[stepIndex]);

  function setStep(index: number): void {
    stepIndex = Math.max(0, Math.min(index, stepCount - 1));
  }

  function explanationRows(step: WalkthroughStep | undefined): Array<{ label: string; value: string }> {
    if (!step?.explanation) return [];
    return [
      { label: "Aktion", value: step.explanation.action },
      { label: "Regel", value: step.explanation.rule },
      { label: "Entscheidung", value: step.explanation.decision }
    ].filter((entry): entry is { label: string; value: string } => typeof entry.value === "string" && entry.value.length > 0);
  }

  $effect(() => {
    walkthrough;
    if (stepCount === 0) {
      stepIndex = 0;
    } else if (stepIndex >= stepCount) {
      stepIndex = stepCount - 1;
    }
  });
</script>

<div class="walk-card fade-in">
  <div class="walk-header">
    <h3>{walkthrough.title}</h3>
  </div>

  <nav class="walk-step-nav" aria-label="Ablaufschritte">
    <ol>
      {#each walkthrough.steps as step, index}
        <li>
          <button
            class:active={index === stepIndex}
            class:done={index < stepIndex}
            class="walk-step-link"
            type="button"
            aria-current={index === stepIndex ? "step" : undefined}
            aria-label={`Schritt ${index + 1}: ${step.title}`}
            onclick={() => setStep(index)}
          >
            {index + 1}
          </button>
        </li>
      {/each}
    </ol>
  </nav>

  <div class="walk-body">
    <div class="walk-main-flow">
      {#if walkthrough.visual.kind === "matrix"}
        <MatrixWalkthrough {walkthrough} {stepIndex} />
      {:else if walkthrough.visual.kind === "array"}
        <ArrayWalkthrough {walkthrough} {stepIndex} />
      {:else if walkthrough.visual.kind === "tree"}
        <TreeWalkthrough {walkthrough} {stepIndex} />
      {:else if walkthrough.visual.kind === "graph"}
        <GraphWalkthrough {walkthrough} {stepIndex} />
      {/if}

      {#if currentStep}
        <div class="walk-step">
          <h4>{currentStep.title}</h4>
          {#if !(currentStep.formula || currentStep.product || currentStep.sum)}
            <p data-math-content>{@html currentStep.text}</p>
          {:else}
            <div class="walk-calculation" aria-label="Rechnung">
              {#if currentStep.formula}
                <span class="walk-formula">{currentStep.formula}</span>
              {/if}
              {#if currentStep.product}
                <span class="walk-product">{currentStep.product}</span>
              {/if}
              {#if currentStep.sum}
                <span class="walk-sum">Summe: {currentStep.sum}</span>
              {/if}
            </div>
          {/if}
          {#if explanationRows(currentStep).length > 0}
            <dl class="walk-explanation" aria-label="Algorithmische Erklärung">
              {#each explanationRows(currentStep) as row}
                <div>
                  <dt>{row.label}</dt>
                  <dd data-math-content>{row.value}</dd>
                </div>
              {/each}
            </dl>
          {/if}
          <Source source={currentStep.source || walkthrough.source} />
        </div>
      {/if}
    </div>
  </div>

  <div class="walk-controls">
    <button class="walk-nav-btn" type="button" disabled={stepIndex === 0} onclick={() => setStep(stepIndex - 1)}>Zurück</button>
    <button class="walk-nav-btn walk-nav-primary" type="button" disabled={stepIndex === stepCount - 1} onclick={() => setStep(stepIndex + 1)}>Weiter</button>
  </div>
</div>
