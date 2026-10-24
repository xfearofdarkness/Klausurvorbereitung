/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** `1` leitet auf die neue Seite um. Eine lokale Origin nur für die Prüfung der Weiterleitung. */
  readonly VITE_PAGES_REDIRECT?: string;
}

/** Kompilierte Fachdaten aus `content/<fach-id>/` (scripts/vite_content_plugin.ts). */
declare module "virtual:subject/*" {
  const subject: import("./types/content").RawSubject;
  export default subject;
}
