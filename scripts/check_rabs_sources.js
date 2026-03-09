#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DATA_PATH = "/Users/jamiehuta/Klausurvorbereitung/data/rabs.js";
const SOURCE_TEXT_PATH = "/tmp/rabs_sources.txt";

if (!fs.existsSync(SOURCE_TEXT_PATH)) {
  console.error(`ERROR: Source text dump not found at ${SOURCE_TEXT_PATH}`);
  process.exit(1);
}

const sourceText = fs.readFileSync(SOURCE_TEXT_PATH, "utf8");
const code = fs.readFileSync(DATA_PATH, "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(code, context);
const subject = context.window.APP_SUBJECTS.rabs;

const suspiciousPhrases = [
  "schnellste ipc",
  "kein kopieren nötig",
  "optimale mittlere wartezeit",
  "schnellere wiederherstellung",
  "vollständig, aber langsam"
];

let findings = 0;

for (const topic of subject.topics) {
  for (const question of topic.questions || []) {
    const text = `${question.q || question.question} ${question.a || question.answer}`.toLowerCase();
    for (const phrase of suspiciousPhrases) {
      if (text.includes(phrase) && !sourceText.toLowerCase().includes(phrase)) {
        console.log(`SUSPICIOUS QUESTION in ${topic.title}: "${question.q || question.question}" -> phrase "${phrase}" not found in sources`);
        findings += 1;
      }
    }
  }

  for (const card of topic.cards || []) {
    const text = `${card.t || card.title} ${card.b || card.body}`.toLowerCase();
    for (const phrase of suspiciousPhrases) {
      if (text.includes(phrase) && !sourceText.toLowerCase().includes(phrase)) {
        console.log(`SUSPICIOUS CARD in ${topic.title}: "${card.t || card.title}" -> phrase "${phrase}" not found in sources`);
        findings += 1;
      }
    }
  }
}

if (findings === 0) {
  console.log("OK: no suspicious phrases found with current heuristic.");
}
