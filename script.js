/* =====================================================================
   EDIT THIS BLOCK ONLY. Everything on the page is generated from it.
   - Leave a link as "" and the page shows a dashed "add link" placeholder.
   - Text in [square brackets] is placeholder copy: replace it with yours.
   ===================================================================== */
const SITE = {
  name: "Samer Themri",
  handle: "jelbene",
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
      <div class="btns">${link(c.evidence.label, c.evidence.url)}</div>
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
