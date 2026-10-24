/* =====================================================================
   EDIT THIS BLOCK ONLY. Everything on the page is generated from it.
   - Leave a link as "" and the page shows a dashed "add link" placeholder.
   - Text in [square brackets] is placeholder copy: replace it with yours.
   ===================================================================== */
const SITE = {
  name: "Samer Themri",
  handle: "L3FR1T",
  photo: "photo.jpg",   // your photo file in the repository; change the name here if you upload a different one
  status: "Open to connecting with researchers, CTF players and security professionals",
  availability: "Always open to connecting with cybersecurity researchers, fellow CTF players and professionals who share a passion for reverse engineering, digital investigations and information security.",
  categories: ["Digital Forensics", "Reverse Engineering"],   // write-up filters
  links: {
    github: "https://github.com/samerthemri-hub",
    linkedin: "https://www.linkedin.com/in/samer-themri-977639438",
    email: "",       // e.g. "you@example.com"
    ctftime: ""      // optional
  },
  about: [
    "I am Samer Themri, a software engineering student at INSAT with a strong passion for cybersecurity, low-level systems and digital investigation. Driven by curiosity and a problem-solving mindset, I enjoy exploring the inner workings of software, uncovering hidden vulnerabilities and understanding how systems behave beneath the surface.",
    "My interests sit at the intersection of reverse engineering and digital forensics, where every binary, memory dump and network packet is a new chance to investigate, analyze and uncover the truth. I combine analytical thinking with hands-on experimentation to understand how security mechanisms work, where they fail and how they can be strengthened.",
    "As an active CTF player, I keep challenging myself with practical security problems that push my technical ability, creativity and persistence."
  ],
  mindset: [
    "I believe that understanding how systems break is an essential step toward building systems that are more resilient.",
    "My goal is to turn curiosity into expertise, challenges into knowledge, and technical discoveries into stronger security."
  ],
  /* The last two focus cards are yours to fill in. */
  focus: [
    { t: "Reverse engineering", d: "Static and dynamic binary analysis, x86/x64 assembly, decompilation" },
    { t: "Digital forensics", d: "Memory forensics, disk images, evidence reconstruction" },
    { t: "Network analysis", d: "PCAP and traffic analysis: what hides in the packets" },
    { t: "Low-level systems", d: "Program internals and how software behaves beneath the surface" },
    { t: "Cybersecurity research", d: "Investigating weaknesses and exploring defensive techniques" },
    { t: "Capture the flag", d: "Practical challenges that build skill, creativity and persistence" },
    { t: "Defensive mindset", d: "Learning how systems break so they can be built to last" },
    { t: "[Your own focus area]", d: "[One line on what you do in it]" },
    { t: "[Currently learning]", d: "[Tool, topic or lab you are working on]" }
  ],

  /* Copy a project block to add more. Empty evidence strings become placeholders. */
  projects: [
    {
      title: "[Project title 1]", type: "[Project type, e.g. Home lab]",
      summary: "[One or two sentences that make someone want to open this project.]",
      what: "[What the project was.]",
      why: "[Why you built or did it.]",
      objective: "[What you set out to achieve.]",
      tools: ["[Tool 1]", "[Tool 2]", "[Language]"],
      did: "[What you actually did, in your own words. No code blocks: link to the repo instead.]",
      skills: ["[Skill 1]", "[Skill 2]"],
      outcome: "[What happened: results, findings, numbers if you have them.]",
      relevance: "[How this applies to a real security team or incident.]",
      evidence: { repo: "", screenshots: "", writeup: "", demo: "", docs: "" }
    },
    {
      title: "[Project title 2]", type: "[Project type]",
      summary: "[Short summary.]", what: "[...]", why: "[...]", objective: "[...]",
      tools: ["[Tool]"], did: "[...]", skills: ["[Skill]"], outcome: "[...]", relevance: "[...]",
      evidence: { repo: "", screenshots: "", writeup: "", demo: "", docs: "" }
    },
    {
      title: "[Project title 3]", type: "[Project type]",
      summary: "[Short summary.]", what: "[...]", why: "[...]", objective: "[...]",
      tools: ["[Tool]"], did: "[...]", skills: ["[Skill]"], outcome: "[...]", relevance: "[...]",
      evidence: { repo: "", screenshots: "", writeup: "", demo: "", docs: "" }
    }
  ],

  competitions: [
    {
      name: "[Competition name]", result: "[Placement, e.g. 12th of 300 teams]",
      involved: "[Format and what the event involved.]",
      areas: ["[Web]", "[Crypto]", "[Forensics]"],
      learned: "[What you learned.]",
      evidence: { label: "Write-up or scoreboard", url: "" }
    }
  ],

  /* One entry per write-up. The text lives in its own Markdown file in the writeups folder.
     "ctf" must match a competition name above to get a button on that competition. */
  writeups: [
    {
      ctf: "[Competition name]", title: "[Forensics challenge name]", category: "Digital Forensics",
      difficulty: "[Easy / Medium / Hard]", points: "[100]", tools: ["[Autopsy]", "[Volatility]", "[Wireshark]"],
      summary: "[One line: the evidence you were given and the artefact that cracked it.]",
      file: "writeups/forensics-example.md"
    },
    {
      ctf: "[Competition name]", title: "[Reversing challenge name]", category: "Reverse Engineering",
      difficulty: "[Easy / Medium / Hard]", points: "[100]", tools: ["[Ghidra]", "[GDB]", "[Python]"],
      summary: "[One line: what the binary did and the check you had to defeat.]",
      file: "writeups/reverse-engineering-example.md"
    }
  ],

  learning: [
    {
      platform: "[Platform name]", count: "[N]", unit: "labs completed",
      areas: ["[Networking]", "[Web exploitation]", "[Linux]"],
      profile: "",
      writeups: [{ label: "[Selected write-up title]", url: "" }]
    }
  ],

  certifications: [
    { name: "[Certification name]", why: "[Why you took it.]", areas: ["[Area 1]", "[Area 2]"], url: "" }
  ],

  community: [
    { title: "[Achievement, mentoring, talk or volunteering]", impact: "[What you did and the impact it had.]" }
  ]
};
/* ===================== END OF EDITABLE DATA ===================== */

