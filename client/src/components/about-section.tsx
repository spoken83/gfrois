import ScrollAnimation from "./scroll-animation";
import sketchImage from "@assets/me-sketch-2_1754250571514.jpeg";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
          <p className="text-xl text-secondary text-center mb-16 max-w-3xl mx-auto">.</p>
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
                <p className="text-secondary leading-relaxed">I’m Gordon, a founder, operator, and product builder with deep experience across fintech, SaaS, and consumer apps in Asia-Pacific.
</p>
                <p className="text-secondary leading-relaxed">I've shaped capital markets Sales-API solutions at Murex, founded and scaled a personal finance app, expanded embedded banking products at Railsr in Singapore and into Australia, and led product transformation at Income Insurance's SNACK vertical.</p>
                <p className="text-secondary leading-relaxed">Post startup, I joined Railsr as APAC Product Lead and scaled embedded banking products, launched a multi-currency wallet, and led product expansion into Australia. 
                Most recently at Income Insurance, I led transformation at SNACK, streamlining operations, reducing OPEX, and shifting the portfolio toward higher-margin microinsurance.
</p>
                <p className="text-secondary leading-relaxed">I’m now building personal ventures like Lockket and Thinkerly, and always open to collaborating on meaningful products in embedded finance, education, or tech. 

                Be humble. Stay hungry.</p>
              </div>
              
              <div className="mt-8">
                <Link href="/about" className="text-primary hover:text-blue-700 font-medium inline-flex items-center">
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
