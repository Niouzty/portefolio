import { JsonResume } from "../../components/sections/JsonResume";
import { SiteHeader } from "../../components/layout/SiteHeader";
import { Tag } from "../../components/ui/Tag";
import { IntroBanner } from "../../components/sections/IntroBanner";
import { AboutSummary } from "../../features/about";
import { ProjectsList } from "../../features/projects";
import { ContactBlock } from "../../features/contact";
import { ContactForm } from "../../components/sections/ContactForm";
import { Reveal } from "../../components/shared/Reveal";
import { Skills } from "../../components/sections/Skills";
import { Timeline } from "../../components/sections/Timeline";
import { Hero } from "../../components/sections/Hero";
import { StageJson } from "../../components/sections/StageJson";

export default function HomePage() {
  return (
    <>
      <SiteHeader active="#home" />
      <section id="home" className="scroll-mt-28 space-y-6">
        <Hero />
      </section>

      <section id="news" className="scroll-mt-28 space-y-4">
        <Reveal>
          <h2 className="text-xl font-semibold title-accent">Recherche de stage / alternance</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <StageJson />
        </Reveal>
      </section>

      <section id="about" className="scroll-mt-28 space-y-4">
        <Reveal>
          <h2 className="text-xl font-semibold title-accent">À propos</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <AboutSummary />
        </Reveal>
      </section>

      <section id="skills" className="scroll-mt-28 space-y-4">
        <Reveal>
          <Skills />
        </Reveal>
      </section>

      <section id="projects" className="scroll-mt-28 space-y-4">
        <Reveal>
          <h2 className="text-xl font-semibold title-accent">Projets</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ProjectsList />
        </Reveal>
      </section>

      <section id="timeline" className="scroll-mt-28 space-y-4">
        <Reveal>
          <Timeline />
        </Reveal>
      </section>

      <section id="contact" className="scroll-mt-28 space-y-4">
        <Reveal>
          <h2 className="text-xl font-semibold title-accent">Contact</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-4">
            <ContactBlock />
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