const $ = (id) => document.getElementById(id);
const isPh = (s) => typeof s === "string" && s.trim().startsWith("[");

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}
function txt(s) { return `<span class="${isPh(s) ? "ph-text" : ""}">${esc(s)}</span>`; }
function tags(a) { return `<div class="tags">${a.map((t) => `<span>${esc(t)}</span>`).join("")}</div>`; }
function link(label, url, primary) {
  return url
    ? `<a class="btn${primary ? " primary" : ""}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`
    : `<span class="btn ph" title="Add this link in script.js">${esc(label)} (add link)</span>`;
}

/* Sideways conveyor: items repeat and glide continuously; hover pauses it */
function mq(el, items, dir, w) {
  if (!items.length) { el.innerHTML = ""; return; }
  w = w || 358;
  const k = Math.ceil(1300 / (items.length * w)), one = items.join("");
  const nf = (s) => s.replace(/<(button|a) /g, '<$1 tabindex="-1" ');
  el.className = "mq";
  el.innerHTML = `<div class="mq-track" style="--dur:${Math.max(20, Math.round(k * items.length * w / 40))}s;animation-direction:${dir < 0 ? "reverse" : "normal"}">${one}<div class="dup" style="display:contents" aria-hidden="true">${nf(one.repeat(k - 1) + one.repeat(k))}</div></div>`;
}

/* Hero, links, about */
const L = SITE.links;
$("heroLinks").innerHTML =
  link("GitHub", L.github, true) + link("LinkedIn", L.linkedin) +
  `<a class="btn" href="#projects">View projects</a>`;
$("aboutText").innerHTML = SITE.about.map((p) => `<p>${txt(p)}</p>`).join("") + `<blockquote class="mind"><b>My mindset</b>${SITE.mindset.map((p) => `<p>${txt(p)}</p>`).join("")}</blockquote>`;
mq($("focusList"), SITE.focus.map((f) => `<div class="fc"><b>${txt(f.t)}</b>${txt(f.d)}</div>`), 1, 242);

