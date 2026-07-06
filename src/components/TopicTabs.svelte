<script lang="ts">
  import { onMount, tick } from "svelte";
  import type { Topic } from "../types/content";

  interface Props {
    topics: Topic[];
    currentTopicIndex: number;
    onSelect: (index: number) => void;
  }

  let { topics, currentTopicIndex, onSelect }: Props = $props();
  let tabs: HTMLDivElement;
  let tabsBar: HTMLDivElement;
  let scrollable = $state(false);
  let overflowLeft = $state(false);
  let overflowRight = $state(false);

  function updateTabsNav(): void {
    if (!tabs || !tabsBar) return;
    const maxScroll = tabs.scrollWidth - tabs.clientWidth;
    scrollable = maxScroll > 1;
    overflowLeft = scrollable && tabs.scrollLeft > 1;
    overflowRight = scrollable && tabs.scrollLeft < maxScroll - 1;
  }

  function scrollTabs(direction: number): void {
    if (!tabs) return;
    const distance = Math.max(tabs.clientWidth * 0.7, 120) * direction;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    tabs.scrollBy({ left: distance, behavior: reduceMotion ? "auto" : "smooth" });
  }

  function handleWheel(event: WheelEvent): void {
    if (!tabs || tabs.scrollWidth <= tabs.clientWidth) return;
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    event.preventDefault();
    tabs.scrollLeft += event.deltaY;
  }

  function selectTopic(index: number): void {
    onSelect(index);
    window.scrollTo(0, 0);
  }

  $effect(() => {
    currentTopicIndex;
    tick().then(() => {
      const activeTab = tabs?.querySelector(".tab.active");
      activeTab?.scrollIntoView({ block: "nearest", inline: "center" });
      updateTabsNav();
    });
  });

  onMount(() => {
    updateTabsNav();
    window.addEventListener("resize", updateTabsNav);
    return () => window.removeEventListener("resize", updateTabsNav);
  });
</script>

<div
  class:tabs-overflow-left={overflowLeft}
  class:tabs-overflow-right={overflowRight}
  class:is-scrollable={scrollable}
  class="tabs-bar"
  bind:this={tabsBar}
>
  <button class="tabs-nav tabs-nav-left" type="button" aria-label="Themen nach links blättern" onclick={() => scrollTabs(-1)}>‹</button>
  <div class="tabs-wrap" bind:this={tabs} onscroll={updateTabsNav} onwheel={handleWheel}>
    {#each topics as topic, index}
      <button
        class:active={index === currentTopicIndex}
        class="tab"
        type="button"
        onclick={() => selectTopic(index)}
      >
        {topic.icon} {topic.title}
      </button>
    {/each}
  </div>
  <button class="tabs-nav tabs-nav-right" type="button" aria-label="Themen nach rechts blättern" onclick={() => scrollTabs(1)}>›</button>
</div>
