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
  let showMargin = $derived(topic.cards.length > 1);

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
  {#if showMargin}
    <nav class="study-toc" aria-label="Auf dieser Seite">
      <p class="study-toc-label">Auf dieser Seite</p>
      <ol>
        {#each topic.cards as card, index (blockId(index))}
          <li><a href={`#${blockId(index)}`}>{card.title}</a></li>
        {/each}
      </ol>
    </nav>
  {/if}
  {#each topic.cards as card, index (blockId(index))}
    <section
      class="study-block fade-in"
      class:study-block-first={showMargin && index === 0}
      class:study-def={card.tag === "def"}
      class:study-wichtig={card.tag === "wichtig"}
      id={blockId(index)}
    >
      <div class="study-main">
        <h3>
          {card.title}
          {#if card.tag && card.tag !== "def"}
            <span class={`tag tag-${card.tag}`}>{tagLabel(card.tag)}</span>
          {/if}
        </h3>
        <div class="study-body">
          <p>{@html richText(card.body)}</p>
        </div>
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
