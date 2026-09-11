// Shared rendering helpers for index.html and app.html. Reads window.APPS from apps-data.js.

var STATUS_LABELS = {
  developing: "開発中",
  released: "公開中"
};

function statusLabel(status) {
  return STATUS_LABELS[status] || status;
}

function getApp(id) {
  return window.APPS.find(function (a) { return a.id === id; });
}

function escapeHtml(str) {
  var div = document.createElement("div");
  div.textContent = str == null ? "" : str;
  return div.innerHTML;
}

function appCardHtml(app) {
  var detailUrl = "app?id=" + encodeURIComponent(app.id);
  var storeBtn = app.storeUrl
    ? '<a class="btn btn-primary accent-' + app.accent + '" href="' + escapeHtml(app.storeUrl) + '">App Storeで見る</a>'
    : "";
  return (
    '<article class="app-card accent-' + app.accent + '">' +
      '<div class="app-card-top">' +
        '<a class="icon-link" href="' + detailUrl + '" aria-label="' + escapeHtml(app.name) + 'の詳細を見る">' +
          '<img class="app-icon" src="' + app.icon + '" alt="' + escapeHtml(app.name) + 'のアイコン">' +
        '</a>' +
        '<div class="app-card-name-wrap">' +
          '<a class="name-link" href="' + detailUrl + '">' + escapeHtml(app.name) + '</a>' +
          '<div><span class="status-pill">' + statusLabel(app.status) + '</span></div>' +
        '</div>' +
      '</div>' +
      '<p class="short-desc">' + escapeHtml(app.shortDescription) + '</p>' +
      '<div class="app-card-actions">' +
        '<a class="link-arrow" href="' + detailUrl + '">詳しく見る →</a>' +
        storeBtn +
      '</div>' +
    '</article>'
  );
}

function renderAppGrid(containerEl) {
  containerEl.innerHTML = window.APPS.map(appCardHtml).join("");
}

function otherAppCardHtml(app) {
  var detailUrl = "app?id=" + encodeURIComponent(app.id);
  return (
    '<a class="app-card accent-' + app.accent + '" href="' + detailUrl + '" style="text-decoration:none;">' +
      '<div class="app-card-top">' +
        '<img class="app-icon" src="' + app.icon + '" alt="' + escapeHtml(app.name) + 'のアイコン">' +
        '<div class="app-card-name-wrap">' +
          '<span class="name-link">' + escapeHtml(app.name) + '</span>' +
          '<div><span class="status-pill">' + statusLabel(app.status) + '</span></div>' +
        '</div>' +
      '</div>' +
      '<p class="short-desc">' + escapeHtml(app.shortDescription) + '</p>' +
    '</a>'
  );
}

function initReveal() {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
}

function initLightbox() {
  var lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  var imgEl = lightbox.querySelector("img");
  var captionEl = lightbox.querySelector(".lightbox-caption");
  var closeBtn = lightbox.querySelector(".lightbox-close");
  var lastFocused = null;

  function open(src, alt, caption) {
    lastFocused = document.activeElement;
    imgEl.src = src;
    imgEl.alt = alt || "";
    captionEl.textContent = caption || "";
    lightbox.hidden = false;
    closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.hidden = true;
    imgEl.src = "";
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll(".shot-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      open(btn.dataset.src, btn.dataset.alt, btn.dataset.caption);
    });
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) close();
  });
}
