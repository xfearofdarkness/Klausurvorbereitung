<script lang="ts">
  import Icon from "./Icon.svelte";
  import { modeAccessName, modeAccessTitle } from "../lib/modes";
  import type { ModeConfig, ModeId } from "../types/content";

  interface Props {
    modes: ModeConfig[];
    availableModes: ModeConfig[];
    currentMode: ModeId;
    onSelect: (mode: ModeId) => void;
  }

  let { modes, availableModes, currentMode, onSelect }: Props = $props();
  let availableIds = $derived(new Set(availableModes.map((mode) => mode.id)));
</script>

<nav class="mode-bar" aria-label="Modus">
  {#each modes as mode (mode.id)}
    {@const available = availableIds.has(mode.id)}
    <button
      class:active={mode.id === currentMode}
      class:unavailable={!available}
      class="mode-btn"
      type="button"
      aria-label={modeAccessName(mode, available)}
      aria-current={mode.id === currentMode ? "true" : undefined}
      aria-disabled={available ? undefined : "true"}
      title={modeAccessTitle(mode, available)}
      onclick={() => {
        if (available) onSelect(mode.id);
      }}
    >
      <Icon name={mode.icon} />
      <span class="mode-label-long">{mode.label}</span>
      <span class="mode-label-short" aria-hidden="true">{mode.shortLabel}</span>
    </button>
  {/each}
</nav>
