import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import ScrollAnimation from "./scroll-animation";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Great Together</h2>
          <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
            Whether you're looking for a product leader, venture builder, or strategic advisor, I'd love to explore how we can create meaningful impact together.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-secondary">gordon.matthew@gmail.com</p>
            </div>
            <div className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="text-primary h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/gordonfrois" className="text-primary hover:text-blue-700 hover:underline">
                linkedin.com/in/gordonfrois
              </a>
            </div>
            <div className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-secondary">(+65) 9189-7325</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:gordon.matthew@gmail.com">
              <Button className="bg-primary text-white px-8 py-3 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </a>
            <a href="https://linkedin.com/in/gordonfrois" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-primary text-primary px-8 py-3 hover:bg-primary hover:text-white transition-all duration-200">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
