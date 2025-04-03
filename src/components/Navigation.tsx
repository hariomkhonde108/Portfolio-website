import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-white hover:text-white/90 transition-colors">HK</a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#resume">Resume</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <SocialLink href="https://github.com/hariomkhonde108" icon={<Github size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/hariom-khonde/" icon={<Linkedin size={20} />} />
            <SocialLink href="https://twitter.com/hariomkhonde" icon={<Twitter size={20} />} />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm border-t border-white/5">
          <MobileNavLink href="#about">About</MobileNavLink>
          <MobileNavLink href="#projects">Projects</MobileNavLink>
          <MobileNavLink href="#skills">Skills</MobileNavLink>
          <MobileNavLink href="#resume">Resume</MobileNavLink>
          <MobileNavLink href="#contact">Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white/70 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
  >
    {children}
  </a>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/50 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
  >
    {icon}
  </a>
);

export default Navigation;