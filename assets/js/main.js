/* ==========================================================================
   Portafolio de Alejandro Brett Marcano — interacción
   1) Selector de idioma ES/EN (el español vive en el HTML, el inglés aquí)
   2) Menú móvil
   3) Animación al hacer scroll
   4) Copiar correo y formulario de contacto (mailto)
   ========================================================================== */

/* Correo de contacto: se aplica a todos los enlaces marcados con data-email-text. */
const CONTACT_EMAIL = 'alejandrobrettmarcano@gmail.com';

/* Diccionario inglés. Si una clave falta, se queda el texto del HTML. */
const EN = {
  'a11y.skip': 'Skip to content',

  'nav.about': 'About',
  'nav.services': 'How I help',
  'nav.cases': 'Results',
  'nav.experience': 'Experience',
  'nav.contact': 'Contact',
  'nav.cta': "Let's talk",

  'hero.badge': 'Immediate availability · Remote',
  'hero.role': 'Customer Support · B2B SaaS · Help Desk L1',
  'hero.lead':
    'I handle customer enquiries over chat and email for B2B SaaS products, working in Zendesk and HubSpot Service Hub. My technical background means I can turn complex features into simple steps — and stay calm when the user is already frustrated.',
  'hero.ctaPrimary': 'Email me',
  'hero.ctaCv': 'Download CV',
  'hero.location': 'Tinaquillo, Venezuela · Remote · UTC-4',
  'hero.langs': 'Native Spanish · English B2',

  'stats.1': 'customer interactions',
  'stats.2': 'enquiries resolved per day',
  'stats.3': 'customer retention',
  'stats.4': 'help desk and SaaS troubleshooting',

  'about.heading': 'Technical support with a human touch',
  'about.lead':
    'I started in computer science and ended up in support: the place where technology gets explained to a person, not to a system.',
  'about.p1':
    "I'm a Computer Science technician working in customer support for B2B SaaS products. I own the full enquiry lifecycle —from first message to closure— over chat and email, in Zendesk and HubSpot Service Hub, meeting SLAs and keeping the quality of every reply.",
  'about.p2':
    'At Fibex Telecom I handled 500+ interactions and sustained 65% retention through structured de-escalation. At UNEFA I delivered L1 support to 20+ internal users a day and turned recurring issues into knowledge base articles that cut repeat requests.',
  'about.listTitle': 'What I bring',
  'about.li1': 'Omnichannel support over chat, email and ticketing (Zendesk, HubSpot).',
  'about.li2': 'De-escalating frustrated users and communicating clearly under pressure.',
  'about.li3': 'L1 help desk: accounts, access, connectivity and product features.',
  'about.li4': 'Knowledge base, self-serve FAQs and internal documentation.',
  'about.li5': 'Incident prioritisation and meeting SLA and FCR targets.',

  'services.heading': 'Where I add value',
  'services.sub': 'From the first ticket to the article that prevents the next one.',
  'services.1.title': 'Omnichannel support (chat and email)',
  'services.1.desc':
    'Non-voice support in Zendesk and HubSpot Service Hub, with a clear tone and replies that hold up under volume.',
  'services.2.title': 'L1 help desk and SaaS troubleshooting',
  'services.2.desc':
    'First-line diagnosis of accounts, access, connectivity and product features; escalations with the context already gathered.',
  'services.3.title': 'SLA, FCR and prioritisation',
  'services.3.desc':
    'Triaging incidents by criticality and following through to closure without losing sight of response times.',
  'services.4.title': 'Knowledge base and onboarding',
  'services.4.desc':
    'Articles, FAQs and step-by-step guides for non-technical users, plus product walkthroughs.',

  'cases.heading': 'What changed, in numbers',
  'cases.sub': 'Three concrete results from my experience, not portfolio promises.',
  'cases.1.tag': 'Retention',
  'cases.1.title': '65% of customers retained',
  'cases.1.desc':
    "At Fibex Telecom I applied structured de-escalation and active listening, and resolved each user's real friction point on every contact.",
  'cases.1.caption': 'customer retention rate',
  'cases.2.tag': 'Volume',
  'cases.2.title': '500+ interactions handled',
  'cases.2.desc':
    'I kept up 25+ daily enquiries over chat and email, logging and prioritising every ticket in HubSpot Service Hub with SLA and response-time tracking.',
  'cases.2.caption': 'interactions handled at Fibex Telecom',
  'cases.3.tag': 'Help desk',
  'cases.3.title': 'L1 support for 20+ users a day',
  'cases.3.desc':
    'At UNEFA I resolved software, access and connectivity issues for faculty, staff and students, and documented recurring cases as self-serve articles.',
  'cases.3.caption': 'internal users supported every day',

  'exp.heading': 'Track record',
  'exp.sub': 'Customer support in telecoms and internal help desk in higher education.',
  'exp.1.date': 'Mar 2026 — Jul 2026',
  'exp.1.title': 'Customer Support Specialist',
  'exp.1.company': 'Fibex Telecom · Tinaquillo, Venezuela · Remote',
  'exp.1.b1':
    'Handled 25+ daily enquiries (500+ total) over chat and email, with clear and empathetic solutions for service and account issues.',
  'exp.1.b2': 'Sustained 65% customer retention through structured de-escalation and active listening.',
  'exp.1.b3': 'Logged, tracked and prioritised tickets in HubSpot Service Hub, with strict SLA compliance.',
  'exp.1.b4':
    'Walked non-technical users through fixes step by step and collected feedback to improve support channels.',
  'exp.2.date': 'Jan 2025 — Dec 2025',
  'exp.2.title': 'Customer Support & Help Desk Technician',
  'exp.2.company': 'UNEFA · Tinaquillo, Venezuela',
  'exp.2.b1':
    'Delivered L1 support to 20+ daily internal users (faculty, staff and students): software, access and connectivity.',
  'exp.2.b2': 'Documented recurring issues and wrote knowledge base articles and self-serve FAQs.',
  'exp.2.b3': 'Logged and classified tickets, prioritising critical incidents to keep FCR high.',
  'exp.2.b4': 'Translated technical requirements into plain language for non-technical profiles.',

  'tools.heading': 'Tools',
  'tools.sub': 'The ones I use every day',
  'langs.heading': 'Languages and time zone',
  'langs.sub': 'Who I can talk to, and when',
  'langs.1.name': 'Spanish',
  'langs.1.level': 'Native',
  'langs.2.name': 'English',
  'langs.2.level': 'B2 professional · written',
  'langs.3.name': 'Time zone',
  'langs.3.level': 'UTC-4 · full EST overlap',

  'edu.heading': 'Education',
  'edu.title': 'Technical foundation and continuous learning',
  'edu.degree': 'Computer Science Technician',
  'edu.school': 'ETIRZ José Laurencio Silva · Venezuela · 2025',
  'edu.desc':
    "A computer science background that lets me understand what's behind each incident and talk to the technical team without a translator.",
  'edu.certsTitle': 'Certifications',
  'edu.cert1': 'Zendesk Customer Service Professional Certificate',
  'edu.cert2': 'Specialization Program — University of Chicago × Santander Open Academy',
  'edu.cert3': 'Specialization Program — IE University × Santander Open Academy',

  'contact.heading': 'Shall we talk?',
  'contact.lead':
    "I'm looking for my next role in customer support or help desk, remote. Tell me what your team needs and I'll reply the same day.",
  'contact.copy': 'Copy email',
  'contact.cv': 'Download CV',
  'contact.note': 'Immediate availability · Remote · UTC-4 with full EST overlap.',

  'form.name': 'Your name',
  'form.email': 'Your email',
  'form.message': 'Message',
  'form.placeholder': 'Tell me briefly what you need…',
  'form.submit': 'Send message',
  'form.note': 'This form opens your email app with the message ready to send.',

  'footer.left': '© 2026 Alejandro Brett Marcano · Customer support',
  'footer.right': 'Built with HTML, CSS and JavaScript'
};

