import { useEffect, useMemo, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "../../utils/portfolioData.js";
import { useScrollSpy } from "../../hooks/useScrollSpy.js";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar container" aria-label="Navegacao principal">
        <a className="brand" href="#inicio" aria-label="Artur, voltar ao inicio">
          <span className="brand__mark" aria-hidden="true">
            A
          </span>
          <span className="brand__text">Artur</span>
        </a>

        <div className={`nav-panel ${isOpen ? "is-open" : ""}`} id="primary-navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeSwitcher />
          <button
            className="nav-toggle"
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
