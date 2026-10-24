import { catalog } from "../src/data/catalog";
import { generateTask } from "../src/lib/exerciseGenerators";
import type { RawExercise, RawSubject, RawTopic, Walkthrough } from "../src/types/content";
import { loadRawSubject } from "./load_content";

export const SITE_ORIGIN = "https://learn.jamiehuta.com";
export const PUBLIC_FORMAT = 1;
const EXAMPLE_SEED = 1;
const SOURCES_MARKER = "sources/";

export interface PublicFile {
  fileName: string;
  body: string;
  contentType: string;
}

interface PublishedCard {
  title: string;
  body: string;
  tag?: string;
  source: string;
}

interface PublishedFlashcard {
  id: string;
  front: string;
  back: string;
  source: string;
}

interface PublishedExercise {
  id: string;
  ref: string;
  task?: string;
  note?: string;
  generator?: string;
  source: string;
  example?: { seed: number; task: string; solution: string };
}

interface PublishedTopic {
  id?: string;
  title: string;
  icon?: string;
  cards: PublishedCard[];
  flashcards: PublishedFlashcard[];
  exercises: PublishedExercise[];
  walkthroughs: Walkthrough[];
}

interface PublishedSubject {
  format: number;
  id: string;
  title: string;
  subtitle: string;
  icon?: string;
  features?: RawSubject["features"];
  topics: PublishedTopic[];
}

function exampleFor(exercise: RawExercise): PublishedExercise["example"] {
  if (!exercise.generator) return undefined;
  const generated = generateTask(exercise.generator, EXAMPLE_SEED);
  if (!generated) return undefined;
  return { seed: EXAMPLE_SEED, task: generated.task, solution: generated.solution };
}

function publishTopic(topic: RawTopic): PublishedTopic {
  return {
    ...(topic.id ? { id: topic.id } : {}),
    title: topic.title,
    ...(topic.icon ? { icon: topic.icon } : {}),
    cards: (topic.cards ?? []).map((card) => ({
      title: card.title ?? "",
      body: card.body ?? "",
      ...(card.tag ? { tag: card.tag } : {}),
      source: card.source ?? ""
    })),
    flashcards: (topic.flashcards ?? []).map((card) => ({
      id: card.id,
      front: card.front ?? "",
      back: card.back ?? "",
      source: card.source ?? ""
    })),
    exercises: (topic.exercises ?? []).map((exercise) => {
      const example = exampleFor(exercise);
      return {
        id: exercise.id,
        ref: exercise.ref ?? "",
        ...(exercise.task ? { task: exercise.task } : {}),
        ...(exercise.note ? { note: exercise.note } : {}),
        ...(exercise.generator ? { generator: exercise.generator } : {}),
        source: exercise.source ?? "",
        ...(example ? { example } : {})
      };
    }),
    walkthroughs: topic.walkthroughs ?? []
  };
}

function publishSubject(subject: RawSubject): PublishedSubject {
  return {
    format: PUBLIC_FORMAT,
    id: subject.id,
    title: subject.title,
    subtitle: subject.subtitle ?? "",
    ...(subject.icon ? { icon: subject.icon } : {}),
    ...(subject.features ? { features: subject.features } : {}),
    topics: subject.topics.map(publishTopic)
  };
}

function block(title: string, body: string, source: string): string[] {
  return [`#### ${title}`, "", body, "", `Quelle: ${source}`, ""];
}

function markdownFor(subject: PublishedSubject): string {
  const lines = [`# ${subject.title}`, "", subject.subtitle, ""];
  for (const topic of subject.topics) {
    lines.push(`## ${topic.title}`, "");
    if (topic.cards.length > 0) {
      lines.push("### Lernen", "");
      for (const card of topic.cards) lines.push(...block(card.title, card.body, card.source));
    }
    if (topic.flashcards.length > 0) {
      lines.push("### Karteikarten", "");
      for (const card of topic.flashcards) lines.push(...block(card.front, card.back, card.source));
    }
    if (topic.exercises.length > 0) {
      lines.push("### Üben", "");
      for (const exercise of topic.exercises) {
        const parts = [exercise.task, exercise.note].filter((part) => part);
        if (exercise.generator) parts.push(`Generator: ${exercise.generator}`);
        if (exercise.example) {
          parts.push(`Beispiel mit Seed ${exercise.example.seed}:`, exercise.example.task, `Lösung: ${exercise.example.solution}`);
        } else if (!exercise.task) {
          parts.push("Für diese Aufgabe liegt in der App keine hinterlegte Lösung.");
        }
        lines.push(...block(exercise.ref || exercise.id, parts.join("\n\n"), exercise.source));
      }
    }
    if (topic.walkthroughs.length > 0) {
      lines.push("### Abläufe", "");
      for (const walkthrough of topic.walkthroughs) {
        const steps = walkthrough.steps.map((step) => `**${step.title}**\n\n${step.text}`).join("\n\n");
        const body = [walkthrough.intro, steps].filter((part) => part).join("\n\n");
        lines.push(...block(walkthrough.title, body, walkthrough.source));
      }
    }
  }
  return `${lines.join("\n").trim()}\n`;
}

