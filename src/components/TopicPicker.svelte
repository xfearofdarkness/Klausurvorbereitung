<script lang="ts">
  import Icon from "./Icon.svelte";
  import TopicList from "./TopicList.svelte";
  import type { TopicProgressSummary } from "../lib/progress";
  import type { Topic } from "../types/content";

  interface Props {
    subjectTitle: string;
    topics: Topic[];
    progress: TopicProgressSummary[];
    currentTopicIndex: number;
    onSelect: (index: number) => void;
  }

  let { subjectTitle, topics, progress, currentTopicIndex, onSelect }: Props = $props();
  let dialog: HTMLDialogElement;
  let currentTopic = $derived(topics[currentTopicIndex]);

  function open(): void {
    dialog.showModal();
    dialog.querySelector<HTMLElement>(".topic-item.active")?.scrollIntoView({ block: "nearest" });
  }

  function select(index: number): void {
    dialog.close();
    onSelect(index);
  }

  function closeOnBackdrop(event: MouseEvent): void {
    if (event.target === dialog) dialog.close();
  }
</script>

<button class="topic-picker" type="button" aria-haspopup="dialog" onclick={open}>
  <span class="topic-picker-text">
    <span class="topic-picker-subject">{subjectTitle} · Thema {currentTopicIndex + 1} von {topics.length}</span>
    <span class="topic-picker-title">{currentTopic?.title}</span>
  </span>
  <Icon name="chevronDown" />
</button>

<dialog class="topic-sheet" bind:this={dialog} aria-label="Themen" onclick={closeOnBackdrop}>
  <div class="topic-sheet-header">
    <span class="topic-sheet-title">{subjectTitle} · Themen</span>
    <button class="icon-btn" type="button" aria-label="Schließen" onclick={() => dialog.close()}>
      <Icon name="close" />
    </button>
  </div>
  <TopicList {topics} {progress} {currentTopicIndex} onSelect={select} />
</dialog>
