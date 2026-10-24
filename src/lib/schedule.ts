import type { CardSchedule } from "../types/content";

export type ReviewGrade = "again" | "hard" | "good";

const START_EASE = 2.5;
const MIN_EASE = 1.3;
const HARD_FACTOR = 1.2;
const EASE_STEP = 0.15;

export function todayIso(now = new Date()): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function addDays(iso: string, days: number): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + days);
  return todayIso(date);
}

function easeAfter(previous: CardSchedule | undefined, grade: ReviewGrade): number {
  const base = previous?.ease ?? START_EASE;
  if (grade === "good") return base;
  return Math.max(MIN_EASE, Math.round((base - EASE_STEP) * 100) / 100);
}

/** SM-2, auf drei Bewertungen gekürzt. `again` bleibt heute fällig. */
export function reviewCard(previous: CardSchedule | undefined, grade: ReviewGrade, today: string): CardSchedule {
  const ease = easeAfter(previous, grade);
  if (grade === "again") {
    return { due: today, interval: 0, ease, reps: 0 };
  }
  const reps = (previous?.reps ?? 0) + 1;
  let interval = 1;
  if (grade === "hard") {
    interval = previous && previous.interval > 0 ? Math.max(1, Math.round(previous.interval * HARD_FACTOR)) : 1;
  } else if (reps === 1) {
    interval = 1;
  } else if (reps === 2) {
    interval = 3;
  } else {
    interval = Math.max((previous?.interval ?? 1) + 1, Math.round((previous?.interval ?? 1) * ease));
  }
  return { due: addDays(today, interval), interval, ease, reps };
}

/** Fällige Karten zuerst, danach Karten ohne Termin, danach spätere Termine. */
export function orderByDue(indices: number[], scheduleFor: (index: number) => CardSchedule | undefined, today: string): number[] {
  const rank = (schedule: CardSchedule | undefined): [number, string] => {
    if (!schedule) return [1, ""];
    if (schedule.due <= today) return [0, schedule.due];
    return [2, schedule.due];
  };
  return indices
    .map((index, order) => ({ index, order, rank: rank(scheduleFor(index)) }))
    .sort((a, b) => a.rank[0] - b.rank[0] || (a.rank[1] < b.rank[1] ? -1 : a.rank[1] > b.rank[1] ? 1 : 0) || a.order - b.order)
    .map((entry) => entry.index);
}
