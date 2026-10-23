import type {
  AppProgress,
  FlashMark,
  MarkState,
  ModeId,
  PracticeMark,
  QuizMark,
  Subject,
  SubjectProgress,
  Topic
} from "../types/content";

export const STORAGE_KEY = "klausurtrainer-progress-v1";
const PROGRESS_VERSION = 2;
const LEGACY_INDEX_PATTERN = /^\d+$/;

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
  const subjectProgress = isRecord(current) ? (current as SubjectProgress) : { version: PROGRESS_VERSION, quiz: {}, flash: {} };

  if (!isRecord(subjectProgress.quiz)) {
    subjectProgress.quiz = {};
  }
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
    migrateIndexKeys(subjectProgress, subject);
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

  migrate(subjectProgress.quiz, (topic) => topic.questions);
  migrate(subjectProgress.flash, (topic) => topic.flashcards);
  migrate(subjectProgress.practice, (topic) => topic.exercises);

  const ui = subjectProgress.ui;
  if (ui && ui.lastTopicId === undefined && typeof ui.lastTopicIndex === "number") {
    ui.lastTopicId = subject.topics[ui.lastTopicIndex]?.id;
  }
  if (ui) delete ui.lastTopicIndex;
  subjectProgress.version = PROGRESS_VERSION;
}

export function getQuizState(progress: AppProgress, subject: Subject, topicId: string): MarkState<QuizMark> {
  const subjectProgress = getSubjectProgress(progress, subject);
  subjectProgress.quiz[topicId] = subjectProgress.quiz[topicId] || {};
  return subjectProgress.quiz[topicId];
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
