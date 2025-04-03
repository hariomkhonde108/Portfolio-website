import React from 'react';
import { Code, Database, Server, Terminal, Layout, PenTool as Tool, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Technical <span className="text-white/70">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCategory
            icon={<Layout />}
            title="Frontend"
            skills={[
              { name: 'React', level: 90 },
              { name: 'TypeScript', level: 85 },
              { name: 'Next.js', level: 80 },
              { name: 'Tailwind CSS', level: 95 },
            ]}
          />
          
          <SkillCategory
            icon={<Server />}
            title="Backend"
            skills={[
              { name: 'Node.js', level: 85 },
              { name: 'Express', level: 80 },
              { name: 'Python', level: 75 },
              { name: 'GraphQL', level: 70 },
            ]}
          />
          
          <SkillCategory
            icon={<Database />}
            title="Databases"
            skills={[
              { name: 'PostgreSQL', level: 85 },
              { name: 'MongoDB', level: 80 },
              { name: 'Redis', level: 70 },
              { name: 'Prisma', level: 75 },
            ]}
          />
          
          <SkillCategory
            icon={<Cloud />}
            title="DevOps"
            skills={[
              { name: 'Docker', level: 80 },
              { name: 'AWS', level: 75 },
              { name: 'CI/CD', level: 85 },
              { name: 'Kubernetes', level: 70 },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; level: number }[];
}) => (
  <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/5">
    <div className="flex items-center gap-3 mb-6">
      <div className="text-white/70">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    
    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-white/70">{skill.name}</span>
            <span className="text-sm font-medium text-white/50">{skill.level}%</span>
          </div>
          <div className="w-full bg-black/50 rounded-full h-2">
            <div
              className="bg-white/80 h-2 rounded-full transition-all duration-300"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;