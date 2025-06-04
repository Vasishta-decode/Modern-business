import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const throttle = <T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void => {
    let inThrottle = false;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func.apply(null, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/50 backdrop-blur-md border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2 backdrop-blur-sm">
              Get Started <ArrowRight size={16} />
            </button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen 
            ? 'max-h-screen opacity-100 bg-black/90 backdrop-blur-md border-b border-white/5' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <MobileNavLinks closeMenu={() => setIsOpen(false)} />
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors duration-300 w-full flex items-center justify-center gap-2 backdrop-blur-sm">
              Get Started <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => {
  const links = ['Home', 'Services', 'About', 'Team', 'Testimonials', 'Contact'];
  
  return (
    <>
      {links.map(link => (
        <a 
          key={link} 
          href={`#${link.toLowerCase()}`}
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          {link}
        </a>
      ))}
    </>
  );
};

const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  const links = ['Home', 'Services', 'About', 'Team', 'Testimonials', 'Contact'];
  
  return (
    <>
      {links.map(link => (
        <a 
          key={link} 
          href={`#${link.toLowerCase()}`}
          className="text-white/80 hover:text-white py-2 transition-colors duration-300 block"
          onClick={closeMenu}
        >
          {link}
        </a>
      ))}
    </>
  );
};

export default Navbar;