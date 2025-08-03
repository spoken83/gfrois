import ScrollAnimation from "./scroll-animation";

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
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollAnimation>
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Product strategy workspace" 
              className="rounded-xl shadow-lg w-full" 
            />
          </ScrollAnimation>
          
          <ScrollAnimation>
            <h3 className="text-2xl font-semibold mb-6">Building with Strategy, Leading with Empathy</h3>
            <div className="space-y-6">
              <p className="text-secondary leading-relaxed">My journey began in capital markets and B2B finance, spending nearly a decade at Murex delivering front-to-back solutions for banks and financial institutions across Southeast Asia. I led complex, multi-country rollouts and spearheaded the productization of their eDistribution APIs, driving over S$10M in global revenue.</p>
              <p className="text-secondary leading-relaxed">
                But I wanted more than enterprise transformation — I wanted to build something from scratch. In 2018, I founded Financial Butler, a mobile-first personal finance app, hustling my way to 5,000+ MAUs, 34 investor meetings, and partnerships with insurers and fintechs.
              </p>
              <p className="text-secondary leading-relaxed">Currently, I'm driving product and venture strategy at Income Insurance's SNACK platform, leading cross-functional teams and doubling revenue while shifting toward higher-margin products. Outside work, I'm a dad to two curious daughters and a weekend tennis warrior.</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
