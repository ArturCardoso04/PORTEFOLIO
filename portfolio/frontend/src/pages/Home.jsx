import MainLayout from "../layouts/MainLayout.jsx";
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Timeline from "../components/Timeline/Timeline.jsx";
import Contact from "../components/Contact/Contact.jsx";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Timeline />
      <Contact />
    </MainLayout>
  );
}
