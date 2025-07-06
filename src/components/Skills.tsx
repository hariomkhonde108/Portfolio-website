import React from 'react';
import { Code, Database, Server, Terminal, Layout, PenTool as Tool, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Technical <span className="text-gray-600 dark:text-white/70">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCategory
            icon={<Layout />}
            title="Frontend"
            skills={[
              { name: 'React', level: 80 },
              { name: 'HTML/CSS', level: 85 },
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
              // { name: 'Python', level: 75 },
              // { name: 'GraphQL', level: 70 },
            ]}
          />
          
          <SkillCategory
            icon={<Database />}
            title="Databases"
            skills={[
              // { name: 'PostgreSQL', level: 85 },
              { name: 'MongoDB', level: 80 },
              // { name: 'Redis', level: 70 },
              // { name: 'Prisma', level: 75 },
            ]}
          />
          
          <SkillCategory
            icon={<Cloud />}
            title="Tools"
            skills={[
              { name: 'Git', level: 80 },
              { name: 'Github', level: 75 },
              { name: 'Linux', level: 85 },
              { name: 'Postman', level: 70 },
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
  <div className="p-6 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/20 dark:border-white/5 shadow-sm">
    <div className="flex items-center gap-3 mb-6">
      <div className="text-gray-600 dark:text-white/70">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
    
    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-600 dark:text-white/70">{skill.name}</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white/50">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200/50 dark:bg-black/50 rounded-full h-2">
            <div
              className="bg-gray-600 dark:bg-white/80 h-2 rounded-full transition-all duration-300"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;