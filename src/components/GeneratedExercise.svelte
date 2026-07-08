<script lang="ts">
  import Source from "./Source.svelte";
  import { generateTask, randomSeed } from "../lib/exerciseGenerators";
  import type { Exercise } from "../types/content";

  interface Props {
    exercise: Exercise;
    isDone: boolean;
    onMark: () => void;
  }

  let { exercise, isDone, onMark }: Props = $props();
  let seed = $state(randomSeed());
  let showSolution = $state(false);

  let generated = $derived(exercise.generator ? generateTask(exercise.generator, seed) : null);

  function rollNewNumbers(): void {
    seed = randomSeed();
    showSolution = false;
  }
</script>

<div class:ex-done={isDone} class="quiz-card ex-card fade-in">
  {#if exercise.ref}
    <div class="ex-ref">{exercise.ref}</div>
  {/if}
  {#if generated}
    <div class="quiz-q ex-task" data-math-content>{@html generated.task}</div>
    {#if exercise.note}
      <div class="ex-note" data-math-content>{@html exercise.note}</div>
    {/if}
    <div class:visible={showSolution} class="quiz-a">
      <div data-math-content>{@html generated.solution}</div>
    </div>
    <Source source={exercise.source} />
    <div class="quiz-btns">
      <button class="q-btn show-btn" type="button" onclick={() => (showSolution = !showSolution)}>
        {showSolution ? "Lösung ausblenden" : "Lösung anzeigen"}
      </button>
      <button class="q-btn" type="button" onclick={rollNewNumbers}>Neue Zahlen</button>
      <button class:correct={isDone} class="q-btn" type="button" onclick={onMark}>
        {isDone ? "Bearbeitet ✓" : "Als bearbeitet markieren"}
      </button>
    </div>
  {:else}
    <p class="empty-state">Dieses Rechenmodul ist nicht verfügbar.</p>
  {/if}
</div>
