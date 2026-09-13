// Shared rendering helpers for index.html and app.html. Reads window.APPS from apps-data.js.

var STATUS_LABELS = {
  preparing: "公開準備中",
  developing: "開発中",
  released: "公開中"
};

var PLATFORM_ICONS = {
  "iPhone":
    '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">' +
      '<rect x="4" y="1.25" width="8" height="13.5" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.4"/>' +
      '<path d="M7 12.4h2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' +
    '</svg>',
  "Apple Watch":
    '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">' +
      '<path d="M5.8 3.6 6.4 1h3.2l.6 2.6M5.8 12.4l.6 2.6h3.2l.6-2.6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<rect x="3.4" y="3.4" width="9.2" height="9.2" rx="2.8" fill="none" stroke="currentColor" stroke-width="1.4"/>' +
    '</svg>'
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

// Data strings may carry "\n" to mark the preferred line break in large headings.
function multiline(str) {
  return escapeHtml(str).replace(/\n/g, "<br>");
}

function detailUrl(app) {
  return "app?id=" + encodeURIComponent(app.id);
}

/* ---- Devices ----
 * Apple Watch screenshots are drawn at their real size relative to the iPhone ones:
 * a 44mm case is ~0.535x the width of an iPhone screen (see --watch-scale in site.css). */

function phoneHtml(src, alt, extraClass, eager) {
  return (
    '<span class="device device--phone' + (extraClass ? " " + extraClass : "") + '">' +
      '<img src="' + escapeHtml(src) + '" alt="' + escapeHtml(alt || "") + '"' + (eager ? "" : ' loading="lazy"') + '>' +
    '</span>'
  );
}

function watchHtml(src, alt, extraClass, eager) {
  return (
    '<span class="device device--watch' + (extraClass ? " " + extraClass : "") + '">' +
      '<span class="watch-screen">' +
        '<img src="' + escapeHtml(src) + '" alt="' + escapeHtml(alt || "") + '"' + (eager ? "" : ' loading="lazy"') + '>' +
      '</span>' +
    '</span>'
  );
}

// Layered visual: optional tilted back phone, the main phone, and an optional watch in front.
function stackHtml(stack, eager) {
  var html = "";
  if (stack.back) html += phoneHtml(stack.back, "", "stack__back", eager);
  html += phoneHtml(stack.main, "", "stack__main", eager);
  if (stack.watch) html += watchHtml(stack.watch, "", "stack__watch", eager);
  return (
    '<div class="stack' + (stack.back ? " has-back" : "") + (stack.watch ? " has-watch" : "") + '" aria-hidden="true">' +
      html +
    '</div>'
  );
}

/* ---- Small parts ---- */

function statusPillHtml(app) {
  return '<span class="status-pill">' + escapeHtml(statusLabel(app.status)) + '</span>';
}

function platformsHtml(app) {
  if (!app.platforms || !app.platforms.length) return "";
  return (
    '<ul class="platforms" aria-label="対応デバイス">' +
      app.platforms.map(function (p) {
        return '<li class="platform">' + (PLATFORM_ICONS[p] || "") + escapeHtml(p) + '</li>';
      }).join("") +
    '</ul>'
  );
}

function storeButtonHtml(app, btnClass) {
  if (!app.storeUrl) return "";
  return '<a class="btn ' + btnClass + '" href="' + escapeHtml(app.storeUrl) + '">App Storeで見る</a>';
}

// Selling points as chips: the highlight labels, or the feature titles for simpler apps.
function chipsHtml(app) {
  var labels = app.highlights
    ? app.highlights.map(function (h) { return h.label; })
    : (app.features || []).map(function (f) { return typeof f === "string" ? f : f.title; });
  if (!labels.length) return "";
  return '<ul class="chips">' + labels.map(function (l) { return '<li>' + escapeHtml(l) + '</li>'; }).join("") + '</ul>';
}

function sectionHeadHtml(eyebrow, title) {
  return (
    '<div class="section-head">' +
      '<p class="eyebrow">' + escapeHtml(eyebrow) + '</p>' +
      '<h2>' + escapeHtml(title) + '</h2>' +
    '</div>'
  );
}

/* ---- Top page ---- */

function appBandHtml(app, index) {
  var url = detailUrl(app);
  return (
    '<article class="app-band accent-' + app.accent + (index % 2 ? " app-band--reverse" : "") + ' reveal">' +
      '<div class="app-band__text">' +
        '<div class="app-id">' +
          '<img class="app-icon" src="' + escapeHtml(app.icon) + '" alt="">' +
          '<div>' +
            '<h3 class="app-id__name">' + escapeHtml(app.name) + '</h3>' +
            statusPillHtml(app) +
          '</div>' +
        '</div>' +
        '<p class="app-band__tagline">' + multiline(app.tagline) + '</p>' +
        '<p class="app-band__desc">' + escapeHtml(app.shortDescription) + '</p>' +
        chipsHtml(app) +
        '<div class="actions">' +
          '<a class="btn btn-accent" href="' + url + '">詳しく見る<span class="arrow" aria-hidden="true">→</span></a>' +
          storeButtonHtml(app, "btn-ghost") +
        '</div>' +
      '</div>' +
      (app.stack
        ? '<a class="app-band__visual" href="' + url + '" tabindex="-1" aria-hidden="true">' + stackHtml(app.stack) + '</a>'
        : "") +
    '</article>'
  );
}

function renderAppGrid(containerEl) {
  containerEl.innerHTML = window.APPS.map(appBandHtml).join("");
}

function renderDeveloperApps(containerEl) {
  containerEl.innerHTML = window.APPS.map(function (app) {
    return (
      '<a class="accent-' + app.accent + '" href="' + detailUrl(app) + '">' +
        '<img src="' + escapeHtml(app.icon) + '" alt="">' + escapeHtml(app.name) +
      '</a>'
    );
  }).join("");
}

/* ---- Detail page ---- */

function galleryItemHtml(shot) {
  var esc = escapeHtml;
  var frame = shot.frame === "watch" ? "watch" : "phone";
  var device = frame === "watch" ? watchHtml(shot.src, shot.alt) : phoneHtml(shot.src, shot.alt);
  return (
    '<figure class="gallery__item">' +
      '<button type="button" class="gallery__media shot-trigger" data-src="' + esc(shot.src) + '" data-alt="' + esc(shot.alt) +
        '" data-caption="' + esc(shot.caption) + '" data-frame="' + frame + '" aria-label="' + esc(shot.caption) + '（タップで拡大）">' +
        device +
      '</button>' +
      '<figcaption>' + esc(shot.caption) + '</figcaption>' +
    '</figure>'
  );
}

function planHtml(label, title, items, premium) {
  if (!items || !items.length) return "";
  return (
    '<div class="plan' + (premium ? " plan--premium" : "") + '">' +
      '<p class="plan__label">' + escapeHtml(label) + '</p>' +
      '<h3>' + escapeHtml(title) + '</h3>' +
      '<ul>' + items.map(function (i) { return '<li>' + escapeHtml(i) + '</li>'; }).join("") + '</ul>' +
    '</div>'
  );
}

function miniAppHtml(app) {
  return (
    '<a class="mini-app accent-' + app.accent + '" href="' + detailUrl(app) + '">' +
      '<img class="app-icon" src="' + escapeHtml(app.icon) + '" alt="">' +
      '<span class="mini-app__body">' +
        '<span class="mini-app__name">' + escapeHtml(app.name) + '</span>' +
        '<span class="mini-app__desc">' + escapeHtml(app.shortDescription) + '</span>' +
      '</span>' +
      '<span class="arrow" aria-hidden="true">→</span>' +
    '</a>'
  );
}

function pointsHtml(points) {
  if (!points || !points.length) return "";
  return (
    '<ul class="points">' +
      points.map(function (p) {
        if (typeof p === "string") return '<li>' + escapeHtml(p) + '</li>';
        return '<li><strong>' + escapeHtml(p.label) + '</strong>' + escapeHtml(p.text) + '</li>';
      }).join("") +
    '</ul>'
  );
}

var FLAME_SVG =
  '<svg viewBox="0 0 12 16" width="11" height="14" aria-hidden="true">' +
    '<path d="M6 0c.6 3 4.2 4.9 4.2 9.3a4.2 4.2 0 0 1-8.4 0c0-2.1 1-3.5 2.1-4.4.1 1.5.9 2.6 2 2.8C5.5 5 5.2 2.5 6 0z" fill="#ff9500"/>' +
  '</svg>';

// Illustration for the rest pass / skip / daily note row, drawn in the app's own status colors.
function keepGoingHtml() {
  var week = [["月", "done"], ["火", "done"], ["水", "rest"], ["木", "done"], ["金", "skip"], ["土", "done"], ["日", "today"]];
  return (
    '<div class="kg" aria-hidden="true">' +
      '<div class="kg-card">' +
        '<div class="kg-head">' +
          '<span class="kg-name">朝のストレッチ</span>' +
          '<span class="kg-streak">' + FLAME_SVG + '25日継続中</span>' +
        '</div>' +
        '<div class="kg-week">' +
          week.map(function (d) {
            return '<span class="kg-day"><small>' + d[0] + '</small><i class="kg-mark kg-mark--' + d[1] + '"></i></span>';
          }).join("") +
        '</div>' +
        '<div class="kg-legend">' +
          '<span><i class="kg-dot kg-dot--done"></i>実施</span>' +
          '<span><i class="kg-dot kg-dot--rest"></i>お休み券で継続</span>' +
          '<span><i class="kg-dot kg-dot--skip"></i>スキップ</span>' +
        '</div>' +
      '</div>' +
      '<div class="kg-float kg-float--ticket">' +
        '<i class="kg-mark kg-mark--rest"></i>' +
        '<span><b>お休み券 3 / 5</b><small>次の券まで あと4回達成</small></span>' +
      '</div>' +
      '<div class="kg-float kg-float--memo">' +
        '<small>水曜日のメモ</small>' +
        '<span class="kg-tags"><span class="kg-tag">体調が悪かった</span><span class="kg-tag">時間がなかった</span></span>' +
      '</div>' +
    '</div>'
  );
}

function highlightVisualHtml(v) {
  if (v.type === "duo") {
    return '<div class="duo">' + phoneHtml(v.phone.src, v.phone.alt) + watchHtml(v.watch.src, v.watch.alt) + '</div>';
  }
  if (v.type === "keep-going") return keepGoingHtml();
  return '<div class="solo">' + phoneHtml(v.src, v.alt) + '</div>';
}

function highlightHtml(h, index) {
  var esc = escapeHtml;
  return (
    '<div id="feature-' + (index + 1) + '" class="highlight' + (h.dark ? " highlight--dark" : "") + (index % 2 ? " highlight--reverse" : "") + ' reveal">' +
      '<div class="highlight__text">' +
        '<p class="eyebrow">' + esc(h.eyebrow) + '</p>' +
        '<h3 class="highlight__title">' + multiline(h.title) + '</h3>' +
        '<p class="highlight__lead">' + esc(h.text) + '</p>' +
        pointsHtml(h.points) +
        (h.note ? '<p class="highlight__note">' + esc(h.note) + '</p>' : "") +
      '</div>' +
      '<div class="highlight__visual">' + highlightVisualHtml(h.visual) + '</div>' +
    '</div>'
  );
}

function renderAppDetail(root) {
  var id = new URLSearchParams(location.search).get("id");
  var app = id ? getApp(id) : null;
  var esc = escapeHtml;

  if (!app) {
    root.innerHTML =
      '<section class="section container not-found">' +
        '<p>指定されたアプリが見つかりませんでした。</p>' +
        '<p><a class="btn btn-ghost" href="./#apps">アプリ一覧に戻る</a></p>' +
      '</section>';
    return;
  }

  document.title = app.name + " | 日々をつくるアプリ";
  var meta = document.getElementById("page-description");
  if (meta) meta.setAttribute("content", app.shortDescription);

  var accent = "accent-" + app.accent;

  var hero =
    '<section class="app-hero ' + accent + '">' +
      '<div class="container app-hero__inner">' +
        '<div class="app-hero__text reveal">' +
          '<a class="back-link" href="./#apps">← アプリ一覧</a>' +
          '<div class="app-id">' +
            '<img class="app-icon" src="' + esc(app.icon) + '" alt="' + esc(app.name) + 'のアイコン">' +
            '<div>' +
              '<h1 class="app-id__name">' + esc(app.name) + '</h1>' +
              statusPillHtml(app) +
            '</div>' +
          '</div>' +
          '<p class="app-hero__tagline">' + multiline(app.tagline) + '</p>' +
          '<p class="app-hero__desc">' + esc(app.description) + '</p>' +
          platformsHtml(app) +
          (app.storeUrl ? '<div class="actions">' + storeButtonHtml(app, "btn-accent") + '</div>' : "") +
        '</div>' +
        (app.stack ? '<div class="app-hero__visual reveal">' + stackHtml(app.stack, true) + '</div>' : "") +
      '</div>' +
    '</section>';

  var highlights = app.highlights || [];
  var highlightsHtml = highlights.length
    ? '<section class="section container ' + accent + '">' +
        sectionHeadHtml("Features", "主な機能") +
        '<ul class="feature-index">' +
          highlights.map(function (h, i) {
            return '<li><a href="#feature-' + (i + 1) + '">' + esc(h.label) + '</a></li>';
          }).join("") +
        '</ul>' +
        '<div class="highlights">' + highlights.map(highlightHtml).join("") + '</div>' +
      '</section>'
    : "";

  var features = highlights.length ? [] : app.features || [];
  // 3 columns for multiples of 3, otherwise 2 so the last row isn't left with a lone card.
  var cols = features.length % 3 === 0 ? 3 : (features.length % 2 === 0 ? 2 : 3);
  var featuresHtml = features.length
    ? '<section class="section container ' + accent + '">' +
        sectionHeadHtml("Features", "主な機能") +
        '<ol class="features" style="--cols:' + cols + '">' +
          features.map(function (f, i) {
            var title = typeof f === "string" ? f : f.title;
            var text = typeof f === "string" ? "" : f.text;
            return (
              '<li class="feature reveal">' +
                '<span class="feature__num">' + (i < 9 ? "0" : "") + (i + 1) + '</span>' +
                '<h3>' + esc(title) + '</h3>' +
                (text ? '<p>' + esc(text) + '</p>' : "") +
              '</li>'
            );
          }).join("") +
        '</ol>' +
      '</section>'
    : "";

  var shots = (app.screenshots || []).filter(function (x) { return !x.placeholder; });
  var galleryHtml = shots.length
    ? '<section class="section">' +
        '<div class="container section-head section-head--row">' +
          '<div><p class="eyebrow">Screenshots</p><h2>スクリーンショット</h2></div>' +
          '<div class="gallery-nav" hidden>' +
            '<button type="button" class="icon-btn" data-dir="-1" aria-label="前の画像へ">←</button>' +
            '<button type="button" class="icon-btn" data-dir="1" aria-label="次の画像へ">→</button>' +
          '</div>' +
        '</div>' +
        '<div class="gallery reveal" tabindex="0" aria-label="スクリーンショット一覧（横にスクロールできます）">' +
          shots.map(galleryItemHtml).join("") +
        '</div>' +
      '</section>'
    : "";

  var pricing = app.pricing || {};
  var plans = planHtml("Free", "無料プラン", pricing.free, false) + planHtml("Premium", "プレミアムプラン", pricing.premium, true);
  var noteHtml = pricing.note ? '<p class="plans-note">' + esc(pricing.note) + '</p>' : "";
  var pm = app.premium;
  var plansHtml = "";
  if (plans && pm) {
    plansHtml =
      '<section class="section container ' + accent + '">' +
        '<div class="premium reveal">' +
          '<div class="premium__head">' +
            '<p class="eyebrow">Premium</p>' +
            '<h2 class="highlight__title">' + multiline(pm.title) + '</h2>' +
            '<p class="highlight__lead">' + esc(pm.text) + '</p>' +
          '</div>' +
          (pm.plans
            ? '<ul class="plan-types">' +
                pm.plans.map(function (p) {
                  return '<li><strong>' + esc(p.name) + '</strong><span>' + esc(p.text) + '</span></li>';
                }).join("") +
              '</ul>'
            : "") +
          '<div class="plans">' + plans + '</div>' +
          noteHtml +
        '</div>' +
      '</section>';
  } else if (plans) {
    plansHtml =
      '<section class="section container ' + accent + '">' +
        sectionHeadHtml("Plans", "無料・有料機能") +
        '<div class="plans reveal">' + plans + '</div>' +
        noteHtml +
      '</section>';
  }

  var privacyHtml = app.privacyUrl
    ? '<section class="section container">' +
        '<div class="privacy-row reveal">' +
          '<div><p class="eyebrow">Privacy</p><h2>プライバシーポリシー</h2></div>' +
          '<a class="btn btn-ghost" href="' + esc(app.privacyUrl) + '">ポリシーを読む<span class="arrow" aria-hidden="true">→</span></a>' +
        '</div>' +
      '</section>'
    : "";

  var others = window.APPS.filter(function (a) { return a.id !== app.id; });
  var othersHtml = others.length
    ? '<section class="section container">' +
        sectionHeadHtml("More Apps", "ほかのアプリ") +
        '<div class="mini-apps">' + others.map(miniAppHtml).join("") + '</div>' +
      '</section>'
    : "";

  root.innerHTML = hero + highlightsHtml + featuresHtml + galleryHtml + plansHtml + privacyHtml + othersHtml;

  initGallery(root);
  initLightbox();
  initReveal();
}

/* ---- Behaviour ---- */

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

function initGallery(scope) {
  (scope || document).querySelectorAll(".gallery").forEach(function (gallery) {
    var nav = gallery.parentElement.querySelector(".gallery-nav");
    if (!nav) return;
    var prev = nav.querySelector('[data-dir="-1"]');
    var next = nav.querySelector('[data-dir="1"]');

    function step() {
      var item = gallery.querySelector(".gallery__item");
      var gap = parseFloat(getComputedStyle(gallery).columnGap) || 0;
      return item ? item.getBoundingClientRect().width + gap : gallery.clientWidth * 0.8;
    }
    function update() {
      var max = gallery.scrollWidth - gallery.clientWidth - 2;
      nav.hidden = max <= 0;
      prev.disabled = gallery.scrollLeft <= 2;
      next.disabled = gallery.scrollLeft >= max;
    }

    nav.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-dir]");
      if (btn) gallery.scrollBy({ left: Number(btn.dataset.dir) * step(), behavior: "smooth" });
    });
    gallery.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
}

function initLightbox() {
  var lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  var mediaEl = lightbox.querySelector(".lightbox-media");
  var captionEl = lightbox.querySelector(".lightbox-caption");
  var closeBtn = lightbox.querySelector(".lightbox-close");
  var lastFocused = null;

  function open(data) {
    lastFocused = document.activeElement;
    mediaEl.innerHTML = data.frame === "watch" ? watchHtml(data.src, data.alt, "", true) : phoneHtml(data.src, data.alt, "", true);
    captionEl.textContent = data.caption || "";
    lightbox.hidden = false;
    closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.hidden = true;
    mediaEl.innerHTML = "";
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll(".shot-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () { open(btn.dataset); });
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox || e.target === mediaEl) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) close();
  });
}
