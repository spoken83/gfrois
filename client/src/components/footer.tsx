import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Gordon Frois</h3>
            <p className="text-gray-300 mb-4">
              Product Leader & Builder — helping businesses harness AI, fintech, and modern product strategy to drive growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/gordonfrois" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:gordon.frois@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/articles" className="text-gray-300 hover:text-white transition-colors">Articles</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Projects</h4>
            <ul className="space-y-2">
              <li><a href="/projects/thinkerly" className="text-gray-300 hover:text-white transition-colors">Thinkerly</a></li>
              <li><a href="/projects/zenoptions" className="text-gray-300 hover:text-white transition-colors">ZenOptions</a></li>
              <li><a href="/projects/ai-finance-dashboard" className="text-gray-300 hover:text-white transition-colors">AI Finance Dashboard</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors">All Projects</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Gordon Frois. All rights reserved.
          </p>
          <p className="text-gray-300 mt-2">
            Building meaningful products. Be humble. Stay hungry.
          </p>
        </div>
      </div>
    </footer>
  );
}