function llmsTxt(subjects: PublishedSubject[]): string {
  const lines = [
    "# Klausurvorbereitung",
    "",
    `> Statischer Klausurtrainer. Produktion: ${SITE_ORIGIN}`,
    "",
    "Die Dateien unter /content/ enthalten nur, was die App ausliefert: Lerntext, Karteikarten mit Rückseite, Aufgaben und, wo die App eine Lösung erzeugt, ein festes Beispiel mit Seed 1. Abläufe stehen im JSON vollständig, im Markdown als Schritttext. Vorlesungsfolien sind nicht enthalten.",
    "",
    "## Fächer",
    ""
  ];
  for (const subject of subjects) {
    const meta = catalog.find((entry) => entry.id === subject.id);
    lines.push(
      `- [${subject.title}](${SITE_ORIGIN}/content/${subject.id}.md): ${meta?.subtitle ?? subject.subtitle}. Maschinenlesbar: [JSON](${SITE_ORIGIN}/content/${subject.id}.json)`
    );
  }
  lines.push("", "## Index", "", `- [Fächerliste](${SITE_ORIGIN}/content/index.json)`, "");
  return `${lines.join("\n")}`;
}

function robotsTxt(): string {
  return [
    "User-agent: *",
    "Allow: /",
    "Allow: /llms.txt",
    "Allow: /content/",
    "",
    "# Inhalte für Agenten: /llms.txt",
    `Sitemap: ${SITE_ORIGIN}/sitemap.xml`,
    ""
  ].join("\n");
}

function sitemapXml(subjects: PublishedSubject[]): string {
  const urls = [`${SITE_ORIGIN}/llms.txt`, ...subjects.map((subject) => `${SITE_ORIGIN}/content/${subject.id}.md`)];
  const body = urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

/** Stabile Dateien für Agenten. Liest nur `content/`, nie `sources/`. */
export function buildPublicFiles(): PublicFile[] {
  const subjects = catalog.map((entry) => publishSubject(loadRawSubject(entry.id).subject));
  const index = {
    format: PUBLIC_FORMAT,
    site: SITE_ORIGIN,
    subjects: subjects.map((subject) => ({
      id: subject.id,
      title: subject.title,
      subtitle: subject.subtitle,
      markdown: `/content/${subject.id}.md`,
      json: `/content/${subject.id}.json`
    }))
  };
  const files: PublicFile[] = [
    { fileName: "llms.txt", body: llmsTxt(subjects), contentType: "text/plain; charset=utf-8" },
    { fileName: "content/index.json", body: `${JSON.stringify(index, null, 2)}\n`, contentType: "application/json; charset=utf-8" }
  ];
  for (const subject of subjects) {
    files.push({
      fileName: `content/${subject.id}.json`,
      body: `${JSON.stringify(subject, null, 2)}\n`,
      contentType: "application/json; charset=utf-8"
    });
    files.push({
      fileName: `content/${subject.id}.md`,
      body: markdownFor(subject),
      contentType: "text/markdown; charset=utf-8"
    });
  }
  files.push(
    { fileName: "robots.txt", body: robotsTxt(), contentType: "text/plain; charset=utf-8" },
    { fileName: "sitemap.xml", body: sitemapXml(subjects), contentType: "application/xml; charset=utf-8" }
  );
  for (const file of files) {
    if (file.body.includes(SOURCES_MARKER)) {
      throw new Error(`${file.fileName} enthält sources/ und wird nicht veröffentlicht.`);
    }
  }
  return files;
}
