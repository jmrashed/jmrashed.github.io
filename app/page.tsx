import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import ExperienceSection from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import OpenSource from "@/components/sections/OpenSource";
import Testimonials from "@/components/sections/Testimonials";
import Awards from "@/components/sections/Awards";
import Contact from "@/components/sections/Contact";
import HireMeModal from "@/components/sections/HireMeModal";
import {
  getAchievements,
  getSkills,
  getExperience,
  getProjects,
  getSocialLinks,
} from "@/lib/data";

export default function HomePage() {
  const achievements = getAchievements();
  const skills = getSkills();
  const experience = getExperience();
  const allProjects = getProjects();
  const socialLinks = getSocialLinks();

  // Show only first 3 projects on homepage
  const featuredProjects = allProjects.slice(0, 3);

  return (
    <>
      <Hero />
      <About achievements={achievements} />
      <Skills skills={skills} />
      <ExperienceSection experience={experience} />
      <Projects projects={featuredProjects} />
      <OpenSource />
      <Testimonials />
      <Awards />
      <Contact socialLinks={socialLinks} />
      <HireMeModal />
    </>
  );
}
