import type { ContentTag, RawCard, RawExercise, RawFlashcard, RawSubject, RawTopic, SubjectId, Walkthrough } from "../src/types/content";

/** Eine Autorendatei aus `content/<fach-id>/`. */
export interface ContentFile {
  name: string;
  text: string;
}

export class ContentError extends Error {}

export const SUBJECT_FILE = "fach.md";
export const TOPIC_FILE_PATTERN = /^\d{2}-([a-z0-9-]+)\.md$/;

type EntryKind = "Karte" | "Frage" | "Aufgabe" | "Ablauf";

/** Erlaubte Felder je Eintragsart; Pflichtfelder stehen in REQUIRED_FIELDS. */
const ENTRY_FIELDS: Record<EntryKind, readonly string[]> = {
  Karte: ["tag", "quelle"],
  Frage: ["id", "quelle"],
  Aufgabe: ["id", "generator", "notiz", "quelle"],
  Ablauf: ["nach", "quelle"]
};
const REQUIRED_FIELDS: Record<EntryKind, readonly string[]> = {
  Karte: ["quelle"],
  Frage: ["id", "quelle"],
  Aufgabe: ["id", "quelle"],
  Ablauf: ["quelle"]
};
const SUBJECT_FIELDS = ["id", "title", "subtitle", "icon", "math"];
const TOPIC_FIELDS = ["id", "title", "icon"];
const HEADER_DELIMITER = "---";
const ENTRY_HEADING = /^## (Karte|Frage|Aufgabe|Ablauf): (.+)$/;
const FIELD_LINE = /^([a-z]+): (.*)$/;
const ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const WALKTHROUGH_BLOCK = /^```json\n([\s\S]*)\n```$/;
const WALKTHROUGH_OWN_FIELDS = ["title", "source", "afterCard"];

/**
 * Übersetzt die Autorendateien eines Fachs in die Fachdaten. Jede Abweichung vom Format
 * bricht mit Datei und Zeile ab, statt still falsche Daten zu erzeugen.
 */
export function compileSubject(subjectId: SubjectId, files: ContentFile[]): RawSubject {
  const subjectFile = files.find((file) => file.name === SUBJECT_FILE);
  if (!subjectFile) throw new ContentError(`content/${subjectId}: ${SUBJECT_FILE} fehlt.`);
  const header = parseHeader(subjectFile, `content/${subjectId}/${SUBJECT_FILE}`, SUBJECT_FIELDS);
  const subjectLabel = `content/${subjectId}/${SUBJECT_FILE}`;
  if (header.fields.id !== subjectId) throw new ContentError(`${subjectLabel}:2: id muss "${subjectId}" sein.`);
  if (subjectFile.text.split("\n").slice(header.end + 1).some((line) => line.trim())) {
    throw new ContentError(`${subjectLabel}:${header.end + 2}: ${SUBJECT_FILE} enthält nur den Kopfbereich.`);
  }

  const topicFiles = files.filter((file) => file.name !== SUBJECT_FILE).sort((a, b) => a.name.localeCompare(b.name));
  for (const file of topicFiles) {
    if (!TOPIC_FILE_PATTERN.test(file.name)) {
      throw new ContentError(`content/${subjectId}/${file.name}: Themendateien heißen "NN-<thema-id>.md".`);
    }
  }

  const subject: RawSubject = {
    id: subjectId,
    title: required(header.fields, "title", subjectLabel),
    ...(header.fields.subtitle ? { subtitle: header.fields.subtitle } : {}),
    ...(header.fields.icon ? { icon: header.fields.icon } : {}),
    ...(header.fields.math ? { features: { math: parseBoolean(header.fields.math, subjectLabel) } } : {}),
    topics: topicFiles.map((file) => compileTopic(file, `content/${subjectId}/${file.name}`))
  };
  return subject;
}

