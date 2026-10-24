<script lang="ts">
  import { richText } from "../lib/richText";
  import Source from "./Source.svelte";
  import GeneratedExercise from "./GeneratedExercise.svelte";
  import type { MarkState, PracticeMark, Topic } from "../types/content";

  interface Props {
    topic: Topic;
    practiceState: MarkState<PracticeMark>;
    onMark: (key: string) => void;
  }

  let { topic, practiceState, onMark }: Props = $props();
  let doneCount = $derived(topic.exercises.filter((exercise) => practiceState[exercise.key] === "done").length);

  function isModuleNote(note: string): boolean {
    return note.startsWith("Rechenmodul:");
  }

  let moduleNotes = $derived.by(() => {
    const seen = new Set<string>();
    const notes: string[] = [];
    for (const exercise of topic.exercises) {
      if (!isModuleNote(exercise.note) || seen.has(exercise.note)) continue;
      seen.add(exercise.note);
      notes.push(exercise.note);
    }
    return notes;
  });
</script>

{#if topic.exercises.length === 0}
  <p class="empty-state">Für dieses Thema gibt es keine Übungsaufgaben.</p>
{:else}
  <article class="study-doc">
    <p class="practice-status">
      <span>{topic.exercises.length} Aufgaben</span>
      <span>{doneCount} bearbeitet</span>
    </p>
    {#each moduleNotes as note (note)}
      <p class="module-note">{@html richText(note)}</p>
    {/each}
    {#each topic.exercises as exercise (exercise.key)}
      {@const isDone = practiceState[exercise.key] === "done"}
      {@const showNote = !isModuleNote(exercise.note)}
      {#if exercise.generator}
        <GeneratedExercise {exercise} {isDone} {showNote} onMark={() => onMark(exercise.key)} />
      {:else}
        <section class="study-block ex-block fade-in">
          <h2>{exercise.ref || "Aufgabe"}</h2>
          <div class="study-body">
            <div class="ex-task">{@html richText(exercise.task)}</div>
            {#if showNote && exercise.note}
              <p class="ex-note">{@html richText(exercise.note)}</p>
            {/if}
            <div class="quiz-btns">
              <button class:correct={isDone} class="q-btn" type="button" onclick={() => onMark(exercise.key)}>
                {isDone ? "Bearbeitet ✓" : "Als bearbeitet markieren"}
              </button>
            </div>
          </div>
          <Source source={exercise.source} className="card-source study-source" />
        </section>
      {/if}
    {/each}
  </article>
{/if}
