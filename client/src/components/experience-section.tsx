import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data/experience";
import { TrendingUp, Users, DollarSign, Trophy, Globe, BarChart3, Network, Target, ArrowRight } from "lucide-react";
import ScrollAnimation from "./scroll-animation";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const iconMap = {
  "TrendingUp": TrendingUp,
  "Users": Users,
  "DollarSign": DollarSign,
  "Trophy": Trophy,
  "Globe": Globe,
  "BarChart3": BarChart3,
  "Network": Network,
  "Target": Target,
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-neutral-bg">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Where I've Worked</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              A journey through innovative companies, from enterprise software to fintech startups, across multiple markets and stages of growth.
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ScrollAnimation key={exp.id} delay={index * 0.1}>
              <Card className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                exp.isHighlighted ? 'bg-gradient-to-r from-accent/10 to-orange-100 border-l-4 border-accent' : 'bg-white'
              }`}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-2">{exp.company}</h3>
                      <p className="text-lg text-secondary mb-2">{exp.role}</p>
                      <p className="text-accent font-medium">{exp.period}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {exp.company === "Financial Butler" && (
                    <div className="mb-6">
                      <p className="text-secondary leading-relaxed">
                        Mobile-first personal finance app helping users aggregate financial data (credit cards, savings, investments, insurance) with actionable insights for smarter financial decisions.
                      </p>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <ul className="space-y-2 text-secondary">
                      {exp.achievements.slice(0, 2).map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <TrendingUp className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/experience">
            <Button className="inline-flex items-center bg-primary hover:bg-blue-700 text-white">
              View Detailed Experience <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
