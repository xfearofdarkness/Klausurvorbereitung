<script lang="ts">
  import { richText } from "../lib/richText";
  import Source from "./Source.svelte";
  import type { MarkState, QuizMark, Topic } from "../types/content";

  interface Props {
    topic: Topic;
    quizState: MarkState<QuizMark>;
    showOnlyWrong: boolean;
    onToggleWrongFilter: () => void;
    onMark: (key: string, value: QuizMark) => void;
  }

  let { topic, quizState, showOnlyWrong, onToggleWrongFilter, onMark }: Props = $props();
  let visibleAnswers = $state<Set<number>>(new Set());

  let indexedQuestions = $derived(topic.questions.map((question, index) => ({ ...question, index })));
  let questions = $derived(showOnlyWrong ? indexedQuestions.filter((question) => quizState[question.key] === "wrong") : indexedQuestions);
  let wrongCount = $derived(topic.questions.filter((question) => quizState[question.key] === "wrong").length);
  let correctCount = $derived(topic.questions.filter((question) => quizState[question.key] === "correct").length);

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

<div class="stats-bar fade-in">
  <div class="stats-group">
    <span class="stat-pill stat-pill-neutral">{topic.questions.length} Fragen</span>
    <span class="stat-pill stat-pill-success">✓ {correctCount}</span>
    <span class="stat-pill stat-pill-warning">↻ {wrongCount}</span>
  </div>
  <div class="stats-actions">
    {#if wrongCount > 0 || showOnlyWrong}
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
      <div class="quiz-q"><span class="quiz-num">{question.index + 1}.</span><span>{@html richText(question.question)}</span></div>
      <div class:visible={visibleAnswers.has(question.index)} class="quiz-a">
        <div>{@html richText(question.answer)}</div>
        <Source source={question.source} />
      </div>
      <div class="quiz-btns">
        <button class="q-btn show-btn" type="button" onclick={() => toggleAnswer(question.index)}>
          {visibleAnswers.has(question.index) ? "Antwort ausblenden" : "Antwort zeigen"}
        </button>
        <button class:correct={quizState[question.key] === "correct"} class="q-btn" type="button" onclick={() => onMark(question.key, "correct")}>Gewusst</button>
        <button class:wrong={quizState[question.key] === "wrong"} class="q-btn" type="button" onclick={() => onMark(question.key, "wrong")}>Wiederholen</button>
      </div>
    </div>
  {/each}
{/if}
