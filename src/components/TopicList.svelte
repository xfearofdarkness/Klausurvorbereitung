<script lang="ts">
  import type { TopicProgressSummary } from "../lib/progress";
  import type { Topic } from "../types/content";

  interface Props {
    topics: Topic[];
    progress: TopicProgressSummary[];
    currentTopicIndex: number;
    onSelect: (index: number) => void;
  }

  let { topics, progress, currentTopicIndex, onSelect }: Props = $props();
</script>

<ol class="topic-list">
  {#each topics as topic, index (topic.id)}
    {@const summary = progress[index]}
    <li>
      <button
        class:active={index === currentTopicIndex}
        class="topic-item"
        type="button"
        aria-current={index === currentTopicIndex ? "true" : undefined}
        onclick={() => onSelect(index)}
      >
        <span class="topic-item-icon" aria-hidden="true">{topic.icon}</span>
        <span class="topic-item-title">{topic.title}</span>
        {#if summary && summary.total > 0}
          <span
            class:complete={summary.done === summary.total}
            class="topic-item-progress"
            aria-label={`${summary.done} von ${summary.total} erledigt`}
          >
            {summary.done}/{summary.total}
          </span>
        {/if}
      </button>
    </li>
  {/each}
</ol>
