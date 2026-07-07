<script lang="ts">
  import Source from "./Source.svelte";
  import type { ContentTag, Topic } from "../types/content";

  interface Props {
    topic: Topic;
  }

  let { topic }: Props = $props();

  function tagLabel(tag: ContentTag): string {
    if (tag === "wichtig") return "WICHTIG";
    if (tag === "formel") return "FORMEL";
    if (tag === "def") return "DEFINITION";
    if (tag === "satz") return "SATZ";
    if (tag === "beispiel") return "BEISPIEL";
    return "";
  }
</script>

<div class="section-title fade-in"><span class="emoji">{topic.icon}</span> {topic.title} – Lernseiten</div>

{#each topic.cards as card}
  <div class="study-card fade-in">
    <h3>
      {card.title}
      {#if card.tag}
        <span class={`tag tag-${card.tag}`}>{tagLabel(card.tag)}</span>
      {/if}
    </h3>
    <div class="study-body">
      <p data-math-content>{@html card.body}</p>
      <Source source={card.source} />
    </div>
  </div>
{/each}
