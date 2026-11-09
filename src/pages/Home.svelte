<script lang="ts">
  import ProgressBackup from "../components/ProgressBackup.svelte";
  import { catalog } from "../data/catalog";
  import { subjectDataUrl } from "../data/subjectData";
  import { loadProgress } from "../lib/progress";
  import type { SubjectId } from "../types/content";

  const lastSubjectId = loadProgress().lastSubjectId || "";
  const prefetched = new Set<string>();

  function prefetchSubject(id: SubjectId): void {
    const href = subjectDataUrl(id);
    if (!href || prefetched.has(href)) return;
    prefetched.add(href);
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.as = "fetch";
    link.href = href;
    document.head.appendChild(link);
  }
</script>

<main class="home-shell">
  <h1 class="home-title">Klausurvorbereitung</h1>
  <p class="home-sub">Interaktive Klausurtrainer auf Basis der Vorlesungsfolien</p>
  <div class="grid" id="subjectGrid">
    {#each catalog as subject}
      <a
        class:is-last={subject.id === lastSubjectId}
        class="card"
        href={`trainer.html?subject=${encodeURIComponent(subject.id)}`}
        onpointerenter={() => prefetchSubject(subject.id)}
        onfocus={() => prefetchSubject(subject.id)}
        ontouchstart={() => prefetchSubject(subject.id)}
      >
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
  <div class="home-foot">
    <ProgressBackup />
    <p class="footer">Hinweis: Lernseiten sind KI-generiert. Im Zweifel immer mit Folien und Originalunterlagen abgleichen.</p>
  </div>
</main>
