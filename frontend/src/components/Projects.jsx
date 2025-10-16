import React from 'react';
import { portfolioData } from '../mock';
import { ExternalLink, Sparkles } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-mono text-center">
          <span className="text-emerald-400">03.</span> Featured Projects
        </h2>

        <div className="space-y-12">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-slate-800 border-2 border-slate-700 rounded-lg overflow-hidden hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-400/20"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-emerald-400" size={24} />
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-mono">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="text-gray-400 group-hover:text-emerald-400 transition-colors duration-200" size={24} />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-mono text-emerald-400 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-slate-900 border border-emerald-400/30 rounded-lg text-emerald-400 text-sm font-mono hover:bg-emerald-400 hover:text-slate-900 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.features && (
                  <div>
                    <h4 className="text-sm font-mono text-blue-400 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 to-blue-400/0 group-hover:from-emerald-400/5 group-hover:to-blue-400/5 pointer-events-none transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 font-mono text-sm">
            More projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;