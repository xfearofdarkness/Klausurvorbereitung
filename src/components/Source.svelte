<script lang="ts">
  import { formatSource } from "../lib/formatSource";

  interface Props {
    source: string;
    className?: string;
  }

  let { source, className = "card-source" }: Props = $props();
</script>

{#if source}
  <div class={className}>{formatSource(source)}</div>
{/if}
