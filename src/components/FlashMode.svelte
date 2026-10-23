<script lang="ts">
  import { richText } from "../lib/richText";
  import Source from "./Source.svelte";
  import type { FlashMark, MarkState, Topic } from "../types/content";

  interface Props {
    topic: Topic;
    results: MarkState<FlashMark>;
    deck: number[];
    position: number;
    flipped: boolean;
    onFlip: () => void;
    onMark: (value: FlashMark) => void;
    onRestart: (onlyWrong?: boolean) => void;
  }

  let { topic, results, deck, position, flipped, onFlip, onMark, onRestart }: Props = $props();
  let knownCount = $derived(topic.flashcards.filter((flashcard) => results[flashcard.key] === "know").length);
  let repeatCount = $derived(topic.flashcards.filter((flashcard) => results[flashcard.key] === "repeat").length);
  let progress = $derived(deck.length ? (position / deck.length) * 100 : 0);
  let cardIndex = $derived(deck[position]);
  let card = $derived(topic.flashcards[cardIndex]);
</script>

<div class="fc-container fade-in">
  {#if deck.length === 0}
    <p class="empty-state">Für dieses Thema gibt es keine Karteikarten.</p>
  {:else if position >= deck.length}
    <div class="flash-summary">
      <div class="flash-summary-icon">🎯</div>
      <div class="flash-summary-title">Alle {deck.length} Karten durchgearbeitet</div>
      <div class="fc-score flash-summary-score">
        <span class="s-know">✓ {knownCount} gewusst</span>
        <span class="s-repeat">↻ {repeatCount} wiederholen</span>
      </div>
      <div class="flash-summary-actions">
        {#if repeatCount > 0}
          <button class="fc-btn" type="button" onclick={() => onRestart(true)}>Nur Schwächen</button>
        {/if}
        <button class="fc-btn" type="button" onclick={() => onRestart()}>Alle nochmal</button>
      </div>
    </div>
  {:else if card}
    <div class="fc-progress">
      <span class="fc-progress-count">{position + 1} / {deck.length}</span>
      <div class="fc-bar"><div class="fc-bar-fill" style={`width:${progress}%`}></div></div>
      <div class="fc-score">
        <span class="s-know">✓ {knownCount}</span>
        <span class="s-repeat">↻ {repeatCount}</span>
      </div>
    </div>
    <button class="fc-card-wrap" type="button" onclick={onFlip}>
      <div class:flipped class="fc-card">
        <div class="fc-face fc-front">
          <div class="fc-label">Frage</div>
          <div class="fc-text">{@html richText(card.front)}</div>
          <div class="fc-hint"><span class="hint-pointer">Klicken oder Leertaste zum Umdrehen</span><span class="hint-touch">Tippen zum Umdrehen</span></div>
        </div>
        <div class="fc-face fc-back">
          <div class="fc-label">Antwort</div>
          <div class="fc-text">{@html richText(card.back)}</div>
          <Source source={card.source} className="card-source fc-source" />
          <div class="fc-hint"><span class="hint-pointer">Klicken zum Zurückdrehen</span><span class="hint-touch">Tippen zum Zurückdrehen</span></div>
        </div>
      </div>
    </button>
    <div class="fc-controls">
      <button class="fc-btn fc-repeat" type="button" onclick={() => onMark("repeat")}>Wiederholen</button>
      <button class="fc-btn fc-know" type="button" onclick={() => onMark("know")}>Gewusst</button>
    </div>
  {/if}
</div>
