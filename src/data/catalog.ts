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
  }
] satisfies SubjectMeta[];

export const subjectLoaders: Record<SubjectId, () => Promise<{ default: import("../types/content").RawSubject }>> = {
  rabs: () => import("./subjects/rabs"),
  laa: () => import("./subjects/laa"),
  vs: () => import("./subjects/vs")
};
