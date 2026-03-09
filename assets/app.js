(function () {
  const STORAGE_KEY = "klausurtrainer-progress-v1";
  const SUBJECT_ID_PATTERN = /^[a-z0-9-]+$/;

  const state = {
    subject: null,
    currentTopicIndex: 0,
    currentMode: "study",
    showOnlyWrong: false,
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
    modeButtons: Array.from(document.querySelectorAll(".mode-btn"))
  };

  document.addEventListener("DOMContentLoaded", init);
  document.addEventListener("keydown", handleKeydown);
  if (refs.content) {
    refs.content.addEventListener("click", handleContentClick);
  }
  if (refs.tabs) {
    refs.tabs.addEventListener("click", handleContentClick);
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
    document.title = `${state.subject.title} Klausurtrainer`;

    renderHeader();
    bindModes();
    renderTabs();
    resetFlashDeck();
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

  function normalizeSubject(rawSubject, subjectMeta) {
    const subject = {
      id: rawSubject.id || subjectMeta.id,
      title: rawSubject.title || subjectMeta.title,
      subtitle: rawSubject.subtitle || subjectMeta.subtitle || "",
      icon: rawSubject.icon || subjectMeta.icon || "📘",
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
      flashcards: Array.isArray(topic.flashcards) ? topic.flashcards.map(normalizeFlashcard) : []
    };
  }

  function normalizeCard(card) {
    return {
      title: card.title || card.t || "",
      body: card.body || card.b || "",
      tag: card.tag || ""
    };
  }

  function normalizeQuestion(question) {
    return {
      question: question.question || question.q || "",
      answer: question.answer || question.a || ""
    };
  }

  function normalizeFlashcard(flashcard) {
    return {
      front: flashcard.front || "",
      back: flashcard.back || ""
    };
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

  function renderHeader() {
    if (refs.title) {
      refs.title.textContent = `${state.subject.icon} ${state.subject.title} Klausurtrainer`;
    }
    if (refs.subtitle) {
      refs.subtitle.textContent = state.subject.subtitle;
    }
  }

  function bindModes() {
    refs.modeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        state.currentMode = button.dataset.mode || "study";
        state.showOnlyWrong = false;
        resetFlashDeck();
        updateModeButtons();
        render();
      });
    });
    updateModeButtons();
  }

  function updateModeButtons() {
    refs.modeButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.mode === state.currentMode);
    });
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
  }

  function render() {
    if (!refs.content || !state.subject) {
      return;
    }

    if (state.currentMode === "study") {
      renderStudy();
      return;
    }

    if (state.currentMode === "quiz") {
      renderQuiz();
      return;
    }

    renderFlash();
  }

  function renderStudy() {
    const topic = getCurrentTopic();

    refs.content.innerHTML =
      `<div class="section-title fade-in"><span class="emoji">${topic.icon}</span> ${topic.title} – Lernseiten</div>` +
      topic.cards
        .map((card) => {
          let tag = "";
          if (card.tag === "wichtig") tag = '<span class="tag tag-wichtig">WICHTIG</span>';
          if (card.tag === "formel") tag = '<span class="tag tag-formel">FORMEL</span>';
          if (card.tag === "def") tag = '<span class="tag tag-def">DEFINITION</span>';

          return `
            <div class="study-card fade-in">
              <h3>${card.title}${tag}</h3>
              <p>${card.body}</p>
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
        <span class="stats-info">✅ ${correctCount} gewusst · 🔁 ${wrongCount} wiederholen · ${topic.questions.length} Fragen</span>
        ${wrongCount > 0 ? `<button class="filter-btn ${state.showOnlyWrong ? "active" : ""}" data-action="toggle-wrong-filter">Nur Schwächen (${wrongCount})</button>` : ""}
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
                    <div class="quiz-a" id="qa-${question.index}">${question.answer}</div>
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

  function renderFlash() {
    const topic = getCurrentTopic();
    const results = getTopicFlashState(topic.id);
    const knownCount = Object.values(results).filter((value) => value === "know").length;
    const repeatCount = Object.values(results).filter((value) => value === "repeat").length;
    const progress = state.flash.deck.length
      ? (state.flash.position / state.flash.deck.length) * 100
      : 0;

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
          <span>${state.flash.position + 1} / ${state.flash.deck.length}</span>
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

    const { action, index, value } = trigger.dataset;

    if (action === "switch-topic") {
      state.currentTopicIndex = Number(index);
      state.showOnlyWrong = false;
      resetFlashDeck();
      renderTabs();
      render();
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
