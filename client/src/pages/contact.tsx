import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download, MapPin, Clock } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";
import SEOHead from "@/components/seo-head";
import CvDownloadButton from "@/components/cv-download-button";

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Gordon Frois - Product Leader & Builder"
        description="Get in touch with Gordon Frois for product leadership opportunities, strategic consulting, or collaboration. Download CV, connect on LinkedIn, or send an email. Based in Singapore."
        keywords="contact Gordon Frois, product leader hire, product consultant Singapore, Gordon Frois email, LinkedIn Gordon Frois, product manager contact"
        canonicalUrl="https://gordonfrois.com/contact"
      />
      <div className="pt-24 pb-16 bg-gradient-to-br from-white to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6">Let's Connect</h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Whether you're looking for a product leader, builder, or strategic partner, I'd love to explore how we can create meaningful impact together.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ScrollAnimation delay={0.1}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Email</h3>
              <p className="text-secondary text-center mb-4">gordon.frois@gmail.com</p>
              <div className="text-center">
                <a href="mailto:gordon.frois@gmail.com">
                  <Button className="bg-primary text-white hover:bg-blue-700">
                    Send Email
                  </Button>
                </a>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Linkedin className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">LinkedIn</h3>
              <p className="text-secondary text-center mb-4">linkedin.com/in/gordonfrois</p>
              <div className="text-center">
                <a href="https://linkedin.com/in/gordonfrois" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Connect
                  </Button>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.3}>
          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <div className="text-center mb-8">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="text-accent h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Download My CV</h3>
              <p className="text-secondary mb-6">
                Get detailed information about my professional experience, achievements, and technical expertise.
              </p>
              <CvDownloadButton
                variant="default"
                className="bg-accent text-white hover:bg-orange-600 px-8 py-3"
              />
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollAnimation delay={0.4}>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <MapPin className="text-primary h-8 w-8 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-secondary">Singapore/Asia/AU</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.5}>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Clock className="text-primary h-8 w-8 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Response Time</h4>
              <p className="text-secondary">Usually within 24 hours</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      </div>
    </>
  );
}