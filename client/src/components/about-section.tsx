import ScrollAnimation from "./scroll-animation";
import sketchImage from "@assets/me-sketch-2_1754250571514.jpeg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
          <p className="text-xl text-secondary text-center mb-16 max-w-3xl mx-auto">
            A product leader and ex-founder with over 15 years of experience across fintech, insurtech, B2B SaaS, and consumer apps in Asia-Pacific.
          </p>
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
              <h3 className="text-2xl font-semibold mb-6">Founder mindset, building with purpose.

</h3>
              <div className="space-y-6">
                <p className="text-secondary leading-relaxed">I’m Gordon, a product leader with 15+ years across B2B SaaS, fintech, insuretech, and B2C consumer apps.
</p>
                <p className="text-secondary leading-relaxed">I began in capital markets, shaping and scaling Sales-API solutions at Murex that powered RFQ workflows for sales-trader desks across Asia. In 2018, I founded Financial Butler, a personal finance app that grew to 5,000 MAUs, and learned firsthand what it takes to build from zero.
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
