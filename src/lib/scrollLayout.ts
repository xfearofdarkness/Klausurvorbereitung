const SECTION_HASH = /^#abschnitt-(\d+)$/;
const REVEALED = ".study-block, .walk-card";

/** Id eines Lernabschnitts aus dem URL-Fragment, sonst nichts. */
export function sectionIdFromHash(hash: string): string | null {
  const match = SECTION_HASH.exec(hash);
  return match ? `abschnitt-${match[1]}` : null;
}

/**
 * `content-visibility` schätzt die Höhe übersprungener Blöcke. Für einen Sprung werden die Blöcke
 * bis zum Ziel einmal echt gelegt, dann gilt wieder die Schätzung (mit der gemessenen Höhe).
 */
export function scrollToSection(id: string): void {
  const target = document.getElementById(id);
  if (!target) return;
  const restore: Array<[HTMLElement, string]> = [];
  for (const block of document.querySelectorAll<HTMLElement>(REVEALED)) {
    restore.push([block, block.style.contentVisibility]);
    block.style.contentVisibility = "visible";
    if (block === target) break;
  }
  if (!restore.some(([block]) => block === target)) {
    restore.push([target, target.style.contentVisibility]);
    target.style.contentVisibility = "visible";
  }
  target.scrollIntoView({ block: "start" });
  requestAnimationFrame(() => {
    target.scrollIntoView({ block: "start" });
    for (const [block, value] of restore) block.style.contentVisibility = value;
  });
}

/** Nach dem Themen- oder Moduswechsel, wenn das neue Layout steht. */
export function scrollToStart(): void {
  window.scrollTo(0, 0);
  requestAnimationFrame(() => window.scrollTo(0, 0));
}
