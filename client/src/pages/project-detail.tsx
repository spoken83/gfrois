import { useRoute } from "wouter";
import { getProjectBySlug } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Target, Lightbulb, TrendingUp, Code } from "lucide-react";
import { Link } from "wouter";
import ScrollAnimation from "@/components/scroll-animation";
import financialButlerCover from "@assets/Cover-2-phones_1754362987125.png";
import financialButlerLogo from "@assets/Financial-Butler_1754363007000.png";
import lockketLogo from "@assets/logo-colored_1754411804329.png";
import thinkerlyImage from "@assets/featured-web-article-thinkerly-updated_1761581792700.png";
import optionsMonitorImage from "@assets/image_1759828033380.png";
import optionsMonitorAnalysis from "@assets/image_1759828104474.png";
import optionsMonitorSpread from "@assets/image_1759828142890.png";
import optionsMonitorPositions from "@assets/image_1759828181681.png";
import gordonPitchingOnline from "@assets/WIN_20200729_11_39_26_Pro_1754372487151.jpg";
import gordonMediaInterview from "@assets/WhatsApp Image 2020-11-14 at 16.46.02 (2)_1754372504202.jpeg";
import gordonConference1 from "@assets/WhatsApp Image 2020-11-14 at 16.46.02 (1)_1754372516417.jpeg";
import gordonConference2 from "@assets/conference_1754375525780.jpg";

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
              <p className="text-secondary mb-8 text-[18px]">{project.longDescription}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              {project.id === "financial-butler" ? (
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <img 
                      src={financialButlerLogo} 
                      alt="Financial Butler Logo" 
                      className="h-32 w-auto" 
                    />
                  </div>
                  <img 
                    src={financialButlerCover} 
                    alt="Financial Butler Mobile App Interface" 
                    className="rounded-xl shadow-2xl w-3/4 mx-auto" 
                  />
                </div>
              ) : project.id === "lockket" ? (
                <div className="flex justify-center bg-gray-50 rounded-xl p-12">
                  <img 
                    src={lockketLogo} 
                    alt="Lockket Logo" 
                    className="h-32 w-auto" 
                  />
                </div>
              ) : project.id === "thinkerly" ? (
                <img 
                  src={thinkerlyImage} 
                  alt="Thinkerly Math Learning Interface" 
                  className="rounded-xl shadow-2xl w-full" 
                />
              ) : project.id === "options-monitor" ? (
                <img 
                  src={optionsMonitorImage} 
                  alt="Options Monitor Scanner Interface" 
                  className="rounded-xl shadow-2xl w-full" 
                />
              ) : (
                <img 
                  src={project.image} 
                  alt={`${project.title} Interface`} 
                  className="rounded-xl shadow-2xl w-full" 
                />
              )}
            </ScrollAnimation>
          </div>
        </div>
      </section>
      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Problem to Solve - Thinkerly Only */}
          {project.id === "thinkerly" && (
            <ScrollAnimation>
              <Card className="shadow-lg mb-12">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-semibold">Problem to Solve</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      Majority of students pass maths, few score AL1. The difference is the 10-20% of heuristic questions that stumble them
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      Teachers have to spend most of the time focusing on the fundamentals, leaving students to practice themselves or go for multiple tuitions to get a leg up on the heuristics
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      Heuristics, and more so critical thinking should be built consistently over time, understanding and application not through rote drilling
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          )}

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Challenges */}
            <ScrollAnimation>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-semibold">Product Challenges</h3>
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

            {/* Results or Current Execution */}
            <ScrollAnimation delay={0.2}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-semibold">
                      {project.currentExecution ? "Current Execution" : "Results"}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-secondary">
                    {(project.currentExecution || project.results || []).map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Tech Stack */}
            <ScrollAnimation delay={0.3}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-semibold">Tech Stack</h3>
                  </div>
                  {project.techStack ? (
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-xs font-medium text-gray-600 mb-1">Frontend</h5>
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.frontend.map((tech, index) => (
                            <Badge key={index} variant="default" className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-xs font-medium text-gray-600 mb-1">Backend</h5>
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.backend.map((tech, index) => (
                            <Badge key={index} variant="default" className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-xs font-medium text-gray-600 mb-1">Database</h5>
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.database.map((tech, index) => (
                            <Badge key={index} variant="default" className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {project.techStack.dataSecurity && (
                        <div>
                          <h5 className="text-xs font-medium text-gray-600 mb-1">Data Security</h5>
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.dataSecurity.map((tech, index) => (
                              <Badge key={index} variant="default" className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.techStack.thirdPartyIntegrations && (
                        <div>
                          <h5 className="text-xs font-medium text-gray-600 mb-1">3rd Party Integrations</h5>
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.thirdPartyIntegrations.map((tech, index) => (
                              <Badge key={index} variant="default" className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.techStack.machineLearning && (
                        <div>
                          <h5 className="text-xs font-medium text-gray-600 mb-1">Machine Learning</h5>
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.machineLearning.map((tech, index) => (
                              <Badge key={index} variant="default" className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.techStack.ai && (
                        <div>
                          <h5 className="text-xs font-medium text-gray-600 mb-1">AI & Assessment</h5>
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.ai.map((tech, index) => (
                              <Badge key={index} variant="default" className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.techStack.education && (
                        <div>
                          <h5 className="text-xs font-medium text-gray-600 mb-1">Educational Framework</h5>
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.education.map((tech, index) => (
                              <Badge key={index} variant="default" className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Key Learnings or Roadmap */}
          <ScrollAnimation>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Lightbulb className="h-6 w-6 text-primary mr-3" />
                  {project.roadmap ? "Roadmap" : "Key Learnings"}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {(project.roadmap || project.learnings || []).map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-accent mr-3 mt-1 text-lg">•</span>
                      <p className="text-secondary">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
      {/* Behind the Scenes - Photos */}
      {project.id === "financial-butler" && (
        <section className="py-20 bg-neutral-bg">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Behind the Scenes</h2>
                <p className="text-secondary max-w-3xl mx-auto text-[18px]">From virtual pitches to media interviews and startup competitions - capturing key moments in Financial Butler journey.</p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollAnimation delay={0.1}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={gordonPitchingOnline} 
                    alt="Gordon Frois pitching Financial Butler online during COVID-19"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-sm mb-2">Virtual Pitches</h4>
                    <p className="text-xs text-secondary">Presenting Financial Butler to investors during COVID-19 pivot to virtual pitching</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={gordonMediaInterview} 
                    alt="Gordon Frois in media interview about Financial Butler"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-sm mb-2">Media Interview</h4>
                    <p className="text-xs text-secondary">Discussing fintech innovation and Financial Butler's mission to the media</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={gordonConference1} 
                    alt="Gordon Frois at startup conference presenting Financial Butler"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-sm mb-2">Startup Conference</h4>
                    <p className="text-xs text-secondary">Startup booth at Tech in Asia 2020 in Jakarta</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={gordonConference2} 
                    alt="Gordon Frois at tech conference with startup community"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-sm mb-2">Tech Conference</h4>
                    <p className="text-xs text-secondary">Engaging with the startup ecosystem and tech community at industry conferences</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      )}
      {/* Thinkerly Platform Link */}
      {project.id === "thinkerly" && (
        <section className="py-20 bg-neutral-bg">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollAnimation>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Experience Thinkerly</h2>
                <p className="text-secondary max-w-3xl mx-auto text-[18px] mb-8">
                  Explore our AI-powered math learning platform designed to help primary students master problem-solving through proven mathematical heuristics.
                </p>
                <a 
                  href="https://thinkerly.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button className="bg-primary text-white hover:bg-blue-700" data-testid="button-visit-platform">
                    Visit Platform →
                  </Button>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      )}
      {/* Options Monitor Screenshots */}
      {project.id === "options-monitor" && (
        <section className="py-20 bg-neutral-bg">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
                <p className="text-secondary max-w-3xl mx-auto text-[18px]">
                  Automated scanning, technical analysis, spread validation, and position tracking - all designed to streamline credit spread trading.
                </p>
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                  <a 
                    href="https://options.gordonfrois.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Button className="bg-primary text-white hover:bg-blue-700" data-testid="button-visit-platform">
                      Visit Platform →
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <ScrollAnimation delay={0.1}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={optionsMonitorImage} 
                    alt="Options Monitor Scanner showing qualified setups and signals"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-sm mb-2">Automated Scanner</h4>
                    <p className="text-xs text-secondary">Real-time scanning of 15-20 tickers daily with multi-factor scoring and setup validation</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={optionsMonitorAnalysis} 
                    alt="Technical analysis showing RSI, StochRSI indicators and signal validation"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-sm mb-2">Technical Analysis</h4>
                    <p className="text-xs text-secondary">RSI, StochRSI indicators with PUT signal triggers and support/resistance levels</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={optionsMonitorSpread} 
                    alt="Spread analysis with risk-reward calculations and constraint validation"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-sm mb-2">Spread Validation</h4>
                    <p className="text-xs text-secondary">Comprehensive spread testing with risk-reward ratios and constraint checks</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={optionsMonitorPositions} 
                    alt="Position tracking showing open trades with P/L and DTE monitoring"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-sm mb-2">Position Tracking</h4>
                    <p className="text-xs text-secondary">Real-time P/L tracking, DTE monitoring, and position management dashboard</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <p className="text-sm text-secondary text-center">
                  <span className="font-semibold text-text-primary">Learning & Strategy: </span>
                  Trading strategies implemented in this platform are based on credit spread techniques learned from{" "}
                  <a 
                    href="https://optionswithdavis.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-700 underline font-medium"
                    data-testid="link-options-guru"
                  >
                    Options with Davis
                  </a>
                  , combined with years of options trading expertise from working at Murex.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      )}
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
