import type { ModeConfig } from "../types/content";

export const MODES: ModeConfig[] = [
  { id: "study", label: "Lernen", key: "cards" },
  { id: "quiz", label: "Fragen", key: "questions" },
  { id: "flash", label: "Karteikarten", key: "flashcards" },
  { id: "practice", label: "Üben", key: "exercises" },
  { id: "walkthrough", label: "Abläufe", key: "walkthroughs" }
];
