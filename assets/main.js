document.addEventListener("DOMContentLoaded", () => {
  const THEME_KEY = "preferred-theme";
  const LANG_KEY = "preferred-language";
  const loader = document.getElementById("loader");
  const loaderBar = document.getElementById("loaderBar");
  const loaderPercent = document.getElementById("loaderPercent");
  const header = document.getElementById("header");
  const themeToggle = document.getElementById("themeToggle");
  const languageToggle = document.getElementById("languageToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  const translations = {
    index: {
      es: {
        title: "Gabriel Lugo · Infraestructura & IA",
        description: "Portfolio profesional de Gabriel Lugo: infraestructura, redes, automatización e inteligencia artificial aplicada.",
        text: {
          ".loader-code span:nth-child(3)": '  stack: ["Linux", "IA", "Redes"],',
          ".nav-link[data-section='home'] span:last-child": "Inicio",
          ".nav-link[data-section='about'] span:last-child": "Perfil",
          ".nav-link[data-section='services'] span:last-child": "Servicios",
          ".nav-link[data-section='projects'] span:last-child": "Casos",
          ".nav-link[data-section='contact'] span:last-child": "Contacto",
          ".bored-link": "¿Aburrido?",
          ".bored-hero-link span:first-child": "¿Aburrido?",
          ".hero-greeting span:first-child": "Hola, soy",
          ".hero-name .code-string": '"Infraestructura & IA"',
          ".hero-role": "<span>//</span> Arquitectura IT, redes, automatización e IA local",
          ".hero-description": "Diseño, despliego y estabilizo sistemas que combinan servidores, redes, APIs, automatización y modelos de IA para operar en producción.",
          ".hero-buttons .btn-primary span:first-child": "Consultar proyecto",
          ".hero-buttons .btn-secondary span:first-child": "Ver casos",
          ".badge-1 span": "Debian · Nginx · SSL",
          ".badge-2 strong": "IA local",
          ".badge-3 strong": "Redes",
          ".badge-3 span": "VLAN · DNS · Monitoreo",
          ".scroll-indicator span:last-child": "Scroll",
          "#wordScrollTitle span[aria-hidden='true']": "Construyo\u00a0",
          ".word-scroll li:nth-child(1)": "infraestructura.",
          ".word-scroll li:nth-child(2)": "redes estables.",
          ".word-scroll li:nth-child(3)": "automatización.",
          ".word-scroll li:nth-child(4)": "APIs internas.",
          ".word-scroll li:nth-child(5)": "IA local.",
          ".word-scroll li:nth-child(6)": "RAG documental.",
          ".word-scroll li:nth-child(7)": "paneles operativos.",
          ".word-scroll li:nth-child(8)": "monitoreo.",
          ".word-scroll li:nth-child(9)": "servicios 24/7.",
          ".word-scroll li:nth-child(10)": "arquitecturas mantenibles.",
          "#about .section-header h2": "<span>&lt;</span>Perfil<span>/&gt;</span>",
          ".about-copy > p:nth-child(1)": "Profesional IT enfocado en infraestructura, redes, automatización e inteligencia artificial aplicada. Trabajo desde la base operativa del sistema hasta la experiencia que usan las personas todos los días.",
          ".about-copy > p:nth-child(2)": "Mi criterio es simple: arquitectura clara, documentación replicable, observabilidad y automatización progresiva para que las soluciones se puedan mantener.",
          ".stat-card:nth-child(1) span": "Operación 24/7",
          ".stat-card:nth-child(2) span": "Áreas técnicas",
          ".stat-card:nth-child(3) span": "Foco en uptime",
          "#services .section-header h2": "<span>&lt;</span>Servicios<span>/&gt;</span>",
          ".service-card:nth-child(1) h3": "Infraestructura Linux",
          ".service-card:nth-child(1) p": "Debian/Ubuntu, Nginx, SSL/TLS, reverse proxy, hardening básico, backups y servicios internos.",
          ".service-card:nth-child(2) h3": "Redes & observabilidad",
          ".service-card:nth-child(2) p": "Segmentación, VLANs, DNS, DHCP, firewalls, dashboards, SNMP, logs y alertas.",
          ".service-card:nth-child(3) h3": "IA local & RAG",
          ".service-card:nth-child(3) p": "Asistentes internos con modelos locales, documentación propia, APIs y paneles de gestión.",
          ".service-card:nth-child(4) h3": "Automatización",
          ".service-card:nth-child(4) p": "Scripts Python, FastAPI, tareas programadas, reportes y flujos para reducir operación manual.",
          ".service-card:nth-child(5) h3": "Windows Server",
          ".service-card:nth-child(5) p": "Active Directory, DNS, DHCP, políticas, impresoras, file server y entornos mixtos.",
          ".service-card:nth-child(6) h3": "Paneles internos",
          ".service-card:nth-child(6) p": "Interfaces para turnos, reportes, gestión documental, administración y control operativo.",
          ".skill-panel:nth-child(1) h3": "Infraestructura & Redes",
          ".skill-panel:nth-child(2) h3": "Backend & Automatización",
          ".skill-panel:nth-child(3) h3": "IA & Operación",
          ".skill-panel:nth-child(3) .skill-meter:nth-child(2) span": "Modelos locales",
          ".skill-panel:nth-child(3) .skill-meter:nth-child(4) span": "Paneles de administración",
          ".stack-keywords h3": "Stack aplicado a",
          ".stack-keywords li:nth-child(1)": "productos.",
          ".stack-keywords li:nth-child(2)": "plataformas.",
          ".stack-keywords li:nth-child(3)": "aplicaciones web.",
          ".stack-keywords li:nth-child(4)": "interfaces.",
          ".stack-keywords li:nth-child(5)": "sistemas de diseño.",
          ".stack-keywords li:nth-child(6)": "plataformas API.",
          ".stack-keywords li:nth-child(7)": "servicios backend.",
          ".stack-keywords li:nth-child(8)": "sistemas distribuidos.",
          ".stack-keywords li:nth-child(9)": "arquitecturas de datos.",
          ".stack-keywords li:nth-child(10)": "pipelines de automatización.",
          ".stack-keywords li:nth-child(11)": "infraestructura.",
          ".stack-keywords li:nth-child(12)": "herramientas para developers.",
          ".stack-keywords li:nth-child(13)": "sistemas de performance.",
          ".stack-keywords li:nth-child(14)": "plataformas edge.",
          ".stack-keywords li:nth-child(15)": "sistemas seguros.",
          ".stack-keywords li:nth-child(16)": "arquitecturas resilientes.",
          ".stack-keywords li:nth-child(17)": "software escalable.",
          ".stack-keywords li:nth-child(18)": "fundaciones técnicas.",
          "#projects .section-header h2": "<span>&lt;</span>Casos<span>/&gt;</span>",
          ".timeline-item:nth-child(1) .project-tag": "Infraestructura · IA local",
          ".timeline-item:nth-child(1) h3": "Asistente interno con conocimiento propio",
          ".timeline-item:nth-child(1) p": "Experiencia tipo ChatGPT en servidores propios con documentación interna como fuente de conocimiento.",
          ".timeline-item:nth-child(1) li:nth-child(1)": "Problema: información dispersa y consultas repetidas.",
          ".timeline-item:nth-child(1) li:nth-child(2)": "Solución: RAG, API backend, interfaz web y Nginx.",
          ".timeline-item:nth-child(2) .project-tag": "Redes · Monitoreo",
          ".timeline-item:nth-child(2) h3": "Segmentación y visibilidad de infraestructura",
          ".timeline-item:nth-child(2) p": "Topología, direccionamiento, VLANs y monitoreo para ordenar red corporativa y acelerar diagnóstico.",
          ".timeline-item:nth-child(2) li:nth-child(1)": "Problema: baja visibilidad y crecimiento desordenado.",
          ".timeline-item:nth-child(2) li:nth-child(2)": "Solución: separación lógica, métricas, dashboards y alertas.",
          ".timeline-item:nth-child(3) .project-tag": "Automatización · Backend",
          ".timeline-item:nth-child(3) h3": "Paneles web para procesos diarios",
          ".timeline-item:nth-child(3) p": "Interfaces internas para centralizar turnos, reportes y operaciones conectadas a bases existentes.",
          ".timeline-item:nth-child(3) li:nth-child(1)": "Problema: procesos manuales y archivos sueltos.",
          ".timeline-item:nth-child(3) li:nth-child(2)": "Solución: paneles livianos, reportes y flujos más simples.",
          ".cert-strip .project-tag": "Credenciales",
          ".cert-strip h2": "Certificaciones profesionales",
          ".cert-strip p": "Las certificaciones siguen en una página dedicada para no cargar el inicio.",
          ".cert-strip .btn": "Ver certificaciones",
          "#contact .section-header h2": "<span>&lt;</span>Contacto<span>/&gt;</span>",
          ".contact-copy h3": "Hablemos de tu infraestructura",
          ".contact-copy p:nth-child(2)": "Puedo ayudar a diseñar, desplegar o estabilizar infraestructura, o a incorporar IA local de forma realista a sistemas existentes.",
          ".status-pill": "Abierto a colaboraciones y proyectos desafiantes.",
          ".footer p:nth-child(2)": "Construido con HTML, CSS, JS y foco en sistemas reales."
        }
      },
      en: {
        title: "Gabriel Lugo · Infrastructure & AI",
        description: "Professional portfolio of Gabriel Lugo: infrastructure, networks, automation and applied artificial intelligence.",
        text: {
          ".loader-code span:nth-child(3)": '  stack: ["Linux", "AI", "Networks"],',
          ".nav-link[data-section='home'] span:last-child": "Home",
          ".nav-link[data-section='about'] span:last-child": "Profile",
          ".nav-link[data-section='services'] span:last-child": "Services",
          ".nav-link[data-section='projects'] span:last-child": "Cases",
          ".nav-link[data-section='contact'] span:last-child": "Contact",
          ".bored-link": "Boring?",
          ".bored-hero-link span:first-child": "Boring?",
          ".hero-greeting span:first-child": "Hi, I am",
          ".hero-name .code-string": '"Infrastructure & AI"',
          ".hero-role": "<span>//</span> IT architecture, networks, automation and local AI",
          ".hero-description": "I design, deploy and stabilize systems that combine servers, networks, APIs, automation and AI models for production environments.",
          ".hero-buttons .btn-primary span:first-child": "Discuss a project",
          ".hero-buttons .btn-secondary span:first-child": "View cases",
          ".badge-1 span": "Debian · Nginx · SSL",
          ".badge-2 strong": "Local AI",
          ".badge-3 strong": "Networks",
          ".badge-3 span": "VLAN · DNS · Monitoring",
          ".scroll-indicator span:last-child": "Scroll",
          "#wordScrollTitle span[aria-hidden='true']": "I build\u00a0",
          ".word-scroll li:nth-child(1)": "infrastructure.",
          ".word-scroll li:nth-child(2)": "stable networks.",
          ".word-scroll li:nth-child(3)": "automation.",
          ".word-scroll li:nth-child(4)": "internal APIs.",
          ".word-scroll li:nth-child(5)": "local AI.",
          ".word-scroll li:nth-child(6)": "document RAG.",
          ".word-scroll li:nth-child(7)": "operations panels.",
          ".word-scroll li:nth-child(8)": "monitoring.",
          ".word-scroll li:nth-child(9)": "24/7 services.",
          ".word-scroll li:nth-child(10)": "maintainable architectures.",
          "#about .section-header h2": "<span>&lt;</span>Profile<span>/&gt;</span>",
          ".about-copy > p:nth-child(1)": "IT professional focused on infrastructure, networks, automation and applied artificial intelligence. I work from the operational base of the system to the experience people use every day.",
          ".about-copy > p:nth-child(2)": "My approach is simple: clear architecture, reproducible documentation, observability and progressive automation so solutions can be maintained.",
          ".stat-card:nth-child(1) span": "24/7 operation",
          ".stat-card:nth-child(2) span": "Technical areas",
          ".stat-card:nth-child(3) span": "Uptime focus",
          "#services .section-header h2": "<span>&lt;</span>Services<span>/&gt;</span>",
          ".service-card:nth-child(1) h3": "Linux Infrastructure",
          ".service-card:nth-child(1) p": "Debian/Ubuntu, Nginx, SSL/TLS, reverse proxy, basic hardening, backups and internal services.",
          ".service-card:nth-child(2) h3": "Networks & observability",
          ".service-card:nth-child(2) p": "Segmentation, VLANs, DNS, DHCP, firewalls, dashboards, SNMP, logs and alerts.",
          ".service-card:nth-child(3) h3": "Local AI & RAG",
          ".service-card:nth-child(3) p": "Internal assistants with local models, internal documentation, APIs and management panels.",
          ".service-card:nth-child(4) h3": "Automation",
          ".service-card:nth-child(4) p": "Python scripts, FastAPI, scheduled tasks, reports and workflows to reduce manual operations.",
          ".service-card:nth-child(5) h3": "Windows Server",
          ".service-card:nth-child(5) p": "Active Directory, DNS, DHCP, policies, printers, file server and mixed environments.",
          ".service-card:nth-child(6) h3": "Internal panels",
          ".service-card:nth-child(6) p": "Interfaces for shifts, reports, document management, administration and operational control.",
          ".skill-panel:nth-child(1) h3": "Infrastructure & Networks",
          ".skill-panel:nth-child(2) h3": "Backend & Automation",
          ".skill-panel:nth-child(3) h3": "AI & Operations",
          ".skill-panel:nth-child(3) .skill-meter:nth-child(2) span": "Local models",
          ".skill-panel:nth-child(3) .skill-meter:nth-child(4) span": "Administration panels",
          ".stack-keywords h3": "Stack applied to",
          ".stack-keywords li:nth-child(1)": "products.",
          ".stack-keywords li:nth-child(2)": "platforms.",
          ".stack-keywords li:nth-child(3)": "web applications.",
          ".stack-keywords li:nth-child(4)": "interfaces.",
          ".stack-keywords li:nth-child(5)": "design systems.",
          ".stack-keywords li:nth-child(6)": "API platforms.",
          ".stack-keywords li:nth-child(7)": "backend services.",
          ".stack-keywords li:nth-child(8)": "distributed systems.",
          ".stack-keywords li:nth-child(9)": "data architectures.",
          ".stack-keywords li:nth-child(10)": "automation pipelines.",
          ".stack-keywords li:nth-child(11)": "infrastructure.",
          ".stack-keywords li:nth-child(12)": "developer tooling.",
          ".stack-keywords li:nth-child(13)": "performance systems.",
          ".stack-keywords li:nth-child(14)": "edge platforms.",
          ".stack-keywords li:nth-child(15)": "secure systems.",
          ".stack-keywords li:nth-child(16)": "resilient architectures.",
          ".stack-keywords li:nth-child(17)": "scalable software.",
          ".stack-keywords li:nth-child(18)": "technical foundations.",
          "#projects .section-header h2": "<span>&lt;</span>Cases<span>/&gt;</span>",
          ".timeline-item:nth-child(1) .project-tag": "Infrastructure · Local AI",
          ".timeline-item:nth-child(1) h3": "Internal assistant with proprietary knowledge",
          ".timeline-item:nth-child(1) p": "ChatGPT-like experience running on owned servers with internal documentation as the knowledge source.",
          ".timeline-item:nth-child(1) li:nth-child(1)": "Problem: scattered information and repeated questions.",
          ".timeline-item:nth-child(1) li:nth-child(2)": "Solution: RAG, backend API, web interface and Nginx.",
          ".timeline-item:nth-child(2) .project-tag": "Networks · Monitoring",
          ".timeline-item:nth-child(2) h3": "Infrastructure segmentation and visibility",
          ".timeline-item:nth-child(2) p": "Topology, addressing, VLANs and monitoring to organize a corporate network and accelerate troubleshooting.",
          ".timeline-item:nth-child(2) li:nth-child(1)": "Problem: low visibility and disorderly growth.",
          ".timeline-item:nth-child(2) li:nth-child(2)": "Solution: logical separation, metrics, dashboards and alerts.",
          ".timeline-item:nth-child(3) .project-tag": "Automation · Backend",
          ".timeline-item:nth-child(3) h3": "Web panels for daily processes",
          ".timeline-item:nth-child(3) p": "Internal interfaces to centralize shifts, reports and operations connected to existing databases.",
          ".timeline-item:nth-child(3) li:nth-child(1)": "Problem: manual processes and loose files.",
          ".timeline-item:nth-child(3) li:nth-child(2)": "Solution: lightweight panels, reports and simpler workflows.",
          ".cert-strip .project-tag": "Credentials",
          ".cert-strip h2": "Professional certifications",
          ".cert-strip p": "Certifications are kept on a dedicated page to keep the home page focused.",
          ".cert-strip .btn": "View certifications",
          "#contact .section-header h2": "<span>&lt;</span>Contact<span>/&gt;</span>",
          ".contact-copy h3": "Let's talk about your infrastructure",
          ".contact-copy p:nth-child(2)": "I can help design, deploy or stabilize infrastructure, or incorporate local AI realistically into existing systems.",
          ".status-pill": "Open to collaborations and challenging projects.",
          ".footer p:nth-child(2)": "Built with HTML, CSS, JS and a focus on real systems."
        }
      }
    },
    certs: {
      es: {
        title: "Certificaciones · Gabriel Lugo",
        description: "Certificaciones profesionales de Gabriel Lugo en seguridad, CCTV, control de acceso, display y thermal.",
        text: {
          ".nav-link[href='index.html#about'] span:last-child": "Perfil",
          ".nav-link[href='index.html#services'] span:last-child": "Servicios",
          ".nav-link[href='index.html#projects'] span:last-child": "Casos",
          ".nav-link[href='index.html#contact'] span:last-child": "Contacto",
          ".bored-link": "¿Aburrido?",
          ".nav-controls .nav-control-link:not(.bored-link)": "Inicio",
          ".hero-greeting span:first-child": "Credenciales profesionales",
          ".hero-name .code-variable": "certificaciones",
          ".hero-description": "Certificaciones vinculadas a seguridad electrónica, CCTV, control de acceso, display y soluciones térmicas.",
          ".hero-buttons .btn-primary": "Solicitar certificados",
          ".hero-buttons .btn-secondary": "Volver a contacto",
          ".cert-card dl div:nth-child(2) dt": "Válido hasta",
          ".cert-card dl div:nth-child(2) dd": "Septiembre, 2027",
          ".cert-card:nth-child(3) dl div:nth-child(2) dd": "Octubre, 2027",
          "section:nth-of-type(3) .cert-card dl div:nth-child(2) dd": "Agosto, 2030",
          ".cert-card a": "Solicitar certificado",
          ".footer p:nth-child(2)": "Certificaciones disponibles bajo solicitud."
        }
      },
      en: {
        title: "Certifications · Gabriel Lugo",
        description: "Professional certifications of Gabriel Lugo in security, CCTV, access control, display and thermal solutions.",
        text: {
          ".nav-link[href='index.html#about'] span:last-child": "Profile",
          ".nav-link[href='index.html#services'] span:last-child": "Services",
          ".nav-link[href='index.html#projects'] span:last-child": "Cases",
          ".nav-link[href='index.html#contact'] span:last-child": "Contact",
          ".bored-link": "Boring?",
          ".nav-controls .nav-control-link:not(.bored-link)": "Home",
          ".hero-greeting span:first-child": "Professional credentials",
          ".hero-name .code-variable": "certifications",
          ".hero-description": "Certifications related to electronic security, CCTV, access control, display and thermal solutions.",
          ".hero-buttons .btn-primary": "Request certificates",
          ".hero-buttons .btn-secondary": "Back to contact",
          ".cert-card dl div:nth-child(2) dt": "Valid until",
          ".cert-card dl div:nth-child(2) dd": "September, 2027",
          ".cert-card:nth-child(3) dl div:nth-child(2) dd": "October, 2027",
          "section:nth-of-type(3) .cert-card dl div:nth-child(2) dd": "August, 2030",
          ".cert-card a": "Request certificate",
          ".footer p:nth-child(2)": "Certifications available upon request."
        }
      }
    }
  };

  const pageKey = document.body.classList.contains("certifications-page") || location.pathname.includes("certifications")
    ? "certs"
    : "index";

  const setContent = (selector, value) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (value.includes("<")) {
        element.innerHTML = value;
        return;
      }
      element.textContent = value;
    });
  };

  const applyLanguage = (lang) => {
    const dictionary = translations[pageKey]?.[lang];
    if (!dictionary) return;

    document.documentElement.lang = lang;
    document.title = dictionary.title;
    document.querySelector("meta[name='description']")?.setAttribute("content", dictionary.description);
    Object.entries(dictionary.text).forEach(([selector, value]) => setContent(selector, value));

    if (languageToggle) {
      languageToggle.textContent = lang === "es" ? "EN" : "ES";
      languageToggle.setAttribute("aria-pressed", String(lang === "en"));
      languageToggle.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
    }

    localStorage.setItem(LANG_KEY, lang);
  };

  applyLanguage(localStorage.getItem(LANG_KEY) || "es");
  languageToggle?.addEventListener("click", () => {
    const current = localStorage.getItem(LANG_KEY) || "es";
    applyLanguage(current === "es" ? "en" : "es");
  });

  const setTheme = (contrast) => {
    document.body.setAttribute("data-theme", contrast ? "contrast" : "dark");
    themeToggle?.setAttribute("aria-pressed", String(contrast));
    if (contrast) {
      localStorage.setItem(THEME_KEY, "contrast");
      return;
    }
    localStorage.removeItem(THEME_KEY);
  };

  setTheme(localStorage.getItem(THEME_KEY) === "contrast");
  themeToggle?.addEventListener("click", () => {
    setTheme(document.body.getAttribute("data-theme") !== "contrast");
  });

  let progress = 0;
  const loaderTimer = window.setInterval(() => {
    progress = Math.min(100, progress + Math.ceil(Math.random() * 9));
    if (loaderBar) loaderBar.style.width = `${progress}%`;
    if (loaderPercent) loaderPercent.textContent = `${progress}%`;
    if (progress >= 100) {
      window.clearInterval(loaderTimer);
      window.setTimeout(() => loader?.classList.add("is-hidden"), 260);
    }
  }, 70);

  const setMenuOpen = (open) => {
    if (!menuToggle || !navMenu) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    navMenu.setAttribute("data-open", String(open));
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  const syncHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 18);
  };
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  const particleHost = document.getElementById("particles");
  if (particleHost) {
    const particleCount = window.matchMedia("(max-width: 700px)").matches ? 24 : 48;
    for (let index = 0; index < particleCount; index += 1) {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${90 + Math.random() * 30}%`;
      particle.style.setProperty("--duration", `${8 + Math.random() * 9}s`);
      particle.style.setProperty("--drift", `${-40 + Math.random() * 80}px`);
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particleHost.appendChild(particle);
    }
  }

  const wordScroll = document.getElementById("wordScroll");
  if (wordScroll) {
    const items = [...wordScroll.querySelectorAll("li")];
    wordScroll.style.setProperty("--count", String(items.length));
    items.forEach((item, index) => {
      item.style.setProperty("--i", String(index));
    });
  }

  const counters = new Set();
  const animateCounter = (element) => {
    if (counters.has(element)) return;
    counters.add(element);

    const target = Number(element.dataset.count || "0");
    const suffix = target === 100 ? "%" : target === 24 ? "/7" : "+";
    const duration = 950;
    const startedAt = performance.now();

    const tick = (now) => {
      const elapsed = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const value = Math.round(target * eased);
      element.textContent = `${value}${suffix}`;
      if (elapsed < 1) window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);
  };

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");

        entry.target.querySelectorAll?.(".stat-number").forEach(animateCounter);
        entry.target.querySelectorAll?.(".skill-meter").forEach((meter) => {
          meter.style.setProperty("--level", `${meter.dataset.level || 0}%`);
        });
      });
    },
    { threshold: 0.18 },
  );

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  document.querySelectorAll(".skill-meter").forEach((meter) => {
    meter.style.setProperty("--level", "0%");
  });

  const sections = [...document.querySelectorAll("section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const navObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.dataset.section === visible.target.id);
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] },
  );

  sections.forEach((section) => navObserver.observe(section));
});
