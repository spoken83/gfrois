import ScrollAnimation from "./scroll-animation";
import sketchImage from "@assets/me-sketch-2_1754250571514.jpeg";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
        </ScrollAnimation>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <ScrollAnimation>
            <div className="flex-shrink-0">
              <img 
                src={sketchImage} 
                alt="Gordon Frois sketch portrait" 
                className="rounded-2xl shadow-lg mx-auto md:mx-0" 
                style={{ width: '300px', height: 'auto', minWidth: '300px' }}
              />
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation>
            <div className="flex-1">
              
              <div className="space-y-6">
                <p className="text-secondary leading-relaxed">I’m Gordon — product leader, builder, and founder with 17 years across fintech, SaaS, and consumer platforms in Asia-Pacific.</p>
                <p className="text-secondary leading-relaxed">I’ve shipped capital markets APIs at Murex, founded a personal finance app (Financial Butler), launched embedded banking products at Railsr across Singapore and Australia, and led product and venture strategy at Income Insurance.</p>
                <p className="text-secondary leading-relaxed">Now I’m building full-time: Thinkerly (AI-powered math assessment for Singapore primary students), ZenOptions (automated options trading SaaS), and autonomous AI agents that orchestrate real workflows across messaging, calendars, and external APIs.</p>
                <p className="text-secondary leading-relaxed">My guiding principle: Be Humble & Stay Hungry.</p>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/about" 
                  className="text-primary hover:text-blue-700 font-medium inline-flex items-center"
                  onClick={() => trackEvent('learn_more_about_me', 'navigation', 'homepage_about_section')}
                >
                  Learn more about me <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
