<script lang="ts">
  import WalkthroughCard from "./WalkthroughCard.svelte";
  import type { Topic } from "../types/content";

  interface Props {
    topic: Topic;
  }

  let { topic }: Props = $props();
</script>

<div class="section-title fade-in"><span class="emoji">{topic.icon}</span> {topic.title} – Abläufe</div>

{#if topic.walkthroughs.length === 0}
  <p class="empty-state">Für dieses Thema gibt es keine Abläufe.</p>
{:else}
  {#each topic.walkthroughs as walkthrough (walkthrough.id)}
    <WalkthroughCard {walkthrough} />
  {/each}
{/if}
