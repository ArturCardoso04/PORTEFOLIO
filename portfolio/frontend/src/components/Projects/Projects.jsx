import Reveal from "../Animations/Reveal.jsx";

export default function Projects() {
  return (
    <section className="section" id="projetos" aria-labelledby="projects-title">
      <div className="container">
        <Reveal className="section-header section-header--split">
          <div>
            <span className="section-kicker">Projetos</span>
            <h2 id="projects-title">Portefolio e projetos em preparacao.</h2>
          </div>
          <p>
            Ainda estou a organizar os meus projetos publicos oficiais. Prefiro mostrar
            trabalho com contexto, qualidade e maturidade, em vez de preencher esta
            secao apenas por preencher.
          </p>
        </Reveal>

        <Reveal className="projects-empty">
          <span>Em preparacao</span>
          <h3>Projetos oficiais serao adicionados quando estiverem prontos.</h3>
          <p>
            Neste momento, a prioridade e construir, rever e publicar projetos com
            qualidade suficiente para representar bem o meu percurso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
