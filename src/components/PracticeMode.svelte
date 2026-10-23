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
  <div class="stats-bar fade-in">
    <div class="stats-group">
      <span class="stat-pill stat-pill-neutral">{topic.exercises.length} Aufgaben</span>
      <span class="stat-pill stat-pill-success">✓ {doneCount} bearbeitet</span>
    </div>
  </div>
  {#each topic.exercises as exercise (exercise.key)}
    {@const isDone = practiceState[exercise.key] === "done"}
    {#if exercise.generator}
      <GeneratedExercise {exercise} {isDone} onMark={() => onMark(exercise.key)} />
    {:else}
      <div class:ex-done={isDone} class="quiz-card ex-card fade-in">
        {#if exercise.ref}
          <div class="ex-ref">{exercise.ref}</div>
        {/if}
        <div class="quiz-q ex-task">{@html richText(exercise.task)}</div>
        {#if exercise.note}
          <div class="ex-note">{@html richText(exercise.note)}</div>
        {/if}
        <Source source={exercise.source} />
        <div class="quiz-btns">
          <button class:correct={isDone} class="q-btn" type="button" onclick={() => onMark(exercise.key)}>
            {isDone ? "Bearbeitet ✓" : "Als bearbeitet markieren"}
          </button>
        </div>
      </div>
    {/if}
  {/each}
{/if}
