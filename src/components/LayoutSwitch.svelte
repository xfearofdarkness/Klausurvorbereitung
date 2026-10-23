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
</script>

<div class="layout-switch" role="group" aria-label="Lage der Navigation">
  {#each NAV_PLACEMENTS as placement (placement)}
    <button
      class:active={placement === value}
      class="icon-btn icon-btn-small"
      type="button"
      aria-label={OPTIONS[placement].label}
      aria-pressed={placement === value}
      title={OPTIONS[placement].label}
      onclick={() => onChange(placement)}
    >
      <Icon name={OPTIONS[placement].icon} />
    </button>
  {/each}
</div>
