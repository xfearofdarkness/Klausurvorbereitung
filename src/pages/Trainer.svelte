<script lang="ts">
  import { onMount } from "svelte";
  import FlashMode from "../components/FlashMode.svelte";
  import ModeSwitcher from "../components/ModeSwitcher.svelte";
  import PracticeMode from "../components/PracticeMode.svelte";
  import QuizMode from "../components/QuizMode.svelte";
  import StudyMode from "../components/StudyMode.svelte";
  import Icon from "../components/Icon.svelte";
  import LayoutSwitch from "../components/LayoutSwitch.svelte";
  import TopicList from "../components/TopicList.svelte";
  import TopicPicker from "../components/TopicPicker.svelte";
  import WalkthroughMode from "../components/WalkthroughMode.svelte";
  import { catalog, subjectLoaders } from "../data/catalog";
  import { MODES } from "../lib/modes";
  import { loadNavPlacement, saveNavPlacement, type NavPlacement } from "../lib/navPlacement";
  import { normalizeSubject } from "../lib/normalize";
  import { prepareRichText } from "../lib/richText";
  import {
    getFlashState,
    getPracticeState,
    getQuizState,
    getSubjectProgress,
    loadProgress,
    saveUiState,
    summarizeTopicProgress,
    type TopicProgressSummary
  } from "../lib/progress";
  import type { AppProgress, FlashMark, MarkState, ModeConfig, ModeId, PracticeMark, QuizMark, Subject, Topic } from "../types/content";

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
  let navPlacement = $state<NavPlacement>(loadNavPlacement());

  let currentTopic = $derived<Topic | null>(subject ? subject.topics[currentTopicIndex] || subject.topics[0] || null : null);
  let availableModes = $derived<ModeConfig[]>(modesForTopic(currentTopic));
  let quizState = $derived(currentTopic ? readQuizState(currentTopic) : {});
  let flashState = $derived(currentTopic ? readFlashState(currentTopic) : {});
  let practiceState = $derived(currentTopic ? readPracticeState(currentTopic) : {});
  let topicProgress = $derived(subject ? summarizeSubject(subject) : []);

  onMount(() => {
    progress = loadProgress();
    loadSubject();
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
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
      const loadedSubject = normalizeSubject(module.default, subjectMeta);
      await prepareRichText(loadedSubject.features.math === true);
      subject = loadedSubject;
      document.title = `${subject.title} Klausurtrainer`;
      restoreUiState();
      syncFlashDeck();
      persistUi();
    } catch (error) {
      console.error(error);
      errorMessage = "Die Fachdaten sind leer oder ungültig.";
    }
  }

  function summarizeSubject(activeSubject: Subject): TopicProgressSummary[] {
    return activeSubject.topics.map((topic) => summarizeTopicProgress(progress, activeSubject, topic));
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

  function isModeId(value: unknown): value is ModeId {
    return typeof value === "string" && MODES.some((mode) => mode.id === value);
  }

  function fallbackModeForTopic(topic: Topic | null): ModeId {
    return modesForTopic(topic)[0]?.id || "study";
  }

  function readQuizState(topic: Topic): MarkState<QuizMark> {
    if (!subject) return {};
    return progress.subjects[subject.id]?.quiz?.[topic.id] || {};
  }

  function readFlashState(topic: Topic): MarkState<FlashMark> {
    if (!subject) return {};
    return progress.subjects[subject.id]?.flash?.[topic.id] || {};
  }

  function readPracticeState(topic: Topic): MarkState<PracticeMark> {
    if (!subject) return {};
    return progress.subjects[subject.id]?.practice?.[topic.id] || {};
  }

  function restoreUiState(): void {
    if (!subject) return;
    const subjectProgress = getSubjectProgress(progress, subject);
    const restoredTopicId = subjectProgress.ui?.lastTopicId;
    currentTopicIndex = Math.max(0, subject.topics.findIndex((topic) => topic.id === restoredTopicId));

    const restoredTopic = getTopicAt(currentTopicIndex);
    const fallbackMode = fallbackModeForTopic(restoredTopic);
    const restoredMode = isModeId(subjectProgress.ui?.lastMode) ? subjectProgress.ui.lastMode : fallbackMode;
    currentMode = isModeAvailableForTopic(restoredMode, restoredTopic) ? restoredMode : fallbackMode;
  }

  function persistUi(): void {
    if (!subject || !currentTopic) return;
    saveUiState(progress, subject, currentMode, currentTopic.id);
  }

  function selectMode(mode: ModeId): void {
    if (mode === currentMode || !isModeAvailableForTopic(mode, currentTopic)) return;
    currentMode = mode;
    showOnlyWrong = false;
    syncFlashDeck();
    persistUi();
    window.scrollTo(0, 0);
  }

  function changeNavPlacement(placement: NavPlacement): void {
    navPlacement = placement;
    saveNavPlacement(placement);
  }

  function selectTopic(index: number): void {
    const nextTopic = getTopicAt(index);
    if (!nextTopic) return;
    currentTopicIndex = index;
    showOnlyWrong = false;
    if (!isModeAvailableForTopic(currentMode, nextTopic)) {
      currentMode = fallbackModeForTopic(nextTopic);
    }
    syncFlashDeck();
    persistUi();
    window.scrollTo(0, 0);
  }

  function markQuestion(key: string, value: QuizMark): void {
    if (!subject || !currentTopic) return;
    const state = getQuizState(progress, subject, currentTopic.id);
    state[key] = value;
    persistUi();
  }

  function markExercise(key: string): void {
    if (!subject || !currentTopic) return;
    const state = getPracticeState(progress, subject, currentTopic.id);
    if (state[key] === "done") {
      delete state[key];
    } else {
      state[key] = "done";
    }
    persistUi();
  }

  function flipCard(): void {
    flashFlipped = !flashFlipped;
  }

  function markFlash(value: FlashMark): void {
    if (!subject || !currentTopic || flashPosition >= flashDeck.length) return;
    const card = currentTopic.flashcards[flashDeck[flashPosition]];
    if (!card) return;
    const state = getFlashState(progress, subject, currentTopic.id);
    state[card.key] = value;
    flashPosition += 1;
    flashFlipped = false;
    persistUi();
  }

  /** Der Kartenstapel existiert nur im Karteikarten-Modus. */
  function syncFlashDeck(): void {
    if (currentMode === "flash") {
      resetFlashDeck();
    } else {
      flashDeck = [];
      flashPosition = 0;
      flashFlipped = false;
    }
  }

  function resetFlashDeck(onlyWrong = false): void {
    const topic = currentTopic;
    if (!subject || !topic) return;
    const state = readFlashState(topic);
    const allIndices = topic.flashcards.map((_, index) => index);
    const wrongIndices = allIndices.filter((index) => state[topic.flashcards[index].key] === "repeat");
    flashDeck = onlyWrong && wrongIndices.length ? wrongIndices : allIndices;
    flashPosition = 0;
    flashFlipped = false;
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (currentMode !== "flash" || !subject) return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const target = event.target instanceof Element ? event.target : null;
    if (target?.closest("input, select, textarea, [contenteditable]")) return;

    if (event.key === " " || event.key === "Enter") {
      // Bedienelemente außerhalb der Karteikarten (Modi, Themen, Links) behalten ihre Tastenfunktion,
      // ebenso die Buttons der Abschlussübersicht.
      const onOtherControl = target?.closest("button, a") && !target.closest(".fc-container");
      if (onOtherControl || flashPosition >= flashDeck.length) return;
      event.preventDefault();
      flipCard();
      return;
    }
    if (event.repeat) return;
    if (event.key === "ArrowRight" || event.key === "2") {
      markFlash("know");
      return;
    }
    if (event.key === "ArrowLeft" || event.key === "1") {
      markFlash("repeat");
    }
  }
</script>

<div class={`trainer nav-${navPlacement}`}>
  {#if subject}
    <aside class="sidebar" aria-label="Themen">
      <a class="sidebar-back" href="index.html"><Icon name="chevronLeft" /> Übersicht</a>
      <div class="sidebar-subject">
        <span class="sidebar-subject-title">{subject.title}</span>
        {#if subject.subtitle}<span class="sidebar-subject-subtitle">{subject.subtitle}</span>{/if}
      </div>
      <TopicList topics={subject.topics} progress={topicProgress} {currentTopicIndex} onSelect={selectTopic} />
      <div class="sidebar-footer">
        <LayoutSwitch value={navPlacement} onChange={changeNavPlacement} />
      </div>
    </aside>
  {/if}

  <div class="trainer-column">
    <header class="topbar">
      <div class="topbar-inner content-frame">
        <a class="icon-btn topbar-back" href="index.html" aria-label="Zur Übersicht"><Icon name="chevronLeft" /></a>
        {#if subject && currentTopic}
          <h1 class="topbar-title">{currentTopic.title}</h1>
          <TopicPicker
            subjectTitle={subject.title}
            topics={subject.topics}
            progress={topicProgress}
            {currentTopicIndex}
            onSelect={selectTopic}
          />
          <ModeSwitcher modes={MODES} {availableModes} {currentMode} onSelect={selectMode} />
          <div class="topbar-layout-switch">
            <LayoutSwitch value={navPlacement} onChange={changeNavPlacement} />
          </div>
        {:else}
          <h1 class="topbar-title topbar-title-fallback">Klausurtrainer</h1>
        {/if}
      </div>
    </header>

    <main class="main content-frame" id="content">
      {#if errorMessage}
        <div class="error-card fade-in">
          <h2>Fach nicht verfügbar</h2>
          <p>{errorMessage}</p>
          <p><a class="back-link" href="index.html">Zur Übersicht</a></p>
        </div>
      {:else if !subject || !currentTopic}
        <p class="empty-state">Fachdaten werden geladen.</p>
      {:else}
        {#key `${currentTopic.id}:${currentMode}`}
          {#if currentMode === "study"}
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
              onRestart={resetFlashDeck}
            />
          {/if}
        {/key}
      {/if}
    </main>
  </div>
</div>
