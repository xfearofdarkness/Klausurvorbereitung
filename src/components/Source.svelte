<script lang="ts">
  interface Props {
    source: string;
    className?: string;
  }

  let { source, className = "card-source" }: Props = $props();
</script>

{#if source}
  <div class={className}>{source}</div>
{/if}
