import type {
  AppProgress,
  CardSchedule,
  FlashMark,
  MarkState,
  ModeId,
  PracticeMark,
  Subject,
  SubjectProgress,
  Topic
} from "../types/content";

export const STORAGE_KEY = "klausurtrainer-progress-v1";
const PROGRESS_VERSION = 4;
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
  if (subjectProgress.schedule !== undefined && !isRecord(subjectProgress.schedule)) {
    subjectProgress.schedule = {};
  }
  if (subjectProgress.version !== PROGRESS_VERSION) {
    if ((subjectProgress.version ?? 1) < CONTENT_KEY_VERSION) discardIndexMarks(subjectProgress);
    finishMigration(subjectProgress);
  }

  progress.subjects[subject.id] = subjectProgress;
  return subjectProgress;
}

/** Alte Listenpositionen eines Fachs: Topic-Reihenfolge und je Thema die neue Id pro Position (null = verworfen). */
export interface LegacySubjectKeys {
  topicOrder: string[];
  topics: Record<string, { flash: Array<string | null>; quiz: Array<string | null>; practice: Array<string | null> }>;
}

/** Stände der früheren Version speicherten Markierungen nach Listenposition statt nach Id. */
export function needsLegacyMigration(progress: AppProgress, subjectId: Subject["id"]): boolean {
  const current = progress.subjects[subjectId];
  return isRecord(current) && ((current as SubjectProgress).version ?? 1) < CONTENT_KEY_VERSION;
}

/**
 * Überträgt einen Stand der früheren Version einmalig auf Ids. Die Zuordnung stammt aus den Inhalten
 * dieser Version (exakter Text); Positionen ohne eindeutige Entsprechung werden verworfen statt
 * einer falschen Karte zugeordnet. Markierungen des früheren Modus „Fragen“ gehen in die Karteikarte
 * mit demselben Text über, sofern diese noch keine eigene hat.
 */
export function migrateLegacyProgress(progress: AppProgress, subject: Subject, legacy: LegacySubjectKeys | undefined): void {
  const subjectProgress = getSubjectProgressRecord(progress, subject);
  if ((subjectProgress.version ?? 1) >= CONTENT_KEY_VERSION) return;
  const topicById = new Map(subject.topics.map((topic) => [topic.id, topic]));
  const remap = <T>(
    records: Record<string, MarkState<unknown>> | undefined,
    kind: "flash" | "quiz" | "practice",
    validKeys: (topic: Topic) => Set<string>,
    convert: (mark: unknown) => T | undefined,
    target: Record<string, MarkState<T>>
  ): void => {
    if (!isRecord(records)) return;
    for (const [topicId, marks] of Object.entries(records)) {
      const topic = topicById.get(topicId);
      const ids = legacy?.topics[topicId]?.[kind];
      if (!topic || !ids || !isRecord(marks)) continue;
      const valid = validKeys(topic);
      const migrated = (target[topicId] = isRecord(target[topicId]) ? target[topicId] : {});
      for (const [key, mark] of Object.entries(marks)) {
        const id = LEGACY_INDEX_PATTERN.test(key) ? ids[Number(key)] : null;
        const value = convert(mark);
        if (id && valid.has(id) && value !== undefined && migrated[id] === undefined) migrated[id] = value;
      }
    }
  };
  const flashKeys = (topic: Topic) => new Set(topic.flashcards.map((card) => card.key));
  const flash: Record<string, MarkState<FlashMark>> = {};
  const practice: Record<string, MarkState<PracticeMark>> = {};
  remap(subjectProgress.flash, "flash", flashKeys, (mark) => (mark === "know" || mark === "repeat" ? mark : undefined), flash);
  remap(subjectProgress.quiz, "quiz", flashKeys, (mark) => (mark === "correct" ? "know" : mark === "wrong" ? "repeat" : undefined), flash);
  remap(subjectProgress.practice, "practice", (topic) => new Set(topic.exercises.map((exercise) => exercise.key)), (mark) => (mark === "done" ? mark : undefined), practice);
  subjectProgress.flash = flash;
  if (subjectProgress.practice !== undefined) subjectProgress.practice = practice;

  const ui = subjectProgress.ui;
  if (ui && typeof ui.lastTopicIndex === "number") ui.lastTopicId = legacy?.topicOrder[ui.lastTopicIndex];
  finishMigration(subjectProgress);
}

function getSubjectProgressRecord(progress: AppProgress, subject: Subject): SubjectProgress {
  const current = progress.subjects[subject.id];
  const subjectProgress = isRecord(current) ? (current as SubjectProgress) : { version: PROGRESS_VERSION, flash: {} };
  progress.subjects[subject.id] = subjectProgress;
  return subjectProgress;
}

/** Ohne Zuordnungstabelle lassen sich Listenpositionen nicht sicher übertragen; sie werden verworfen. */
function discardIndexMarks(subjectProgress: SubjectProgress): void {
  const keep = (records: Record<string, MarkState<unknown>> | undefined): void => {
    if (!isRecord(records)) return;
    for (const [topicId, marks] of Object.entries(records)) {
      if (!isRecord(marks)) {
        delete records[topicId];
        continue;
      }
      for (const key of Object.keys(marks)) if (LEGACY_INDEX_PATTERN.test(key)) delete marks[key];
    }
  };
  keep(subjectProgress.flash);
  keep(subjectProgress.practice);
}

function finishMigration(subjectProgress: SubjectProgress): void {
  delete subjectProgress.quiz;
  const ui = subjectProgress.ui;
  if (ui) {
    delete ui.lastTopicIndex;
    const replacement = ui.lastMode ? REMOVED_MODES[ui.lastMode] : undefined;
    if (replacement) ui.lastMode = replacement;
  }
  subjectProgress.version = PROGRESS_VERSION;
}

export function getFlashState(progress: AppProgress, subject: Subject, topicId: string): MarkState<FlashMark> {
  const subjectProgress = getSubjectProgress(progress, subject);
  subjectProgress.flash[topicId] = subjectProgress.flash[topicId] || {};
  return subjectProgress.flash[topicId];
}

export function getScheduleState(progress: AppProgress, subject: Subject, topicId: string): Record<string, CardSchedule> {
  const subjectProgress = getSubjectProgress(progress, subject);
  subjectProgress.schedule = subjectProgress.schedule || {};
  subjectProgress.schedule[topicId] = subjectProgress.schedule[topicId] || {};
  return subjectProgress.schedule[topicId];
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
