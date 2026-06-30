import { useMemo, useState } from "react";
import {
  FaBrain,
  FaCode,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNetworkWired,
  FaNodeJs,
  FaReact,
  FaRobot,
  FaServer,
  FaTools
} from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "../Animations/Reveal.jsx";
import GlassCard from "../Cards/GlassCard.jsx";
import { skillCategories } from "../../utils/portfolioData.js";

const iconMap = {
  React: FaReact,
  JavaScript: FaJs,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  "Node.js": FaNodeJs,
  Express: FaServer,
  Automacao: FaRobot,
  Git: FaGitAlt,
  GitHub: FaGithub,
  "Resolucao de Problemas": FaTools,
  "Inteligencia Artificial": FaBrain,
  "Prompt Engineering": FaCode,
  Redes: FaNetworkWired,
  "Sistemas Informaticos": FaServer
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const activeSkills = useMemo(
    () => skillCategories.find((category) => category.id === activeCategory)?.skills || [],
    [activeCategory]
  );

  return (
    <section className="section section--muted" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-kicker">Skills</span>
          <h2 id="skills-title">Competencias em evolucao constante.</h2>
          <p>
            Um conjunto em evolucao, construido entre desenvolvimento frontend, base tecnica
            de sistemas, inteligencia artificial, automacao e resolucao de problemas.
          </p>
        </Reveal>

        <Reveal className="segmented-control" role="tablist" aria-label="Categorias de skills">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.id}
              className={activeCategory === category.id ? "is-active" : ""}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </Reveal>

        <motion.div className="skills-grid" layout>
          {activeSkills.map((skill) => {
            const Icon = iconMap[skill.name] || FaCode;

            return (
              <GlassCard key={skill.name} className="skill-card" layout>
                <div className="skill-card__icon">
                  <Icon aria-hidden="true" />
                </div>
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>
              </GlassCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
