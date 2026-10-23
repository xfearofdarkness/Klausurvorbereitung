<script lang="ts">
  import { richText } from "../lib/richText";
  import Source from "./Source.svelte";
  import type { ContentTag, Topic } from "../types/content";

  interface Props {
    topic: Topic;
  }

  let { topic }: Props = $props();

  function tagLabel(tag: ContentTag): string {
    if (tag === "wichtig") return "Wichtig";
    if (tag === "formel") return "Formel";
    if (tag === "def") return "Definition";
    if (tag === "satz") return "Satz";
    if (tag === "beispiel") return "Beispiel";
    return "";
  }
</script>

{#each topic.cards as card}
  <div class="study-card fade-in">
    <h3>
      {card.title}
      {#if card.tag}
        <span class={`tag tag-${card.tag}`}>{tagLabel(card.tag)}</span>
      {/if}
    </h3>
    <div class="study-body">
      <p>{@html richText(card.body)}</p>
      <Source source={card.source} />
    </div>
  </div>
{/each}
