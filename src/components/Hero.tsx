import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Typed from 'typed.js';
import { gsap } from 'gsap';

const Hero = () => {
  const typedRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['MERN Stack Developer', 'Linux Enthusiast', 'DataStructures & Alogo'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
    });

    // Floating animation for the image
    gsap.to(imageRef.current, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      {/* Background gradient with animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3b82f6_0%,_transparent_50%)] animate-pulse"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm Hariom Khonde
            </motion.span>
            <motion.span 
              className="block text-blue-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer
            </motion.span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            <span ref={typedRef}></span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <motion.a
              href="#projects"
              className="group px-8 py-3 bg-blue-500 text-white rounded-full font-medium flex items-center gap-2 hover:bg-blue-600 transition-all duration-300 hover:scale-105"
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
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <img
              src="src\components\hariom-khonde2.jpg"
              alt="Hariom Khonde"
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover mx-auto border-4 border-blue-500 shadow-lg shadow-blue-500/50"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-end justify-center">
          <motion.div 
            className="w-1 h-3 bg-gray-400 rounded-full mb-1"
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
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors hover:scale-110"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

export default Hero;