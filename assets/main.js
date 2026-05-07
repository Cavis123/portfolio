document.addEventListener("DOMContentLoaded", () => {
  const THEME_KEY = "preferred-theme";
  const loader = document.getElementById("loader");
  const loaderBar = document.getElementById("loaderBar");
  const loaderPercent = document.getElementById("loaderPercent");
  const header = document.getElementById("header");
  const themeToggle = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

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
