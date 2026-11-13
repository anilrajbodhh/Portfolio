/* =====================================================================
   PORTFOLIO DATA  –  EDIT ONLY THIS BLOCK TO UPDATE YOUR WEBSITE
   • An empty list [] or empty text "" means that item is NOT shown.
   • Sections with no data (and their menu links) hide automatically.
   ===================================================================== */
const PORTFOLIO_DATA = {
  name: "Anil Kumar",
  title: "CITS Trainee – Computer Hardware & Networking Maintenance (CHNM)",
  intro: "I am a CITS trainee at NSTI Kanpur, learning computer hardware and networking maintenance, and I enjoy building voice-based AI tools.",
  location: "Fatehpur, Uttar Pradesh, India",
  email: "anilkumar8853@outlook.com",
  phone: "8858329987",
  linkedin: "https://www.linkedin.com/in/anil-kumar-b9b200449",
  github: "https://github.com/anilrajbodhh",
  photo: "assets/images/profile.jpg",          // your photo (falls back to initials)
  resume: "assets/documents/resume.pdf",       // replace the file with your own resume

  about: [
    "I am Anil Kumar from Fatehpur, Uttar Pradesh. I am currently doing CITS in Computer Hardware and Networking Maintenance at NSTI Kanpur (session 2026–27), after completing ITI at GITI Jahanabad, Fatehpur.",
    "I also hold computer certificates from NIELIT India and other organizations, and I build voice-controlled assistant and AI agent projects on my own."
  ],

  education: [
    { degree: "CITS – Computer Hardware and Networking Maintenance (CHNM)", institute: "NSTI Kanpur", period: "Session 2026–27", note: "Currently pursuing" },
    { degree: "ITI", institute: "GITI Jahanabad, Fatehpur", period: "2024–2025", note: "" }
  ],

  skills: [
    { group: "Core Trade Skills", items: ["Field Technician", "Computer Peripherals"] },
    { group: "Computer Skills", items: ["MS Office", "Excel", "Internet"] },
    { group: "Software & Tools", items: ["Photoshop", "Tally", "Python", "Power BI"] },
    { group: "Other Skills", items: ["Communication", "Problem Solving", "Teamwork", "Networking"] }
  ],

  projects: [
    {
      name: "Raj Voice Assistant Agent Tool",
      description: "A tool that completes tasks through voice commands.",
      technologies: [],                         // add your technologies, e.g. ["Python"]
      contribution: "Solo project. I designed, built and managed everything myself.",
      image: "assets/images/project1.jpg",      // upload your image with this name
      demo: "",                                 // optional live link
      github: ""                                // optional repository link
    },
    {
      name: "Raj Voice AI Agent Model",
      description: "A voice-controlled AI agent.",
      technologies: [],                         // add your tools / components / AI technologies
      contribution: "Self-funded personal project.",
      image: "assets/images/project2.jpg",
      demo: "",
      github: ""
    }
  ],

  // Add entries like: { title: "", organization: "", period: "", description: "" }
  training: [],

  // Each entry: { name, detail (optional), organization, year (optional), link (optional) }
  // link = file inside assets/certificates/ (shows a "View certificate" button).
  // Empty fields are not shown. Add year/link for the ones that are still empty.
  certifications: [
    { name: "O Level", detail: "O Level 'IT'", organization: "NIELIT India", year: "2026", link: "assets/certificates/o-level.pdf" },
    { name: "CCC", detail: "", organization: "NIELIT India", year: "", link: "" },
    { name: "ADCA", detail: "Advanced Diploma in Computer Application", organization: "P-Tech Foundation", year: "2021", link: "assets/certificates/adca.jpg" },
    { name: "BCA", detail: "", organization: "CSC e-Governance", year: "", link: "" },
    { name: "FTCP", detail: "Field Technician Computing and Peripherals", organization: "Electronics Sector Skills Council of India (ESSCI)", year: "2024", link: "assets/certificates/ftcp.pdf" },
    { name: "Directorate of Training & Employment", detail: "", organization: "Wadhwani Foundation", year: "", link: "" },
    { name: "AI Literacy", detail: "", organization: "IBM SkillsBuild", year: "2026", link: "assets/certificates/ai-literacy.pdf" }
  ]
};

