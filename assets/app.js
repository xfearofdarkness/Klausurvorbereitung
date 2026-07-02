(function () {
  const STORAGE_KEY = "klausurtrainer-progress-v1";
  const SUBJECT_ID_PATTERN = /^[a-z0-9-]+$/;
  const KATEX_BASE = "https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/";

  const MODES = [
    { id: "study", label: "Lernen", key: "cards" },
    { id: "quiz", label: "Fragen", key: "questions" },
    { id: "flash", label: "Karteikarten", key: "flashcards" },
    { id: "practice", label: "Üben", key: "exercises" }
  ];

  const state = {
    subject: null,
    availableModes: [],
    mathEnabled: false,
    currentTopicIndex: 0,
    currentMode: "study",
    showOnlyWrong: false,
    studyOpen: {},
    flash: {
      deck: [],
      position: 0,
      flipped: false
    },
    progress: loadProgress()
  };

  const refs = {
    title: document.getElementById("subjectTitle"),
    subtitle: document.getElementById("subjectSubtitle"),
    tabs: document.getElementById("tabs"),
    content: document.getElementById("content"),
    modeSwitcher: document.getElementById("modeSwitcher")
  };

  document.addEventListener("DOMContentLoaded", init);
  document.addEventListener("keydown", handleKeydown);
  if (refs.content) {
    refs.content.addEventListener("click", handleContentClick);
  }
  if (refs.tabs) {
    refs.tabs.addEventListener("click", handleContentClick);
  }
  if (refs.modeSwitcher) {
    refs.modeSwitcher.addEventListener("click", handleContentClick);
  }

  async function init() {
    const subjectId = getSubjectId();
    const catalog = Array.isArray(window.APP_CATALOG) ? window.APP_CATALOG : [];
    const subjectMeta = catalog.find((entry) => entry.id === subjectId);

    if (!subjectMeta || !SUBJECT_ID_PATTERN.test(subjectId)) {
      renderMissingSubject();
      return;
    }

    try {
      await loadSubjectData(subjectId);
    } catch (error) {
      console.error(error);
      renderError("Die Fachdaten konnten nicht geladen werden.");
      return;
    }

    const rawSubject =
      window.APP_SUBJECTS && Object.prototype.hasOwnProperty.call(window.APP_SUBJECTS, subjectId)
        ? window.APP_SUBJECTS[subjectId]
        : null;

    if (!rawSubject) {
      renderError("Die Fachdaten sind leer oder ungültig.");
      return;
    }

    state.subject = normalizeSubject(rawSubject, subjectMeta);
    state.availableModes = MODES.filter((mode) =>
      state.subject.topics.some((topic) => topic[mode.key].length > 0)
    );
    setupMath();
    restoreUiState();
    document.title = `${state.subject.title} Klausurtrainer`;

    renderHeader();
    renderModes();
    renderTabs();
    resetFlashDeck();
    saveUiState();
    render();
  }

  function getSubjectId() {
    const params = new URLSearchParams(window.location.search);
    return (params.get("subject") || "").trim().toLowerCase();
  }

  function loadSubjectData(subjectId) {
    if (window.APP_SUBJECTS && window.APP_SUBJECTS[subjectId]) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `data/${subjectId}.js`;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load data/${subjectId}.js`));
      document.head.appendChild(script);
    });
  }

  function setupMath() {
    if (!state.subject.features.math) {
      return;
    }

    state.mathEnabled = true;

    if (typeof window.renderMathInElement === "function") {
      return;
    }

    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = `${KATEX_BASE}katex.min.css`;
    document.head.appendChild(css);

    const core = document.createElement("script");
    core.src = `${KATEX_BASE}katex.min.js`;
    core.defer = true;
    core.onload = () => {
      const autoRender = document.createElement("script");
      autoRender.src = `${KATEX_BASE}contrib/auto-render.min.js`;
      autoRender.defer = true;
      autoRender.onload = () => applyMath();
      document.head.appendChild(autoRender);
    };
    document.head.appendChild(core);
  }

  function applyMath() {
    if (!state.mathEnabled || typeof window.renderMathInElement !== "function" || !refs.content) {
      return;
    }

    window.renderMathInElement(refs.content, {
      delimiters: [
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      throwOnError: false
    });
  }

  function normalizeSubject(rawSubject, subjectMeta) {
    const subject = {
      id: rawSubject.id || subjectMeta.id,
      title: rawSubject.title || subjectMeta.title,
      subtitle: rawSubject.subtitle || subjectMeta.subtitle || "",
      icon: rawSubject.icon || subjectMeta.icon || "📘",
      features: rawSubject.features && typeof rawSubject.features === "object" ? rawSubject.features : {},
      topics: Array.isArray(rawSubject.topics) ? rawSubject.topics : []
    };

    subject.topics = subject.topics.map((topic, index) => normalizeTopic(topic, index));
    return subject;
  }

  function normalizeTopic(topic, index) {
    const topicId = topic.id || slugify(topic.title || `thema-${index + 1}`);

    return {
      id: topicId,
      title: topic.title || `Thema ${index + 1}`,
      icon: topic.icon || "📘",
      cards: Array.isArray(topic.cards) ? topic.cards.map(normalizeCard) : [],
      questions: Array.isArray(topic.questions) ? topic.questions.map(normalizeQuestion) : [],
      flashcards: Array.isArray(topic.flashcards) ? topic.flashcards.map(normalizeFlashcard) : [],
      exercises: Array.isArray(topic.exercises) ? topic.exercises.map(normalizeExercise) : []
    };
  }

  function normalizeCard(card) {
    return {
      title: card.title || card.t || "",
      body: card.body || card.b || "",
      tag: card.tag || "",
      source: card.source || ""
    };
  }

  function normalizeQuestion(question) {
    return {
      question: question.question || question.q || "",
      answer: question.answer || question.a || "",
      source: question.source || ""
    };
  }

  function normalizeFlashcard(flashcard) {
    return {
      front: flashcard.front || "",
      back: flashcard.back || "",
      source: flashcard.source || ""
    };
  }

  function normalizeExercise(exercise) {
    return {
      task: exercise.task || "",
      ref: exercise.ref || "",
      note: exercise.note || "",
      source: exercise.source || ""
    };
  }

  function renderSource(source, className) {
    return source ? `<div class="${className || "card-source"}">${source}</div>` : "";
  }

  function slugify(value) {
    return String(value)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function loadProgress() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { subjects: {} };
    } catch (error) {
      console.warn("Progress could not be restored.", error);
      return { subjects: {} };
    }
  }

  function saveProgress() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    } catch (error) {
      console.warn("Progress could not be saved.", error);
    }
  }

  function getSubjectProgress() {
    if (!state.subject) {
      return { quiz: {}, flash: {} };
    }

    const subjects = state.progress.subjects;
    subjects[state.subject.id] = subjects[state.subject.id] || { quiz: {}, flash: {} };
    return subjects[state.subject.id];
  }

  function getSubjectUiState() {
    const subjectProgress = getSubjectProgress();
    subjectProgress.ui = subjectProgress.ui || {};
    return subjectProgress.ui;
  }

  function getCurrentTopic() {
    return state.subject.topics[state.currentTopicIndex];
  }

  function getTopicQuizState(topicId) {
    const subjectProgress = getSubjectProgress();
    subjectProgress.quiz[topicId] = subjectProgress.quiz[topicId] || {};
    return subjectProgress.quiz[topicId];
  }

  function getTopicFlashState(topicId) {
    const subjectProgress = getSubjectProgress();
    subjectProgress.flash[topicId] = subjectProgress.flash[topicId] || {};
    return subjectProgress.flash[topicId];
  }

  function getTopicPracticeState(topicId) {
    const subjectProgress = getSubjectProgress();
    subjectProgress.practice = subjectProgress.practice || {};
    subjectProgress.practice[topicId] = subjectProgress.practice[topicId] || {};
    return subjectProgress.practice[topicId];
  }

  function renderHeader() {
    if (refs.title) {
      refs.title.textContent = `${state.subject.icon} ${state.subject.title} Klausurtrainer`;
    }
    if (refs.subtitle) {
      refs.subtitle.textContent = state.subject.subtitle;
    }
  }

  function renderModes() {
    if (!refs.modeSwitcher) {
      return;
    }

    refs.modeSwitcher.innerHTML = state.availableModes
      .map(
        (mode) => `
          <button class="mode-btn${mode.id === state.currentMode ? " active" : ""}" data-action="switch-mode" data-mode="${mode.id}">
            ${mode.label}
          </button>
        `
      )
      .join("");
  }

  function renderTabs() {
    if (!refs.tabs) {
      return;
    }

    refs.tabs.innerHTML = state.subject.topics
      .map(
        (topic, index) => `
          <button class="tab${index === state.currentTopicIndex ? " active" : ""}" data-action="switch-topic" data-index="${index}">
            ${topic.icon} ${topic.title}
          </button>
        `
      )
      .join("");

    const activeTab = refs.tabs.querySelector(".tab.active");
    if (activeTab && typeof activeTab.scrollIntoView === "function") {
      activeTab.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  }

  function render() {
    if (!refs.content || !state.subject) {
      return;
    }

    if (state.currentMode === "study") {
      renderStudy();
    } else if (state.currentMode === "quiz") {
      renderQuiz();
    } else if (state.currentMode === "practice") {
      renderPractice();
    } else {
      renderFlash();
    }

    applyMath();
  }

  function renderTag(tag) {
    if (tag === "wichtig") return '<span class="tag tag-wichtig">WICHTIG</span>';
    if (tag === "formel") return '<span class="tag tag-formel">FORMEL</span>';
    if (tag === "def") return '<span class="tag tag-def">DEFINITION</span>';
    if (tag === "satz") return '<span class="tag tag-satz">SATZ</span>';
    if (tag === "beispiel") return '<span class="tag tag-beispiel">BEISPIEL</span>';
    return "";
  }

  function renderStudy() {
    const topic = getCurrentTopic();
    const topicOpenState = state.studyOpen[topic.id] || {};

    refs.content.innerHTML =
      `<div class="section-title fade-in"><span class="emoji">${topic.icon}</span> ${topic.title} – Lernseiten</div>` +
      topic.cards
        .map((card, index) => {
          const isLong = getPlainText(card.body).length > 260;
          const isOpen = topicOpenState[index] || !isLong;

          return `
            <div class="study-card fade-in">
              <div class="study-card-head">
                <h3>${card.title}${renderTag(card.tag)}</h3>
                ${isLong ? `<button class="study-toggle" data-action="toggle-study" data-index="${index}" aria-expanded="${isOpen}">${isOpen ? "Weniger" : "Mehr"}</button>` : ""}
              </div>
              <div class="study-body${isOpen ? " is-open" : ""}">
                <p>${card.body}</p>
                ${renderSource(card.source)}
              </div>
            </div>
          `;
        })
        .join("");
  }

  function renderQuiz() {
    const topic = getCurrentTopic();
    const quizState = getTopicQuizState(topic.id);
    let questions = topic.questions.map((question, index) => ({ ...question, index }));

    if (state.showOnlyWrong) {
      questions = questions.filter((question) => quizState[question.index] === "wrong");
    }

    const wrongCount = topic.questions.filter((_, index) => quizState[index] === "wrong").length;
    const correctCount = topic.questions.filter((_, index) => quizState[index] === "correct").length;

    refs.content.innerHTML = `
      <div class="section-title fade-in"><span class="emoji">${topic.icon}</span> ${topic.title} – Klausurfragen</div>
      <div class="stats-bar fade-in">
        <div class="stats-group">
          <span class="stat-pill stat-pill-neutral">${topic.questions.length} Fragen</span>
          <span class="stat-pill stat-pill-success">✅ ${correctCount}</span>
          <span class="stat-pill stat-pill-warning">🔁 ${wrongCount}</span>
        </div>
        <div class="stats-actions">
          ${wrongCount > 0 ? `<button class="filter-btn ${state.showOnlyWrong ? "active" : ""}" data-action="toggle-wrong-filter">${state.showOnlyWrong ? "Alle" : "Nur Schwächen"} (${wrongCount})</button>` : ""}
        </div>
      </div>
      ${
        questions.length === 0
          ? '<p class="empty-state">Keine Fragen mit Wiederholungsmarkierung mehr.</p>'
          : questions
              .map((question) => {
                const answerState = quizState[question.index];
                return `
                  <div class="quiz-card fade-in">
                    <div class="quiz-q">${question.index + 1}. ${question.question}</div>
                    <div class="quiz-a" id="qa-${question.index}">${question.answer}${renderSource(question.source)}</div>
                    <div class="quiz-btns">
                      <button class="q-btn show-btn" data-action="toggle-answer" data-index="${question.index}">Antwort zeigen</button>
                      <button class="q-btn${answerState === "correct" ? " correct" : ""}" data-action="mark-question" data-index="${question.index}" data-value="correct">Gewusst</button>
                      <button class="q-btn${answerState === "wrong" ? " wrong" : ""}" data-action="mark-question" data-index="${question.index}" data-value="wrong">Wiederholen</button>
                    </div>
                  </div>
                `;
              })
              .join("")
      }
    `;
  }

  function renderPractice() {
    const topic = getCurrentTopic();
    const practiceState = getTopicPracticeState(topic.id);
    const doneCount = topic.exercises.filter((_, index) => practiceState[index] === "done").length;

    refs.content.innerHTML = `
      <div class="section-title fade-in"><span class="emoji">${topic.icon}</span> ${topic.title} – Übungsaufgaben</div>
      ${
        topic.exercises.length === 0
          ? '<p class="empty-state">Für dieses Thema gibt es keine Übungsaufgaben.</p>'
          : `
            <div class="stats-bar fade-in">
              <div class="stats-group">
                <span class="stat-pill stat-pill-neutral">${topic.exercises.length} Aufgaben</span>
                <span class="stat-pill stat-pill-success">✅ ${doneCount} bearbeitet</span>
              </div>
            </div>
            ${topic.exercises
              .map((exercise, index) => {
                const isDone = practiceState[index] === "done";
                return `
                  <div class="quiz-card ex-card${isDone ? " ex-done" : ""} fade-in">
                    ${exercise.ref ? `<div class="ex-ref">${exercise.ref}</div>` : ""}
                    <div class="quiz-q ex-task">${exercise.task}</div>
                    ${exercise.note ? `<div class="ex-note">${exercise.note}</div>` : ""}
                    <div class="quiz-btns">
                      <button class="q-btn${isDone ? " correct" : ""}" data-action="mark-exercise" data-index="${index}">${isDone ? "Bearbeitet ✓" : "Als bearbeitet markieren"}</button>
                    </div>
                  </div>
                `;
              })
              .join("")}
          `
      }
    `;
  }

  function renderFlash() {
    const topic = getCurrentTopic();
    const results = getTopicFlashState(topic.id);
    const knownCount = Object.values(results).filter((value) => value === "know").length;
    const repeatCount = Object.values(results).filter((value) => value === "repeat").length;
    const progress = state.flash.deck.length
      ? (state.flash.position / state.flash.deck.length) * 100
      : 0;

    if (state.flash.deck.length === 0) {
      refs.content.innerHTML = `
        <div class="fc-container fade-in">
          <div class="section-title"><span class="emoji">${topic.icon}</span> ${topic.title} – Karteikarten</div>
          <p class="empty-state">Für dieses Thema gibt es keine Karteikarten.</p>
        </div>
      `;
      return;
    }

    if (state.flash.position >= state.flash.deck.length) {
      refs.content.innerHTML = `
        <div class="fc-container fade-in">
          <div class="section-title"><span class="emoji">${topic.icon}</span> ${topic.title} – Karteikarten</div>
          <div class="flash-summary">
            <div class="flash-summary-icon">🎯</div>
            <div class="flash-summary-title">Alle ${state.flash.deck.length} Karten durchgearbeitet</div>
            <div class="fc-score flash-summary-score">
              <span class="s-know">✅ ${knownCount} gewusst</span>
              <span class="s-repeat">🔁 ${repeatCount} wiederholen</span>
            </div>
            <div class="flash-summary-actions">
              ${repeatCount > 0 ? '<button class="fc-btn" data-action="restart-flash-wrong">Nur Schwächen</button>' : ""}
              <button class="fc-btn" data-action="restart-flash">Alle nochmal</button>
            </div>
          </div>
        </div>
      `;
      return;
    }

    const cardIndex = state.flash.deck[state.flash.position];
    const card = topic.flashcards[cardIndex];

    refs.content.innerHTML = `
      <div class="fc-container fade-in">
        <div class="section-title"><span class="emoji">${topic.icon}</span> ${topic.title} – Karteikarten</div>
        <div class="fc-progress">
          <span class="fc-progress-count">${state.flash.position + 1} / ${state.flash.deck.length}</span>
          <div class="fc-bar"><div class="fc-bar-fill" style="width:${progress}%"></div></div>
          <div class="fc-score">
            <span class="s-know">✅ ${knownCount}</span>
            <span class="s-repeat">🔁 ${repeatCount}</span>
          </div>
        </div>
        <div class="fc-card-wrap" data-action="flip-card">
          <div class="fc-card${state.flash.flipped ? " flipped" : ""}">
            <div class="fc-face fc-front">
              <div class="fc-label">Frage</div>
              <div class="fc-text">${card.front}</div>
              <div class="fc-hint">Klicken zum Umdrehen</div>
            </div>
            <div class="fc-face fc-back">
              <div class="fc-label">Antwort</div>
              <div class="fc-text">${card.back}</div>
              ${renderSource(card.source, "card-source fc-source")}
              <div class="fc-hint">Klicken zum Zurückdrehen</div>
            </div>
          </div>
        </div>
        <div class="fc-controls">
          <button class="fc-btn fc-repeat" data-action="mark-flash" data-value="repeat">Wiederholen</button>
          <button class="fc-btn fc-know" data-action="mark-flash" data-value="know">Gewusst</button>
        </div>
      </div>
    `;
  }

  function handleContentClick(event) {
    const trigger = event.target.closest("[data-action]");
    if (!trigger) {
      return;
    }

    const { action, index, value, mode } = trigger.dataset;

    if (action === "switch-mode") {
      state.currentMode = mode || "study";
      state.showOnlyWrong = false;
      resetFlashDeck();
      saveUiState();
      renderModes();
      render();
      window.scrollTo(0, 0);
      return;
    }

    if (action === "switch-topic") {
      state.currentTopicIndex = Number(index);
      state.showOnlyWrong = false;
      resetFlashDeck();
      saveUiState();
      renderTabs();
      render();
      window.scrollTo(0, 0);
      return;
    }

    if (action === "toggle-study") {
      toggleStudyCard(Number(index));
      return;
    }

    if (action === "toggle-answer") {
      toggleAnswer(Number(index));
      return;
    }

    if (action === "mark-question") {
      markQuestion(Number(index), value);
      return;
    }

    if (action === "mark-exercise") {
      markExercise(Number(index));
      return;
    }

    if (action === "toggle-wrong-filter") {
      state.showOnlyWrong = !state.showOnlyWrong;
      render();
      return;
    }

    if (action === "flip-card") {
      flipCard();
      return;
    }

    if (action === "mark-flash") {
      markFlash(value);
      return;
    }

    if (action === "restart-flash") {
      resetFlashDeck();
      render();
      return;
    }

    if (action === "restart-flash-wrong") {
      resetFlashDeck(true);
      render();
    }
  }

  function handleKeydown(event) {
    if (state.currentMode !== "flash" || !state.subject) {
      return;
    }

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

  function toggleAnswer(index) {
    const answer = document.getElementById(`qa-${index}`);
    if (answer) {
      answer.classList.toggle("visible");
    }
  }

  function markQuestion(index, value) {
    const topic = getCurrentTopic();
    const quizState = getTopicQuizState(topic.id);
    quizState[index] = value;
    saveProgress();
    saveUiState();
    render();
  }

  function markExercise(index) {
    const topic = getCurrentTopic();
    const practiceState = getTopicPracticeState(topic.id);
    if (practiceState[index] === "done") {
      delete practiceState[index];
    } else {
      practiceState[index] = "done";
    }
    saveProgress();
    saveUiState();
    render();
  }

  function toggleStudyCard(index) {
    const topic = getCurrentTopic();
    state.studyOpen[topic.id] = state.studyOpen[topic.id] || {};
    state.studyOpen[topic.id][index] = !state.studyOpen[topic.id][index];
    render();
  }

  function flipCard() {
    state.flash.flipped = !state.flash.flipped;
    const card = refs.content.querySelector(".fc-card");
    if (card) {
      card.classList.toggle("flipped", state.flash.flipped);
    }
  }

  function markFlash(value) {
    const topic = getCurrentTopic();
    if (state.flash.position >= state.flash.deck.length) {
      return;
    }

    const cardIndex = state.flash.deck[state.flash.position];
    const flashState = getTopicFlashState(topic.id);
    flashState[cardIndex] = value;
    state.flash.position += 1;
    state.flash.flipped = false;
    saveProgress();
    saveUiState();
    render();
  }

  function resetFlashDeck(onlyWrong) {
    if (!state.subject) {
      return;
    }

    const topic = getCurrentTopic();
    const flashState = getTopicFlashState(topic.id);
    const allIndices = topic.flashcards.map((_, index) => index);
    const wrongIndices = allIndices.filter((index) => flashState[index] === "repeat");

    state.flash.deck = onlyWrong && wrongIndices.length ? wrongIndices : allIndices;
    state.flash.position = 0;
    state.flash.flipped = false;
  }

  function restoreUiState() {
    const ui = getSubjectUiState();
    const maxTopicIndex = Math.max(0, state.subject.topics.length - 1);
    state.currentTopicIndex = Math.min(ui.lastTopicIndex || 0, maxTopicIndex);

    const fallbackMode = state.availableModes.length ? state.availableModes[0].id : "study";
    const restoredMode = ui.lastMode || fallbackMode;
    state.currentMode = state.availableModes.some((mode) => mode.id === restoredMode)
      ? restoredMode
      : fallbackMode;
  }

  function saveUiState() {
    if (!state.subject) {
      return;
    }

    const ui = getSubjectUiState();
    ui.lastMode = state.currentMode;
    ui.lastTopicIndex = state.currentTopicIndex;
    state.progress.lastSubjectId = state.subject.id;
    saveProgress();
  }

  function getPlainText(value) {
    return String(value || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  }

  function renderMissingSubject() {
    renderError("Kein gültiges Fach ausgewählt.");
  }

  function renderError(message) {
    if (!refs.content) {
      return;
    }

    if (refs.title) {
      refs.title.textContent = "Klausurtrainer";
    }
    if (refs.subtitle) {
      refs.subtitle.textContent = "Statische Lernseite für GitHub Pages";
    }

    refs.content.innerHTML = `
      <div class="error-card fade-in">
        <h2>Fach nicht verfügbar</h2>
        <p>${message}</p>
        <p><a class="back-link" href="index.html">Zur Übersicht</a></p>
      </div>
    `;
  }
})();
