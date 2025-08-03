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
            <h1 className="text-5xl font-bold text-text-primary mb-6">👋 About Me</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              A journey through technology, entrepreneurship, and product leadership across multiple continents and industries.
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
                    My path to product leadership began in the halls of Nanyang Technological University, where I earned my Computer Engineering degree with Second Upper Honours. But like many great journeys, it took unexpected turns that shaped who I am today.
                  </p>
                  <p>
                    After graduation, I dove into the world of enterprise software as an Implementation Consultant, working with banks and insurers across Southeast Asia. Those early years taught me the importance of understanding not just what technology can do, but how people actually use it in their daily work.
                  </p>
                  <p>
                    The real turning point came when I joined Murex, where I spent nearly a decade growing from Implementation Consultant to APAC Product Lead. Managing multi-million dollar projects across Singapore, Hong Kong, Thailand, and Indonesia taught me that great products aren't just about features—they're about solving real business problems at scale.
                  </p>
                  <p>
                    In 2018, I took the entrepreneurial leap with Financial Butler, a personal finance app that would challenge everything I thought I knew about product development. Building a fintech startup from zero to 5000 users taught me invaluable lessons about user trust, regulatory complexity, and the delicate balance between vision and execution.
                  </p>
                  <p>
                    Today, I channel these experiences as a Product Lead at Income Insurance, where I'm driving innovation in the InsureTech space while building the next generation of digital insurance products. It's the perfect blend of my enterprise software background, startup experience, and passion for creating meaningful user experiences.
                  </p>
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
                  <Badge variant="secondary">Product-Led Growth</Badge>
                  <Badge variant="secondary">Market Research</Badge>
                  <Badge variant="secondary">Competitive Analysis</Badge>
                  <Badge variant="secondary">Roadmap Planning</Badge>
                  <Badge variant="secondary">OKRs & KPIs</Badge>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Leadership</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Team Building</Badge>
                  <Badge variant="secondary">Cross-functional Leadership</Badge>
                  <Badge variant="secondary">Stakeholder Management</Badge>
                  <Badge variant="secondary">Mentoring</Badge>
                  <Badge variant="secondary">Change Management</Badge>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">API Design</Badge>
                  <Badge variant="secondary">System Architecture</Badge>
                  <Badge variant="secondary">Data Analytics</Badge>
                  <Badge variant="secondary">UX/UI Principles</Badge>
                  <Badge variant="secondary">Agile/Scrum</Badge>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Business</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">P&L Management</Badge>
                  <Badge variant="secondary">Business Development</Badge>
                  <Badge variant="secondary">Fundraising</Badge>
                  <Badge variant="secondary">Go-to-Market</Badge>
                  <Badge variant="secondary">Partnership Strategy</Badge>
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
