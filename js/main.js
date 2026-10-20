/* Kunal Urkude portfolio — behaviour. Content lives in js/data.js. */
(() => {
  "use strict";
  const D = window.PORTFOLIO || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const thumb = id => `https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;

  $("#year").textContent = new Date().getFullYear();

  /* ---------- Theme ---------- */
  const themeBtn = $("#themeBtn");
  const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  const label = () => themeBtn.setAttribute("aria-label", isDark() ? "Switch to light theme" : "Switch to dark theme");
  label();
  themeBtn.addEventListener("click", () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    try { localStorage.setItem("ku-theme", root.dataset.theme); } catch (e) {}
    label();
  });

  /* ---------- Nav ---------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  const burger = $("#burger"), menu = $("#menu");
  const setMenu = open => { burger.setAttribute("aria-expanded", String(open)); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu"); menu.hidden = !open; };
  burger.addEventListener("click", () => setMenu(menu.hidden));
  $$("a", menu).forEach(a => a.addEventListener("click", () => setMenu(false)));
  const links = $$(".nav__links a");
  const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("is-current", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  ["ev", "teaching", "media", "design", "apps", "skills"].forEach(id => { const el = document.getElementById(id); if (el) spy.observe(el); });

  /* ---------- Hero load ---------- */
  if (document.visibilityState === "hidden" || reduce) root.classList.add("no-anim");
  requestAnimationFrame(() => root.classList.add("is-ready"));

  /* ---------- Render content ---------- */
  const vitem = v => `
    <div class="vitem" data-group="${esc(v.group || "")}">
      <button class="vcard" data-yt="${esc(v.id)}" data-title="${esc(v.title)}" aria-label="Play ${esc(v.title)}">
        <img src="${thumb(v.id)}" alt="" loading="lazy" decoding="async" /><span class="vcard__play"></span>
      </button>
      <div><p class="vitem__t">${esc(v.title)}</p>${v.note ? `<p class="vitem__n">${esc(v.note)}</p>` : ""}</div>
    </div>`;

  // Video portfolio with tabs
  const videos = D.videos || [];
  const groups = ["All", ...new Set(videos.map(v => v.group))];
  $("#videoTabs").innerHTML = groups.map((g, i) => `<button class="tab" role="tab" aria-selected="${i === 0}" data-g="${esc(g)}">${esc(g)}</button>`).join("");
  $("#videoGrid").innerHTML = videos.map(vitem).join("");
  $("#videoTabs").addEventListener("click", e => {
    const t = e.target.closest(".tab"); if (!t) return;
    $$(".tab").forEach(b => b.setAttribute("aria-selected", String(b === t)));
    $$("#videoGrid .vitem").forEach(it => it.classList.toggle("is-hidden", t.dataset.g !== "All" && it.dataset.group !== t.dataset.g));
  });
  $("#explainers").innerHTML = (D.explainers || []).map(vitem).join("");
  $("#aiVideos").innerHTML = (D.aiVideos || []).map(vitem).join("");

  // Design
  $("#logos").innerHTML = (D.logos || []).map(l => `<figure class="logo"><img src="${esc(l.src)}" alt="Logo for ${esc(l.text)}" loading="lazy" /><figcaption>${esc(l.text)}</figcaption></figure>`).join("");
  $("#posters").innerHTML = (D.posters || []).map(p => `<img src="assets/design/${esc(p)}.webp" alt="Poster design: ${esc(p.replace("poster-", "").replace(/-/g, " "))}" loading="lazy" />`).join("");
  $("#thumbs").innerHTML = (D.thumbnails || []).map(p => `<img src="assets/design/${esc(p)}.webp" alt="YouTube thumbnail: ${esc(p.replace("thumb-", "").replace(/-/g, " "))}" loading="lazy" />`).join("");

  // Apps, sites, robotics
  $("#appList").innerHTML = (D.apps || []).map(a => `<a class="app" href="${esc(a.url)}" target="_blank" rel="noopener"><span class="app__k">${esc(a.kind)}</span><strong>${esc(a.name)}</strong><span>${esc(a.text)}</span></a>`).join("");
  $("#siteList").innerHTML = (D.sites || []).map(s => `<a class="site" href="${esc(s.url)}" target="_blank" rel="noopener"><img src="${esc(s.img)}" alt="Screenshot of ${esc(s.name)}" loading="lazy" /><b>${esc(s.name)}</b><span>${esc(s.kind)}</span></a>`).join("");
  $("#robotics").innerHTML = (D.robotics || []).map(r => `<a href="${esc(r.url)}" target="_blank" rel="noopener"><b>${esc(r.name)}</b><span>${esc(r.text)}</span></a>`).join("");

  // Skills
  $("#skillList").innerHTML = (D.skills || []).map(g => `<div class="skillgrp"><h3>${esc(g.group)}</h3><ul>${g.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("");

  // Contact
  const C = D.contact || {};
  $("#mailBtn").href = "mailto:" + C.email;
  $("#mailBtn").textContent = "Email me";
  if (C.whatsapp) $("#waBtn").href = "https://wa.me/" + C.whatsapp; else $("#waBtn").remove();
  const soc = [["LinkedIn", C.linkedin], ["X", C.x], ["Instagram", C.instagram], ["YouTube", C.youtube], ["GitHub", C.github], [C.email, "mailto:" + C.email]];
  $("#socials").innerHTML = soc.filter(s => s[1]).map(([n, u]) => `<li><a href="${esc(u)}"${u.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${esc(n)}</a></li>`).join("");

  /* ---------- Video modal ---------- */
  const modal = $("#modal"), frame = $("#modalFrame");
  let last = null;
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-yt]"); if (!b) return;
    last = b;
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(b.dataset.yt)}?autoplay=1&rel=0" title="${esc(b.dataset.title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    $("#modalTitle").textContent = b.dataset.title || "";
    modal.showModal();
  });
  modal.addEventListener("close", () => { frame.innerHTML = ""; last?.focus(); });
  $("#modalClose").addEventListener("click", () => modal.close());
  modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

  /* ---------- Image lightbox ---------- */
  const lb = $("#lightbox"), lbImg = $("#lbImg");
  document.addEventListener("click", e => {
    const img = e.target.closest(".gallery img, .logo img, .posters img, .thumbs img"); if (!img) return;
    lbImg.src = img.currentSrc || img.src; lbImg.alt = img.alt; lb.showModal();
  });
  $("#lbClose").addEventListener("click", () => lb.close());
  lb.addEventListener("click", e => { if (e.target === lb || e.target === lbImg) lb.close(); });

  /* ---------- Reveals ---------- */
  $$(".head, .hats, .case, .case-notes, .strip3, .teach__item, .vgrid, .channel, .logos, .posters, .thumbs, .apps, .sites, .robo, .skills, .contact__card").forEach(el => el.classList.add("reveal"));
  if (reduce || document.visibilityState === "hidden" || !("IntersectionObserver" in window)) { $$(".reveal").forEach(el => el.classList.add("is-in")); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -6% 0px", threshold: .04 });
  $$(".reveal").forEach(el => io.observe(el));
})();
