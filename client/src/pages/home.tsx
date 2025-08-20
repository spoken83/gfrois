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
        title="Gordon Frois | Senior Product Leader & Ex-Founder"
        description="Product Leader with 15+ years scaling fintech, SaaS, and consumer platforms used by millions. Ex-founder turned product executive, specializing in 0→1 innovation and building high-performing teams. Expert in AI-powered products, embedded finance, and driving measurable business impact through strategic product decisions."
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
