(function () {
  const catalog = Array.isArray(window.APP_CATALOG) ? window.APP_CATALOG : [];
  const grid = document.getElementById("subjectGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML = catalog
    .map(
      (subject) => `
        <a class="card" href="trainer.html?subject=${encodeURIComponent(subject.id)}">
          <span class="icon">${subject.icon || "📘"}</span>
          <div>
            <div class="label">${subject.title}</div>
            <div class="semester">${subject.subtitle || ""}</div>
          </div>
        </a>
      `
    )
    .join("");
})();
