const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const navLinks = [...document.querySelectorAll(".nav-links a")];
const revealElements = document.querySelectorAll("[data-reveal]");
const sections = [...document.querySelectorAll("main section[id]")];

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const closeMenu = () => {
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Abrir menu");
  navMenu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

const openMenu = () => {
  navToggle.setAttribute("aria-expanded", "true");
  navToggle.setAttribute("aria-label", "Fechar menu");
  navMenu.classList.add("is-open");
  document.body.classList.add("menu-open");
};

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

// Progressive reveal keeps the first paint clean and adds motion only when useful.
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

if ("IntersectionObserver" in window) {
  const activeSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);

        navLinks.forEach((link) => link.classList.remove("is-active"));
        activeLink?.classList.add("is-active");
      });
    },
    {
      threshold: 0.32,
      rootMargin: "-22% 0px -48% 0px",
    },
  );

  sections.forEach((section) => activeSectionObserver.observe(section));
}
