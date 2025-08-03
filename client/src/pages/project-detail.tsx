import { useRoute } from "wouter";
import { getProjectBySlug } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Target, Lightbulb, TrendingUp, Code } from "lucide-react";
import { Link } from "wouter";
import ScrollAnimation from "@/components/scroll-animation";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:slug");
  const project = params?.slug ? getProjectBySlug(params.slug) : null;

  if (!project) {
    return (
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-secondary mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollAnimation>
            <Link href="/projects">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="flex items-center gap-4 mb-6 text-sm text-secondary">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {project.year}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {project.role}
                </div>
                <Badge 
                  variant={project.status === 'current' ? 'default' : 'secondary'}
                  className={project.status === 'current' ? 'bg-green-600' : ''}
                >
                  {project.status === 'current' ? 'Current' : 
                   project.status === 'active' ? 'Active' : 'Completed'}
                </Badge>
              </div>
              
              <h1 className="text-5xl font-bold text-text-primary mb-6">{project.title}</h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">{project.longDescription}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <img 
                src={project.image} 
                alt={`${project.title} Interface`} 
                className="rounded-xl shadow-2xl w-full" 
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Challenges */}
            <ScrollAnimation>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-semibold">Challenges</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-secondary">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Solutions */}
            <ScrollAnimation delay={0.1}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-semibold">Solutions</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-secondary">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Results */}
            <ScrollAnimation delay={0.2}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-semibold">Results</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-secondary">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Technologies */}
            <ScrollAnimation delay={0.3}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-semibold">Technologies</h3>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Key Learnings */}
          <ScrollAnimation>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Lightbulb className="h-6 w-6 text-primary mr-3" />
                  Key Learnings
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.learnings.map((learning, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-accent mr-3 mt-1 text-lg">•</span>
                      <p className="text-secondary">{learning}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">Interested in Learning More?</h2>
            <p className="text-xl text-secondary mb-8">
              I'd love to discuss this project in more detail and share insights about the challenges and solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:gordon.matthew@gmail.com?subject=Question about %20{project.title}">
                <Button className="bg-primary text-white hover:bg-blue-700">
                  Get In Touch
                </Button>
              </a>
              <Link href="/projects">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View Other Projects
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