const META = {
  es: {
    title: 'Alejandro Brett Marcano — Soporte al cliente y help desk N1',
    description:
      'Portafolio de Alejandro Brett Marcano, especialista en soporte al cliente para SaaS B2B: atención omnicanal por chat y email, help desk N1, SLA, FCR y base de conocimiento. Inglés B2, remoto, disponibilidad inmediata.',
    ogTitle: 'Alejandro Brett Marcano — Soporte al cliente y help desk N1',
    ogDescription:
      'Soporte omnicanal (chat y email) para SaaS B2B: Zendesk, HubSpot Service Hub, SLA, FCR y base de conocimiento.',
    ogLocale: 'es_ES'
  },
  en: {
    title: 'Alejandro Brett Marcano — Customer Support Specialist · B2B SaaS',
    description:
      'Portfolio of Alejandro Brett Marcano, customer support specialist for B2B SaaS: omnichannel chat and email support, L1 help desk, SLA, FCR and knowledge base. English B2, remote, immediate availability.',
    ogTitle: 'Alejandro Brett Marcano — Customer Support Specialist · B2B SaaS',
    ogDescription:
      'Omnichannel support (chat and email) for B2B SaaS: Zendesk, HubSpot Service Hub, SLA, FCR and knowledge base.',
    ogLocale: 'en_US'
  }
};

