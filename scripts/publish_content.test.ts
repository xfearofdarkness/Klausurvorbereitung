import { describe, expect, it } from "vitest";
import { catalog } from "../src/data/catalog";
import { buildPublicFiles, PUBLIC_FORMAT, SITE_ORIGIN } from "./publish_content";

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
});
