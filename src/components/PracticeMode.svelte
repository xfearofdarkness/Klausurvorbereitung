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
</script>

{#if topic.exercises.length === 0}
  <p class="empty-state">Für dieses Thema gibt es keine Übungsaufgaben.</p>
{:else}
  <article class="study-doc">
    <p class="practice-status">{topic.exercises.length} Aufgaben · {doneCount} bearbeitet</p>
    {#each topic.exercises as exercise (exercise.key)}
      {@const isDone = practiceState[exercise.key] === "done"}
      {#if exercise.generator}
        <GeneratedExercise {exercise} {isDone} onMark={() => onMark(exercise.key)} />
      {:else}
        <section class="study-block ex-block fade-in">
          <h2>{exercise.ref || "Aufgabe"}</h2>
          <div class="study-body">
            <div class="ex-task">{@html richText(exercise.task)}</div>
            <div class="quiz-btns">
              <button class:correct={isDone} class="q-btn" type="button" aria-pressed={isDone} onclick={() => onMark(exercise.key)}>
                Erledigt
              </button>
            </div>
          </div>
          <Source source={exercise.source} className="card-source study-source" />
        </section>
      {/if}
    {/each}
  </article>
{/if}
