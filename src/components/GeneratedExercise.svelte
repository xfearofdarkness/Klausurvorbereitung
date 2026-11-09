<script lang="ts">
  import { richText } from "../lib/richText.svelte";
  import Source from "./Source.svelte";
  import { loadGenerators, type GeneratorModule } from "../lib/generatorLoader";
  import type { Exercise } from "../types/content";

  interface Props {
    exercise: Exercise;
    isDone: boolean;
    onMark: () => void;
  }

  let { exercise, isDone, onMark }: Props = $props();
  let generators = $state<GeneratorModule | null>(null);
  let seed = $state(0);
  let showSolution = $state(false);

  void loadGenerators().then((module) => {
    seed = module.randomSeed();
    generators = module;
  });

  let generated = $derived(exercise.generator && generators ? generators.generateTask(exercise.generator, seed) : null);

  function rollNewNumbers(): void {
    if (!generators) return;
    seed = generators.randomSeed();
    showSolution = false;
  }
</script>

<section class="study-block ex-block fade-in">
  <h2>{exercise.ref || "Aufgabe"}</h2>
  <div class="study-body">
    {#if generated}
      <div class="ex-task">{@html richText(generated.task)}</div>
      <div class:visible={showSolution} class="quiz-a">
        <div>{@html richText(generated.solution)}</div>
      </div>
      <div class="quiz-btns">
        <button class="q-btn" type="button" onclick={() => (showSolution = !showSolution)}>
          {showSolution ? "Lösung ausblenden" : "Lösung anzeigen"}
        </button>
        <button class="q-btn" type="button" onclick={rollNewNumbers}>Neue Zahlen</button>
        <button class:correct={isDone} class="q-btn" type="button" aria-pressed={isDone} onclick={onMark}>
          Erledigt
        </button>
      </div>
    {:else if generators}
      <p class="empty-state">Dieses Rechenmodul ist nicht verfügbar.</p>
    {:else}
      <p class="empty-state" aria-busy="true">Aufgabe wird geladen …</p>
    {/if}
  </div>
  <Source source={exercise.source} className="card-source study-source" />
</section>