/* ---------- 1. Idioma ---------- */

const i18nEls = Array.from(document.querySelectorAll('[data-i18n]'));
const placeholderEls = Array.from(document.querySelectorAll('[data-i18n-placeholder]'));

// Guardamos el texto original (español) para poder volver sin duplicarlo en JS.
i18nEls.forEach((el) => {
  el.dataset.esText = el.textContent.trim();
});
placeholderEls.forEach((el) => {
  el.dataset.esPlaceholder = el.getAttribute('placeholder') || '';
});

function setMeta(lang) {
  const m = META[lang] || META.es;
  document.title = m.title;

  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', m.description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', m.ogTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', m.ogDescription);

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', m.ogLocale);
}

function applyLanguage(lang) {
  const isEn = lang === 'en';

  document.documentElement.lang = lang;

  i18nEls.forEach((el) => {
    const key = el.dataset.i18n;
    const translated = isEn ? EN[key] : undefined;
    el.textContent = translated !== undefined ? translated : el.dataset.esText;
  });

  placeholderEls.forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const translated = isEn ? EN[key] : undefined;
    el.setAttribute('placeholder', translated !== undefined ? translated : el.dataset.esPlaceholder);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  const toggle = document.getElementById('navToggle');
  if (toggle) {
    toggle.setAttribute(
      'aria-label',
      navOpen ? (isEn ? 'Close menu' : 'Cerrar menú') : (isEn ? 'Open menu' : 'Abrir menú')
    );
  }

  copyLabel.dataset.active = isEn ? 'Email copied ✓' : 'Correo copiado ✓';
  copyLabel.dataset.idle = isEn ? 'Copy email' : 'Copiar correo';

  setMeta(lang);

  try {
    localStorage.setItem('portfolio-lang', lang);
  } catch (e) {
    /* almacenamiento no disponible: seguimos sin recordar la preferencia */
  }
}

const copyLabel = document.querySelector('#copyEmail .copy-label');

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

/* ---------- 2. Menú móvil ---------- */

const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
let navOpen = false;

function setNav(open) {
  navOpen = open;
  nav.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  const isEn = document.documentElement.lang === 'en';
  navToggle.setAttribute(
    'aria-label',
    open ? (isEn ? 'Close menu' : 'Cerrar menú') : (isEn ? 'Open menu' : 'Abrir menú')
  );
}

if (navToggle) {
  navToggle.addEventListener('click', () => setNav(!navOpen));
}

if (nav) {
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setNav(false));
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navOpen) setNav(false);
});

/* ---------- 3. Animación al hacer scroll ---------- */

const revealEls = document.querySelectorAll('.reveal');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (revealEls.length && !prefersReduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-in'));
}

/* ---------- 4. Correo, copiar y formulario ---------- */

// Rellena todos los correos visibles con la constante de arriba.
document.querySelectorAll('[data-email-text]').forEach((el) => {
  el.textContent = CONTACT_EMAIL;
  if (el.tagName === 'A') el.setAttribute('href', `mailto:${CONTACT_EMAIL}`);
});

const copyBtn = document.getElementById('copyEmail');

if (copyBtn) {
  let resetTimer = null;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch (err) {
      // Fallback para contextos sin permiso de portapapeles.
      const tmp = document.createElement('textarea');
      tmp.value = CONTACT_EMAIL;
      tmp.setAttribute('readonly', '');
      tmp.style.position = 'absolute';
      tmp.style.left = '-9999px';
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand('copy');
      document.body.removeChild(tmp);
    }

    copyLabel.textContent = copyLabel.dataset.active;
    copyBtn.classList.add('is-copied');

    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      copyLabel.textContent = copyLabel.dataset.idle;
      copyBtn.classList.remove('is-copied');
    }, 2200);
  });
}

const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const isEn = document.documentElement.lang === 'en';

    const subject = encodeURIComponent(
      isEn ? `Portfolio enquiry from ${name}` : `Contacto desde el portafolio — ${name}`
    );
    const body = encodeURIComponent(
      `${isEn ? 'Name' : 'Nombre'}: ${name}\n${isEn ? 'Email' : 'Correo'}: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}

/* ---------- Arranque ---------- */

let savedLang = 'es';
try {
  savedLang = localStorage.getItem('portfolio-lang') || 'es';
} catch (e) {
  /* sin preferencia guardada */
}

applyLanguage(savedLang === 'en' ? 'en' : 'es');
