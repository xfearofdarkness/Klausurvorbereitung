import type {
  AppProgress,
  FlashMark,
  MarkState,
  ModeId,
  PracticeMark,
  Subject,
  SubjectProgress,
  Topic
} from "../types/content";

export const STORAGE_KEY = "klausurtrainer-progress-v1";
const PROGRESS_VERSION = 3;
const CONTENT_KEY_VERSION = 2;
const LEGACY_INDEX_PATTERN = /^\d+$/;
/** Modi, die es nicht mehr gibt, und wo ihre Inhalte jetzt stehen. */
const REMOVED_MODES: Record<string, ModeId> = { quiz: "flash", walkthrough: "study" };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeProgress(value: unknown): AppProgress {
  const progress = isRecord(value) ? (value as unknown as AppProgress) : { subjects: {} };
  if (!isRecord(progress.subjects)) {
    progress.subjects = {};
  }
  return progress;
}

export function loadProgress(): AppProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? normalizeProgress(JSON.parse(raw)) : { subjects: {} };
  } catch (error) {
    console.warn("Progress could not be restored.", error);
    return { subjects: {} };
  }
}

export function saveProgress(progress: AppProgress): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.warn("Progress could not be saved.", error);
  }
}

export function getSubjectProgress(progress: AppProgress, subject: Subject): SubjectProgress {
  if (!isRecord(progress.subjects)) {
    progress.subjects = {};
  }

  const current = progress.subjects[subject.id];
  const subjectProgress = isRecord(current) ? (current as SubjectProgress) : { version: PROGRESS_VERSION, flash: {} };

  if (!isRecord(subjectProgress.flash)) {
    subjectProgress.flash = {};
  }
  if (subjectProgress.practice !== undefined && !isRecord(subjectProgress.practice)) {
    subjectProgress.practice = {};
  }
  if (subjectProgress.ui !== undefined && !isRecord(subjectProgress.ui)) {
    subjectProgress.ui = {};
  }
  if (subjectProgress.version !== PROGRESS_VERSION) {
    if ((subjectProgress.version ?? 1) < CONTENT_KEY_VERSION) migrateIndexKeys(subjectProgress, subject);
    migrateQuizToFlash(subjectProgress, subject);
    subjectProgress.version = PROGRESS_VERSION;
  }

  progress.subjects[subject.id] = subjectProgress;
  return subjectProgress;
}

/**
 * Ältere Stände speicherten Markierungen und Thema über Listenpositionen. Sie werden einmalig
 * anhand der aktuellen Inhalte auf Inhaltsschlüssel bzw. Topic-IDs übertragen.
 */
function migrateIndexKeys(subjectProgress: SubjectProgress, subject: Subject): void {
  const topicById = new Map(subject.topics.map((topic) => [topic.id, topic]));
  const migrate = <T>(records: Record<string, MarkState<T>> | undefined, items: (topic: Topic) => Array<{ key: string }>): void => {
    if (!records) return;
    for (const [topicId, marks] of Object.entries(records)) {
      const topic = topicById.get(topicId);
      if (!topic || !isRecord(marks)) {
        delete records[topicId];
        continue;
      }
      const migrated: MarkState<T> = {};
      for (const [key, mark] of Object.entries(marks)) {
        const item = LEGACY_INDEX_PATTERN.test(key) ? items(topic)[Number(key)] : undefined;
        if (item) migrated[item.key] = mark as T;
      }
      records[topicId] = migrated;
    }
  };

  migrate(subjectProgress.flash, (topic) => topic.flashcards);
  migrate(subjectProgress.practice, (topic) => topic.exercises);

  const ui = subjectProgress.ui;
  if (ui && ui.lastTopicId === undefined && typeof ui.lastTopicIndex === "number") {
    ui.lastTopicId = subject.topics[ui.lastTopicIndex]?.id;
  }
  if (ui) delete ui.lastTopicIndex;
}

/**
 * Der Modus „Fragen“ ist in den Karteikarten aufgegangen. Eine Frage, deren Text jetzt Vorderseite
 * einer Karteikarte ist, hat denselben Schlüssel; ihre Markierung wird übernommen, sofern die Karte
 * noch keine eigene hat. Markierungen von Fragen ohne solche Karte entfallen.
 */
function migrateQuizToFlash(subjectProgress: SubjectProgress, subject: Subject): void {
  const quiz = isRecord(subjectProgress.quiz) ? subjectProgress.quiz : {};
  for (const topic of subject.topics) {
    const marks = quiz[topic.id];
    if (!isRecord(marks)) continue;
    const flash = (subjectProgress.flash[topic.id] = subjectProgress.flash[topic.id] || {});
    for (const card of topic.flashcards) {
      const mark = marks[card.key];
      if (flash[card.key] || (mark !== "correct" && mark !== "wrong")) continue;
      flash[card.key] = mark === "correct" ? "know" : "repeat";
    }
  }
  delete subjectProgress.quiz;

  const ui = subjectProgress.ui;
  const replacement = ui?.lastMode ? REMOVED_MODES[ui.lastMode] : undefined;
  if (ui && replacement) ui.lastMode = replacement;
}

export function getFlashState(progress: AppProgress, subject: Subject, topicId: string): MarkState<FlashMark> {
  const subjectProgress = getSubjectProgress(progress, subject);
  subjectProgress.flash[topicId] = subjectProgress.flash[topicId] || {};
  return subjectProgress.flash[topicId];
}

export function getPracticeState(progress: AppProgress, subject: Subject, topicId: string): MarkState<PracticeMark> {
  const subjectProgress = getSubjectProgress(progress, subject);
  subjectProgress.practice = subjectProgress.practice || {};
  subjectProgress.practice[topicId] = subjectProgress.practice[topicId] || {};
  return subjectProgress.practice[topicId];
}

export function saveUiState(progress: AppProgress, subject: Subject, mode: ModeId, topicId: string): void {
  const subjectProgress = getSubjectProgress(progress, subject);
  subjectProgress.ui = subjectProgress.ui || {};
  subjectProgress.ui.lastMode = mode;
  subjectProgress.ui.lastTopicId = topicId;
  progress.lastSubjectId = subject.id;
  saveProgress(progress);
}

export interface TopicProgressSummary {
  done: number;
  total: number;
}

/** Gewusste Karten plus bearbeitete Aufgaben eines Themas; liest nur, legt nichts an. */
export function summarizeTopicProgress(progress: AppProgress, subject: Subject, topic: Topic): TopicProgressSummary {
  const subjectProgress = progress.subjects[subject.id];
  const flash = subjectProgress?.flash?.[topic.id] || {};
  const practice = subjectProgress?.practice?.[topic.id] || {};
  const done =
    topic.flashcards.filter((flashcard) => flash[flashcard.key] === "know").length +
    topic.exercises.filter((exercise) => practice[exercise.key] === "done").length;
  return { done, total: topic.flashcards.length + topic.exercises.length };
}