function compileTopic(file: ContentFile, label: string): RawTopic {
  const lines = file.text.split("\n");
  const header = parseHeader(file, label, TOPIC_FIELDS);
  const topicId = required(header.fields, "id", label);
  const fileTopicId = file.name.match(TOPIC_FILE_PATTERN)?.[1];
  if (topicId !== fileTopicId) throw new ContentError(`${label}:2: id "${topicId}" passt nicht zum Dateinamen.`);

  const topic: RawTopic = {
    id: topicId,
    title: required(header.fields, "title", label),
    ...(header.fields.icon ? { icon: header.fields.icon } : {}),
    cards: [],
    flashcards: []
  };

  let index = header.end + 1;
  while (index < lines.length) {
    if (!lines[index].trim()) {
      index += 1;
      continue;
    }
    const heading = lines[index].match(ENTRY_HEADING);
    if (!heading) fail(label, index, `Erwartet "## Karte|Frage|Aufgabe|Ablauf: …", gefunden: "${lines[index].slice(0, 60)}".`);
    const kind = heading![1] as EntryKind;
    const title = heading![2].trim();
    const headingLine = index;
    index += 1;

    const fields: Record<string, string> = {};
    while (index < lines.length && lines[index] !== "" && !lines[index].startsWith("## ")) {
      const field = lines[index].match(FIELD_LINE);
      if (!field) fail(label, index, `Feldzeile "name: wert" oder Leerzeile erwartet.`);
      const [, name, value] = field!;
      if (!ENTRY_FIELDS[kind].includes(name)) fail(label, index, `Feld "${name}" gibt es bei ${kind} nicht (erlaubt: ${ENTRY_FIELDS[kind].join(", ")}).`);
      if (name in fields) fail(label, index, `Feld "${name}" doppelt.`);
      if (!value.trim()) fail(label, index, `Feld "${name}" ist leer.`);
      fields[name] = value.trim();
      index += 1;
    }
    for (const name of REQUIRED_FIELDS[kind]) {
      if (!fields[name]) fail(label, headingLine, `${kind} "${title}" ohne Feld "${name}".`);
    }
    if (fields.id && !ID_PATTERN.test(fields.id)) fail(label, headingLine, `id "${fields.id}" darf nur a-z, 0-9 und - enthalten.`);

    const bodyLines: string[] = [];
    while (index < lines.length && !lines[index].startsWith("## ")) {
      bodyLines.push(lines[index]);
      index += 1;
    }
    const body = bodyLines.join("\n").trim();
    const entryLabel = `${label}:${headingLine + 1}`;

    if (kind === "Karte") {
      if (!body) throw new ContentError(`${entryLabel}: Karte "${title}" ohne Text.`);
      const card: RawCard = { title, body, ...(fields.tag ? { tag: fields.tag as ContentTag } : {}), source: fields.quelle };
      topic.cards!.push(card);
    } else if (kind === "Frage") {
      if (!body) throw new ContentError(`${entryLabel}: Frage "${title}" ohne Antwort.`);
      const flashcard: RawFlashcard = { id: fields.id, front: title, back: body, source: fields.quelle };
      topic.flashcards!.push(flashcard);
    } else if (kind === "Aufgabe") {
      if (!body && !fields.generator) throw new ContentError(`${entryLabel}: Aufgabe "${title}" braucht Text oder Feld "generator".`);
      if (body && fields.generator) throw new ContentError(`${entryLabel}: Aufgabe "${title}" hat Text und generator; nur eins von beiden.`);
      const exercise: RawExercise = {
        id: fields.id,
        ref: title,
        ...(body ? { task: body } : {}),
        ...(fields.generator ? { generator: fields.generator } : {}),
        ...(fields.notiz ? { note: fields.notiz } : {}),
        source: fields.quelle
      };
      (topic.exercises ||= []).push(exercise);
    } else {
      (topic.walkthroughs ||= []).push(compileWalkthrough(title, fields, body, entryLabel));
    }
  }
  return topic;
}

function compileWalkthrough(title: string, fields: Record<string, string>, body: string, label: string): Walkthrough {
  const block = body.match(WALKTHROUGH_BLOCK);
  if (!block) throw new ContentError(`${label}: Ablauf "${title}" braucht genau einen \`\`\`json-Block als Inhalt.`);
  let data: unknown;
  try {
    data = JSON.parse(block[1]);
  } catch (error) {
    throw new ContentError(`${label}: Ablauf "${title}": ungültiges JSON (${(error as Error).message}).`);
  }
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    throw new ContentError(`${label}: Ablauf "${title}": JSON muss ein Objekt sein.`);
  }
  for (const own of WALKTHROUGH_OWN_FIELDS) {
    if (own in data) throw new ContentError(`${label}: Ablauf "${title}": "${own}" steht in der Überschrift bzw. den Feldern, nicht im JSON.`);
  }
  const { id, ...rest } = data as Record<string, unknown>;
  return { id, title, ...(fields.nach ? { afterCard: fields.nach } : {}), source: fields.quelle, ...rest } as Walkthrough;
}

function parseHeader(file: ContentFile, label: string, allowed: string[]): { fields: Record<string, string>; end: number } {
  const lines = file.text.split("\n");
  if (lines[0] !== HEADER_DELIMITER) throw new ContentError(`${label}:1: Datei beginnt mit "${HEADER_DELIMITER}" und dem Kopfbereich.`);
  const end = lines.indexOf(HEADER_DELIMITER, 1);
  if (end < 0) throw new ContentError(`${label}:1: Kopfbereich wird nicht mit "${HEADER_DELIMITER}" geschlossen.`);
  const fields: Record<string, string> = {};
  for (let index = 1; index < end; index += 1) {
    const field = lines[index].match(FIELD_LINE);
    if (!field) fail(label, index, `Feldzeile "name: wert" erwartet.`);
    const [, name, value] = field!;
    if (!allowed.includes(name)) fail(label, index, `Feld "${name}" gibt es im Kopfbereich nicht (erlaubt: ${allowed.join(", ")}).`);
    fields[name] = value.trim();
  }
  return { fields, end };
}

function required(fields: Record<string, string>, name: string, label: string): string {
  if (!fields[name]) throw new ContentError(`${label}: Kopfbereich ohne "${name}".`);
  return fields[name];
}

function parseBoolean(value: string, label: string): boolean {
  if (value !== "true" && value !== "false") throw new ContentError(`${label}: math muss true oder false sein.`);
  return value === "true";
}

function fail(label: string, lineIndex: number, message: string): never {
  throw new ContentError(`${label}:${lineIndex + 1}: ${message}`);
}
