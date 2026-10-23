<script lang="ts">
  import WalkthroughCard from "./WalkthroughCard.svelte";
  import type { Topic } from "../types/content";

  interface Props {
    topic: Topic;
  }

  let { topic }: Props = $props();
</script>

{#if topic.walkthroughs.length === 0}
  <p class="empty-state">Für dieses Thema gibt es keine Abläufe.</p>
{:else}
  {#each topic.walkthroughs as walkthrough (walkthrough.id)}
    <WalkthroughCard {walkthrough} />
  {/each}
{/if}
