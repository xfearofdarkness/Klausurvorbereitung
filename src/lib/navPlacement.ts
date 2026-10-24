export type NavPlacement = "left" | "right" | "top";

export const NAV_PLACEMENTS: NavPlacement[] = ["left", "right", "top"];

export const NAV_STORAGE_KEY = "klausurtrainer-nav-placement";
const DEFAULT_PLACEMENT: NavPlacement = "left";

function isNavPlacement(value: unknown): value is NavPlacement {
  return typeof value === "string" && (NAV_PLACEMENTS as string[]).includes(value);
}

/** Bevorzugte Lage der Navigation auf breiten Bildschirmen; reine Ansichtseinstellung pro Browser. */
export function loadNavPlacement(): NavPlacement {
  try {
    const stored = window.localStorage.getItem(NAV_STORAGE_KEY);
    return isNavPlacement(stored) ? stored : DEFAULT_PLACEMENT;
  } catch {
    return DEFAULT_PLACEMENT;
  }
}

export function saveNavPlacement(placement: NavPlacement): void {
  try {
    window.localStorage.setItem(NAV_STORAGE_KEY, placement);
  } catch (error) {
    console.warn("Navigation placement could not be saved.", error);
  }
}

export const SIDEBAR_COLLAPSED_KEY = "klausurtrainer-sidebar-collapsed";
export const SIDEBAR_COLLAPSED_VALUE = "1";

/** Ob die Seitenleiste eingeklappt ist; reine Ansichtseinstellung pro Browser. */
export function loadSidebarCollapsed(): boolean {
  try {
    return window.localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === SIDEBAR_COLLAPSED_VALUE;
  } catch {
    return false;
  }
}

export function saveSidebarCollapsed(collapsed: boolean): void {
  try {
    if (collapsed) window.localStorage.setItem(SIDEBAR_COLLAPSED_KEY, SIDEBAR_COLLAPSED_VALUE);
    else window.localStorage.removeItem(SIDEBAR_COLLAPSED_KEY);
  } catch (error) {
    console.warn("Sidebar state could not be saved.", error);
  }
}
