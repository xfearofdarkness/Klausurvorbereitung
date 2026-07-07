<script lang="ts">
  import Source from "./Source.svelte";
  import MatrixWalkthrough from "./MatrixWalkthrough.svelte";
  import ArrayWalkthrough from "./ArrayWalkthrough.svelte";
  import type { Walkthrough } from "../types/content";

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
      {/if}

      {#if currentStep}
        <div class="walk-step">
          <h4>{currentStep.title}</h4>
          {#if !(currentStep.formula || currentStep.product || currentStep.sum)}
            <p data-math-content>{@html currentStep.text}</p>
          {:else}
            <div class="walk-calculation" aria-label="Rechnung">
              {#if currentStep.formula}
                <span>{currentStep.formula}</span>
              {/if}
              {#if currentStep.product}
                <span>{currentStep.product}</span>
              {/if}
              {#if currentStep.sum}
                <span>Summe: {currentStep.sum}</span>
              {/if}
            </div>
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
