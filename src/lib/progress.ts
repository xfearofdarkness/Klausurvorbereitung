import type { AppProgress, FlashMark, ModeId, PracticeMark, QuizMark, Subject, SubjectProgress } from "../types/content";

export const STORAGE_KEY = "klausurtrainer-progress-v1";

export function loadProgress(): AppProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AppProgress) : { subjects: {} };
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
  progress.subjects[subject.id] = progress.subjects[subject.id] || { quiz: {}, flash: {} };
  return progress.subjects[subject.id] as SubjectProgress;
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
