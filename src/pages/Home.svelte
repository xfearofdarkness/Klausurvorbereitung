<script lang="ts">
  import ProgressBackup from "../components/ProgressBackup.svelte";
  import { catalog } from "../data/catalog";
  import { loadProgress } from "../lib/progress";

  const progress = loadProgress();
  const lastSubjectId = progress.lastSubjectId || "";
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
        </div>
      </a>
    {/each}
  </div>
  <ProgressBackup />
</main>
<footer class="footer">Hinweis: Lernseiten sind KI-generiert. Im Zweifel immer mit Folien und Originalunterlagen abgleichen.</footer>