/* =====================  HELPERS  ===================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const initials = (n) => n.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
const svg = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const ICON = {
  sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
  moon: svg('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'),
  menu: svg('<path d="M3 6h18M3 12h18M3 18h18"/>'),
  up: svg('<path d="M12 19V5M5 12l7-7 7 7"/>'),
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
  phone: svg('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>'),
  pin: svg('<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>'),
  download: svg('<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>'),
  award: svg('<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8"/>'),
  code: svg('<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>')
};

/* =====================  RENDER FUNCTIONS  ===================== */
function renderHome(d) {
  const buttons = [
    d.projects.length ? `<a class="btn btn-primary" href="#projects">View Projects</a>` : "",
    `<a class="btn btn-outline" href="#contact">Contact Me</a>`,
    d.resume ? `<a class="btn btn-outline" href="${esc(d.resume)}" download>${ICON.download} Download Resume</a>` : ""
  ].join("");
  $("#homeBox").innerHTML = `
    <div class="hero-text reveal">
      <p class="eyebrow">Hello, I'm</p>
      <h1>${esc(d.name)}</h1>
      <p class="headline">${esc(d.title)}</p>
      ${d.intro ? `<p class="lead">${esc(d.intro)}</p>` : ""}
      <div class="cta">${buttons}</div>
      ${d.location ? `<p class="meta">${ICON.pin} ${esc(d.location)}</p>` : ""}
    </div>
    <div class="hero-photo reveal" id="photoBox"></div>`;

  // Profile photo with initials fallback if the image file is missing
  const box = $("#photoBox");
  const fallback = () => { box.innerHTML = `<div class="avatar" role="img" aria-label="${esc(d.name)}">${esc(initials(d.name))}</div>`; };
  if (!d.photo) return fallback();
  const img = new Image();
  img.alt = `Photo of ${d.name}`;
  img.onerror = fallback;
  img.src = d.photo;
  box.appendChild(img);
}

function renderAbout(d) {
  $("#aboutBox").innerHTML = d.about.map((p) => `<p class="reveal">${esc(p)}</p>`).join("");
}

function renderEducation(d) {
  $("#educationBox").innerHTML = d.education.map((e) => `
    <article class="card hoverable reveal">
      ${e.note ? `<span class="badge">${esc(e.note)}</span>` : ""}
      <h3>${esc(e.degree)}</h3>
      ${e.institute ? `<p>${esc(e.institute)}</p>` : ""}
      ${e.period ? `<p>${esc(e.period)}</p>` : ""}
    </article>`).join("");
}

function renderSkills(d) {
  $("#skillsBox").innerHTML = d.skills.filter((g) => g.items.length).map((g) => `
    <article class="card reveal">
      <h3>${esc(g.group)}</h3>
      <div class="chips">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div>
    </article>`).join("");
}

