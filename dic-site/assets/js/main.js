/* Design Innovation Centre, Panjab University: interactions */
(() => {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  let PROJECTS = window.DIC_PROJECTS || [];
  const PATENTS = window.DIC_PATENTS || [];
  const FEATURED_ID = "5"; // Bionic Prosthetic Arm: patented, grant-funded, clinically partnered

  const THEMES = {
    mdart: {
      name: "Medical Devices & Restorative Technologies", short: "Medical Devices", abbr: "MDaRT", color: "#2453C4",
      image: "assets/img/bionic_prosthetic_arm.png", contain: true,
      text: "Patient-specific cranial and maxillofacial implants, prosthetics, dental aligners and AI-assisted diagnosis. The theme combines biomedical engineering, materials science and digital healthcare, and works hand in hand with PGIMER, GMCH-32 and HSJIDS to take devices into clinical trials."
    },
    aet: {
      name: "AI Enabled Technologies", short: "AI Technologies", abbr: "AET", color: "#5A4CA8",
      image: "assets/img/AI_homePage.jpg",
      text: "Deep learning, computer vision, audio processing and drone intelligence applied to real-world problems, from surveillance drones to traffic systems and emotion-aware chatbots, deployed across web, mobile and cloud platforms."
    },
    energy: {
      name: "Energy Harvesting", short: "Energy Harvesting", abbr: "EH", color: "#4F7F42",
      image: "assets/img/energy_homePage.jpg",
      text: "Technologies that capture and manage ambient energy, from piezoelectric harvesters and solar rickshaws to a micro-grid test bed at UIET, with a focus on self-powered biomedical and sustainable devices."
    },
    ceramic: {
      name: "Transparent Ceramics & Devices", short: "Transparent Ceramics", abbr: "TCD", color: "#9A5B2E",
      image: "assets/img/TransparentCeramic.jpg",
      text: "Advanced ceramics with optical transparency for optics, defence and electronics: polycrystalline transparent ceramics, YAG and yttria nanopowders, and thin-film coatings, developed with PEC."
    }
  };
  // Ignore records whose theme is not one of the known themes, so lookups never hit a missing or inherited key.
  PROJECTS = PROJECTS.filter(p => Object.prototype.hasOwnProperty.call(THEMES, p.theme));
  const byTheme = k => PROJECTS.filter(p => p.theme === k);

  /* ---------- Header ---------- */
  const header = $(".header");
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 8);
  onScroll(); addEventListener("scroll", onScroll, { passive: true });

  const burger = $(".burger"), mnav = $("#mnav");
  const setMenu = open => { header.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu"); mnav.hidden = !open; };
  burger.addEventListener("click", () => setMenu(mnav.hidden));
  mnav.addEventListener("click", e => e.target.closest("a") && setMenu(false));

  const navLinks = $$(".nav a");
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle("on", a.hash === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => spy.observe(s));

  /* ---------- Numbers that come from the data ---------- */
  const STATS = {
    projects: PROJECTS.length,
    themes: Object.keys(THEMES).length,
    granted: PATENTS.filter(p => p.status === "Granted").length,
    patents: PATENTS.filter(p => p.status !== "Prototype").length
  };
  $$("[data-stat]").forEach(el => {
    el.textContent = STATS[el.dataset.stat];
    if (el.dataset.count) el.dataset.count = STATS[el.dataset.stat];
  });

  /* ---------- Count-up ---------- */
  const countObs = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count; countObs.unobserve(el);
    if (reduced) return;
    const t0 = performance.now();
    const tick = t => { const p = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString("en-IN"); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }), { threshold: .5 });
  $$("[data-count]").forEach(el => countObs.observe(el));

  /* ---------- Theme explorer ---------- */
  const tabs = $("#ex-tabs"), panel = $("#ex-panel");
  const keys = Object.keys(THEMES);
  tabs.innerHTML = keys.map((k, i) => `
    <button class="ex-tab" role="tab" id="tab-${k}" aria-controls="ex-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-k="${k}">
      <span class="ex-no">0${i + 1}</span>
      <span class="ex-name">${esc(THEMES[k].name)}<small>${byTheme(k).length} projects</small></span>
      <span class="ex-arrow" aria-hidden="true">→</span>
    </button>`).join("");

  const showTheme = k => {
    const t = THEMES[k], list = byTheme(k);
    const mentors = [...new Set(list.flatMap(p => p.mentors))];
    const top = [...list].sort((a, b) => (b.achievements.length - a.achievements.length)).slice(0, 4);
    $$(".ex-tab", tabs).forEach(b => { const on = b.dataset.k === k; b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1; });
    panel.setAttribute("aria-labelledby", "tab-" + k);
    panel.innerHTML = `
      <div class="ex-media ${t.contain ? "contain" : ""}"><img src="${t.image}" alt="" /><span class="ex-abbr">${t.abbr}</span></div>
      <div class="ex-body">
        <h3>${esc(t.name)}</h3>
        <p>${esc(t.text)}</p>
        <div class="ex-meta">
          <span><strong>${list.length}</strong>projects</span>
          <span><strong>${mentors.length}</strong>faculty mentors</span>
        </div>
        <p class="ex-list-title">Highlights</p>
        <ul class="ex-list">${top.map(p => `<li><button data-project="${esc(p.id)}"><span>${esc(p.title)}</span><span aria-hidden="true">↗</span></button></li>`).join("")}</ul>
        <div class="ex-all"><button class="btn btn-line btn-sm" data-go="${k}">See all ${list.length} projects →</button></div>
      </div>`;
  };
  tabs.addEventListener("click", e => { const b = e.target.closest(".ex-tab"); if (b) showTheme(b.dataset.k); });
  tabs.addEventListener("keydown", e => {
    const i = keys.indexOf($('[aria-selected="true"]', tabs).dataset.k);
    const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!d) return; e.preventDefault();
    const k = keys[(i + d + keys.length) % keys.length]; showTheme(k); $("#tab-" + k).focus();
  });
  showTheme("mdart");

  /* ---------- Projects ---------- */
  const PAGE = 9;
  const st = { theme: "all", q: "", shown: PAGE };
  const grid = $("#pgrid"), more = $("#pmore"), countEl = $("#pcount");

  $("#pfilters").innerHTML = [["all", "All work", PROJECTS.length, "#16181D"], ...keys.map(k => [k, THEMES[k].short, byTheme(k).length, THEMES[k].color])]
    .map(([k, l, n, c]) => `<button class="pill" data-f="${k}" aria-pressed="${k === "all"}">${k === "all" ? "" : `<span class="dot" style="background:${c}"></span>`}${esc(l)} <i>${n}</i></button>`).join("");

  const ordered = [...PROJECTS].sort((a, b) => (a.id === FEATURED_ID ? -1 : b.id === FEATURED_ID ? 1 : 0));
  const match = p => (st.theme === "all" || p.theme === st.theme) &&
    (!st.q || st.q.split(/\s+/).every(w => [p.title, p.summary, p.partners, ...p.mentors, ...p.team].join(" ").toLowerCase().includes(w)));

  const card = (p, feature) => {
    const t = THEMES[p.theme];
    return `
    <button class="pcard${feature ? " feature" : ""}" data-project="${esc(p.id)}">
      <div class="pcard-img">
        <span class="catno">No. ${esc(String(p.id).padStart(2, "0"))}</span>
        ${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy" />` : ""}
        <span class="pcard-theme"><span class="dot" style="background:${esc(t.color)}"></span>${esc(t.abbr)}${p.year ? " · " + esc(p.year) : ""}</span>
      </div>
      <div class="pcard-body">
        ${feature ? `<span class="feature-tag">Featured · Patent granted</span>` : ""}
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        <div class="pcard-foot"><span>${esc(p.partners || p.mentors.join(", "))}</span><span class="pcard-go" aria-hidden="true">↗</span></div>
      </div>
    </button>`;
  };

  const renderProjects = () => {
    const list = ordered.filter(match);
    const showFeature = st.theme === "all" && !st.q && list[0] && list[0].id === FEATURED_ID;
    grid.innerHTML = list.length ? list.slice(0, st.shown).map((p, i) => card(p, showFeature && i === 0)).join("")
      : `<p class="empty">Nothing matches “${esc(st.q)}”. Try another word or choose “All work”.</p>`;
    const n = Math.min(list.length, st.shown);
    countEl.textContent = `Showing ${n} of ${list.length} project${list.length === 1 ? "" : "s"}`;
    more.hidden = list.length <= st.shown;
    more.textContent = `Load more (${list.length - n})`;
  };
  const setFilter = k => {
    st.theme = k; st.shown = PAGE;
    $$("#pfilters .pill").forEach(b => b.setAttribute("aria-pressed", b.dataset.f === k));
    renderProjects();
  };
  $("#pfilters").addEventListener("click", e => { const b = e.target.closest(".pill"); if (b) setFilter(b.dataset.f); });
  let qt; $("#q").addEventListener("input", e => { clearTimeout(qt); qt = setTimeout(() => { st.q = e.target.value.trim().toLowerCase(); st.shown = PAGE; renderProjects(); }, 120); });
  more.addEventListener("click", () => { st.shown += PAGE; renderProjects(); });
  // Hide a project image that fails to load (replaces an inline onerror handler so a strict CSP can be used).
  document.addEventListener("error", e => { const t = e.target; if (t instanceof HTMLImageElement && t.closest(".pcard-img")) t.remove(); }, true);
  document.addEventListener("click", e => {
    const g = e.target.closest("[data-go]"); if (!g) return;
    e.preventDefault(); setFilter(g.dataset.go);
    $("#projects").scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  });
  renderProjects();

  /* ---------- Patent timeline ---------- */
  const ORDER = ["Granted", "Published", "Filed", "Prototype"];
  const patentTheme = t => /energy/i.test(t) ? "Energy Harvesting" : /AI/.test(t) ? "AI Enabled Technologies" : t;
  const yearOf = p => {
    const f = (p.filed || "").match(/(20\d\d)/); if (f) return f[1];
    const n = (p.number || "").match(/^(20\d\d)/); return n ? n[1] : "Undated";
  };
  const STATUS_KEYS = ["granted", "published", "filed", "prototype"];
  const statusKey = s => STATUS_KEYS.includes(String(s).toLowerCase()) ? String(s).toLowerCase() : "prototype";
  const ps = { status: "all" };
  const cnt = s => PATENTS.filter(p => p.status === s).length;
  $("#tfilters").innerHTML = [["all", "All patents", PATENTS.length], ...ORDER.filter(cnt).map(s => [s, s, cnt(s)])]
    .map(([k, l, n]) => `<button class="pill" data-s="${k}" aria-pressed="${k === "all"}">${l} <i>${n}</i></button>`).join("");

  const renderPatents = () => {
    const items = PATENTS.map((p, i) => ({ ...p, i, y: yearOf(p) })).filter(p => ps.status === "all" || p.status === ps.status);
    const years = [...new Set(items.map(p => p.y))].sort((a, b) => (a === "Undated") - (b === "Undated") || b.localeCompare(a));
    $("#timeline").innerHTML = years.map(y => `
      <div class="tl-year">
        <h3>${esc(y)}</h3>
        ${items.filter(p => p.y === y).map(p => `
          <button class="tl-item" data-patent="${p.i}">
            <span class="tl-thumb">${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy" />` : ""}</span>
            <span>
              <h4>${esc(p.title)}</h4>
              <small>${esc(patentTheme(p.theme))}</small>
              ${p.number ? `<small><code>${esc(p.number)}</code></small>` : ""}
            </span>
            <span class="status st-${statusKey(p.status)}">${esc(p.status)}</span>
          </button>`).join("")}
      </div>`).join("");
  };
  $("#tfilters").addEventListener("click", e => {
    const b = e.target.closest(".pill"); if (!b) return;
    ps.status = b.dataset.s; $$("#tfilters .pill").forEach(x => x.setAttribute("aria-pressed", x === b)); renderPatents();
  });
  renderPatents();
  $("#pnote").textContent = `${PATENTS.length} records: ` + ORDER.filter(cnt).map(s => `${cnt(s)} ${s.toLowerCase()}`).join(", ");

  /* ---------- Drawer ---------- */
  const drawer = $("#drawer"), dBody = $("#d-body"), dKicker = $("#d-kicker");
  let lastFocus;
  const fact = (k, v) => v ? `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>` : "";
  const ticks = (h, a) => a && a.length ? `<h3>${h}</h3><ul class="ticks">${a.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
  const openDrawer = (kicker, html) => {
    lastFocus = document.activeElement;
    dKicker.textContent = kicker; dBody.innerHTML = html; dBody.scrollTop = 0;
    drawer.showModal(); document.body.style.overflow = "hidden";
  };
  const openProject = id => {
    const p = PROJECTS.find(x => x.id === id); if (!p) return;
    openDrawer(THEMES[p.theme].name, `
      ${p.image ? `<div class="d-img"><img src="${esc(p.image)}" alt="" /></div>` : ""}
      <h2 id="d-title">${esc(p.title)}</h2>
      <p class="d-lede">${esc(p.summary)}</p>
      <dl class="d-facts">${fact("Mentors", p.mentors.join(", "))}${fact("Partners", p.partners)}${fact("Started", p.year)}${fact("Theme", THEMES[p.theme].abbr)}</dl>
      ${ticks("Applications", p.applications)}
      ${ticks("Achievements", p.achievements)}
      ${p.team.length ? `<h3>Research team</h3><ul class="chips">${p.team.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
      <button class="btn btn-brand d-cta" type="button" data-discuss="${esc(p.title)}">Discuss this project</button>`);
  };
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-project]"); if (b) openProject(b.dataset.project);
    const pt = e.target.closest("[data-patent]");
    const p = pt && PATENTS[+pt.dataset.patent];
    if (p) {
      openDrawer("Patent · " + p.status, `
        ${p.image ? `<div class="d-img"><img src="${esc(p.image)}" alt="" /></div>` : ""}
        <span class="status st-${statusKey(p.status)}">${esc(p.status)}</span>
        <h2 id="d-title" style="margin-top:14px">${esc(p.title)}</h2>
        <p class="d-lede">${esc(p.summary)}</p>
        <dl class="d-facts">${fact("Application / patent no.", p.number)}${fact("Filed", p.filed)}${fact("Granted", p.granted)}${fact("Theme", patentTheme(p.theme))}${fact("Inventors", p.inventors.join(", "))}</dl>
        ${p.purpose ? `<h3>Purpose</h3><p class="d-lede">${esc(p.purpose)}</p>` : ""}
        ${ticks("Key features", p.features)}
        ${ticks("Achievements", p.achievements)}
        <button class="btn btn-brand d-cta" type="button" data-discuss="${esc(p.title)}">Discuss this patent</button>`);
    }
    const dc = e.target.closest("[data-discuss]"); if (dc) discuss(dc.dataset.discuss);
  });
  [drawer, $("#lightbox")].forEach(d => {
    d.addEventListener("click", e => { if (e.target === d || e.target.closest("[data-close]")) d.close(); });
    d.addEventListener("close", () => { document.body.style.overflow = ""; lastFocus && lastFocus.focus(); });
  });

  /* ---------- Lightbox ---------- */
  const lb = $("#lightbox"), lbImg = $("#lb-img");
  $("#gallery").addEventListener("click", e => {
    const b = e.target.closest(".shot"); if (!b) return;
    const src = b.dataset.src;
    if (!/^assets\/img\/[\w.-]+$/.test(src)) return; // local gallery images only
    lastFocus = b; lbImg.src = src; lbImg.alt = $("img", b).alt;
    lb.showModal(); document.body.style.overflow = "hidden";
  });

  /* ---------- Contact form (opens the visitor's email app) ---------- */
  const form = $("#cform"), fs = $("#fstatus"), route = $("#route");
  const recipient = t => t === "Clinical partnership" ? "dic.mdart@gmail.com" : "dicuietpu@gmail.com";
  const updateRoute = () => { route.textContent = `Your message goes to ${recipient($('input[name="topic"]:checked', form).value)}`; };
  form.addEventListener("change", e => e.target.name === "topic" && updateRoute());
  updateRoute();

  const ERRORS = { name: "Add your name", email: "Add a valid email address", message: "Write a short message" };
  form.addEventListener("submit", e => {
    e.preventDefault();
    let ok = true;
    $$("[required]", form).forEach(f => {
      const v = f.value.trim() && (f.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
      const err = $("#err-" + f.name);
      f.closest(".f").classList.toggle("bad", !v); f.setAttribute("aria-invalid", !v);
      err.hidden = !!v; err.textContent = v ? "" : ERRORS[f.name];
      if (!v) ok = false;
    });
    if (!ok) { fs.className = "fstatus err"; fs.textContent = "Please fix the fields marked below."; $('[aria-invalid="true"]', form).focus(); return; }
    const d = Object.fromEntries(new FormData(form));
    const topics = $$('input[name="topic"]', form).map(i => i.value);
    const topic = topics.includes(d.topic) ? d.topic : topics[0];
    const to = recipient(topic);
    const body = `${d.message}\n\n${d.name}${d.org ? ", " + d.org : ""}\n${d.email}`;
    location.href = `mailto:${to}?subject=${encodeURIComponent("[DIC website] " + topic)}&body=${encodeURIComponent(body)}`;
    fs.className = "fstatus ok"; fs.textContent = `Your email app should open. If it does not, write to ${to} directly.`;
  });

  // "Discuss this ..." buttons: pick the licensing topic, note what it is about, and jump to the form.
  const discuss = about => {
    $('input[name="topic"][value="Industry partnership / licensing"]', form).checked = true;
    updateRoute();
    const msg = $("#f-msg"); if (about && !msg.value) msg.value = `About: ${about}\n\n`;
    lastFocus = null;
    if (drawer.open) drawer.close();
    $("#contact").scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    msg.focus({ preventScroll: true });
  };

  $("#year").textContent = new Date().getFullYear();
})();
