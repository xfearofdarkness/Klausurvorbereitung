<script lang="ts">
  import { onMount } from "svelte";
  import { downloadProgressFile, IMPORT_NOTICE_KEY, importProgressText } from "../lib/progressTransfer";

  let message = $state("");
  let errorMessage = $state("");

  onMount(() => {
    try {
      const notice = sessionStorage.getItem(IMPORT_NOTICE_KEY);
      if (!notice) return;
      message = notice;
      sessionStorage.removeItem(IMPORT_NOTICE_KEY);
    } catch {
      // Hinweis ist optional.
    }
  });

  async function upload(event: Event): Promise<void> {
    const input = event.currentTarget;
    if (!(input instanceof HTMLInputElement)) return;
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;
    const plan = importProgressText(await file.text());
    if (!plan.ok) {
      errorMessage = plan.error;
      message = "";
      return;
    }
    const notice = plan.changed
      ? "Stand übernommen. Bereits gesetzte Markierungen bleiben."
      : "Nichts Neues. Bereits gesetzte Markierungen bleiben.";
    if (!plan.changed) {
      errorMessage = "";
      message = notice;
      return;
    }
    try {
      sessionStorage.setItem(IMPORT_NOTICE_KEY, notice);
    } catch {
      // Reload zeigt den neuen Stand auch ohne Hinweis.
    }
    window.location.reload();
  }
</script>

<section class="backup" aria-label="Lernstand">
  <p class="backup-note">Lernstand sichern oder aus einer Datei übernehmen. Vorhandene Markierungen bleiben; die Datei füllt nur Lücken.</p>
  <div class="backup-actions">
    <button class="text-btn" type="button" onclick={downloadProgressFile}>Stand herunterladen</button>
    <label class="text-btn">
      Stand laden
      <input class="backup-file" type="file" accept="application/json,.json" onchange={upload} />
    </label>
  </div>
  {#if message}<p class="backup-status">{message}</p>{/if}
  {#if errorMessage}<p class="backup-error" role="alert">{errorMessage}</p>{/if}
</section>
