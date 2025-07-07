import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Typed from 'typed.js';
import { gsap } from 'gsap';
import profileImage from "../components/hariom-khonde.png";
import '../styles/background.css';
import { useTheme } from '../context/ThemeContext';
import Terminal from './Terminal';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const typedInstanceRef = useRef<Typed | null>(null);
  const { theme } = useTheme();
  const [showTerminal, setShowTerminal] = useState(false);
  const [matrixFullscreen, setMatrixFullscreen] = useState(false);

  useEffect(() => {
    // Destroy existing typed instance if it exists
    if (typedInstanceRef.current) {
      typedInstanceRef.current.destroy();
    }

    // Create new typed instance
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Curios Student', 'Linux Enthusiast', 'Data Structures&Algo'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 1500,
      });

      typedInstanceRef.current = typed;
    }

    // Floating animation for the image
    gsap.to(imageRef.current, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
      }
    };
  }, [theme]); // Recreate typed instance when theme changes

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-white dark:bg-black transition-colors duration-300">
      {/* Animated background */}
      <div className="bg"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-400/20 dark:bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center z-10">
        {/* Text content */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-4 px-4 py-1 bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm rounded-full text-sm text-gray-600 dark:text-white/60"
          >
            Welcome to my portfolio
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            <motion.span 
              className="block text-gray-900 dark:text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm <span className="text-gray-900 dark:text-white">Hariom Khonde</span>
            </motion.span>
            <motion.span 
              className="block text-gray-600 dark:text-white/70 mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Engineering Student
            </motion.span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 min-h-[2rem]">
            <span ref={typedRef} className="typed-text"></span>
          </div>
          
          {/* Start Terminal Button */}
          <div className="mb-6 flex justify-center md:justify-start">
            <button
              className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              onClick={() => setShowTerminal(true)}
            >
              Start Terminal
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <motion.a
              href="#projects"
              className="group px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg shadow-gray-500/20 dark:shadow-white/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <SocialLink href="https://github.com/hariomkhonde108" icon={<Github size={24} />} />
              <SocialLink href="https://www.linkedin.com/in/hariom-khonde/" icon={<Linkedin size={24} />} />
              <SocialLink href="https://twitter.com/hariomkhonde" icon={<Twitter size={24} />} />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Image */}
        <motion.div 
          className="flex-1 mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          ref={imageRef}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gray-200/50 dark:bg-white/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-gray-200/50 dark:from-white/5 to-transparent rounded-full blur-2xl"></div>
            <img
              src={profileImage}
              alt="Hariom Khonde"
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover mx-auto border-4 border-gray-200/20 dark:border-white/10 shadow-lg shadow-gray-500/20 dark:shadow-black/50"
              loading="lazy"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-100/80 dark:bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-600 dark:text-white/60">
              Available for hire
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="w-6 h-10 border-2 border-gray-300/20 dark:border-white/20 rounded-full flex items-end justify-center">
          <motion.div 
            className="w-1 h-3 bg-gray-400/30 dark:bg-white/30 rounded-full mb-1"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
      
      {/* Terminal Modal */}
      {showTerminal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative">
            {!matrixFullscreen && (
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
                onClick={() => setShowTerminal(false)}
                aria-label="Close Terminal"
              >
                ×
              </button>
            )}
            <Terminal onMatrixFullscreen={setMatrixFullscreen} />
          </div>
        </div>
      )}
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white transition-colors hover:scale-110 p-2 bg-gray-100/50 dark:bg-white/5 rounded-full backdrop-blur-sm"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    aria-label={`Visit ${href}`}
  >
    {icon}
  </motion.a>
);

export default Hero;