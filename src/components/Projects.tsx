import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import project1 from '../components/Screenshot 2025-01-09 155314.png';
import project2 from '../components/Screenshot 2025-03-09 163933.png';
import project3 from '../components/Screenshot 2025-04-03 172241.png';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Featured <span className="text-gray-600 dark:text-white/70">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <ProjectCard
            title="Bit Scanner/Eco-Scan"
            description="A real time scanner app for product info gathering"
            image={project1}
            tags={['ReactNative', 'Gemini API', 'Tailwind']}
            githubUrl="https://github.com/hariomkhonde108/Terrathon"
            liveUrl="https://example.com"
          />

          <ProjectCard
            title="Tumer Detect"
            description="A full-featured website for the tumer detection using React, Node.js, and ML models"
            image={project2}
            tags={['React','ML','python','Typescript']}
            githubUrl="https://github.com/hariomkhonde108/Tumer-Detect"
            liveUrl="https://example.com"
          />
          
          <ProjectCard
            title="Portfolio Website"
            description="A modern portfolio website which displays my all work"
            image={project3}
            tags={['TypeScript', 'React', 'Tailwind CSS']}
            githubUrl="https://github.com/hariomkhonde108/Portfolio-website"
            liveUrl="https://hariomkhonde.vercel.app/#"
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}) => (
  <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden group border border-gray-200/20 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 dark:from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-white/70 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100/50 dark:bg-white/10 text-sm rounded-full text-gray-700 dark:text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Github size={20} />
          Code
        </a>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ExternalLink size={20} />
          Live
        </a>
      </div>
    </div>
  </div>
);

export default Projects;