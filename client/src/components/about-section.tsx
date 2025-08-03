import ScrollAnimation from "./scroll-animation";
import sketchImage from "@assets/me-sketch-2_1754250571514.jpeg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
          <p className="text-xl text-secondary text-center mb-16 max-w-3xl mx-auto">
            A product leader, ex-founder, and full-stack operator with over 15 years of experience across fintech, insurtech, B2B SaaS, and consumer apps in Asia-Pacific.
          </p>
        </ScrollAnimation>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <ScrollAnimation>
            <div className="flex-shrink-0">
              <img 
                src={sketchImage} 
                alt="Gordon Frois sketch portrait" 
                className="rounded-2xl shadow-lg w-96 h-auto mx-auto md:mx-0" 
              />
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-6">Building with Strategy, Leading with Empathy</h3>
              <div className="space-y-6">
                <p className="text-secondary leading-relaxed">My journey began in capital markets and B2B finance, spending nearly a decade at Murex delivering front-to-back solutions for banks and financial institutions across Southeast Asia. I led complex, multi-country rollouts and spearheaded the productization of their eDistribution APIs, driving over S$10M in global revenue.</p>
                <p className="text-secondary leading-relaxed">
                  But I wanted more than enterprise transformation — I wanted to build something from scratch. In 2018, I founded Financial Butler, a mobile-first personal finance app, hustling my way to 5,000+ MAUs, 34 investor meetings, and partnerships with insurers and fintechs.
                </p>
                <p className="text-secondary leading-relaxed">Post-startup, I joined Railsr as the APAC Product Lead, launching multi-currency ledgers, FX services, and compliance APIs across Singapore and Australia — contributing over $1M in ARR and leading distributed teams from the UK to Vietnam.</p>
                <p className="text-secondary leading-relaxed">Most recently, I've been driving product and venture strategy at SNACK, Income Insurance's embedded micro-insurance platform. I lead cross-functional teams, own the P&L, and have doubled revenue while shifting toward higher-margin products. I'm now working on two new ventures — Lockket and Thinkerly — always looking to partner with others building meaningful, mission-driven products.</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
