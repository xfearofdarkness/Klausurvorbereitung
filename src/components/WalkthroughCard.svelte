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
</script>

<div class="walk-card fade-in">
  <div class="walk-header">
    <div>
      <h3>{walkthrough.title}</h3>
      {#if walkthrough.intro}
        <p>{@html walkthrough.intro}</p>
      {/if}
    </div>
    <span class="walk-progress-label">Schritt {stepIndex + 1} von {stepCount}</span>
  </div>

  <div class="walk-body">
    <div class="walk-main-flow">
      {#if walkthrough.visual.kind === "matrix"}
        <MatrixWalkthrough {walkthrough} {stepIndex} />
      {:else if walkthrough.visual.kind === "array"}
        <ArrayWalkthrough {walkthrough} {stepIndex} />
      {/if}

      {#if currentStep}
        <div class="walk-step">
          <div class="walk-step-kicker">Schritt {stepIndex + 1}</div>
          <h4>{currentStep.title}</h4>
          <p>{@html currentStep.text}</p>
          {#if currentStep.formula || currentStep.product || currentStep.sum}
            <div class="walk-metrics">
              {#if currentStep.formula}
                <div class="walk-metric">
                  <div class="metric-label">Formel</div>
                  <div class="metric-value">{currentStep.formula}</div>
                </div>
              {/if}
              {#if currentStep.product}
                <div class="walk-metric">
                  <div class="metric-label">Produkt</div>
                  <div class="metric-value">{currentStep.product}</div>
                </div>
              {/if}
              {#if currentStep.sum}
                <div class="walk-metric">
                  <div class="metric-label">Summe</div>
                  <div class="metric-value">{currentStep.sum}</div>
                </div>
              {/if}
            </div>
          {/if}
          <Source source={currentStep.source || walkthrough.source} />
        </div>
      {/if}
    </div>

    <nav class="walk-step-nav" aria-label="Ablaufschritte">
      <div class="walk-step-nav-title">Schritte</div>
      <ol>
        {#each walkthrough.steps as step, index}
          <li>
            <button
              class:active={index === stepIndex}
              class:done={index < stepIndex}
              class="walk-step-link"
              type="button"
              aria-current={index === stepIndex ? "step" : undefined}
              onclick={() => setStep(index)}
            >
              <span class="walk-step-number">{index + 1}</span>
              <span class="walk-step-link-title">{step.title}</span>
            </button>
          </li>
        {/each}
      </ol>
    </nav>
  </div>

  <div class="walk-controls">
    <button class="walk-nav-btn" type="button" disabled={stepIndex === 0} onclick={() => setStep(stepIndex - 1)}>Zurück</button>
    <span class="walk-control-status">Schritt {stepIndex + 1} von {stepCount}</span>
    <button class="walk-nav-btn walk-nav-primary" type="button" disabled={stepIndex === stepCount - 1} onclick={() => setStep(stepIndex + 1)}>Weiter</button>
  </div>
</div>
