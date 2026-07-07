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
  visual: MatrixVisual | ArrayVisual | TreeVisual | GraphVisual;
  steps: WalkthroughStep[];
}

export type WalkthroughVisualKind = "matrix" | "array" | "tree" | "graph";

export interface MatrixVisual {
  kind: "matrix";
  matrices: MatrixDefinition[];
  /** Operator, der nach der jeweiligen Matrix angezeigt wird (z. B. ["×", "="]). */
  operators?: string[];
}

export interface MatrixDefinition {
  id: string;
  label: string;
  values: MatrixValue[][];
  layout?: "matrix" | "table";
  rowLabels?: Array<number | string>;
  colLabels?: Array<number | string>;
  cornerLabel?: string;
}

export type MatrixValue = number | string | null;

export interface ArrayVisual {
  kind: "array";
  label?: string;
  values: Array<number | string>;
  arrays?: ArrayDefinition[];
  /** Balkendarstellung für numerische Werte (z. B. Sortierverfahren). */
  bars?: boolean;
}

export interface ArrayDefinition {
  id: string;
  label: string;
  values: Array<number | string>;
  bars?: boolean;
}

export interface TreeVisual {
  kind: "tree";
  label?: string;
  root: string;
  nodes: TreeNodeDefinition[];
}

export interface TreeNodeDefinition {
  id: string;
  value: number | string;
  left?: string;
  right?: string;
  hidden?: boolean;
}

export interface GraphVisual {
  kind: "graph";
  label?: string;
  directed?: boolean;
  nodes: GraphNodeDefinition[];
  edges: GraphEdgeDefinition[];
}

export interface GraphNodeDefinition {
  id: string;
  label?: string;
  note?: string;
  x: number;
  y: number;
}

export interface GraphEdgeDefinition {
  from: string;
  to: string;
  label?: string;
}

export interface WalkthroughStep {
  title: string;
  text: string;
  source?: string;
  explanation?: WalkthroughStepExplanation;
  highlights?: WalkthroughHighlight[];
  values?: WalkthroughValueUpdate[];
  formula?: string;
  product?: string;
  sum?: string;
}

export interface WalkthroughStepExplanation {
  action?: string;
  rule?: string;
  decision?: string;
}

export type WalkthroughHighlight =
  | { kind: "matrix-cell"; matrix: string; row: number; col: number; role: "target" | "factor" | "done" }
  | { kind: "matrix-row"; matrix: string; row: number; role: "active" }
  | { kind: "matrix-col"; matrix: string; col: number; role: "active" }
  | { kind: "array-index"; array?: string; index: number; role: "active" | "compare" | "done" | "target" }
  | { kind: "tree-node"; node: string; role: "active" | "compare" | "done" | "target" }
  | { kind: "tree-edge"; from: string; to: string; role: "active" | "done" }
  | { kind: "graph-node"; node: string; role: "active" | "compare" | "done" | "target" }
  | { kind: "graph-edge"; from: string; to: string; role: "active" | "done" };

export type WalkthroughValueUpdate =
  | { kind: "matrix-cell"; matrix: string; row: number; col: number; value: MatrixValue }
  | { kind: "array-index"; array?: string; index: number; value: number | string }
  | {
      kind: "tree-node";
      node: string;
      value?: number | string;
      hidden?: boolean;
      mark?: "done" | null;
      left?: string | null;
      right?: string | null;
    }
  | { kind: "tree-root"; root: string }
  | { kind: "graph-node"; node: string; note?: string | null; mark?: "done" | null }
  | { kind: "graph-edge"; from: string; to: string; mark?: "done" | null };

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
