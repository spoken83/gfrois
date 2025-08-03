import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data/experience";
import { TrendingUp, Users, DollarSign, Trophy, Globe, BarChart3, Network, Target } from "lucide-react";
import ScrollAnimation from "./scroll-animation";

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
                      <Badge variant={exp.isHighlighted ? "default" : "secondary"} className={
                        exp.isHighlighted ? "bg-accent text-white" : ""
                      }>
                        {exp.category}
                      </Badge>
                    </div>
                  </div>
                  
                  {exp.company === "Financial Butler" && (
                    <div className="mb-6">
                      <p className="text-secondary leading-relaxed">
                        Mobile-first personal finance app helping users aggregate financial data (credit cards, savings, investments, insurance) with actionable insights for smarter financial decisions.
                      </p>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements</h4>
                      <ul className="space-y-2 text-secondary">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <TrendingUp className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Leadership Impact</h4>
                      <ul className="space-y-2 text-secondary">
                        {exp.leadership.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <Users className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
