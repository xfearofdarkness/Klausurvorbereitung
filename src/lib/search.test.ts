import { describe, expect, it } from "vitest";
import { searchSubject } from "./search";
import type { Subject } from "../types/content";

const subject = {
  id: "laa",
  title: "LAA",
  subtitle: "",
  icon: "",
  features: {},
  topics: [
    {
      id: "integral",
      title: "Integralrechnung",
      icon: "",
      cards: [{ title: "Stammfunktion im Text", body: "Eine Erklärung.", tag: "", source: "Folie 1" }],
      flashcards: [
        { key: "andere", front: "Andere Frage", back: "Andere Antwort", source: "Folie 2" },
        { key: "stamm", front: "Was ist eine Stammfunktion?", back: "Eine Funktion F.", source: "Folie 3" }
      ],
      exercises: [],
      walkthroughs: []
    }
  ]
} satisfies Subject;

describe("Suche", () => {
  it("findet Karteikarten trotz Umlautfaltung und merkt sich die Position", () => {
    const hits = searchSubject(subject, "stammfunktion");
    const card = hits.find((hit) => hit.kind === "Karteikarte");
    expect(card?.flashIndex).toBe(1);
    expect(card?.mode).toBe("flash");
    expect(hits.some((hit) => hit.kind === "Lernen")).toBe(true);
  });

  it("liefert ohne Suchtext keine Treffer", () => {
    expect(searchSubject(subject, "   ")).toEqual([]);
  });
});