function renderProjects(d) {
  $("#projectsBox").innerHTML = d.projects.map((p, i) => `
    <article class="card project reveal">
      <div class="project-media" id="pm${i}"></div>
      <div class="project-body">
        <h3>${esc(p.name)}</h3>
        ${p.description ? `<p>${esc(p.description)}</p>` : ""}
        ${p.technologies.length ? `<h4>Technologies</h4><div class="chips">${p.technologies.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>` : ""}
        ${p.contribution ? `<h4>My Contribution</h4><p>${esc(p.contribution)}</p>` : ""}
        ${p.demo || p.github ? `<div class="links">
          ${p.demo ? `<a class="btn btn-primary btn-sm" href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ""}
          ${p.github ? `<a class="btn btn-outline btn-sm" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ""}
        </div>` : ""}
      </div>
    </article>`).join("");

  // Project images with gradient/initials fallback
  d.projects.forEach((p, i) => {
    const box = $("#pm" + i);
    const fallback = () => { box.innerHTML = esc(initials(p.name)); };
    if (!p.image) return fallback();
    const img = new Image();
    img.alt = `${p.name} screenshot`;
    img.loading = "lazy";
    img.onerror = fallback;
    img.src = p.image;
    box.appendChild(img);
  });
}

function renderTraining(d) {
  $("#trainingBox").innerHTML = d.training.map((t) => `
    <article class="card hoverable reveal">
      <h3>${esc(t.title)}</h3>
      ${t.organization ? `<p>${esc(t.organization)}</p>` : ""}
      ${t.period ? `<p>${esc(t.period)}</p>` : ""}
      ${t.description ? `<p>${esc(t.description)}</p>` : ""}
    </article>`).join("");
}

function renderCertifications(d) {
  $("#certificationsBox").innerHTML = d.certifications.map((c) => `
    <article class="card hoverable cert reveal">
      <span class="cert-ico" aria-hidden="true">${ICON.award}</span>
      <h3>${esc(c.name)}</h3>
      ${c.detail ? `<p>${esc(c.detail)}</p>` : ""}
      ${c.organization ? `<p>${esc(c.organization)}</p>` : ""}
      ${c.year ? `<p>${esc(c.year)}</p>` : ""}
      ${c.link ? `<p><a href="${esc(c.link)}" target="_blank" rel="noopener noreferrer">View certificate</a></p>` : ""}
    </article>`).join("");
}

function renderContact(d) {
  const items = [
    d.email && { label: "Email", value: d.email, href: `mailto:${d.email}`, icon: ICON.mail },
    d.phone && { label: "Phone", value: d.phone, href: `tel:${d.phone.replace(/\s+/g, "")}`, icon: ICON.phone },
    d.linkedin && { label: "LinkedIn", value: "Anil Kumar", href: d.linkedin, icon: "in", ext: true },
    d.github && { label: "GitHub", value: d.github.replace("https://github.com/", "@"), href: d.github, icon: ICON.code, ext: true }
  ].filter(Boolean);
  $("#contactBox").innerHTML = items.map((i) => `
    <a class="card contact-card reveal" href="${esc(i.href)}" ${i.ext ? 'target="_blank" rel="noopener noreferrer"' : ""}>
      <span class="ico" aria-hidden="true">${i.icon}</span>
      <span><small>${i.label}</small><span class="val">${esc(i.value)}</span></span>
    </a>`).join("");
}

/* Show a section (and its menu link) only when it has data */
function applyVisibility(d) {
  const has = {
    about: d.about.length, education: d.education.length, skills: d.skills.some((g) => g.items.length),
    projects: d.projects.length, training: d.training.length, certifications: d.certifications.length,
    contact: d.email || d.phone || d.linkedin || d.github
  };
  $$("[data-key]").forEach((s) => { s.hidden = !has[s.dataset.key]; });
  $$("[data-nav]").forEach((li) => { li.hidden = !has[li.dataset.nav]; });
}

/* =====================  INTERACTIONS  ===================== */
function setupTheme() {
  const btn = $("#themeBtn"), root = document.documentElement;
  const paint = () => {
    const dark = root.dataset.theme === "dark";
    btn.innerHTML = dark ? ICON.sun : ICON.moon;
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  };
  btn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    paint();
  });
  paint();
}

function setupMenu() {
  const btn = $("#menuBtn"), menu = $("#menu");
  btn.innerHTML = ICON.menu;
  const toggle = (open) => { menu.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); };
  btn.addEventListener("click", () => toggle(!menu.classList.contains("open")));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) toggle(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggle(false); });
}

function setupObservers() {
  // Scroll-reveal animation
  const rv = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); }
  }), { threshold: 0.12 });
  $$(".reveal").forEach((el) => rv.observe(el));

  // Highlight the menu link of the section currently in view
  const links = $$("#menu a");
  const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section").forEach((s) => spy.observe(s));
}

function setupToTop() {
  const btn = $("#toTop");
  btn.innerHTML = ICON.up;
  addEventListener("scroll", () => { btn.hidden = scrollY < 500; }, { passive: true });
  btn.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

/* =====================  START  ===================== */
document.addEventListener("DOMContentLoaded", () => {
  const d = PORTFOLIO_DATA;
  renderHome(d); renderAbout(d); renderEducation(d); renderSkills(d);
  renderProjects(d); renderTraining(d); renderCertifications(d); renderContact(d);
  applyVisibility(d);
  $("#year").textContent = new Date().getFullYear();
  $("#footName").textContent = d.name;
  setupTheme(); setupMenu(); setupObservers(); setupToTop();
});
