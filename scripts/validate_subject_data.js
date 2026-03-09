#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exitCode = 1;
}

function loadSubjectData(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(code, context);
  return context.window.APP_SUBJECTS || {};
}

function validateSubject(subjectId, subject) {
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

  const topicIds = new Set();

  subject.topics.forEach((topic, topicIndex) => {
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

    for (const key of ["cards", "questions", "flashcards"]) {
      if (!Array.isArray(topic[key])) {
        fail(`${topicLabel} field "${key}" must be an array.`);
      }
    }

    topic.cards.forEach((card, cardIndex) => {
      if (!(card.title || card.t) || !(card.body || card.b)) {
        fail(`${topicLabel} card[${cardIndex}] is missing title/body.`);
      }

      if (!card.source || typeof card.source !== "string") {
        fail(`${topicLabel} card[${cardIndex}] is missing source.`);
      }
    });

    topic.questions.forEach((question, questionIndex) => {
      if (!(question.question || question.q) || !(question.answer || question.a)) {
        fail(`${topicLabel} question[${questionIndex}] is missing question/answer.`);
      }

      if (!question.source || typeof question.source !== "string") {
        fail(`${topicLabel} question[${questionIndex}] is missing source.`);
      }
    });

    topic.flashcards.forEach((flashcard, flashIndex) => {
      if (!flashcard.front || !flashcard.back) {
        fail(`${topicLabel} flashcard[${flashIndex}] is missing front/back.`);
      }

      if (!flashcard.source || typeof flashcard.source !== "string") {
        fail(`${topicLabel} flashcard[${flashIndex}] is missing source.`);
      }
    });

    if (topic.questions.length === 0) {
      fail(`${topicLabel} has no questions.`);
    }

    if (topic.flashcards.length === 0) {
      fail(`${topicLabel} has no flashcards.`);
    }
  });

  if (process.exitCode !== 1) {
    console.log(`OK: ${subjectId}`);
  }
}

const inputPath = process.argv[2];
const requestedSubjectId = process.argv[3];

if (!inputPath) {
  console.error("Usage: node scripts/validate_subject_data.js <data-file.js> [subject-id]");
  process.exit(1);
}

const subjects = loadSubjectData(path.resolve(inputPath));

if (requestedSubjectId) {
  validateSubject(requestedSubjectId, subjects[requestedSubjectId]);
} else {
  Object.entries(subjects).forEach(([subjectId, subject]) => validateSubject(subjectId, subject));
}
