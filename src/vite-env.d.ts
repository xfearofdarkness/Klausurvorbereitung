/// <reference types="svelte" />
/// <reference types="vite/client" />

/** Kompilierte Fachdaten aus `content/<fach-id>/` (scripts/vite_content_plugin.ts). */
declare module "virtual:subject/*" {
  const subject: import("./types/content").RawSubject;
  export default subject;
}
