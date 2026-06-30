import { FaChalkboardTeacher, FaCheckCircle } from "react-icons/fa";
import Reveal from "../Animations/Reveal.jsx";
import GlassCard from "../Cards/GlassCard.jsx";
import { experience } from "../../utils/portfolioData.js";

export default function Experience() {
  return (
    <section className="section section--muted" id="experiencia" aria-labelledby="experience-title">
      <div className="container section-grid">
        <Reveal className="section-heading">
          <span className="section-kicker">Experiencia</span>
          <h2 id="experience-title">Tecnologia em contexto educativo.</h2>
        </Reveal>

        <div className="experience-stack">
          {experience.map((item) => (
            <GlassCard key={item.role} className="experience-card">
              <div className="experience-card__icon">
                <FaChalkboardTeacher aria-hidden="true" />
              </div>
              <div>
                <span className="experience-card__period">{item.period}</span>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.description}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>
                      <FaCheckCircle aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
