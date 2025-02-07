import React from 'react';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-blue-500">Resume</span>
        </h2>
        
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-2xl aspect-[1/1.414] bg-white rounded-lg overflow-hidden mb-8">
            {/* Resume preview image */}
            <img
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
              alt="Resume Preview"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
              <FileText size={48} className="text-white" />
            </div>
          </div>
          
          <a
            href="src\components\hariomresume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
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