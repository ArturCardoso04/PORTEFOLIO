import heroWorkspace from "../assets/images/hero-workspace.webp";

export const personalInfo = {
  name: "Artur",
  age: 22,
  location: "Castro Daire, Viseu, Portugal",
  email: "arturfcardoso04@gmail.com",
  phone: "+351 936 254 615",
  headline: "Engenharia Informatica, desenvolvimento web e tecnologia aplicada.",
  summary:
    "Sou o Artur, tenho 22 anos e estudo Engenharia Informatica. Gosto de transformar ideias em experiencias web rapidas, elegantes e bem estruturadas, juntando React, JavaScript, redes, sistemas informaticos, inteligencia artificial e automacao.",
  about:
    "Sou uma pessoa curiosa, organizada e com muita vontade de aprender. Gosto de trabalhar com calma, perceber bem os problemas e melhorar aos poucos, com atencao ao detalhe e respeito pelo processo. A tecnologia interessa-me porque junta criatividade, logica e impacto pratico.",
  lifestyle:
    "Fora do estudo e dos projetos, gosto de gaming, piano digital, tecnologia, inteligencia artificial, criar conteudo para TikTok e manter uma rotina ligada ao treino e ao desenvolvimento pessoal. Sao interesses que me ajudam a manter disciplina, criatividade e equilibrio."
};

export const assets = {
  heroWorkspace
};

export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "timeline", label: "Timeline" },
  { id: "contacto", label: "Contacto" }
];

export const heroStats = [
  { value: 22, suffix: "", label: "anos", detail: "perfil jovem, disciplinado e em crescimento" },
  { value: 2, suffix: "", label: "formacoes", detail: "Licenciatura em curso e CTeSP concluido" },
  { value: 14, suffix: "+", label: "competencias", detail: "web, IA, redes, sistemas e automacao" },
  { value: 2026, suffix: "", label: "experiencia TI", detail: "monitor num campo de ferias para jovens" }
];

export const education = [
  {
    title: "Licenciatura em Engenharia Informatica, em curso",
    label: "Em curso",
    description:
      "Formacao superior que estou atualmente a frequentar, com foco em programacao, engenharia de software, sistemas, algoritmos e desenvolvimento de solucoes digitais."
  },
  {
    title: "CTeSP em Redes e Sistemas Informaticos, concluido em 2025",
    label: "Concluido em 2025",
    description:
      "Formacao tecnica ja concluida, orientada a redes, suporte, administracao de sistemas, diagnostico e manutencao de ambientes informaticos."
  }
];

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      {
        name: "React",
        description: "Componentes reutilizaveis, estados, hooks, composicao visual e interfaces escalaveis."
      },
      {
        name: "JavaScript",
        description: "Logica de interface, ES2024, eventos, validacao, manipulacao de dados e integracao com APIs."
      },
      {
        name: "HTML",
        description: "Estrutura semantica, acessibilidade base, SEO tecnico e conteudo bem organizado."
      },
      {
        name: "CSS",
        description: "Design responsivo, sistemas visuais, animacoes, microinteracoes e layouts modernos."
      }
    ]
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      {
        name: "Node.js",
        description: "APIs organizadas, estrutura de servicos e preparacao para funcionalidades futuras."
      },
      {
        name: "Express",
        description: "Rotas, middleware, controllers, validacao e respostas consistentes."
      },
      {
        name: "Automacao",
        description: "Fluxos repetiveis, scripts, integracoes e reducao de trabalho manual."
      }
    ]
  },
  {
    id: "tools",
    label: "Ferramentas",
    skills: [
      {
        name: "Git",
        description: "Controlo de versoes, historico limpo, organizacao por branches e colaboracao."
      },
      {
        name: "GitHub",
        description: "Gestao de repositorios, documentacao tecnica e publicacao progressiva de projetos."
      },
      {
        name: "Resolucao de Problemas",
        description: "Diagnostico meticuloso, decomposicao de desafios e foco em solucoes robustas."
      }
    ]
  },
  {
    id: "ai",
    label: "IA",
    skills: [
      {
        name: "Inteligencia Artificial",
        description: "Exploracao pratica de ferramentas de IA para pesquisa, produtividade e prototipagem."
      },
      {
        name: "Prompt Engineering",
        description: "Criacao de prompts claros, iteracao controlada e utilizacao de IA em contexto real."
      },
      {
        name: "Criacao de Conteudo",
        description: "Ideacao, escrita, edicao e comunicacao de tecnologia em formatos curtos."
      }
    ]
  },
  {
    id: "networks",
    label: "Redes",
    skills: [
      {
        name: "Redes",
        description: "Conectividade, diagnostico, configuracao e compreensao da infraestrutura por tras do produto."
      },
      {
        name: "Sistemas Informaticos",
        description: "Instalacao, suporte, manutencao e estabilidade operacional em ambientes tecnicos."
      }
    ]
  }
];

export const experience = [
  {
    period: "Verao 2026",
    role: "Monitor de Tecnologia",
    company: "Campo de ferias para criancas do 1.º ciclo",
    description:
      "Participacao em atividades educativas ligadas a tecnologia, num contexto de campo de ferias para criancas do 1.º ciclo. O foco esteve em acompanhar atividades praticas, simples e adequadas a criancas, ajudando a tornar a tecnologia mais acessivel e interessante.",
    bullets: [
      "Acompanhamento de atividades com componente tecnologica.",
      "Apoio a criancas em tarefas simples, praticas e educativas.",
      "Comunicacao clara, paciencia e organizacao em ambiente de grupo."
    ]
  }
];

export const timeline = [
  {
    year: "Atual",
    title: "Licenciatura em Engenharia Informatica, em curso",
    text:
      "Formacao superior em curso, com consolidacao de bases de programacao, sistemas, engenharia de software e pensamento computacional."
  },
  {
    year: "2026",
    title: "Monitor de tecnologia em campo de ferias",
    text:
      "Atividades ligadas a tecnologia com criancas do 1.º ciclo, em ambiente educativo e pratico."
  },
  {
    year: "2025",
    title: "CTeSP em Redes e Sistemas Informaticos concluido",
    text:
      "Base tecnica em redes, sistemas, suporte, diagnostico e manutencao de ambientes informaticos."
  },
  {
    year: "Continuo",
    title: "Evolucao em web, IA e criacao de conteudo",
    text:
      "Aprendizagem constante em React, automacao, prompt engineering, conteudo tecnologico e produtos digitais."
  }
];

export const interests = [
  "Gaming",
  "Piano Digital",
  "Tecnologia",
  "Inteligencia Artificial",
  "Conteudo para TikTok",
  "Bodybuilding",
  "Desenvolvimento pessoal"
];

export const contactChannels = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`
  },
  {
    label: "Telefone",
    value: personalInfo.phone,
    href: "tel:+351936254615"
  },
  {
    label: "LinkedIn",
    value: "Networking profissional e oportunidades em tecnologia",
    href: `mailto:${personalInfo.email}?subject=Contacto%20via%20LinkedIn`
  },
  {
    label: "GitHub",
    value: "Codigo, projetos web e evolucao tecnica",
    href: `mailto:${personalInfo.email}?subject=Pedido%20de%20GitHub`
  },
  {
    label: "TikTok",
    value: "Criacao de conteudo sobre tecnologia e IA",
    href: `mailto:${personalInfo.email}?subject=Contacto%20via%20TikTok`
  },
  {
    label: "Localizacao",
    value: personalInfo.location,
    href: "https://www.google.com/maps/search/Castro+Daire,+Viseu,+Portugal"
  }
];