/* Projects */
mq($("projectGrid"), SITE.projects.map((p, i) => `
  <button class="card" data-i="${i}" aria-haspopup="dialog">
    <h3>${txt(p.title)}</h3>
    <p class="muted">${txt(p.type)}</p>
    <p>${txt(p.summary)}</p>
    ${tags(p.tools.slice(0, 4))}
    <span class="more">Open project details</span>
  </button>`), 1);

const modal = $("modal");
function evidence(e) {
  const shot = e.screenshots
    ? `<a class="btn" href="${esc(e.screenshots)}" target="_blank" rel="noopener noreferrer">Screenshots</a>`
    : `<div class="shot">[Screenshot placeholder: replace with an image]</div>`;
  return shot + `<div class="btns">${link("GitHub repository", e.repo)}${link("Write-up", e.writeup)}${link("Demo", e.demo)}${link("Technical documentation", e.docs)}</div>`;
}
function openProject(i) {
  const p = SITE.projects[i];
  const rows = [
    ["What was it?", p.what], ["Why I did it", p.why], ["Objective", p.objective],
    ["What I did", p.did], ["Outcome", p.outcome], ["Real-world relevance", p.relevance]
  ];
  $("modalBody").innerHTML = `
    <h3 id="mTitle" style="font-size:1.6rem">${txt(p.title)}</h3>
    <p class="muted" style="margin-bottom:14px">${txt(p.type)}</p>
    ${rows.map(([h, v]) => `<div class="qa"><h4>${h}</h4><p>${txt(v)}</p></div>`).join("")}
    <div class="qa"><h4>Tools and technologies</h4>${tags(p.tools)}</div>
    <div class="qa"><h4>Skills developed</h4>${tags(p.skills)}</div>
    <div class="qa"><h4>Evidence</h4><div>${evidence(p.evidence)}</div></div>`;
  modal.showModal();
}
$("projectGrid").addEventListener("click", (e) => {
  const c = e.target.closest(".card");
  if (c) openProject(+c.dataset.i);
});
$("closeBtn").onclick = () => modal.close();
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

/* Competitions */
mq($("ctfList"), SITE.competitions.map((c) => `
  <article class="card row">
    <div><span class="badge">${txt(c.result)}</span><h3>${txt(c.name)}</h3></div>
    <div>
      <p>${txt(c.involved)}</p>${tags(c.areas)}
      <p><b>What I learned:</b> ${txt(c.learned)}</p>
      <div class="btns">${link(c.evidence.label, c.evidence.url)}${SITE.writeups.map((w, i) => w.ctf === c.name ? `<button class="btn" data-w="${i}">Read: ${esc(w.title)}</button>` : "").join("")}</div>
    </div>
  </article>`), -1);

/* Practical learning */
mq($("learnList"), SITE.learning.map((l) => `
  <article class="card">
    <div class="stat">${txt(l.count)}</div>
    <h3>${esc(l.platform)}</h3><p class="muted">${esc(l.unit)}</p>
    ${tags(l.areas)}
    <div class="btns">${link("Profile", l.profile)}${l.writeups.map((w) => link(w.label, w.url)).join("")}</div>
  </article>`), 1);

/* Certifications */
mq($("certList"), SITE.certifications.map((c) => `
  <article class="card">
    <h3>${txt(c.name)}</h3><p>${txt(c.why)}</p>${tags(c.areas)}
    <div class="btns">${link("Certificate", c.url)}</div>
  </article>`), -1);

/* Community */
mq($("commList"), SITE.community.map((c) => `
  <article class="card"><h3>${txt(c.title)}</h3><p>${txt(c.impact)}</p></article>`), 1);

/* Contact */
mq($("contactLinks"), [link("GitHub", L.github, true), link("LinkedIn", L.linkedin), link("Email", L.email && "mailto:" + L.email)], -1, 170);
$("yr").textContent = new Date().getFullYear();

