import { describe, expect, it } from "vitest";
import { catalog } from "../src/data/catalog";
import { buildPublicFiles, PUBLIC_FORMAT, SITE_ORIGIN, topicModesLine } from "./publish_content";

describe("öffentliche Inhaltsdateien", () => {
  const files = buildPublicFiles();
  const byName = new Map(files.map((file) => [file.fileName, file.body]));

  it("veröffentlicht Index, llms.txt und je Fach JSON und Markdown", () => {
    expect(byName.has("llms.txt")).toBe(true);
    expect(byName.has("robots.txt")).toBe(true);
    expect(byName.has("sitemap.xml")).toBe(true);
    expect(byName.has("content/index.json")).toBe(true);
    for (const subject of catalog) {
      expect(byName.has(`content/${subject.id}.json`), subject.id).toBe(true);
      expect(byName.has(`content/${subject.id}.md`), subject.id).toBe(true);
    }
  });

  it("verweist auf die Produktionsseite und enthält keine sources/", () => {
    const llms = byName.get("llms.txt") ?? "";
    expect(llms).toContain(SITE_ORIGIN);
    expect(llms).toContain("/content/index.json");
    const index = JSON.parse(byName.get("content/index.json") ?? "{}") as { format: number; site: string; subjects: Array<{ id: string }> };
    expect(index.format).toBe(PUBLIC_FORMAT);
    expect(index.site).toBe(SITE_ORIGIN);
    expect(index.subjects.map((subject) => subject.id)).toEqual(catalog.map((subject) => subject.id));
    for (const body of byName.values()) {
      expect(body).not.toContain("sources/");
      expect(body).not.toContain("\u2014");
    }
    const robots = byName.get("robots.txt") ?? "";
    expect(robots).toContain("/llms.txt");
    expect(robots).toContain(`${SITE_ORIGIN}/sitemap.xml`);
    const sitemap = byName.get("sitemap.xml") ?? "";
    expect(sitemap).toContain(`${SITE_ORIGIN}/llms.txt`);
    for (const subject of catalog) expect(sitemap).toContain(`${SITE_ORIGIN}/content/${subject.id}.md`);
  });

  it("sagt je Thema, welche Modi es gibt", () => {
    expect(topicModesLine({ lernen: 2, karteikarten: 0, aufgaben: 3 })).toBe("Lernen: 2. Karteikarten: keine. Aufgaben: 3");
    expect(topicModesLine({ lernen: 0, karteikarten: 4, aufgaben: 0 })).toBe("Lernen: keine. Karteikarten: 4. Aufgaben: keine");
    const llms = byName.get("llms.txt") ?? "";
    expect(llms).toContain("Üben gibt es nur für Themen mit Aufgaben.");
    for (const subject of catalog) {
      const data = JSON.parse(byName.get(`content/${subject.id}.json`) ?? "{}") as {
        topics: Array<{ title: string; modes: string }>;
      };
      const markdown = byName.get(`content/${subject.id}.md`) ?? "";
      for (const topic of data.topics) {
        expect(topic.modes).toMatch(/^Lernen: (?:[1-9]\d*|keine)\. Karteikarten: (?:[1-9]\d*|keine)\. Aufgaben: (?:[1-9]\d*|keine)$/);
        expect(markdown).toContain(`## ${topic.title}\n\n${topic.modes}\n`);
      }
    }
    const rabs = JSON.parse(byName.get("content/rabs.json") ?? "{}") as { topics: Array<{ title: string; modes: string }> };
    expect(rabs.topics.find((topic) => topic.title === "Einordnung & Historie")?.modes).toContain("Aufgaben: keine");
    const disma = JSON.parse(byName.get("content/disma.json") ?? "{}") as { topics: Array<{ title: string; modes: string }> };
    expect(disma.topics.find((topic) => topic.title === "Aussagen- und Prädikatenlogik")?.modes).toMatch(/Aufgaben: [1-9]/);
  });
});
