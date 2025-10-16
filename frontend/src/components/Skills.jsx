import React from 'react';
import { portfolioData } from '../mock';
import { Code2, Database, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Tech Stack',
      icon: <Code2 className="text-emerald-400" size={28} />,
      skills: portfolioData.skills.techStack,
      color: 'emerald'
    },
    {
      title: 'Programming Languages',
      icon: <Code2 className="text-blue-400" size={28} />,
      skills: portfolioData.skills.languages,
      color: 'blue'
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="text-purple-400" size={28} />,
      skills: portfolioData.skills.backend,
      color: 'purple'
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="text-orange-400" size={28} />,
      skills: portfolioData.skills.tools,
      color: 'orange'
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-pink-400" size={28} />,
      skills: portfolioData.skills.softSkills,
      color: 'pink'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'border-emerald-400/30 hover:border-emerald-400 hover:shadow-emerald-400/50',
      blue: 'border-blue-400/30 hover:border-blue-400 hover:shadow-blue-400/50',
      purple: 'border-purple-400/30 hover:border-purple-400 hover:shadow-purple-400/50',
      orange: 'border-orange-400/30 hover:border-orange-400 hover:shadow-orange-400/50',
      pink: 'border-pink-400/30 hover:border-pink-400 hover:shadow-pink-400/50'
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-mono text-center">
          <span className="text-emerald-400">02.</span> Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-slate-900 border-2 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                getColorClasses(category.color)
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white font-mono">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-gray-300 text-sm font-mono hover:bg-slate-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;