/* Mobile menu */
const menuBtn = $("menuBtn"), nav = $("nav");
menuBtn.onclick = () => menuBtn.setAttribute("aria-expanded", nav.classList.toggle("open"));
nav.addEventListener("click", (e) => { if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });

/* Hero terminal: types once, then rests */
const lines = [
  ["p", "$ whoami"], ["", SITE.handle + "  (" + SITE.name + ")"],
  ["p", "$ cat about.txt"], ["", "reverse engineering\ndigital forensics\nCTF player"],
  ["p", "$ ls evidence/"], ["", "repos  write-ups  screenshots  demos"],
  ["w", "# every claim links to proof"]
];
const out = $("termOut");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
function render(n, partial) {
  out.innerHTML = lines.slice(0, n).map(([c, t]) => `<span class="${c}">${esc(t)}</span>`).join("\n") +
    (partial !== undefined ? "\n<span class=\"" + lines[n][0] + "\">" + esc(lines[n][1].slice(0, partial)) + "</span>" : "") +
    ' <span class="cur"></span>';
}
if (reduce) { render(lines.length); }
else {
  let n = 0, ch = 0;
  (function tick() {
    if (n >= lines.length) return render(lines.length);
    ch++; render(n, ch);
    if (ch >= lines[n][1].length) { n++; ch = 0; setTimeout(tick, 280); } else setTimeout(tick, 28);
  })();
}


