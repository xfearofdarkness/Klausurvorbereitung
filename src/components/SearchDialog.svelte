<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "./Icon.svelte";
  import { searchSubject, type SearchHit } from "../lib/search";
  import type { Subject } from "../types/content";

  interface Props {
    subject: Subject;
    onSelect: (hit: SearchHit) => void;
  }

  const FOCUSABLE = "button:not([disabled]), input:not([disabled]), a[href]";

  let { subject, onSelect }: Props = $props();
  let open = $state(false);
  let query = $state("");
  let trigger = $state<HTMLButtonElement | null>(null);
  let panel = $state<HTMLDivElement | null>(null);
  let field = $state<HTMLInputElement | null>(null);
  let hits = $derived(searchSubject(subject, query));

  function openDialog(): void {
    open = true;
  }

  function closeDialog(): void {
    open = false;
    query = "";
    trigger?.focus();
  }

  function choose(hit: SearchHit): void {
    open = false;
    query = "";
    onSelect(hit);
  }

  function isTypingTarget(target: EventTarget | null): boolean {
    return target instanceof Element && Boolean(target.closest("input, textarea, select, [contenteditable]"));
  }

  function onWindowKey(event: KeyboardEvent): void {
    const key = event.key.toLowerCase();
    if ((event.metaKey || event.ctrlKey) && key === "k") {
      event.preventDefault();
      event.stopPropagation();
      if (open) closeDialog();
      else openDialog();
      return;
    }
    if (open || event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey || isTypingTarget(event.target)) return;
    event.preventDefault();
    event.stopPropagation();
    openDialog();
  }

  function onPanelKey(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      closeDialog();
      return;
    }
    if (event.key !== "Tab" || !panel) return;
    const items = [...panel.querySelectorAll<HTMLElement>(FOCUSABLE)];
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  $effect(() => {
    if (!open) return;
    field?.focus();
  });

  onMount(() => {
    window.addEventListener("keydown", onWindowKey);
    return () => window.removeEventListener("keydown", onWindowKey);
  });
</script>

<button
  class="search-trigger"
  type="button"
  bind:this={trigger}
  aria-label="Im Fach suchen"
  aria-haspopup="dialog"
  aria-expanded={open}
  aria-keyshortcuts="Control+K Meta+K /"
  onclick={openDialog}
>
  <Icon name="search" />
  <span class="search-trigger-label">Suchen</span>
</button>

{#if open}
  <div class="search-layer">
    <button class="search-backdrop" type="button" tabindex="-1" aria-label="Suche schließen" onclick={closeDialog}></button>
    <div
      class="search-dialog"
      role="dialog"
      tabindex="-1"
      aria-modal="true"
      aria-label="Im Fach suchen"
      bind:this={panel}
      onkeydown={onPanelKey}
    >
      <form role="search" onsubmit={(event) => event.preventDefault()}>
        <input
          bind:this={field}
          bind:value={query}
          type="search"
          aria-label="Suchbegriff"
          placeholder="Im Fach suchen"
        />
      </form>
      {#if query.trim()}
        {#if hits.length === 0}
          <p class="search-empty">Nichts gefunden.</p>
        {:else}
          <ul class="search-hits">
            {#each hits as hit}
              <li>
                <button class="search-hit" type="button" onclick={() => choose(hit)}>
                  <span class="search-hit-where">{hit.topicTitle} · {hit.kind}</span>
                  <span>{hit.label}</span>
                </button>
              </li>
            {/each}
          </ul>
        {/if}
      {/if}
    </div>
  </div>
{/if}
