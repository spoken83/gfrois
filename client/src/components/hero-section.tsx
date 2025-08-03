import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import ScrollAnimation from "./scroll-animation";
import heroImage from "@assets/me-suitup-1_1754241940920.png";

export default function HeroSection() {
  const handleNavClick = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Product Leader & 
              <span className="text-primary"> Ex-Founder</span>
            </h1>
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              Product leader with 15+ years of experience across fintech, insurtech, B2B SaaS, and consumer apps in Asia-Pacific. Ex-founder, team builder, and strategic product executive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => handleNavClick('contact')}
                className="bg-primary text-white px-8 py-3 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Let's Connect
              </Button>
              <Button 
                variant="outline"
                onClick={() => handleNavClick('projects')}
                className="border-2 border-primary text-primary px-8 py-3 hover:bg-primary hover:text-white transition-all duration-200"
              >
                View My Work
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div className="text-secondary flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Singapore/Asia/AU
              </div>
              <div className="text-secondary flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Available for opportunities
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.2}>
            <img 
              src={heroImage} 
              alt="Gordon Frois - Product Leader" 
              className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto" 
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
