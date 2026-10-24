<script lang="ts">
  import { richText } from "../lib/richText";
  import { walkthroughsAfterCards } from "../lib/walkthrough";
  import Source from "./Source.svelte";
  import WalkthroughCard from "./WalkthroughCard.svelte";
  import type { ContentTag, Topic } from "../types/content";

  interface Props {
    topic: Topic;
  }

  let { topic }: Props = $props();
  let placement = $derived(walkthroughsAfterCards(topic));

  function blockId(index: number): string {
    return `abschnitt-${index + 1}`;
  }

  function tagLabel(tag: ContentTag): string {
    if (tag === "wichtig") return "Wichtig";
    if (tag === "formel") return "Formel";
    if (tag === "def") return "Definition";
    if (tag === "satz") return "Satz";
    if (tag === "beispiel") return "Beispiel";
    return "";
  }
</script>

<article class="study-doc">
  {#each topic.cards as card, index (blockId(index))}
    <section class="study-block fade-in" class:study-wichtig={card.tag === "wichtig"} id={blockId(index)}>
      <h3>
        {card.title}
        {#if card.tag && card.tag !== "def"}
          <span class={`tag tag-${card.tag}`}>{tagLabel(card.tag)}</span>
        {/if}
      </h3>
      <div class="study-body">
        <p>{@html richText(card.body)}</p>
      </div>
      <Source source={card.source} className="card-source study-source" />
    </section>
    {#each placement.afterCard[index] || [] as walkthrough (walkthrough.id)}
      <WalkthroughCard {walkthrough} />
    {/each}
  {/each}

  {#each placement.atEnd as walkthrough (walkthrough.id)}
    <WalkthroughCard {walkthrough} />
  {/each}
</article>
