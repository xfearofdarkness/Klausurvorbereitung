import type { AppProgress, FlashMark, ModeId, PracticeMark, QuizMark, Subject, SubjectProgress } from "../types/content";

export const STORAGE_KEY = "klausurtrainer-progress-v1";

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
  const subjectProgress = isRecord(current) ? (current as SubjectProgress) : { quiz: {}, flash: {} };

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

  progress.subjects[subject.id] = subjectProgress;
  return subjectProgress;
}

export function getQuizState(progress: AppProgress, subject: Subject, topicId: string): Record<number, QuizMark> {
  const subjectProgress = getSubjectProgress(progress, subject);
  subjectProgress.quiz[topicId] = subjectProgress.quiz[topicId] || {};
  return subjectProgress.quiz[topicId];
}

export function getFlashState(progress: AppProgress, subject: Subject, topicId: string): Record<number, FlashMark> {
  const subjectProgress = getSubjectProgress(progress, subject);
  subjectProgress.flash[topicId] = subjectProgress.flash[topicId] || {};
  return subjectProgress.flash[topicId];
}

export function getPracticeState(progress: AppProgress, subject: Subject, topicId: string): Record<number, PracticeMark> {
  const subjectProgress = getSubjectProgress(progress, subject);
  subjectProgress.practice = subjectProgress.practice || {};
  subjectProgress.practice[topicId] = subjectProgress.practice[topicId] || {};
  return subjectProgress.practice[topicId];
}

export function saveUiState(progress: AppProgress, subject: Subject, mode: ModeId, topicIndex: number): void {
  const subjectProgress = getSubjectProgress(progress, subject);
  subjectProgress.ui = subjectProgress.ui || {};
  subjectProgress.ui.lastMode = mode;
  subjectProgress.ui.lastTopicIndex = topicIndex;
  progress.lastSubjectId = subject.id;
  saveProgress(progress);
}
