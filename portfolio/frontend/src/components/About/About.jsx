import { FaDumbbell, FaGamepad, FaGraduationCap, FaKeyboard, FaMapMarkerAlt } from "react-icons/fa";
import GlassCard from "../Cards/GlassCard.jsx";
import Reveal from "../Animations/Reveal.jsx";
import { education, interests, personalInfo } from "../../utils/portfolioData.js";

const profileCards = [
  { icon: FaMapMarkerAlt, label: "Localizacao", value: personalInfo.location },
  { icon: FaGraduationCap, label: "Formacao", value: "Licenciatura em Engenharia Informatica, em curso" },
  { icon: FaKeyboard, label: "Base tecnica", value: "CTeSP em Redes e Sistemas Informaticos, concluido em 2025" },
  { icon: FaDumbbell, label: "Rotina", value: "Estudo, treino e desenvolvimento pessoal" }
];

export default function About() {
  return (
    <section className="section section--about" id="sobre" aria-labelledby="about-title">
      <div className="container section-grid">
        <Reveal className="section-heading">
          <span className="section-kicker">Sobre mim</span>
          <h2 id="about-title">Disciplina tecnica com curiosidade criativa.</h2>
        </Reveal>

        <div className="about-content">
          <Reveal className="section-copy">
            <p>{personalInfo.about}</p>
            <p>{personalInfo.lifestyle}</p>
          </Reveal>

          <div className="profile-grid">
            {profileCards.map((card) => (
              <GlassCard key={card.label} className="profile-card">
                <card.icon aria-hidden="true" />
                <span>{card.label}</span>
                <strong>{card.value}</strong>
              </GlassCard>
            ))}
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <GlassCard key={item.title} className="education-card">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </GlassCard>
            ))}
          </div>

          <Reveal className="interest-strip" aria-label="Interesses pessoais">
            <FaGamepad aria-hidden="true" />
            {interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
