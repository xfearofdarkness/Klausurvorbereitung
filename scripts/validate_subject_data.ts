#!/usr/bin/env tsx

import { catalog, subjectLoaders } from "../src/data/catalog";
import { normalizeSubject } from "../src/lib/normalize";
import type { RawSubject, Subject, SubjectId, Topic, Walkthrough } from "../src/types/content";

let failed = false;

function fail(message: string): void {
  console.error(`ERROR: ${message}`);
  failed = true;
}

async function loadSubject(subjectId: SubjectId): Promise<Subject | null> {
  const meta = catalog.find((entry) => entry.id === subjectId);
  const loader = subjectLoaders[subjectId];

  if (!meta || !loader) {
    fail(`Subject "${subjectId}" is not registered in catalog/loaders.`);
    return null;
  }

  const module = await loader();
  return normalizeSubject(module.default as RawSubject, meta);
}

function validateSubject(subjectId: SubjectId, subject: Subject | null): void {
  if (!subject || typeof subject !== "object") {
    fail(`Subject "${subjectId}" is missing or invalid.`);
    return;
  }

  if (!subject.id || subject.id !== subjectId) {
    fail(`Subject "${subjectId}" has missing or mismatching id.`);
  }

  if (!subject.title || typeof subject.title !== "string") {
    fail(`Subject "${subjectId}" is missing title.`);
  }

  if (!Array.isArray(subject.topics) || subject.topics.length === 0) {
    fail(`Subject "${subjectId}" must contain at least one topic.`);
    return;
  }

  const topicIds = new Set<string>();

  subject.topics.forEach((topic, topicIndex) => validateTopic(subjectId, topic, topicIndex, topicIds));

  if (!failed) {
    console.log(`OK: ${subjectId}`);
  }
}

function validateTopic(subjectId: SubjectId, topic: Topic, topicIndex: number, topicIds: Set<string>): void {
  const topicLabel = `subject "${subjectId}" topic[${topicIndex}]`;

  if (!topic.title || typeof topic.title !== "string") {
    fail(`${topicLabel} is missing title.`);
  }

  if (!topic.id || typeof topic.id !== "string") {
    fail(`${topicLabel} is missing id.`);
  } else if (topicIds.has(topic.id)) {
    fail(`${topicLabel} has duplicate id "${topic.id}".`);
  } else {
    topicIds.add(topic.id);
  }

  for (const key of ["cards", "questions", "flashcards", "exercises", "walkthroughs"] as const) {
    if (!Array.isArray(topic[key])) {
      fail(`${topicLabel} field "${key}" must be an array.`);
    }
  }

  topic.cards.forEach((card, cardIndex) => {
    if (!card.title || !card.body) {
      fail(`${topicLabel} card[${cardIndex}] is missing title/body.`);
    }
    requireSource(topicLabel, "card", cardIndex, card.source);
  });

  topic.questions.forEach((question, questionIndex) => {
    if (!question.question || !question.answer) {
      fail(`${topicLabel} question[${questionIndex}] is missing question/answer.`);
    }
    requireSource(topicLabel, "question", questionIndex, question.source);
  });

  topic.exercises.forEach((exercise, exerciseIndex) => {
    if (!exercise.task) {
      fail(`${topicLabel} exercise[${exerciseIndex}] is missing task.`);
    }
    requireSource(topicLabel, "exercise", exerciseIndex, exercise.source);
  });

  topic.flashcards.forEach((flashcard, flashIndex) => {
    if (!flashcard.front || !flashcard.back) {
      fail(`${topicLabel} flashcard[${flashIndex}] is missing front/back.`);
    }
    requireSource(topicLabel, "flashcard", flashIndex, flashcard.source);
  });

  topic.walkthroughs.forEach((walkthrough, walkthroughIndex) => validateWalkthrough(topicLabel, walkthrough, walkthroughIndex));

  if (topic.questions.length === 0) {
    fail(`${topicLabel} has no questions.`);
  }

  if (topic.flashcards.length === 0) {
    fail(`${topicLabel} has no flashcards.`);
  }
}

function validateWalkthrough(topicLabel: string, walkthrough: Walkthrough, walkthroughIndex: number): void {
  const label = `${topicLabel} walkthrough[${walkthroughIndex}]`;

  if (!walkthrough.id || !walkthrough.title) {
    fail(`${label} is missing id/title.`);
  }
  requireSource(topicLabel, "walkthrough", walkthroughIndex, walkthrough.source);

  if (!walkthrough.visual || !["matrix", "array"].includes(walkthrough.visual.kind)) {
    fail(`${label} has unsupported visual kind.`);
  }

  if (!Array.isArray(walkthrough.steps) || walkthrough.steps.length === 0) {
    fail(`${label} must contain at least one step.`);
    return;
  }

  walkthrough.steps.forEach((step, stepIndex) => {
    if (!step.title || !step.text) {
      fail(`${label} step[${stepIndex}] is missing title/text.`);
    }
  });
}

function requireSource(topicLabel: string, kind: string, index: number, source: string): void {
  if (!source || typeof source !== "string") {
    fail(`${topicLabel} ${kind}[${index}] is missing source.`);
  }
}

const requestedSubjectId = process.argv[2] as SubjectId | undefined;
const subjectIds = requestedSubjectId ? [requestedSubjectId] : catalog.map((entry) => entry.id);

for (const subjectId of subjectIds) {
  const subject = await loadSubject(subjectId);
  validateSubject(subjectId, subject);
}

if (failed) {
  process.exit(1);
}
