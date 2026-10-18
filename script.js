/* =====================================================================
   EDIT THIS BLOCK ONLY. Everything on the page is generated from it.
   - Leave a link as "" and the page shows a dashed "add link" placeholder.
   - Text in [square brackets] is placeholder copy: replace it with yours.
   ===================================================================== */
const SITE = {
  name: "Samer Themri",
  handle: "jelbene",
  availability: "[Your availability, e.g. Looking for a security internship from June]",
  headline: "Cybersecurity student at INSAT, building and breaking things to understand how systems defend themselves.",
  links: {
    github: "",      // e.g. "https://github.com/your-username"
    linkedin: "",    // e.g. "https://www.linkedin.com/in/your-profile"
    email: "",       // e.g. "you@example.com"
    tryhackme: "",   // e.g. "https://tryhackme.com/p/your-username"
    ctftime: ""      // optional
  },
  about: [
    "[Paragraph 1: what draws you to cybersecurity and which areas you enjoy most, for example web security, networking or forensics.]",
    "[Paragraph 2: what you are building or learning right now, and what kind of role or project you want next.]"
  ],
  focus: [
    { t: "[Focus area 1]", d: "[One line on what you do in it]" },
    { t: "[Focus area 2]", d: "[One line on what you do in it]" },
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
      ctf: "[Competition name]", title: "[Challenge name]", category: "Web",
      difficulty: "[Easy / Medium / Hard]", points: "[100]", tools: ["[Burp Suite]", "[Python]"],
      summary: "[One line: what the challenge was and the key idea that cracked it.]",
      file: "writeups/example-writeup.md"
    }
  ],

  learning: [
    {
      platform: "TryHackMe", count: "[N]", unit: "rooms completed",
      areas: ["[Networking]", "[Web exploitation]", "[Linux]"],
      profile: "tryhackme",
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

/* Hero, links, about */
$("headline").textContent = SITE.headline;
const L = SITE.links;
$("heroLinks").innerHTML =
  link("GitHub", L.github, true) + link("LinkedIn", L.linkedin) + link("TryHackMe", L.tryhackme) +
  `<a class="btn" href="#projects">View projects</a>`;
$("aboutText").innerHTML = SITE.about.map((p) => `<p>${txt(p)}</p>`).join("");
$("focusList").innerHTML = SITE.focus.map((f) => `<li><b>${txt(f.t)}</b>${txt(f.d)}</li>`).join("");

/* Projects */
$("projectGrid").innerHTML = SITE.projects.map((p, i) => `
  <button class="card" data-i="${i}" aria-haspopup="dialog">
    <h3>${txt(p.title)}</h3>
    <p class="muted">${txt(p.type)}</p>
    <p>${txt(p.summary)}</p>
    ${tags(p.tools.slice(0, 4))}
    <span class="more">Open project details</span>
  </button>`).join("");

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
$("ctfList").innerHTML = SITE.competitions.map((c) => `
  <article class="card row">
    <div><span class="badge">${txt(c.result)}</span><h3>${txt(c.name)}</h3></div>
    <div>
      <p>${txt(c.involved)}</p>${tags(c.areas)}
      <p><b>What I learned:</b> ${txt(c.learned)}</p>
      <div class="btns">${link(c.evidence.label, c.evidence.url)}${SITE.writeups.map((w, i) => w.ctf === c.name ? `<button class="btn" data-w="${i}">Read: ${esc(w.title)}</button>` : "").join("")}</div>
    </div>
  </article>`).join("");

/* Practical learning */
$("learnList").innerHTML = SITE.learning.map((l) => `
  <article class="card">
    <div class="stat">${txt(l.count)}</div>
    <h3>${esc(l.platform)}</h3><p class="muted">${esc(l.unit)}</p>
    ${tags(l.areas)}
    <div class="btns">${link("Profile", L[l.profile])}${l.writeups.map((w) => link(w.label, w.url)).join("")}</div>
  </article>`).join("");

/* Certifications */
$("certList").innerHTML = SITE.certifications.map((c) => `
  <article class="card">
    <h3>${txt(c.name)}</h3><p>${txt(c.why)}</p>${tags(c.areas)}
    <div class="btns">${link("Certificate", c.url)}</div>
  </article>`).join("");

/* Community */
$("commList").innerHTML = SITE.community.map((c) => `
  <article class="card"><h3>${txt(c.title)}</h3><p>${txt(c.impact)}</p></article>`).join("");

/* Contact */
$("contactLinks").innerHTML =
  link("GitHub", L.github, true) + link("LinkedIn", L.linkedin) + link("Email", L.email && "mailto:" + L.email);
$("yr").textContent = new Date().getFullYear();

/* Mobile menu */
const menuBtn = $("menuBtn"), nav = $("nav");
menuBtn.onclick = () => menuBtn.setAttribute("aria-expanded", nav.classList.toggle("open"));
nav.addEventListener("click", (e) => { if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });

/* Hero terminal: types once, then rests */
const lines = [
  ["p", "$ whoami"], ["", SITE.handle + "  (" + SITE.name + ")"],
  ["p", "$ cat focus.txt"], ["", "projects, ctfs, hands-on labs"],
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
  const cats = ["All", ...new Set(SITE.writeups.map((w) => w.category))];
  $("wuChips").innerHTML = cats.map((c) => `<button class="chip" aria-pressed="${c === wuCat}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  $("wuList").innerHTML = SITE.writeups.map((w, i) => (wuCat !== "All" && w.category !== wuCat) ? "" : `
    <button class="card" data-w="${i}">
      <span class="badge">${txt(w.category)}</span>
      <h3>${txt(w.title)}</h3>
      <p class="muted">${txt(w.ctf)} &middot; ${txt(w.difficulty)} &middot; ${txt(w.points)} pts</p>
      <p>${txt(w.summary)}</p>${tags(w.tools)}
      <span class="more">Read write-up</span>
    </button>`).join("");
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
$("status").innerHTML = txt(SITE.availability);
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

/* ---------- Background: faint falling hex and binary ---------- */
(function () {
  const c = $("rain"), x = c.getContext("2d");
  if (!x || reduce) return;
  const chars = "01abcdef$#<>/{}"; let w, h, drops;
  function size() { w = c.width = innerWidth; h = c.height = innerHeight; drops = Array.from({ length: Math.ceil(w / 18) }, () => Math.random() * h / 18); }
  size(); addEventListener("resize", size);
  let last = 0;
  (function draw(t) {
    requestAnimationFrame(draw);
    if (document.hidden || t - last < 70) return;
    last = t;
    x.fillStyle = "rgba(7,11,15,.12)"; x.fillRect(0, 0, w, h);
    x.fillStyle = "rgba(61,220,151,.6)"; x.font = "14px monospace";
    drops.forEach((d, i) => {
      x.fillText(chars[Math.random() * chars.length | 0], i * 18, d * 18);
      drops[i] = d * 18 > h && Math.random() > .975 ? 0 : d + 1;
    });
  })(0);
})();
