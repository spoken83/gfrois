import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ArticlesSection from "@/components/articles-section";
import ContactSection from "@/components/contact-section";
import SEOHead from "@/components/seo-head";

export default function Home() {
  return (
    <>
      <SEOHead />
      <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ArticlesSection />
      <ContactSection />
      </main>
    </>
  );
}
