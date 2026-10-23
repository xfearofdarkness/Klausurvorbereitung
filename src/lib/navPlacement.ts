export type NavPlacement = "left" | "right" | "top";

export const NAV_PLACEMENTS: NavPlacement[] = ["left", "right", "top"];

const STORAGE_KEY = "klausurtrainer-nav-placement";
const DEFAULT_PLACEMENT: NavPlacement = "left";

function isNavPlacement(value: unknown): value is NavPlacement {
  return typeof value === "string" && (NAV_PLACEMENTS as string[]).includes(value);
}

/** Bevorzugte Lage der Navigation auf breiten Bildschirmen; reine Ansichtseinstellung pro Browser. */
export function loadNavPlacement(): NavPlacement {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isNavPlacement(stored) ? stored : DEFAULT_PLACEMENT;
  } catch {
    return DEFAULT_PLACEMENT;
  }
}

export function saveNavPlacement(placement: NavPlacement): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, placement);
  } catch (error) {
    console.warn("Navigation placement could not be saved.", error);
  }
}
