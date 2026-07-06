<script lang="ts">
  import Source from "./Source.svelte";
  import type { Question, QuizMark, Topic } from "../types/content";

  interface Props {
    topic: Topic;
    quizState: Record<number, QuizMark>;
    showOnlyWrong: boolean;
    onToggleWrongFilter: () => void;
    onMark: (index: number, value: QuizMark) => void;
  }

  let { topic, quizState, showOnlyWrong, onToggleWrongFilter, onMark }: Props = $props();
  let visibleAnswers = $state<Set<number>>(new Set());

  let indexedQuestions = $derived(topic.questions.map((question, index) => ({ ...question, index })));
  let questions = $derived(showOnlyWrong ? indexedQuestions.filter((question) => quizState[question.index] === "wrong") : indexedQuestions);
  let wrongCount = $derived(topic.questions.filter((_, index) => quizState[index] === "wrong").length);
  let correctCount = $derived(topic.questions.filter((_, index) => quizState[index] === "correct").length);

  function toggleAnswer(index: number): void {
    const next = new Set(visibleAnswers);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    visibleAnswers = next;
  }
</script>

<div class="section-title fade-in"><span class="emoji">{topic.icon}</span> {topic.title} – Klausurfragen</div>
<div class="stats-bar fade-in">
  <div class="stats-group">
    <span class="stat-pill stat-pill-neutral">{topic.questions.length} Fragen</span>
    <span class="stat-pill stat-pill-success">✓ {correctCount}</span>
    <span class="stat-pill stat-pill-warning">↻ {wrongCount}</span>
  </div>
  <div class="stats-actions">
    {#if wrongCount > 0}
      <button class:active={showOnlyWrong} class="filter-btn" type="button" onclick={onToggleWrongFilter}>
        {showOnlyWrong ? "Alle" : "Nur Schwächen"} ({wrongCount})
      </button>
    {/if}
  </div>
</div>

{#if questions.length === 0}
  <p class="empty-state">Keine Fragen mit Wiederholungsmarkierung mehr.</p>
{:else}
  {#each questions as question}
    <div class="quiz-card fade-in">
      <div class="quiz-q">{question.index + 1}. {@html question.question}</div>
      <div class:visible={visibleAnswers.has(question.index)} class="quiz-a">
        {@html question.answer}
        <Source source={question.source} />
      </div>
      <div class="quiz-btns">
        <button class="q-btn show-btn" type="button" onclick={() => toggleAnswer(question.index)}>Antwort zeigen</button>
        <button class:correct={quizState[question.index] === "correct"} class="q-btn" type="button" onclick={() => onMark(question.index, "correct")}>Gewusst</button>
        <button class:wrong={quizState[question.index] === "wrong"} class="q-btn" type="button" onclick={() => onMark(question.index, "wrong")}>Wiederholen</button>
      </div>
    </div>
  {/each}
{/if}
