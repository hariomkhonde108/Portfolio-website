import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hariom Khonde</h3>
            <p className="text-gray-400">
              A passionate Full Stack Developer focused on creating scalable and efficient web solutions.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/hariomkhonde108" icon={<Github size={24} />} />
              <SocialLink href="https://www.linkedin.com/in/hariom-khonde/" icon={<Linkedin size={24} />} />
              <SocialLink href="https://twitter.com/hariomkhonde" icon={<Twitter size={24} />} />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Hariom Khonde
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors"
  >
    {icon}
  </a>
);

export default Footer;