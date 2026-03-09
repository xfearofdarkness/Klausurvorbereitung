(function () {
  const STORAGE_KEY = "klausurtrainer-progress-v1";
  const catalog = Array.isArray(window.APP_CATALOG) ? window.APP_CATALOG : [];
  const grid = document.getElementById("subjectGrid");
  const progress = loadProgress();
  const lastSubjectId = progress.lastSubjectId || "";

  if (!grid) {
    return;
  }

  grid.innerHTML = catalog
    .map(
      (subject) => `
        <a class="card${subject.id === lastSubjectId ? " is-last" : ""}" href="trainer.html?subject=${encodeURIComponent(subject.id)}">
          <span class="icon">${subject.icon || "📘"}</span>
          <div>
            <div class="label-row">
              <div class="label">${subject.title}</div>
              ${subject.id === lastSubjectId ? '<span class="card-badge">Zuletzt</span>' : ""}
            </div>
            <div class="semester">${subject.subtitle || ""}</div>
          </div>
        </a>
      `
    )
    .join("");

  function loadProgress() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (error) {
      console.warn("Progress could not be restored.", error);
      return {};
    }
  }
})();
