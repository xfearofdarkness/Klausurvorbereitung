#!/usr/bin/env tsx

import { catalog, subjectLoaders } from "../src/data/catalog";
import { normalizeSubject } from "../src/lib/normalize";
import type {
  MatrixDefinition,
  RawSubject,
  Subject,
  SubjectId,
  Topic,
  Walkthrough,
  WalkthroughHighlight,
  WalkthroughValueUpdate
} from "../src/types/content";

let failed = false;
const DANGEROUS_HTML_PATTERNS = [
  { label: "script tag", pattern: /<\s*script\b/i },
  { label: "javascript URL", pattern: /javascript\s*:/i },
  { label: "inline event handler", pattern: /\son[a-z]+\s*=/i }
];

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
    validateHtmlField(`${topicLabel} card[${cardIndex}].body`, card.body);
    requireSource(topicLabel, "card", cardIndex, card.source);
  });

  topic.questions.forEach((question, questionIndex) => {
    if (!question.question || !question.answer) {
      fail(`${topicLabel} question[${questionIndex}] is missing question/answer.`);
    }
    validateHtmlField(`${topicLabel} question[${questionIndex}].question`, question.question);
    validateHtmlField(`${topicLabel} question[${questionIndex}].answer`, question.answer);
    requireSource(topicLabel, "question", questionIndex, question.source);
  });

  topic.exercises.forEach((exercise, exerciseIndex) => {
    if (!exercise.task) {
      fail(`${topicLabel} exercise[${exerciseIndex}] is missing task.`);
    }
    validateHtmlField(`${topicLabel} exercise[${exerciseIndex}].task`, exercise.task);
    validateHtmlField(`${topicLabel} exercise[${exerciseIndex}].note`, exercise.note);
    requireSource(topicLabel, "exercise", exerciseIndex, exercise.source);
  });

  topic.flashcards.forEach((flashcard, flashIndex) => {
    if (!flashcard.front || !flashcard.back) {
      fail(`${topicLabel} flashcard[${flashIndex}] is missing front/back.`);
    }
    validateHtmlField(`${topicLabel} flashcard[${flashIndex}].front`, flashcard.front);
    validateHtmlField(`${topicLabel} flashcard[${flashIndex}].back`, flashcard.back);
    requireSource(topicLabel, "flashcard", flashIndex, flashcard.source);
  });

  const walkthroughIds = new Set<string>();
  topic.walkthroughs.forEach((walkthrough, walkthroughIndex) => validateWalkthrough(topicLabel, walkthrough, walkthroughIndex, walkthroughIds));

  if (topic.questions.length === 0) {
    fail(`${topicLabel} has no questions.`);
  }

  if (topic.flashcards.length === 0) {
    fail(`${topicLabel} has no flashcards.`);
  }
}

function validateWalkthrough(topicLabel: string, walkthrough: Walkthrough, walkthroughIndex: number, walkthroughIds: Set<string>): void {
  const label = `${topicLabel} walkthrough[${walkthroughIndex}]`;

  if (!walkthrough.id || !walkthrough.title) {
    fail(`${label} is missing id/title.`);
  }
  if (walkthrough.id) {
    if (walkthroughIds.has(walkthrough.id)) {
      fail(`${label} has duplicate id "${walkthrough.id}".`);
    }
    walkthroughIds.add(walkthrough.id);
  }
  requireSource(topicLabel, "walkthrough", walkthroughIndex, walkthrough.source);
  validateHtmlField(`${label}.intro`, walkthrough.intro || "");

  if (!walkthrough.visual || !["matrix", "array"].includes(walkthrough.visual.kind)) {
    fail(`${label} has unsupported visual kind.`);
    return;
  }

  if (!Array.isArray(walkthrough.steps) || walkthrough.steps.length === 0) {
    fail(`${label} must contain at least one step.`);
    return;
  }

  validateWalkthroughVisual(label, walkthrough);

  walkthrough.steps.forEach((step, stepIndex) => {
    if (!step.title || !step.text) {
      fail(`${label} step[${stepIndex}] is missing title/text.`);
    }
    validateHtmlField(`${label} step[${stepIndex}].text`, step.text);
    step.highlights?.forEach((highlight, highlightIndex) => validateWalkthroughHighlight(label, walkthrough, stepIndex, highlight, highlightIndex));
    step.values?.forEach((update, updateIndex) => validateWalkthroughValue(label, walkthrough, stepIndex, update, updateIndex));
  });
}

