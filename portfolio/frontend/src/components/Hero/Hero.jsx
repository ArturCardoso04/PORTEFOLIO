import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight, FaDownload, FaEnvelope } from "react-icons/fa";
import Button from "../Buttons/Button.jsx";
import Reveal from "../Animations/Reveal.jsx";
import AnimatedCounter from "./AnimatedCounter.jsx";
import { assets, heroStats, personalInfo } from "../../utils/portfolioData.js";

const particles = Array.from({ length: 24 }, (_, index) => index);

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -34]);

  return (
    <section className="hero section-shell" id="inicio" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero__ambient" aria-hidden="true">
        {particles.map((particle) => (
          <span key={particle} style={{ "--i": particle }} />
        ))}
      </div>

      <motion.div className="hero__media" style={{ y: mediaY }} aria-hidden="true">
        <img src={assets.heroWorkspace} alt="" loading="eager" decoding="async" />
      </motion.div>

      <motion.div className="container hero__content" style={{ y: contentY }}>
        <Reveal className="hero__eyebrow">
          React | Engenharia Informatica | IA | Redes & Sistemas
        </Reveal>

        <Reveal as="h1" className="hero__title" id="hero-title" delay={0.05}>
          Artur
        </Reveal>

        <Reveal className="hero__lead" delay={0.12}>
          {personalInfo.summary}
        </Reveal>

        <Reveal className="hero__actions" delay={0.18}>
          <Button href="#projetos" icon={FaArrowRight}>
            Ver projetos
          </Button>
          <Button href="#contacto" variant="secondary" icon={FaEnvelope}>
            Contactar
          </Button>
          <Button href="/artur-cv.txt" variant="ghost" icon={FaDownload} download>
            Download CV
          </Button>
        </Reveal>

        <Reveal className="hero__stats" delay={0.24}>
          {heroStats.map((stat) => (
            <article key={stat.label} className="hero-stat">
              <strong>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </strong>
              <span>{stat.label}</span>
              <p>{stat.detail}</p>
            </article>
          ))}
        </Reveal>
      </motion.div>
    </section>
  );
}
