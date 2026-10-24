import { describe, expect, it } from "vitest";
import { addDays, countDueCards, orderByDue, reviewCard, todayIso } from "./schedule";
import type { AppProgress, Subject } from "../types/content";

const subject = {
  id: "laa",
  title: "LAA",
  subtitle: "",
  icon: "",
  features: {},
  topics: [
    {
      id: "funktionen",
      title: "Funktionen",
      icon: "",
      cards: [],
      flashcards: [
        { key: "karte-a", front: "A", back: "a", source: "" },
        { key: "karte-b", front: "B", back: "b", source: "" }
      ],
      exercises: [],
      walkthroughs: []
    }
  ]
} satisfies Subject;

describe("Karteikarten-Termine", () => {
  const today = "2026-10-24";

  it("setzt Nochmal auf heute und Gut auf steigende Abstände", () => {
    const again = reviewCard(undefined, "again", today);
    expect(again).toMatchObject({ due: today, interval: 0, reps: 0 });

    const first = reviewCard(undefined, "good", today);
    expect(first).toMatchObject({ due: "2026-10-25", interval: 1, reps: 1 });
    const second = reviewCard(first, "good", first.due);
    expect(second).toMatchObject({ due: addDays(first.due, 3), interval: 3, reps: 2 });
    const third = reviewCard(second, "good", second.due);
    expect(third.interval).toBe(Math.round(3 * second.ease));
    expect(third.due).toBe(addDays(second.due, third.interval));
  });

  it("verlängert Schwer kürzer als Gut und hält die Leichtigkeit über 1,3", () => {
    const hard = reviewCard({ due: today, interval: 10, ease: 1.4, reps: 3 }, "hard", today);
    expect(hard.interval).toBe(12);
    expect(hard.ease).toBe(1.3);
    expect(reviewCard(hard, "hard", today).ease).toBe(1.3);
  });

  it("zählt neue und fällige Karten und sortiert sie nach vorn", () => {
    const progress: AppProgress = {
      subjects: {
        laa: {
          version: 4,
          flash: {},
          schedule: { funktionen: { "karte-a": { due: "2026-11-01", interval: 4, ease: 2.5, reps: 2 } } }
        }
      }
    };
    expect(countDueCards(subject, progress, today)).toBe(1);
    expect(orderByDue([0, 1], (index) => (index === 0 ? progress.subjects.laa?.schedule?.funktionen["karte-a"] : undefined), today)).toEqual([1, 0]);
  });

  it("rechnet Tage über Monatsgrenzen", () => {
    expect(addDays("2026-10-31", 1)).toBe("2026-11-01");
    expect(todayIso(new Date(2026, 0, 2))).toBe("2026-01-02");
  });
});
