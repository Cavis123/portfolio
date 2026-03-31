document.addEventListener("DOMContentLoaded", () => {
  const THEME_KEY = "preferred-theme";

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  const toggle = document.getElementById("themeToggle");
  const applyThemeState = (enabled) => {
    if (enabled) {
      document.documentElement.setAttribute("data-theme", "high-contrast");
      toggle?.setAttribute("aria-pressed", "true");
      localStorage.setItem(THEME_KEY, "high-contrast");
      return;
    }

    document.documentElement.removeAttribute("data-theme");
    toggle?.setAttribute("aria-pressed", "false");
    localStorage.removeItem(THEME_KEY);
  };

  applyThemeState(localStorage.getItem(THEME_KEY) === "high-contrast");

  toggle?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyThemeState(current !== "high-contrast");
  });

  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  const setMenuOpen = (open) => {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    mobileNav.setAttribute("data-open", open ? "true" : "false");
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
});
