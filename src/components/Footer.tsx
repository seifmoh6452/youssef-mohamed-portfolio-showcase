import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, Heart, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Youssef Mohamed</h3>
                <p className="text-sm opacity-80">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Building modern, responsive websites with lifetime maintenance. 
              Your digital success is my commitment.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                React Specialist
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                Mobile-First
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                Lifetime Support
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Navigation</h4>
            <div className="space-y-3">
              {[
                { name: "About Me", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Why Work With Me", href: "#why-work-with-me" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Ready to Start?</h4>
            <p className="text-sm opacity-90">
              Let's discuss your project and create something amazing together.
            </p>
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-white"
              onClick={() => window.open("mailto:youssef.mohamed9666@icloud.com", "_blank")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-white/20 text-white hover:bg-white/10"
              onClick={scrollToTop}
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">
            © 2025 Youssef Mohamed. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm opacity-80">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;