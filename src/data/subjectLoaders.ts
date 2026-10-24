import type { RawSubject, SubjectId } from "../types/content";

/** Nicht in `catalog.ts`: `vite.config.ts` importiert den Katalog, und der Config-Bundler löst `virtual:subject` nicht auf. */
export const subjectLoaders: Record<SubjectId, () => Promise<{ default: RawSubject }>> = {
  rabs: () => import("virtual:subject/rabs"),
  laa: () => import("virtual:subject/laa"),
  vs: () => import("virtual:subject/vs"),
  aud: () => import("virtual:subject/aud"),
  disma: () => import("virtual:subject/disma")
};
