import React, { useState, useMemo } from 'react';
import { Search, Github, Layers } from 'lucide-react';
import { PROJECTS } from '../utils/portfolio-data';
import { filterProjects } from '../utils/filter-projects';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return filterProjects(PROJECTS, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-16 lg:py-24 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Backend architectures, microservices, and AI web applications built with Java & Spring Boot.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 border border-slate-200/90 rounded-lg text-xs shadow-xs">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-white text-indigo-700 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('ai')}
              className={`px-3 py-1 rounded transition-colors whitespace-nowrap ${
                selectedCategory === 'ai'
                  ? 'bg-white text-indigo-700 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              AI & LLM
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('campus')}
              className={`px-3 py-1 rounded transition-colors whitespace-nowrap ${
                selectedCategory === 'campus'
                  ? 'bg-white text-indigo-700 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Campus Portal
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8 max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword (e.g. Spring Boot, Gemini)..."
              aria-label="Filter projects by keyword"
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-md text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200 shadow-xs"
            />
          </div>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-6 shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div>
                <div className="text-[11px] font-mono text-indigo-600 font-semibold mb-2">
                  {project.subtitle}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-50 border border-slate-200/80 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(project)}
                  className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Layers className="h-3.5 w-3.5" />
                  <span>Architecture Details</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="p-1.5 text-slate-500 hover:text-slate-900 rounded hover:bg-slate-100 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      </div>
    </section>
  );
};
