import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "wouter";
import ScrollAnimation from "@/components/scroll-animation";
import SEOHead from "@/components/seo-head";
import { trackEvent } from "@/lib/analytics";
import financialButlerCover from "@assets/Cover-2-phones_1754362987125.png";
import lockketLogo from "@assets/logo-colored_1754411804329.png";
import thinkerlyImage from "@assets/generated_images/Thinkerly_math_learning_app_c425b595.png";
import optionsMonitorImage from "@assets/image_1759828033380.png";

export default function Projects() {
  return (
    <>
      <SEOHead
        title="Gordon Frois Projects - Product Case Studies & Startup Portfolio"
        description="Explore Gordon Frois's product portfolio including Financial Butler (fintech startup), Lockket (digital safe), and Thinkerly (social learning). Case studies showing product strategy, user growth, and business impact."
        keywords="Gordon Frois projects, Financial Butler fintech, Lockket digital safe, Thinkerly social learning, product case studies, startup portfolio, product strategy examples"
        canonicalUrl="https://gordonfrois.com/projects"
      />
      <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation>
            <h1 className="text-5xl font-bold text-primary mb-6">My Projects</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              A collection of products and experiences I've built, from early-stage startups to enterprise solutions, showcasing the journey from idea to impact.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 0.1}>
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative">
                      <img 
                        src={
                          project.id === "financial-butler" ? financialButlerCover :
                          project.id === "lockket" ? lockketLogo :
                          project.id === "thinkerly" ? thinkerlyImage :
                          project.id === "options-monitor" ? optionsMonitorImage :
                          project.image
                        } 
                        alt={`${project.title} Interface`} 
                        className={`w-full h-64 md:h-full ${
                          project.id === "lockket" ? "object-contain bg-gray-50 p-8" : "object-cover"
                        }`}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge 
                          variant={project.status === 'current' ? 'default' : 'secondary'}
                          className={project.status === 'current' ? 'bg-green-600' : ''}
                        >
                          {project.status === 'current' ? 'Current' : 
                           project.status === 'active' ? 'Active' : 'Completed'}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4 text-sm text-secondary">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.year}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {project.role}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-text-primary">{project.title}</h3>
                      <p className="text-secondary mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} className="bg-green-100 text-green-700 hover:bg-green-200 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Link 
                        href={`/projects/${project.slug}`}
                        onClick={() => trackEvent('view_case_study_projects_page', 'project_engagement', project.title)}
                      >
                        <Button className="inline-flex items-center bg-primary hover:bg-blue-700 text-white">
                          View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
