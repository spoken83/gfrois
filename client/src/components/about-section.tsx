import ScrollAnimation from "./scroll-animation";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-4">My Story</h2>
          <p className="text-xl text-secondary text-center mb-16 max-w-3xl mx-auto">
            From engineering to entrepreneurship, I've spent over 15 years building products that matter, leading teams that deliver, and creating businesses that grow.
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
            <h3 className="text-2xl font-semibold mb-6">Building Products, Growing Teams, Creating Impact</h3>
            <div className="space-y-6">
              <p className="text-secondary leading-relaxed">
                My journey began with a Computer Engineering degree from NTU Singapore, but it was the intersection of technology and human needs that truly captured my passion. I've had the privilege of wearing many hats – from implementation consultant to product leader, from startup founder to venture builder.
              </p>
              <p className="text-secondary leading-relaxed">
                What drives me is the challenge of turning complex problems into elegant solutions. Whether it's scaling a B2B SaaS platform across APAC, launching a consumer fintech app from zero to 5000 MAU, or leading digital transformation at an established insurer, I thrive on the opportunity to create products that genuinely improve people's lives and businesses.
              </p>
              <p className="text-secondary leading-relaxed">
                When I'm not obsessing over user journeys and growth metrics, you'll find me exploring Singapore's hiking trails with my two daughters, planning our next family adventure, or occasionally creating TikTok videos that make my kids cringe.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
