<script lang="ts">
  import { onMount, tick } from "svelte";
  import renderMathInElement from "katex/contrib/auto-render";
  import FlashMode from "../components/FlashMode.svelte";
  import ModeSwitcher from "../components/ModeSwitcher.svelte";
  import PracticeMode from "../components/PracticeMode.svelte";
  import QuizMode from "../components/QuizMode.svelte";
  import StudyMode from "../components/StudyMode.svelte";
  import TopicTabs from "../components/TopicTabs.svelte";
  import WalkthroughMode from "../components/WalkthroughMode.svelte";
  import { catalog, subjectLoaders } from "../data/catalog";
  import { MODES } from "../lib/modes";
  import { normalizeSubject } from "../lib/normalize";
  import {
    getFlashState,
    getPracticeState,
    getQuizState,
    getSubjectProgress,
    loadProgress,
    saveProgress,
    saveUiState
  } from "../lib/progress";
  import type { AppProgress, FlashMark, ModeConfig, ModeId, PracticeMark, QuizMark, Subject, Topic } from "../types/content";

  const SUBJECT_ID_PATTERN = /^[a-z0-9-]+$/;

  let subject = $state<Subject | null>(null);
  let errorMessage = $state("");
  let progress = $state<AppProgress>({ subjects: {} });
  let currentTopicIndex = $state(0);
  let currentMode = $state<ModeId>("study");
  let showOnlyWrong = $state(false);
  let flashDeck = $state<number[]>([]);
  let flashPosition = $state(0);
  let flashFlipped = $state(false);
  let contentElement = $state<HTMLElement | null>(null);

  let currentTopic = $derived<Topic | null>(subject ? subject.topics[currentTopicIndex] || subject.topics[0] || null : null);
  let availableModes = $derived<ModeConfig[]>(modesForTopic(currentTopic));
  let quizState = $derived(currentTopic ? readQuizState(currentTopic) : {});
  let flashState = $derived(currentTopic ? readFlashState(currentTopic) : {});
  let practiceState = $derived(currentTopic ? readPracticeState(currentTopic) : {});

  onMount(() => {
    progress = loadProgress();
    loadSubject();
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });

  $effect(() => {
    if (!subject || !contentElement || !subject.features.math) return;
    currentMode;
    currentTopicIndex;
    tick().then(() => {
      if (!contentElement) return;
      renderMathInElement(contentElement, {
        delimiters: [
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false
      });
    });
  });

  async function loadSubject(): Promise<void> {
    const subjectId = getSubjectId();
    const subjectMeta = catalog.find((entry) => entry.id === subjectId);

    if (!subjectMeta || !SUBJECT_ID_PATTERN.test(subjectId)) {
      errorMessage = "Kein gültiges Fach ausgewählt.";
      return;
    }

    const loader = subjectLoaders[subjectMeta.id];
    if (!loader) {
      errorMessage = "Die Fachdaten konnten nicht geladen werden.";
      return;
    }

    try {
      const module = await loader();
      subject = normalizeSubject(module.default, subjectMeta);
      document.title = `${subject.title} Klausurtrainer`;
      restoreUiState();
      if (currentMode === "flash") {
        resetFlashDeck(false, getTopicAt(currentTopicIndex));
      } else {
        clearFlashDeck();
      }
      saveUiState(progress, subject, currentMode, currentTopicIndex);
      progress = { ...progress };
    } catch (error) {
      console.error(error);
      errorMessage = "Die Fachdaten sind leer oder ungültig.";
    }
  }

  function getSubjectId(): string {
    const params = new URLSearchParams(window.location.search);
    return (params.get("subject") || "").trim().toLowerCase();
  }

  function modesForTopic(topic: Topic | null): ModeConfig[] {
    if (!topic) return [];
    return MODES.filter((mode) => topic[mode.key].length > 0);
  }

  function getTopicAt(index: number): Topic | null {
    if (!subject) return null;
    return subject.topics[index] || null;
  }

  function isModeAvailableForTopic(mode: ModeId, topic: Topic | null): boolean {
    return modesForTopic(topic).some((entry) => entry.id === mode);
  }

  function fallbackModeForTopic(topic: Topic | null): ModeId {
    return modesForTopic(topic)[0]?.id || "study";
  }

  function readQuizState(topic: Topic): Record<number, QuizMark> {
    if (!subject) return {};
    return progress.subjects[subject.id]?.quiz?.[topic.id] || {};
  }

  function readFlashState(topic: Topic): Record<number, FlashMark> {
    if (!subject) return {};
    return progress.subjects[subject.id]?.flash?.[topic.id] || {};
  }

  function readPracticeState(topic: Topic): Record<number, PracticeMark> {
    if (!subject) return {};
    return progress.subjects[subject.id]?.practice?.[topic.id] || {};
  }

  function restoreUiState(): void {
    if (!subject) return;
    const subjectProgress = getSubjectProgress(progress, subject);
    const maxTopicIndex = Math.max(0, subject.topics.length - 1);
    const restoredTopicIndex = subjectProgress.ui?.lastTopicIndex || 0;
    currentTopicIndex = Math.min(Math.max(restoredTopicIndex, 0), maxTopicIndex);

    const restoredTopic = getTopicAt(currentTopicIndex);
    const fallbackMode = fallbackModeForTopic(restoredTopic);
    const restoredMode = subjectProgress.ui?.lastMode || fallbackMode;
    currentMode = isModeAvailableForTopic(restoredMode, restoredTopic) ? restoredMode : fallbackMode;
  }

  function persistUi(): void {
    if (!subject) return;
    saveUiState(progress, subject, currentMode, currentTopicIndex);
    progress = { ...progress };
  }

  function selectMode(mode: ModeId): void {
    if (!isModeAvailableForTopic(mode, currentTopic)) return;
    currentMode = mode;
    showOnlyWrong = false;
    if (currentMode === "flash") {
      resetFlashDeck(false, currentTopic);
    } else {
      clearFlashDeck();
    }
    persistUi();
    window.scrollTo(0, 0);
  }

  function selectTopic(index: number): void {
    const nextTopic = getTopicAt(index);
    if (!nextTopic) return;
    currentTopicIndex = index;
    showOnlyWrong = false;
    if (!isModeAvailableForTopic(currentMode, nextTopic)) {
      currentMode = fallbackModeForTopic(nextTopic);
    }
    if (currentMode === "flash") {
      resetFlashDeck(false, nextTopic);
    } else {
      clearFlashDeck();
    }
    persistUi();
  }

  function markQuestion(index: number, value: QuizMark): void {
    if (!subject || !currentTopic) return;
    const state = getQuizState(progress, subject, currentTopic.id);
    state[index] = value;
    saveProgress(progress);
    persistUi();
  }

  function markExercise(index: number): void {
    if (!subject || !currentTopic) return;
    const state = getPracticeState(progress, subject, currentTopic.id);
    if (state[index] === "done") {
      delete state[index];
    } else {
      state[index] = "done";
    }
    saveProgress(progress);
    persistUi();
  }

  function flipCard(): void {
    flashFlipped = !flashFlipped;
  }

  function markFlash(value: FlashMark): void {
    if (!subject || !currentTopic || flashPosition >= flashDeck.length) return;
    const cardIndex = flashDeck[flashPosition];
    const state = getFlashState(progress, subject, currentTopic.id);
    state[cardIndex] = value;
    flashPosition += 1;
    flashFlipped = false;
    saveProgress(progress);
    persistUi();
  }

  function clearFlashDeck(): void {
    flashDeck = [];
    flashPosition = 0;
    flashFlipped = false;
  }

  function resetFlashDeck(onlyWrong = false, topic = currentTopic): void {
    if (!subject || !topic) return;
    const state = getFlashState(progress, subject, topic.id);
    const allIndices = topic.flashcards.map((_, index) => index);
    const wrongIndices = allIndices.filter((index) => state[index] === "repeat");
    flashDeck = onlyWrong && wrongIndices.length ? wrongIndices : allIndices;
    flashPosition = 0;
    flashFlipped = false;
  }

  function restartFlash(onlyWrong = false): void {
    resetFlashDeck(onlyWrong, currentTopic);
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (currentMode !== "flash" || !subject) return;
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      flipCard();
      return;
    }
    if (event.key === "ArrowRight" || event.key === "2") {
      markFlash("know");
      return;
    }
    if (event.key === "ArrowLeft" || event.key === "1") {
      markFlash("repeat");
    }
  }
