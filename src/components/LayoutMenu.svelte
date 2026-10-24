<script lang="ts">
  import Icon from "./Icon.svelte";
  import type { IconName } from "../lib/icons";
  import { NAV_PLACEMENTS, type NavPlacement } from "../lib/navPlacement";

  interface Props {
    value: NavPlacement;
    onChange: (placement: NavPlacement) => void;
  }

  const OPTIONS: Record<NavPlacement, { icon: IconName; label: string }> = {
    left: { icon: "layoutLeft", label: "Navigation links" },
    right: { icon: "layoutRight", label: "Navigation rechts" },
    top: { icon: "layoutTop", label: "Navigation oben" }
  };

  let { value, onChange }: Props = $props();
  let open = $state(false);
  let root: HTMLDivElement;
  let trigger: HTMLButtonElement;

  function items(): HTMLButtonElement[] {
    return [...root.querySelectorAll<HTMLButtonElement>("[role='menuitemradio']")];
  }

  function show(): void {
    open = true;
    requestAnimationFrame(() => {
      const list = items();
      (list.find((item) => item.getAttribute("aria-checked") === "true") ?? list[0])?.focus();
    });
  }

  function hide(returnFocus: boolean): void {
    open = false;
    if (returnFocus) trigger.focus();
  }

  function choose(placement: NavPlacement): void {
    hide(true);
    if (placement !== value) onChange(placement);
  }

  function handleMenuKeydown(event: KeyboardEvent): void {
    const list = items();
    const index = list.indexOf(document.activeElement as HTMLButtonElement);
    if (event.key === "Escape" || event.key === "Tab") {
      if (event.key === "Escape") event.preventDefault();
      hide(event.key === "Escape");
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const step = event.key === "ArrowDown" ? 1 : -1;
      list[(index + step + list.length) % list.length]?.focus();
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      list[event.key === "Home" ? 0 : list.length - 1]?.focus();
    }
  }

  function handleWindowPointer(event: PointerEvent): void {
    if (open && !root.contains(event.target as Node)) hide(false);
  }
</script>

<svelte:window onpointerdown={handleWindowPointer} />

<div class="layout-menu" bind:this={root}>
  <button
    bind:this={trigger}
    class:active={open}
    class="icon-btn icon-btn-small"
    type="button"
    aria-label="Ansicht"
    aria-haspopup="menu"
    aria-expanded={open}
    title="Ansicht"
    onclick={() => (open ? hide(false) : show())}
  >
    <Icon name="layout" />
  </button>
  {#if open}
    <div class="layout-menu-list" role="menu" aria-label="Lage der Navigation" tabindex="-1" onkeydown={handleMenuKeydown}>
      {#each NAV_PLACEMENTS as placement (placement)}
        <button
          class="layout-menu-item"
          class:active={placement === value}
          type="button"
          role="menuitemradio"
          aria-checked={placement === value}
          tabindex="-1"
          onclick={() => choose(placement)}
        >
          <Icon name={OPTIONS[placement].icon} />
          <span>{OPTIONS[placement].label}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>
