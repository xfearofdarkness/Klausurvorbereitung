export type SubjectId = "rabs" | "laa" | "vs" | "aud";

export type ModeId = "study" | "quiz" | "flash" | "practice" | "walkthrough";

export type ContentTag = "wichtig" | "formel" | "def" | "satz" | "beispiel" | "";

export interface SubjectMeta {
  id: SubjectId;
  title: string;
  subtitle: string;
  icon: string;
}

export interface SubjectFeatures {
  math?: boolean;
}

export interface RawSubject {
  id: SubjectId;
  title: string;
  subtitle?: string;
  icon?: string;
  features?: SubjectFeatures;
  topics: RawTopic[];
}

export interface Subject {
  id: SubjectId;
  title: string;
  subtitle: string;
  icon: string;
  features: SubjectFeatures;
  topics: Topic[];
}

export interface RawTopic {
  id?: string;
  title: string;
  icon?: string;
  cards?: RawCard[];
  questions?: RawQuestion[];
  flashcards?: RawFlashcard[];
  exercises?: RawExercise[];
  walkthroughs?: Walkthrough[];
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  cards: Card[];
  questions: Question[];
  flashcards: Flashcard[];
  exercises: Exercise[];
  walkthroughs: Walkthrough[];
}

export interface RawCard {
  title?: string;
  body?: string;
  t?: string;
  b?: string;
  tag?: ContentTag;
  source?: string;
}

export interface Card {
  title: string;
  body: string;
  tag: ContentTag;
  source: string;
}

export interface RawQuestion {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
  source?: string;
}

export interface Question {
  question: string;
  answer: string;
  source: string;
}

export interface RawFlashcard {
  front?: string;
  back?: string;
  source?: string;
}

export interface Flashcard {
  front: string;
  back: string;
  source: string;
}

export interface RawExercise {
  task?: string;
  ref?: string;
  note?: string;
  source?: string;
}

export interface Exercise {
  task: string;
  ref: string;
  note: string;
  source: string;
}

export interface Walkthrough {
  id: string;
  title: string;
  source: string;
  intro?: string;
  visual: MatrixVisual | ArrayVisual;
  steps: WalkthroughStep[];
}

export type WalkthroughVisualKind = "matrix" | "array";

export interface MatrixVisual {
  kind: "matrix";
  matrices: MatrixDefinition[];
}

export interface MatrixDefinition {
  id: string;
  label: string;
  values: MatrixValue[][];
}

export type MatrixValue = number | string | null;

export interface ArrayVisual {
  kind: "array";
  label?: string;
  values: Array<number | string>;
}

export interface WalkthroughStep {
  title: string;
  text: string;
  source?: string;
  highlights?: WalkthroughHighlight[];
  values?: WalkthroughValueUpdate[];
  formula?: string;
  product?: string;
  sum?: string;
}

export type WalkthroughHighlight =
  | { kind: "matrix-cell"; matrix: string; row: number; col: number; role: "target" | "factor" | "done" }
  | { kind: "matrix-row"; matrix: string; row: number; role: "active" }
  | { kind: "matrix-col"; matrix: string; col: number; role: "active" }
  | { kind: "array-index"; index: number; role: "active" | "compare" | "done" };

export type WalkthroughValueUpdate =
  | { kind: "matrix-cell"; matrix: string; row: number; col: number; value: MatrixValue }
  | { kind: "array-index"; index: number; value: number | string };

export interface ModeConfig {
  id: ModeId;
  label: string;
  key: keyof Pick<Topic, "cards" | "questions" | "flashcards" | "exercises" | "walkthroughs">;
}

export type QuizMark = "correct" | "wrong";
export type FlashMark = "know" | "repeat";
export type PracticeMark = "done";

export interface SubjectProgress {
  quiz: Record<string, Record<number, QuizMark>>;
  flash: Record<string, Record<number, FlashMark>>;
  practice?: Record<string, Record<number, PracticeMark>>;
  ui?: {
    lastMode?: ModeId;
    lastTopicIndex?: number;
  };
}

export interface AppProgress {
  subjects: Partial<Record<SubjectId, SubjectProgress>>;
  lastSubjectId?: SubjectId;
}
