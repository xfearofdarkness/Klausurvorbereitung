<script lang="ts">
  import type { ModeConfig, ModeId } from "../types/content";

  interface Props {
    modes: ModeConfig[];
    currentMode: ModeId;
    onSelect: (mode: ModeId) => void;
  }

  let { modes, currentMode, onSelect }: Props = $props();
</script>

<div class="mode-switcher" id="modeSwitcher">
  {#each modes as mode}
    <button
      class:active={mode.id === currentMode}
      class="mode-btn"
      type="button"
      onclick={() => onSelect(mode.id)}
    >
      {mode.label}
    </button>
  {/each}
</div>
