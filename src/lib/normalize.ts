import type {
  Card,
  Exercise,
  Flashcard,
  RawCard,
  RawExercise,
  RawFlashcard,
  RawSubject,
  RawTopic,
  Subject,
  SubjectMeta,
  Topic
} from "../types/content";

export function normalizeSubject(rawSubject: RawSubject, subjectMeta: SubjectMeta): Subject {
  return {
    id: rawSubject.id || subjectMeta.id,
    title: rawSubject.title || subjectMeta.title,
    subtitle: rawSubject.subtitle || subjectMeta.subtitle || "",
    icon: rawSubject.icon || subjectMeta.icon || "📘",
    features: rawSubject.features && typeof rawSubject.features === "object" ? rawSubject.features : {},
    topics: Array.isArray(rawSubject.topics)
      ? rawSubject.topics.map((topic, index) => normalizeTopic(topic, index))
      : []
  };
}

function normalizeTopic(topic: RawTopic, index: number): Topic {
  const topicId = topic.id || slugify(topic.title || `thema-${index + 1}`);

  return {
    id: topicId,
    title: topic.title || `Thema ${index + 1}`,
    icon: topic.icon || "📘",
    cards: Array.isArray(topic.cards) ? topic.cards.map(normalizeCard) : [],
    flashcards: Array.isArray(topic.flashcards) ? topic.flashcards.map(normalizeFlashcard) : [],
    exercises: Array.isArray(topic.exercises) ? topic.exercises.map(normalizeExercise) : [],
    walkthroughs: Array.isArray(topic.walkthroughs) ? topic.walkthroughs : []
  };
}

function normalizeCard(card: RawCard): Card {
  return {
    title: card.title || "",
    body: card.body || "",
    tag: card.tag || "",
    source: card.source || ""
  };
}

function normalizeFlashcard(flashcard: RawFlashcard): Flashcard {
  return {
    key: flashcard.id,
    front: flashcard.front || "",
    back: flashcard.back || "",
    source: flashcard.source || ""
  };
}

function normalizeExercise(exercise: RawExercise): Exercise {
  return {
    key: exercise.id,
    task: exercise.task || "",
    ref: exercise.ref || "",
    note: exercise.note || "",
    source: exercise.source || "",
    ...(exercise.generator ? { generator: exercise.generator } : {})
  };
}

function slugify(value: string): string {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
