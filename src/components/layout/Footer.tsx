import { Link } from 'react-router-dom';
import { Github, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              MirexTech
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Technology That Moves Businesses Forward.
Websites, software, mobile apps and business automation.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/mohdadnan348" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/mirex.tech/" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/website-development" className="text-muted-foreground hover:text-foreground transition-colors">Web Development</Link></li>
              <li><Link to="/services/mobile-apps" className="text-muted-foreground hover:text-foreground transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services/ai-chatbots" className="text-muted-foreground hover:text-foreground transition-colors">AI Chatbots</Link></li>
              <li><Link to="/services/seo" className="text-muted-foreground hover:text-foreground transition-colors">SEO</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground" href="mailto:hello.mirextech@gmail.com"><Mail className="h-4 w-4" /> Email us</a></li>
              <li><a className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground" href="tel:+919336176580"><Phone className="h-4 w-4" /> +91 9336176580</a></li>
              <li className="text-muted-foreground">Kanpur, Uttar Pradesh, India</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          &copy; {year} MirexTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}