<script lang="ts">
  import Source from "./Source.svelte";
  import GeneratedExercise from "./GeneratedExercise.svelte";
  import type { PracticeMark, Topic } from "../types/content";

  interface Props {
    topic: Topic;
    practiceState: Record<number, PracticeMark>;
    onMark: (index: number) => void;
  }

  let { topic, practiceState, onMark }: Props = $props();
  let doneCount = $derived(topic.exercises.filter((_, index) => practiceState[index] === "done").length);
</script>

<div class="section-title fade-in"><span class="emoji">{topic.icon}</span> {topic.title} – Übungsaufgaben</div>

{#if topic.exercises.length === 0}
  <p class="empty-state">Für dieses Thema gibt es keine Übungsaufgaben.</p>
{:else}
  <div class="stats-bar fade-in">
    <div class="stats-group">
      <span class="stat-pill stat-pill-neutral">{topic.exercises.length} Aufgaben</span>
      <span class="stat-pill stat-pill-success">✓ {doneCount} bearbeitet</span>
    </div>
  </div>
  {#each topic.exercises as exercise, index (`${topic.id}:${index}`)}
    {@const isDone = practiceState[index] === "done"}
    {#if exercise.generator}
      <GeneratedExercise {exercise} {isDone} onMark={() => onMark(index)} />
    {:else}
      <div class:ex-done={isDone} class="quiz-card ex-card fade-in">
        {#if exercise.ref}
          <div class="ex-ref">{exercise.ref}</div>
        {/if}
        <div class="quiz-q ex-task" data-math-content>{@html exercise.task}</div>
        {#if exercise.note}
          <div class="ex-note" data-math-content>{@html exercise.note}</div>
        {/if}
        <Source source={exercise.source} />
        <div class="quiz-btns">
          <button class:correct={isDone} class="q-btn" type="button" onclick={() => onMark(index)}>
            {isDone ? "Bearbeitet ✓" : "Als bearbeitet markieren"}
          </button>
        </div>
      </div>
    {/if}
  {/each}
{/if}
