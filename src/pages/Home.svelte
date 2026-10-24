<script lang="ts">
  import { onMount } from "svelte";
  import ProgressBackup from "../components/ProgressBackup.svelte";
  import { catalog, subjectLoaders } from "../data/catalog";
  import { normalizeSubject } from "../lib/normalize";
  import { loadProgress } from "../lib/progress";
  import { countDueCards, todayIso } from "../lib/schedule";
  import type { SubjectId } from "../types/content";

  const progress = loadProgress();
  const lastSubjectId = progress.lastSubjectId || "";
  let dueCounts = $state<Partial<Record<SubjectId, number>>>({});

  onMount(() => {
    void Promise.all(
      catalog.map(async (meta) => {
        const loaded = await subjectLoaders[meta.id]();
        return [meta.id, countDueCards(normalizeSubject(loaded.default, meta), progress, todayIso())] as const;
      })
    ).then((entries) => {
      dueCounts = Object.fromEntries(entries);
    });
  });
</script>

<main class="home-shell">
  <h1 class="home-title">Klausurvorbereitung</h1>
  <p class="home-sub">Interaktive Klausurtrainer auf Basis der Vorlesungsfolien</p>
  <div class="grid" id="subjectGrid">
    {#each catalog as subject}
      <a class:is-last={subject.id === lastSubjectId} class="card" href={`trainer.html?subject=${encodeURIComponent(subject.id)}`}>
        <span class="icon" aria-hidden="true">{subject.icon || "📘"}</span>
        <div>
          <div class="label-row">
            <div class="label">{subject.title}</div>
            {#if subject.id === lastSubjectId}
              <span class="card-badge">Zuletzt</span>
            {/if}
          </div>
          <div class="semester">{subject.subtitle || ""}</div>
          {#if dueCounts[subject.id] !== undefined}
            <div class="due-count">Heute fällig: {dueCounts[subject.id]}</div>
          {/if}
        </div>
      </a>
    {/each}
  </div>
  <div class="home-foot">
    <ProgressBackup />
    <p class="footer">Hinweis: Lernseiten sind KI-generiert. Im Zweifel immer mit Folien und Originalunterlagen abgleichen.</p>
  </div>
</main>
