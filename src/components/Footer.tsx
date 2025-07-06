import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200/20 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Hariom Khonde</h3>
            <p className="text-gray-600 dark:text-white/70">
              A passionate student with a knack for creating innovative solutions. I love coding and exploring new technologies.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  href="#about" 
                  className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors inline-block relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#projects" 
                  className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors inline-block relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Projects
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#skills" 
                  className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors inline-block relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Skills
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#contact" 
                  className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors inline-block relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>
          
          {/* Social links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/hariomkhonde108"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white transition-colors hover:scale-110 p-2 bg-gray-200/50 dark:bg-white/5 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Visit Github"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/hariom-khonde/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white transition-colors hover:scale-110 p-2 bg-gray-200/50 dark:bg-white/5 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Visit LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com/hariomkhonde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white transition-colors hover:scale-110 p-2 bg-gray-200/50 dark:bg-white/5 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Visit Twitter"
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200/20 dark:border-white/5 text-center">
          <p className="text-gray-600 dark:text-white/70 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white transition-colors" /> by Hariom Khonde
          </p>
          <p className="text-gray-500 dark:text-white/50 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;