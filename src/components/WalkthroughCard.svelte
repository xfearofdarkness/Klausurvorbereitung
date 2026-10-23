<script lang="ts">
  import { richText } from "../lib/richText";
  import { legendFor, legendKeysInStep } from "../lib/walkthrough";
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
  let legend = $derived(legendFor(walkthrough));
  let legendInStep = $derived(legendKeysInStep(walkthrough, stepIndex));
  let isLastStep = $derived(stepIndex >= stepCount - 1);

  function setStep(index: number): void {
    stepIndex = Math.max(0, Math.min(index, stepCount - 1));
  }

  function next(): void {
    setStep(isLastStep ? 0 : stepIndex + 1);
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setStep(stepIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      setStep(stepIndex - 1);
    }
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

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<article class="walk-card fade-in" aria-label={walkthrough.title} onkeydown={handleKeydown}>
  <header class="walk-header">
    <h3>{walkthrough.title}</h3>
    {#if stepCount > 0}
      <span class="walk-step-count">Ablauf · Schritt {stepIndex + 1} von {stepCount}</span>
    {/if}
  </header>

  {#if walkthrough.intro}
    <p class="walk-intro">{@html richText(walkthrough.intro)}</p>
  {/if}

  <div class="walk-stage">
    {#if walkthrough.visual.kind === "matrix"}
      <MatrixWalkthrough {walkthrough} {stepIndex} />
    {:else if walkthrough.visual.kind === "array"}
      <ArrayWalkthrough {walkthrough} {stepIndex} />
    {:else if walkthrough.visual.kind === "tree"}
      <TreeWalkthrough {walkthrough} {stepIndex} />
    {:else if walkthrough.visual.kind === "graph"}
      <GraphWalkthrough {walkthrough} {stepIndex} />
    {/if}
  </div>

  {#if legend.length > 0}
    <ul class="walk-legend" aria-label="Legende">
      {#each legend as entry (entry.key)}
        <li class:walk-legend-idle={!legendInStep.has(entry.key)}>
          <span class={`walk-swatch walk-swatch-${entry.key}`} aria-hidden="true"></span>{entry.label}
        </li>
      {/each}
    </ul>
  {/if}

  <div class="walk-controls">
    <button class="walk-nav-btn" type="button" disabled={stepIndex === 0} onclick={() => setStep(stepIndex - 1)}>Zurück</button>
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
    <button class="walk-nav-btn walk-nav-primary" type="button" onclick={next}>
      {isLastStep ? "Von vorn" : "Weiter"}
    </button>
  </div>

  {#if currentStep}
    <div class="walk-step" aria-live="polite">
      <h4>{currentStep.title}</h4>
      <p>{@html richText(currentStep.text)}</p>
      {#if currentStep.formula || currentStep.product || currentStep.sum}
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
              <dd>{@html richText(row.value)}</dd>
            </div>
          {/each}
        </dl>
      {/if}
      <Source source={currentStep.source || walkthrough.source} />
    </div>
  {/if}
</article>
