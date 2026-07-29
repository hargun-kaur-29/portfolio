// Minimal, dependency-free: highlight the active section in the sticky nav.
const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".toc a");

if (sections.length && links.length && "IntersectionObserver" in window) {
  const map = new Map();
  links.forEach((link) => map.set(link.getAttribute("href").slice(1), link));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = map.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach((l) => l.style.color = "");
          link.style.color = "var(--brass)";
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}
