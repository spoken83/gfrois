import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollAnimation from "@/components/scroll-animation";
import SEOHead from "@/components/seo-head";
import { GraduationCap, MapPin, Calendar, Users, Trophy, Target } from "lucide-react";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Gordon Frois - Product Leader Journey & Background"
        description="Learn about Gordon Frois's journey from Computer Engineering at NTU to product leadership at Income Insurance. 15+ years experience across enterprise software, fintech startups, and digital transformation."
        keywords="Gordon Frois background, product leader career, Nanyang Technological University, Murex, Financial Butler founder, Income Insurance, Singapore product manager"
        canonicalUrl="https://gordonfrois.com/about"
      />
      <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation>
            <h1 className="text-5xl font-bold text-primary mb-6">👋 About Me</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              A journey from capital markets to consumer apps, from enterprise software to startup founding, across fintech, insurtech, and beyond.
            </p>
          </ScrollAnimation>
        </div>
      </section>
      {/* Detailed Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold mb-6">The Full Story</h2>
                <div className="space-y-6 text-secondary leading-relaxed">
                  <p>
                    My journey began in the world of capital markets and B2B finance, where I spent nearly a decade at Murex, delivering front-to-back solutions for banks and financial institutions across Southeast Asia. I led complex, multi-country rollouts and eventually spearheaded the productization of their eDistribution APIs, driving over S$10M in global revenue and shaping FX and Treasury workflows for major banks.
                  </p>
                  <p>
                    But I wanted more than enterprise transformation — I wanted to build something from scratch. So in 2018, I founded Financial Butler, a mobile-first personal finance app designed to help young adults make smarter financial decisions. I wore every hat — product, growth, fundraising — and hustled my way to 5,000+ MAUs, 34 investor meetings, 3 startup competitions, and partnerships with insurers and fintechs.
                  </p>
                  <p>
                    Post-startup, I joined Railsr (formerly Railsbank) as the APAC Product Lead, where I helped launch multi-currency ledgers, FX services, and compliance APIs across Singapore and Australia — contributing over $1M in ARR and leading distributed teams from the UK to Vietnam.
                  </p>
                  <p>
                    Most recently, I've been driving product and venture strategy at SNACK, Income Insurance's embedded micro-insurance platform for digital-first consumers. I lead a cross-functional team (product, growth, CX), own the P&L, and have doubled revenue while shifting the portfolio toward higher-margin products. I also prototyped an AI advisor-assist tool, launched a new agency management system for 2,000+ users, and won a hackathon with a pay-as-you-use insurance product.
                  </p>
                  <p>At the core of everything I do: I build with strategy, lead with empathy, and deliver with urgency. I'm now working on two new ventures — Lockket (a digital memory wall for life's milestones) and Thinkerly (an AI-powered heuristics math app for primary students) — and always looking to partner with others building meaningful, mission-driven products.</p>
                  <p>Outside of work, I'm a dad to two curious daughters, a tennis enthusiast, and a firm believer in doing purposeful work with great people.</p>
                </div>
              </ScrollAnimation>
            </div>
            
            <div>
              <ScrollAnimation delay={0.2}>
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Quick Facts</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Based in</p>
                          <p className="text-sm text-secondary">Singapore</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Education</p>
                          <p className="text-sm text-secondary">Computer Engineering, NTU</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Experience</p>
                          <p className="text-sm text-secondary">15+ years in tech</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Family</p>
                          <p className="text-sm text-secondary">Proud dad of 2 daughters</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      {/* Core Values */}
      <section className="py-20 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-12">What Drives Me</h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">People-First Product Development</h3>
                  <p className="text-secondary">
                    Great products start with deep empathy for users. I believe in building solutions that genuinely improve people's lives and work experiences.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Excellence Through Iteration</h3>
                  <p className="text-secondary">
                    Perfection is a journey, not a destination. I'm passionate about continuous improvement, learning from failures, and celebrating incremental wins.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Impact Over Activity</h3>
                  <p className="text-secondary">
                    In a world full of features and metrics, I focus on outcomes that matter. It's not about how much we build, but how much value we create.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      {/* Skills & Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={0.1}>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Product Strategy</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Product-Led Growth</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Market Research</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Competitive Analysis</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Roadmap Planning</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">OKRs & KPIs</Badge>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Leadership</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Team Building</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Cross-functional Leadership</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Stakeholder Management</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Mentoring</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Change Management</Badge>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">API Design</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">System Architecture</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Data Analytics</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">UX/UI Principles</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Agile/Scrum</Badge>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Business</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">P&L Management</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Business Development</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Fundraising</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Go-to-Market</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Partnership Strategy</Badge>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
