<script lang="ts">
  import { catalog } from "../data/catalog";
  import { loadProgress } from "../lib/progress";

  const progress = loadProgress();
  const lastSubjectId = progress.lastSubjectId || "";
</script>

<main class="home-shell">
  <h1 class="home-title">📚 Klausurvorbereitung</h1>
  <p class="home-sub">Interaktive Trainer: Lernen, Fragen und Karteikarten</p>
  <div class="grid" id="subjectGrid">
    {#each catalog as subject}
      <a class:is-last={subject.id === lastSubjectId} class="card" href={`trainer.html?subject=${encodeURIComponent(subject.id)}`}>
        <span class="icon">{subject.icon || "📘"}</span>
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
</main>
<div class="footer">Hinweis: Lernseiten sind KI-generiert. Im Zweifel immer mit Folien und Originalunterlagen abgleichen.</div>
