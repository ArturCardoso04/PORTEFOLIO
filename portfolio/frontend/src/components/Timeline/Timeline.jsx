import Reveal from "../Animations/Reveal.jsx";
import { timeline } from "../../utils/portfolioData.js";

export default function Timeline() {
  return (
    <section className="section" id="timeline" aria-labelledby="timeline-title">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-kicker">Timeline</span>
          <h2 id="timeline-title">Um percurso construido com metodo.</h2>
          <p>
            A evolucao junta estudo, pratica tecnica, disciplina pessoal e interesse
            continuo por tecnologia, produtos digitais e inteligencia artificial.
          </p>
        </Reveal>

        <div className="timeline">
          {timeline.map((item, index) => (
            <Reveal key={`${item.year}-${item.title}`} className="timeline-item" delay={index * 0.04}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
