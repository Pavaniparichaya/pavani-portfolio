"use strict";
// Accessible navigation and a dynamic footer year. Content remains readable without JS.
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
const links = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = [...document.querySelectorAll('main section[id]')];
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

function closeMenu() {
  toggle?.setAttribute("aria-expanded", "false");
  toggle?.setAttribute("aria-label", "Open navigation");
  nav?.classList.remove("is-open");
}
toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  nav?.classList.toggle("is-open", open);
});
links.forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
document.addEventListener("click", e => {
  if (nav?.classList.contains("is-open") && !nav.contains(e.target) && !toggle?.contains(e.target)) closeMenu();
});
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => {
      const active = link.getAttribute("href") === `#${entry.target.id}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }), {rootMargin:"-22% 0px -70% 0px"});
  sections.forEach(s => observer.observe(s));
}
