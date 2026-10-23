import type { ModeConfig } from "../types/content";

export const MODES: ModeConfig[] = [
  { id: "study", label: "Lernen", shortLabel: "Lernen", icon: "book", key: "cards" },
  { id: "quiz", label: "Fragen", shortLabel: "Fragen", icon: "question", key: "questions" },
  { id: "flash", label: "Karteikarten", shortLabel: "Karten", icon: "cards", key: "flashcards" },
  { id: "practice", label: "Üben", shortLabel: "Üben", icon: "pencil", key: "exercises" },
  { id: "walkthrough", label: "Abläufe", shortLabel: "Abläufe", icon: "route", key: "walkthroughs" }
];