</script>

<div class="header">
  <a class="home-link" href="index.html">← Übersicht</a>
  <div class="header-meta">
    <div class="logo" id="subjectTitle">
      {#if subject}
        {subject.icon} {subject.title} Klausurtrainer
      {:else}
        Klausurtrainer
      {/if}
    </div>
    <div class="subtitle" id="subjectSubtitle">{subject?.subtitle || "Statische Lernseite für GitHub Pages"}</div>
  </div>
  {#if subject}
    <ModeSwitcher modes={availableModes} {currentMode} onSelect={selectMode} />
  {/if}
</div>

{#if subject}
  <TopicTabs topics={subject.topics} {currentTopicIndex} onSelect={selectTopic} />
{/if}

<main class="main" id="content" bind:this={contentElement}>
  {#if errorMessage}
    <div class="error-card fade-in">
      <h2>Fach nicht verfügbar</h2>
      <p>{errorMessage}</p>
      <p><a class="back-link" href="index.html">Zur Übersicht</a></p>
    </div>
  {:else if !subject || !currentTopic}
    <p class="empty-state">Fachdaten werden geladen.</p>
  {:else if currentMode === "study"}
    <StudyMode topic={currentTopic} />
  {:else if currentMode === "quiz"}
    <QuizMode
      topic={currentTopic}
      {quizState}
      {showOnlyWrong}
      onToggleWrongFilter={() => (showOnlyWrong = !showOnlyWrong)}
      onMark={markQuestion}
    />
  {:else if currentMode === "practice"}
    <PracticeMode topic={currentTopic} {practiceState} onMark={markExercise} />
  {:else if currentMode === "walkthrough"}
    <WalkthroughMode topic={currentTopic} />
  {:else}
    <FlashMode
      topic={currentTopic}
      results={flashState}
      deck={flashDeck}
      position={flashPosition}
      flipped={flashFlipped}
      onFlip={flipCard}
      onMark={markFlash}
      onRestart={restartFlash}
    />
  {/if}
</main>
