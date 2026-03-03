document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  const toggle = document.getElementById("themeToggle");
  toggle?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "high-contrast") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", "high-contrast");
    }
  });
});
