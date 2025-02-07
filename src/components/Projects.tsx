import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="E-Commerce Platform"
            description="A full-featured e-commerce platform built with React, Node.js, and MongoDB"
            image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
            tags={['React', 'Node.js', 'MongoDB']}
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
          
          <ProjectCard
            title="Task Management App"
            description="A collaborative task management application with real-time updates"
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
            tags={['Vue.js', 'Firebase', 'Tailwind']}
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
          
          <ProjectCard
            title="AI Chat Interface"
            description="A modern chat interface for AI interactions with voice support"
            image="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
            tags={['TypeScript', 'OpenAI', 'WebRTC']}
            githubUrl="https://github.com"
            liveUrl="https://example.com"
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
  <div className="bg-gray-800 rounded-lg overflow-hidden group">
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-700 text-sm rounded-full"
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
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <Github size={20} />
          Code
        </a>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ExternalLink size={20} />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

export default Projects;