export function getPortfolioSummary(_request, response) {
  response.status(200).json({
    name: "Artur",
    location: "Castro Daire, Viseu, Portugal",
    focus: ["React", "JavaScript", "Redes", "Sistemas Informaticos", "IA", "Automacao"],
    education: {
      degree: "Licenciatura em Engenharia Informatica, em curso",
      technicalCourse: "CTeSP em Redes e Sistemas Informaticos, concluido em 2025"
    },
    projects: "Projetos oficiais em preparacao para publicacao.",
    availability: "Aberto a oportunidades, estagios, colaboracoes e projetos tecnologicos."
  });
}
