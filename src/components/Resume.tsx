import React from 'react';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          My <span className="text-gray-600 dark:text-white/70">Resume</span>
        </h2>
        
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-2xl aspect-[1/1.414] bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden mb-8 border border-gray-200/20 dark:border-white/5 shadow-sm">
            {/* Resume preview image */}
            <img
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
              alt="Resume Preview"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900/50 dark:bg-black/50 flex items-center justify-center">
              <FileText size={48} className="text-white/80" />
            </div>
          </div>
          
          <a
  href="/resume/hariomkhonde.pdf"
  download="Hariom_Khonde_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-10 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
>
  <Download size={20} />
  Download Resume
</a>


        </div>
      </div>
    </section>
  );
};

export default Resume;