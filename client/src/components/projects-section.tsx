import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import ScrollAnimation from "./scroll-animation";
import financialButlerCover from "@assets/Cover-2-phones_1754362987125.png";
import lockketLogo from "@assets/logo-colored_1754411804329.png";
import thinkerlyImage from "@assets/generated_images/Thinkerly_math_learning_app_c425b595.png";
import optionsMonitorImage from "@assets/image_1759828033380.png";
import { trackEvent } from "@/lib/analytics";

const getLiveUrl = (projectId: string): string | null => {
  const urls: Record<string, string> = {
    'thinkerly': 'https://thinkerly.app',
    'options-monitor': 'https://options.gordonfrois.com',
    'lockket': 'https://lockket.app'
  };
  return urls[projectId] || null;
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              From startup ventures to enterprise solutions, here are some of the products and experiences I've built.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} delay={index * 0.1}>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <img 
                      src={
                        project.id === "financial-butler" ? financialButlerCover :
                        project.id === "lockket" ? lockketLogo :
                        project.id === "thinkerly" ? thinkerlyImage :
                        project.id === "options-monitor" ? optionsMonitorImage :
                        project.image
                      } 
                      alt={`${project.title} Interface`} 
                      className={`w-full h-48 rounded-t-lg ${
                        project.id === "lockket" ? "object-contain bg-gray-50 p-8" : "object-cover"
                      }`}
                    />
                  </div>
                  <div className="p-8 pt-0">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-secondary mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="bg-green-100 text-green-700 hover:bg-green-200 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4 items-center">
                      <Link 
                        href={`/projects/${project.slug}`}
                        onClick={() => trackEvent('view_case_study', 'project_engagement', project.title)}
                      >
                        <Button variant="ghost" className="inline-flex items-center text-primary font-medium hover:text-blue-700 p-0" data-testid={`button-case-study-${project.slug}`}>
                          View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      
                      {getLiveUrl(project.id) && (
                        <a 
                          href={getLiveUrl(project.id)!} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={() => trackEvent('view_live_app_homepage', 'project_engagement', project.title)}
                        >
                          <Button variant="ghost" className="inline-flex items-center text-primary font-medium hover:text-blue-700 p-0" data-testid={`button-live-app-${project.slug}`}>
                            View Live App <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="text-center mt-12">
            <Link 
              href="/projects"
              onClick={() => trackEvent('view_all_projects', 'navigation', 'homepage_projects_section')}
            >
              <Button className="bg-primary text-white px-8 py-3 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200">
                View All Projects
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
