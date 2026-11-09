import type { IconName } from "../lib/icons";

export type SubjectId = "rabs" | "laa" | "vs" | "aud" | "disma" | "dsv";

export type ModeId = "study" | "flash" | "practice";

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

/** Was der Build pro Fach als gehashte JSON-Datei ausliefert. */
export interface SubjectBundle {
  subject: RawSubject;
  /** Vorab gerendertes KaTeX-HTML je Formel, Schlüssel aus `src/lib/mathSyntax.ts`. */
  formulas: Record<string, string>;
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
  flashcards?: RawFlashcard[];
  exercises?: RawExercise[];
  walkthroughs?: Walkthrough[];
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  cards: Card[];
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

export interface RawFlashcard {
  /** Feste Id für den Lernfortschritt; einmal vergeben, nie ändern. */
  id: string;
  front?: string;
  back?: string;
  source?: string;
}

export interface Flashcard {
  /** Fortschritts-Schlüssel: die feste Id der Karte, unabhängig von Text und Listenposition. */
  key: string;
  front: string;
  back: string;
  source: string;
}

export interface RawExercise {
  /** Feste Id für den Lernfortschritt; einmal vergeben, nie ändern. */
  id: string;
  task?: string;
  ref?: string;
  note?: string;
  source?: string;
  /** Id eines generischen Rechenmodul-Generators (src/lib/generators/). */
  generator?: string;
}

export interface Exercise {
  key: string;
  task: string;
  ref: string;
  note: string;
  source: string;
  generator?: string;
}

export type WalkthroughRole = "active" | "compare" | "done" | "target" | "factor" | "result";

/** Rollen und abgeleitete Zustände, die eine Legende beschriften kann. */
export type WalkthroughLegendKey = WalkthroughRole | "changed" | "waiting";

export interface Walkthrough {
  id: string;
  title: string;
  source: string;
  intro?: string;
  /** Titel der Lernkarte, nach der der Ablauf im Modus „Lernen“ steht; ohne Angabe am Ende des Themas. */
  afterCard?: string;
  /** Eigene Legendenbeschriftung pro Rolle, wenn die Folien eine treffendere Bezeichnung nutzen. */
  legend?: Partial<Record<WalkthroughLegendKey, string>>;
  visual: MatrixVisual | ArrayVisual | TreeVisual | GraphVisual | TimelineVisual;
  steps: WalkthroughStep[];
}

export type WalkthroughVisualKind = "matrix" | "array" | "tree" | "graph" | "timeline";

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

/** Zeitleiste mit einer Spur pro Auftrag (z. B. Gantt-Diagramm beim Scheduling). */
export interface TimelineVisual {
  kind: "timeline";
  label?: string;
  /** Länge der Zeitachse in Einheiten; die Achse zeigt 0 bis length. */
  length: number;
  /** Einheit der Zeitachse, z. B. „ms“. */
  unit?: string;
  lanes: TimelineLane[];
  /** Beschriftung der Liste, die ein Schritt mit `timeline-queue` setzt, z. B. „Bereit“. */
  queueLabel?: string;
}

export interface TimelineLane {
  id: string;
  label: string;
  /** Zeitpunkt, ab dem die Spur Arbeit hat (Ankunft); ab hier ist offene Zeit als „wartet“ sichtbar. */
  start?: number;
  /** Gesamtdauer der Arbeit; ist sie erreicht, endet die Wartelinie. */
  duration?: number;
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
  note?: string;
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
  /** Benannte Zeiger unter Array-Zellen, z. B. die Laufvariablen i und j der Folien. */
  pointers?: WalkthroughPointer[];
  /** Beschriftete Bereiche über Array-Zellen, z. B. „sortiert“ oder „Suchbereich“. */
  ranges?: WalkthroughRange[];
  formula?: string;
  product?: string;
  sum?: string;
}

export interface WalkthroughPointer {
  array?: string;
  index: number;
  label: string;
}

export interface WalkthroughRange {
  array?: string;
  from: number;
  to: number;
  label: string;
  /** Zellen außerhalb aller fokussierten Bereiche werden abgeblendet. */
  focus?: boolean;
}

export interface WalkthroughStepExplanation {
  action?: string;
  rule?: string;
  decision?: string;
}

export type WalkthroughHighlight =
  | { kind: "matrix-cell"; matrix: string; row: number; col: number; role: "target" | "factor" | "done" | "compare" | "result" }
  | { kind: "matrix-row"; matrix: string; row: number; role: "active" }
  | { kind: "matrix-col"; matrix: string; col: number; role: "active" }
  | { kind: "array-index"; array?: string; index: number; role: "active" | "compare" | "done" | "target" | "result" }
  | { kind: "tree-node"; node: string; role: "active" | "compare" | "done" | "target" }
  | { kind: "tree-edge"; from: string; to: string; role: "active" | "done" }
  | { kind: "graph-node"; node: string; role: "active" | "compare" | "done" | "target" }
  | { kind: "graph-edge"; from: string; to: string; role: "active" | "done" }
  | { kind: "timeline-lane"; lane: string; role: "active" | "done" | "result" };

export type WalkthroughValueUpdate =
  | { kind: "matrix-cell"; matrix: string; row: number; col: number; value: MatrixValue }
  | { kind: "array-index"; array?: string; index: number; value: number | string }
  | {
      kind: "tree-node";
      node: string;
      value?: number | string;
      hidden?: boolean;
      note?: string | null;
      mark?: "done" | null;
      left?: string | null;
      right?: string | null;
    }
  | { kind: "tree-root"; root: string }
  | { kind: "graph-node"; node: string; note?: string | null; mark?: "done" | null }
  | { kind: "graph-edge"; from: string; to: string; mark?: "done" | null }
  /** Fügt der Spur einen Abschnitt hinzu; Abschnitte des aktuellen Schritts sind hervorgehoben. */
  | { kind: "timeline-segment"; lane: string; from: number; to: number }
  /** Setzt die Zeitmarke; bis hierhin ist die Zeitleiste sichtbar. */
  | { kind: "timeline-cursor"; at: number }
  /** Ersetzt die Liste neben der Zeitmarke (z. B. Bereitliste, vorne zuerst). */
  | { kind: "timeline-queue"; items: string[]; at?: number }
  /** Setzt die Notiz am Ende der Spur, z. B. ein Ergebnis. */
  | { kind: "timeline-note"; lane: string; text: string | null };

export interface ModeConfig {
  id: ModeId;
  label: string;
  /** Beschriftung für schmale Leisten (z. B. „Karten“ statt „Karteikarten“). */
  shortLabel: string;
  icon: IconName;
  /** Inhalte, von denen mindestens einer vorhanden sein muss, damit der Modus wählbar ist. */
  keys: Array<keyof Pick<Topic, "cards" | "flashcards" | "exercises" | "walkthroughs">>;
  /** Nomen im Hinweis, wenn der Modus leer ist, z. B. „Aufgaben“. */
  missing: string;
}

/** Markierungen des früheren Modus „Fragen“; nur noch für die Übernahme alter Stände. */
export type QuizMark = "correct" | "wrong";
export type FlashMark = "know" | "repeat";
export type PracticeMark = "done";

/** Nächster Termin einer Karteikarte. `due` ist ein lokales Datum JJJJ-MM-TT. */
export interface CardSchedule {
  due: string;
  interval: number;
  ease: number;
  reps: number;
}

/** Markierungen eines Themas, je Eintrag über dessen `key`. */
export type MarkState<T> = Record<string, T>;

export interface SubjectProgress {
  /** 4 = Fälligkeit je Karte, 3 = Fragen in Karteikarten überführt, 2 = Inhaltsschlüssel, 1 = Listenpositionen. */
  version?: number;
  /** Nur noch für die Übernahme alter Stände gelesen. */
  quiz?: Record<string, MarkState<QuizMark>>;
  flash: Record<string, MarkState<FlashMark>>;
  practice?: Record<string, MarkState<PracticeMark>>;
  schedule?: Record<string, Record<string, CardSchedule>>;
  ui?: {
    /** Kann aus älteren Ständen einen entfernten Modus enthalten. */
    lastMode?: ModeId | string;
    lastTopicId?: string;
    /** Nur noch für die Übernahme alter Stände gelesen. */
    lastTopicIndex?: number;
  };
}

export interface AppProgress {
  subjects: Partial<Record<SubjectId, SubjectProgress>>;
  lastSubjectId?: SubjectId;
}
