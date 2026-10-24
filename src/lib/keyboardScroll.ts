const SCROLLABLE = ".katex-display, .walk-visual, .walk-data-table-wrap, .walk-array-scroll, .search-hits, table";

/** Macht überlaufende Bereiche per Tastatur erreichbar, ohne feste Tabstopps bei passendem Inhalt. */
export function keyboardScroll(node: HTMLElement): { destroy(): void } {
  const update = (): void => {
    for (const el of node.querySelectorAll<HTMLElement>(SCROLLABLE)) {
      const overflows = el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1;
      if (overflows) {
        el.tabIndex = 0;
        el.dataset.overflowTab = "1";
        continue;
      }
      if (el.dataset.overflowTab === "1") {
        el.removeAttribute("tabindex");
        delete el.dataset.overflowTab;
      }
    }
  };

  update();
  const frame = requestAnimationFrame(update);
  const resize = new ResizeObserver(update);
  resize.observe(node);
  const mutations = new MutationObserver(update);
  mutations.observe(node, { childList: true, subtree: true });

  return {
    destroy() {
      cancelAnimationFrame(frame);
      resize.disconnect();
      mutations.disconnect();
    }
  };
}