/* ---------- Write-ups: tiny Markdown renderer ---------- */
const safeUrl = (u) => /^(https?:\/\/|[\w][\w./%-]*$)/.test(u);
function inline(s) {
  return esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (m, a, u) => safeUrl(u) ? `<img src="${u}" alt="${a}" loading="lazy">` : "")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, a, u) => safeUrl(u) ? `<a href="${u}" target="_blank" rel="noopener noreferrer">${a}</a>` : a);
}
function md(src) {
  const out = []; let list = false, code = null, para = [];
  const flush = () => { if (para.length) { out.push("<p>" + inline(para.join(" ")) + "</p>"); para = []; } };
  const endList = () => { if (list) { out.push("</ul>"); list = false; } };
  const pre = (c) => "<pre><code>" + esc(c.join("\n")) + "</code></pre>";
  for (const raw of src.split("\n")) {
    const fence = /^\s*(```|~~~)/.test(raw);
    if (code !== null) { if (fence) { out.push(pre(code)); code = null; } else code.push(raw); continue; }
    if (fence) { flush(); endList(); code = []; continue; }
    const h = raw.match(/^(#{1,4})\s+(.*)/), li = raw.match(/^\s*[-*]\s+(.*)/);
    if (h) { flush(); endList(); const n = h[1].length + 1; out.push(`<h${n}>${inline(h[2])}</h${n}>`); }
    else if (li) { flush(); if (!list) { out.push("<ul>"); list = true; } out.push("<li>" + inline(li[1]) + "</li>"); }
    else if (!raw.trim()) { flush(); endList(); }
    else para.push(raw.trim());
  }
  flush(); endList(); if (code !== null) out.push(pre(code));
  return out.join("");
}

/* ---------- Write-ups: list and viewer ---------- */
let wuCat = "All";
function renderWriteups() {
  const cats = ["All", ...SITE.categories];
  $("wuChips").innerHTML = cats.map((c) => `<button class="chip" aria-pressed="${c === wuCat}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  mq($("wuList"), SITE.writeups.map((w, i) => (wuCat !== "All" && w.category !== wuCat) ? "" : `
    <button class="card ${catCls(w.category)}" data-w="${i}">
      <span class="badge ${catCls(w.category)}">${txt(w.category)}</span>
      <h3>${txt(w.title)}</h3>
      <p class="muted">${txt(w.ctf)} &middot; ${txt(w.difficulty)} &middot; ${txt(w.points)} pts</p>
      <p>${txt(w.summary)}</p>${tags(w.tools)}
      <span class="more">Read write-up</span>
    </button>`).filter(Boolean), -1);
}
function openWriteup(i) {
  const w = SITE.writeups[i];
  $("modalBody").innerHTML = `<h3 id="mTitle" style="font-size:1.6rem">${txt(w.title)}</h3>
    <p class="muted" style="margin-bottom:10px">${txt(w.ctf)} &middot; ${txt(w.category)} &middot; ${txt(w.difficulty)}</p>
    <div class="md" id="wuBody">Loading write-up...</div>`;
  modal.showModal();
  fetch(w.file).then((r) => r.ok ? r.text() : Promise.reject())
    .then((t) => { $("wuBody").innerHTML = md(t); })
    .catch(() => { $("wuBody").innerHTML = `<p class="ph-text">Could not load ${esc(w.file)}. Check the file exists in the repository. Opening index.html straight from disk blocks loading; use the published site or a local server.</p>`; });
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-w]");
  if (b) return openWriteup(+b.dataset.w);
  const c = e.target.closest(".chip");
  if (c) { wuCat = c.dataset.c; renderWriteups(); }
});
renderWriteups();
$("status").innerHTML = txt(SITE.status);
$("contactSub").innerHTML = txt(SITE.availability);

/* ---------- Write-up editor (open the site with #draft at the end of the address) ---------- */
const TEMPLATE = "## Challenge\nWhat the challenge gave you and what you had to find.\n\n## Approach\n- What you tried first\n- What failed and why\n- The idea that worked\n\n## Solution\n~~~\ncommand or payload goes here\n~~~\n\n## Flag\n`flag{...}`\n\n## What I learned\n- The takeaway\n";
const edIn = $("edIn"), edOut = $("edOut");
let saved = ""; try { saved = localStorage.getItem("wu-draft") || ""; } catch (e) {}
edIn.value = saved || TEMPLATE;
const updEd = () => { edOut.innerHTML = md(edIn.value); try { localStorage.setItem("wu-draft", edIn.value); } catch (e) {} };
edIn.oninput = updEd; updEd();
$("edClear").onclick = () => { if (confirm("Replace the editor with the empty template?")) { edIn.value = TEMPLATE; updEd(); } };
$("edCopy").onclick = () => navigator.clipboard && navigator.clipboard.writeText(edIn.value);
$("edDl").onclick = () => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([edIn.value], { type: "text/markdown" }));
  a.download = "my-writeup.md"; a.click(); URL.revokeObjectURL(a.href);
};
function showDraft() { if (location.hash === "#draft") { $("draft").hidden = false; $("draft").scrollIntoView(); } }
addEventListener("hashchange", showDraft); showDraft();

/* ---------- Theme: hex offsets, scroll offset, name bytes ---------- */
function catCls(c) { return /forensic/i.test(c) ? "df" : "re"; }
document.querySelectorAll("h2").forEach((h, i) => { h.dataset.off = "0x" + (0x1000 + i * 0x40).toString(16).toUpperCase(); });
addEventListener("scroll", () => { $("off").textContent = "0x" + Math.round(scrollY).toString(16).toUpperCase().padStart(4, "0"); }, { passive: true });
$("hexBar").innerHTML = (() => {
  const s = SITE.name.slice(0, 16);
  const b = Array.from(s).map((ch) => `<i>${ch.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")}</i>`).join(" ");
  return `<span>00000000</span><span>${b}</span><span>|${esc(s)}|</span>`;
})();

/* ---------- Background: slowly scrolling hex dump with file signatures ---------- */
(function () {
  const c = $("rain"), x = c.getContext("2d");
  if (!x) return;
  const LH = 18, SIG = ["4D 5A 90 00", "7F 45 4C 46", "89 50 4E 47", "25 50 44 46", "50 4B 03 04", "55 8B EC 83"];
  const hx = () => (Math.random() * 256 | 0).toString(16).toUpperCase().padStart(2, "0");
  let w, h, rows = [], addr = 0, y0 = LH;
  function mk() {
    const b = Array.from({ length: 16 }, hx), sig = Math.random() < .06;
    if (sig) b.splice(Math.random() * 12 | 0, 4, ...SIG[Math.random() * SIG.length | 0].split(" "));
    const s = b.map((v) => { const n = parseInt(v, 16); return n > 31 && n < 127 ? String.fromCharCode(n) : "."; }).join("");
    addr += 16;
    return { a: addr.toString(16).toUpperCase().padStart(8, "0"), b, s, sig, hot: Math.random() < .04 ? Math.random() * 16 | 0 : -1 };
  }
  function size() { w = c.width = innerWidth; h = c.height = innerHeight; rows = Array.from({ length: Math.ceil(h / LH) + 2 }, mk); }
  function paint() {
    x.clearRect(0, 0, w, h); x.font = "13px ui-monospace,Menlo,Consolas,monospace";
    (w > 1100 ? [24, w / 2 + 24] : [24]).forEach((cx, k) => rows.forEach((r0, i) => {
      const r = k ? rows[(i + 9) % rows.length] : r0, y = i * LH + y0;
      x.fillStyle = r.sig ? "rgba(183,140,255,.95)" : "rgba(125,160,185,.9)";
      x.fillText(r.a + "  " + r.b.join(" ") + "  |" + r.s + "|", cx, y);
      if (r.hot >= 0) {
        const px = x.measureText(r.a + "  " + r.b.slice(0, r.hot).map((v) => v + " ").join("")).width;
        x.fillStyle = "#37c9ff"; x.fillText(r.b[r.hot], cx + px, y);
      }
    }));
  }
  size(); paint();
  addEventListener("resize", () => { size(); paint(); });
  if (reduce) return;
  let last = 0;
  (function loop(t) {
    requestAnimationFrame(loop);
    if (document.hidden || t - last < 33) return;
    last = t; y0 -= .5;
    if (y0 <= 0) { y0 += LH; rows.shift(); rows.push(mk()); }
    paint();
  })(0);
})();


/* ---------- Hero: build / break / defend loop ---------- */
(function () {
  const box = $("loop"), cap = $("loopCap");
  const bl = [...box.querySelectorAll(".b")], ws = [...document.querySelectorAll("#headline .w")];
  const caps = ["build: stack the layers, one by one", "break: probe for the weakest layer", "defend: patch it, then learn why it held"];
  const st = [["built", "built", "built", "built", "built"], ["probing", "probed", "vulnerable", "untouched", "untouched"], ["monitoring", "blocking", "patched", "safe", "safe"]];
  let ph = 0;
  function go(p) {
    ph = p; box.dataset.phase = p; cap.textContent = caps[p];
    bl.forEach((b, i) => { b.querySelector("small").textContent = st[p][i]; });
    ws.forEach((w) => w.classList.toggle("act", +w.dataset.p === p));
    if (p === 0) { bl.forEach((b) => b.classList.remove("on")); bl.forEach((b, i) => setTimeout(() => b.classList.add("on"), 150 + i * 320)); }
  }
  if (reduce) { bl.forEach((b) => b.classList.add("on")); go(2); return; }
  go(0); setInterval(() => go((ph + 1) % 3), 3600);
})();

/* ---------- Custom cursor: reticle that shows hex coordinates ---------- */
(function () {
  if (!matchMedia("(hover:hover) and (pointer:fine)").matches) return;
  document.documentElement.classList.add("has-cur");
  const layer = document.createElement("div"); layer.id = "curLayer";
  const ring = document.createElement("div"), dot = document.createElement("div"), lab = document.createElement("div");
  ring.className = "cur-ring"; dot.className = "cur-dot"; lab.className = "cur-lab";
  layer.append(ring, dot, lab); document.body.append(layer);
  const hex = (n) => Math.round(n).toString(16).toUpperCase().padStart(4, "0");
  let mx = -100, my = -100, rx = -100, ry = -100;
  addEventListener("pointermove", (e) => {
    mx = e.clientX; my = e.clientY; layer.classList.add("on");
    dot.style.transform = `translate(${mx}px,${my}px)`;
    const t = e.target.closest ? e.target.closest("a,button,textarea,[data-w],[data-i]") : null;
    ring.classList.toggle("lock", !!t);
    lab.textContent = t ? (t.matches("textarea") ? "edit" : t.matches(".close") ? "close" : "open") : "0x" + hex(mx) + ":" + hex(my);
  });
  addEventListener("pointerdown", () => ring.classList.add("press"));
  addEventListener("pointerup", () => ring.classList.remove("press"));
  document.documentElement.addEventListener("mouseleave", () => layer.classList.remove("on"));
  (function loop() {
    rx += (mx - rx) * .2; ry += (my - ry) * .2;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    lab.style.transform = `translate(${rx + 22}px,${ry + 18}px)`;
    requestAnimationFrame(loop);
  })();
  /* the modal lives in the top layer, so carry the cursor into it while it is open */
  new MutationObserver(() => (modal.open ? modal : document.body).append(layer)).observe(modal, { attributes: true, attributeFilter: ["open"] });
})();


/* ---------- Photo badge ---------- */
(function () {
  $("idName").textContent = SITE.name;
  $("idRole").textContent = "Software engineering, INSAT";
  $("idHandle").textContent = "handle: " + SITE.handle;
  const img = $("idImg"), ph = $("idPh");
  if (SITE.photo) {
    img.onerror = () => { img.hidden = true; ph.hidden = false; };
    img.src = SITE.photo; img.hidden = false; ph.hidden = true;
  }
})();

/* ---------- Welcome intro: secure handshake, decrypting title, doors open sideways ---------- */
function scramble(el, text, ms) {
  const chars = "01ABCDEF#$<>/{}", t0 = performance.now(), id = el._s = (el._s || 0) + 1;
  (function f(now) {
    if (el._s !== id) return;
    const p = Math.min(1, (now - t0) / ms), n = Math.floor(p * text.length);
    el.textContent = text.slice(0, n) + Array.from(text.slice(n)).map((c) => c === " " ? " " : chars[Math.random() * chars.length | 0]).join("");
    if (p < 1) requestAnimationFrame(f);
  })(t0);
}
function playIntro() {
  const w = $("welcome"), root = document.documentElement, T = [];
  root.classList.remove("no-intro"); root.classList.add("intro");
  w.className = ""; w.hidden = false;
  $("wLog").textContent = ""; $("wTitle").textContent = ""; $("wSub").style.opacity = 0;
  const bar = $("wBar"); bar.style.transition = "none"; bar.style.width = "0"; void bar.offsetWidth; bar.style.transition = "";
  let done = false;
  const later = (fn, ms) => T.push(setTimeout(fn, ms));
  const finish = () => {
    if (done) return; done = true; T.forEach(clearTimeout);
    w.classList.add("open");
    setTimeout(() => { w.hidden = true; root.classList.remove("intro"); }, 1000);
    try { sessionStorage.setItem("welcomed", "1"); } catch (e) {}
  };
  $("wSkip").onclick = finish; $("wSkip").focus();
  addEventListener("keydown", finish, { once: true });
  ["> opening secure channel ...", "> verifying visitor ............ OK", "> decrypting blog ..............."]
    .forEach((t, i) => later(() => { $("wLog").textContent += t + "\n"; }, 300 + i * 550));
  later(() => { bar.style.width = "100%"; }, 300);
  later(() => scramble($("wTitle"), "Welcome to Samer Themri's blog", 1500), 2100);
  later(() => { $("wSub").style.opacity = 1; }, 3800);
  later(finish, 5300);
}
$("replay").hidden = reduce;
$("replay").onclick = () => { scrollTo(0, 0); playIntro(); };
if (!document.documentElement.classList.contains("no-intro")) playIntro();


/* ---------- Brand: hex monogram decodes to the name on hover ---------- */
(function () {
  const b = document.querySelector(".brand"), t = $("brandTxt");
  const to = (s) => (reduce ? (t.textContent = s) : scramble(t, s, 450));
  ["pointerenter", "focus"].forEach((e) => b.addEventListener(e, () => to("samer_themri")));
  ["pointerleave", "blur"].forEach((e) => b.addEventListener(e, () => to("0x5354")));
})();