function validateWalkthroughVisual(label: string, walkthrough: Walkthrough): void {
  if (walkthrough.visual.kind === "matrix") {
    if (!Array.isArray(walkthrough.visual.matrices) || walkthrough.visual.matrices.length === 0) {
      fail(`${label} matrix visual must contain at least one matrix.`);
      return;
    }

    const matrixIds = new Set<string>();
    walkthrough.visual.matrices.forEach((matrix, matrixIndex) => {
      const matrixLabel = `${label} visual.matrices[${matrixIndex}]`;
      if (!matrix.id || !matrix.label) {
        fail(`${matrixLabel} is missing id/label.`);
      }
      if (matrix.id) {
        if (matrixIds.has(matrix.id)) {
          fail(`${matrixLabel} has duplicate id "${matrix.id}".`);
        }
        matrixIds.add(matrix.id);
      }
      validateMatrixShape(matrixLabel, matrix);
    });
    return;
  }

  if (!Array.isArray(walkthrough.visual.values) || walkthrough.visual.values.length === 0) {
    fail(`${label} array visual must contain at least one value.`);
  }
}

function validateMatrixShape(label: string, matrix: MatrixDefinition): void {
  if (!Array.isArray(matrix.values) || matrix.values.length === 0) {
    fail(`${label}.values must contain at least one row.`);
    return;
  }

  const width = Array.isArray(matrix.values[0]) ? matrix.values[0].length : 0;
  if (width === 0) {
    fail(`${label}.values must contain at least one column.`);
  }

  matrix.values.forEach((row, rowIndex) => {
    if (!Array.isArray(row) || row.length !== width) {
      fail(`${label}.values[${rowIndex}] must be rectangular with width ${width}.`);
    }
  });
}

function validateWalkthroughHighlight(
  label: string,
  walkthrough: Walkthrough,
  stepIndex: number,
  highlight: WalkthroughHighlight,
  highlightIndex: number
): void {
  const highlightLabel = `${label} step[${stepIndex}].highlights[${highlightIndex}]`;
  if (walkthrough.visual.kind === "matrix") {
    if (highlight.kind === "array-index") {
      fail(`${highlightLabel} uses array highlight in matrix visual.`);
      return;
    }
    if (highlight.kind === "matrix-cell") {
      validateMatrixReference(highlightLabel, walkthrough.visual.matrices, highlight.matrix, highlight.row, highlight.col);
      return;
    }
    if (highlight.kind === "matrix-row") {
      validateMatrixReference(highlightLabel, walkthrough.visual.matrices, highlight.matrix, highlight.row, undefined);
      return;
    }
    if (highlight.kind === "matrix-col") {
      validateMatrixReference(highlightLabel, walkthrough.visual.matrices, highlight.matrix, undefined, highlight.col);
    }
    return;
  }

  if (highlight.kind !== "array-index") {
    fail(`${highlightLabel} uses matrix highlight in array visual.`);
    return;
  }
  validateArrayIndex(highlightLabel, walkthrough.visual.values.length, highlight.index);
}

function validateWalkthroughValue(
  label: string,
  walkthrough: Walkthrough,
  stepIndex: number,
  update: WalkthroughValueUpdate,
  updateIndex: number
): void {
  const updateLabel = `${label} step[${stepIndex}].values[${updateIndex}]`;
  if (walkthrough.visual.kind === "matrix") {
    if (update.kind !== "matrix-cell") {
      fail(`${updateLabel} uses array value in matrix visual.`);
      return;
    }
    validateMatrixReference(updateLabel, walkthrough.visual.matrices, update.matrix, update.row, update.col);
    return;
  }

  if (update.kind !== "array-index") {
    fail(`${updateLabel} uses matrix value in array visual.`);
    return;
  }
  validateArrayIndex(updateLabel, walkthrough.visual.values.length, update.index);
}

function validateMatrixReference(
  label: string,
  matrices: MatrixDefinition[],
  matrixId: string,
  row: number | undefined,
  col: number | undefined
): void {
  const matrix = matrices.find((entry) => entry.id === matrixId);
  if (!matrix) {
    fail(`${label} references unknown matrix "${matrixId}".`);
    return;
  }
  if (row !== undefined && (!Number.isInteger(row) || row < 0 || row >= matrix.values.length)) {
    fail(`${label} references invalid row ${row} in matrix "${matrixId}".`);
  }
  const width = matrix.values[0]?.length || 0;
  if (col !== undefined && (!Number.isInteger(col) || col < 0 || col >= width)) {
    fail(`${label} references invalid col ${col} in matrix "${matrixId}".`);
  }
}

function validateArrayIndex(label: string, length: number, index: number): void {
  if (!Number.isInteger(index) || index < 0 || index >= length) {
    fail(`${label} references invalid array index ${index}.`);
  }
}

function validateHtmlField(label: string, value: string): void {
  if (!value) return;
  for (const { label: patternLabel, pattern } of DANGEROUS_HTML_PATTERNS) {
    if (pattern.test(value)) {
      fail(`${label} contains unsafe HTML pattern: ${patternLabel}.`);
    }
  }
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
