import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ScrollAnimation from "./scroll-animation";

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
                      src={project.image} 
                      alt={`${project.title} Interface`} 
                      className="w-full h-48 object-cover rounded-t-lg" 
                    />
                  </div>
                  <div className="p-8 pt-0">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-secondary mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/projects/${project.slug}`}>
                      <Button variant="ghost" className="inline-flex items-center text-primary font-medium hover:text-blue-700 p-0">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="text-center mt-12">
            <Link href="/projects">
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
