import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "../../utils/portfolioData.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand" href="#inicio" aria-label="Artur, voltar ao inicio">
            <span className="brand__mark" aria-hidden="true">
              A
            </span>
            <span className="brand__text">Artur</span>
          </a>
          <p>
            Portefolio pessoal focado em React, desenvolvimento web, redes,
            sistemas, inteligencia artificial e automacao.
          </p>
        </div>

        <div className="footer-links" aria-label="Links de contacto">
          <a href={`mailto:${personalInfo.email}`} aria-label="Enviar email">
            <FaEnvelope aria-hidden="true" />
          </a>
          <a href={`mailto:${personalInfo.email}?subject=Contacto%20GitHub`} aria-label="Contacto GitHub">
            <FaGithub aria-hidden="true" />
          </a>
          <a href={`mailto:${personalInfo.email}?subject=Contacto%20LinkedIn`} aria-label="Contacto LinkedIn">
            <FaLinkedinIn aria-hidden="true" />
          </a>
          <a href="#inicio" aria-label="Voltar ao topo">
            <FaArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Artur. Desenvolvido com rigor, disciplina e detalhe.</span>
        <span>{personalInfo.location}</span>
      </div>
    </footer>
  );
}
