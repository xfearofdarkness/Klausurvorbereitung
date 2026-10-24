import type { SubjectId, SubjectMeta } from "../types/content";

export const catalog = [
  {
    "id": "rabs",
    "title": "RABS",
    "subtitle": "Rechnerarchitektur & Betriebssysteme",
    "icon": "🖥️"
  },
  {
    "id": "laa",
    "title": "LAA",
    "subtitle": "Lineare Algebra und Analysis",
    "icon": "📐"
  },
  {
    "id": "vs",
    "title": "VS",
    "subtitle": "Verteilte Systeme",
    "icon": "🌐"
  },
  {
    "id": "aud",
    "title": "AuD",
    "subtitle": "Algorithmen und Datenstrukturen",
    "icon": "🧮"
  }
] satisfies SubjectMeta[];

export const subjectLoaders: Record<SubjectId, () => Promise<{ default: import("../types/content").RawSubject }>> = {
  rabs: () => import("virtual:subject/rabs"),
  laa: () => import("virtual:subject/laa"),
  vs: () => import("virtual:subject/vs"),
  aud: () => import("virtual:subject/aud")
};
