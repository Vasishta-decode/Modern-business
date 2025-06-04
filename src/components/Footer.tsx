import React from 'react';
import { Boxes, Sparkles, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Boxes className="text-white h-8 w-8" />
                <Sparkles className="text-white h-4 w-4 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-white font-bold text-xl">Innovex</span>
            </div>
            <p className="text-white/70">
              Transforming ideas into digital reality through innovative technology solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon icon={<Facebook size={18} />} href="#" label="Facebook" />
              <SocialIcon icon={<Twitter size={18} />} href="#" label="Twitter" />
              <SocialIcon icon={<Instagram size={18} />} href="#" label="Instagram" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" label="LinkedIn" />
              <SocialIcon icon={<Github size={18} />} href="#" label="GitHub" />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#services" text="Custom Software Development" />
              <FooterLink href="#services" text="Data Analytics" />
              <FooterLink href="#services" text="Mobile App Development" />
              <FooterLink href="#services" text="Cybersecurity" />
              <FooterLink href="#services" text="Digital Transformation" />
              <FooterLink href="#services" text="Cloud Solutions" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#about" text="About Us" />
              <FooterLink href="#team" text="Our Team" />
              <FooterLink href="#" text="Careers" />
              <FooterLink href="#" text="Blog" />
              <FooterLink href="#" text="Case Studies" />
              <FooterLink href="#" text="Privacy Policy" />
              <FooterLink href="#" text="Terms of Service" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter to get updates on our latest news and services.
            </p>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/50 focus:border-white/20 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              <button 
                type="submit"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-colors duration-300 w-full backdrop-blur-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-white/70 text-sm">
              &copy; {currentYear} Innovex. All rights reserved.
            </p>
            <span className="hidden sm:inline text-white/50">•</span>
            <p className="text-white/50 text-sm">
              Powered by <a href="#" className="hover:text-white transition-colors duration-300">Vasishta R</a>
            </p>
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialIcon = ({ icon, href, label }: SocialIconProps) => {
  return (
    <a 
      href={href}
      className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink = ({ href, text }: FooterLinkProps) => {
  return (
    <li>
      <a 
        href={href}
        className="text-white/70 hover:text-white transition-colors duration-300"
      >
        {text}
      </a>
    </li>
  );
};

export default Footer;