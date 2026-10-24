import type { ModeId, Subject, Topic, Walkthrough } from "../types/content";

const MAX_HITS = 30;

export interface SearchHit {
  topicIndex: number;
  topicTitle: string;
  mode: ModeId;
  kind: string;
  label: string;
  /** Index im Karteikartenstapel, wenn der Treffer eine Karte ist. */
  flashIndex?: number;
}

function fold(value: string): string {
  return value.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
}

function matches(query: string, text: string): boolean {
  const terms = fold(query).split(/\s+/).filter((term) => term.length > 0);
  if (terms.length === 0) return false;
  const folded = fold(text);
  return terms.every((term) => folded.includes(term));
}

function topicMode(topic: Topic): ModeId {
  if (topic.cards.length > 0 || topic.walkthroughs.length > 0) return "study";
  if (topic.flashcards.length > 0) return "flash";
  return "practice";
}

function walkthroughText(walkthrough: Walkthrough): string {
  const steps = walkthrough.steps.flatMap((step) => [
    step.title,
    step.text,
    step.formula,
    step.explanation?.action,
    step.explanation?.rule,
    step.explanation?.decision
  ]);
  return [walkthrough.title, walkthrough.intro, ...steps].filter((part) => part).join("\n");
}

/** Treffer über Lernkarten, Karteikarten, Aufgaben und Abläufe des geladenen Fachs. */
export function searchSubject(subject: Subject, query: string): SearchHit[] {
  const hits: SearchHit[] = [];
  const trimmed = query.trim();
  if (!trimmed) return hits;

  for (let topicIndex = 0; topicIndex < subject.topics.length; topicIndex += 1) {
    const topic = subject.topics[topicIndex];
    const push = (mode: ModeId, kind: string, label: string, text: string, flashIndex?: number): void => {
      if (hits.length >= MAX_HITS) return;
      if (!matches(trimmed, text)) return;
      hits.push({ topicIndex, topicTitle: topic.title, mode, kind, label, ...(flashIndex !== undefined ? { flashIndex } : {}) });
    };

    push(topicMode(topic), "Thema", topic.title, topic.title);
    for (const card of topic.cards) push("study", "Lernen", card.title, `${card.title}\n${card.body}`);
    topic.flashcards.forEach((card, index) => push("flash", "Karteikarte", card.front, `${card.front}\n${card.back}`, index));
    for (const exercise of topic.exercises) {
      const label = exercise.ref || exercise.task;
      push("practice", "Aufgabe", label, `${exercise.ref}\n${exercise.task}\n${exercise.note}`);
    }
    for (const walkthrough of topic.walkthroughs) {
      push("study", "Ablauf", walkthrough.title, walkthroughText(walkthrough));
    }
    if (hits.length >= MAX_HITS) break;
  }
  return hits;
}
