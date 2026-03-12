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
      <SEOHead 
        title="Gordon Frois | Product Leader & Builder — AI, Fintech, and Beyond"
        description="Founder and builder with 17 years across fintech, SaaS, and consumer platforms. Currently building Thinkerly (AI-powered math assessment), ZenOptions (options trading SaaS), and AI agent systems. Ex-product leader at Income Insurance, Railsr, and Murex."
      />
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
