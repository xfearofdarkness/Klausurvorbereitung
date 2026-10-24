<script lang="ts">
  import { richText } from "../lib/richText";
  import Source from "./Source.svelte";
  import { generateTask, randomSeed } from "../lib/exerciseGenerators";
  import type { Exercise } from "../types/content";

  interface Props {
    exercise: Exercise;
    isDone: boolean;
    showNote?: boolean;
    onMark: () => void;
  }

  let { exercise, isDone, showNote = true, onMark }: Props = $props();
  let seed = $state(randomSeed());
  let showSolution = $state(false);

  let generated = $derived(exercise.generator ? generateTask(exercise.generator, seed) : null);

  function rollNewNumbers(): void {
    seed = randomSeed();
    showSolution = false;
  }
</script>

<section class="study-block ex-block fade-in">
  <h3>{exercise.ref || "Aufgabe"}</h3>
  <div class="study-body">
    {#if generated}
      <div class="ex-task">{@html richText(generated.task)}</div>
      {#if showNote && exercise.note}
        <p class="ex-note">{@html richText(exercise.note)}</p>
      {/if}
      <div class:visible={showSolution} class="quiz-a">
        <div>{@html richText(generated.solution)}</div>
      </div>
      <div class="quiz-btns">
        <button class="q-btn" type="button" onclick={() => (showSolution = !showSolution)}>
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
  <Source source={exercise.source} className="card-source study-source" />
</section>
