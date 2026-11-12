import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Cpu, Layers, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200/90 bg-white text-slate-800 shadow-2xl p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold mb-2">
            <span>System Architecture Deep Dive</span>
            <span aria-hidden="true">·</span>
            <span>{project.category.toUpperCase()}</span>
          </div>

          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack List */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 border border-slate-200 text-indigo-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Summary Description */}
        <div className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed">
          {project.description}
        </div>

        {/* Architectural Topology Map */}
        <div className="mb-8 space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
            <Layers className="h-4 w-4 text-indigo-600" />
            <span>Architecture Breakdown</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-lg bg-indigo-50/60 border border-indigo-100">
              <div className="text-indigo-700 mb-1 flex items-center gap-1.5 font-semibold">
                <Cpu className="h-3.5 w-3.5 text-indigo-600" />
                <span>Backend Tier</span>
              </div>
              <div className="text-slate-800 font-medium">{project.architecture.backend}</div>
            </div>

            <div className="p-3.5 rounded-lg bg-emerald-50/60 border border-emerald-100">
              <div className="text-emerald-700 mb-1 flex items-center gap-1.5 font-semibold">
                <Database className="h-3.5 w-3.5 text-emerald-600" />
                <span>Data Storage</span>
              </div>
              <div className="text-slate-800 font-medium">{project.architecture.database}</div>
            </div>

            <div className="p-3.5 rounded-lg bg-sky-50/60 border border-sky-100">
              <div className="text-sky-700 mb-1 flex items-center gap-1.5 font-semibold">
                <Layers className="h-3.5 w-3.5 text-sky-600" />
                <span>Frontend Layer</span>
              </div>
              <div className="text-slate-800 font-medium">{project.architecture.frontend}</div>
            </div>

            <div className="p-3.5 rounded-lg bg-violet-50/60 border border-violet-100">
              <div className="text-violet-700 mb-1 flex items-center gap-1.5 font-semibold">
                <Sparkles className="h-3.5 w-3.5 text-violet-600" />
                <span>AI & Pipelines</span>
              </div>
              <div className="text-slate-800 font-medium">{project.architecture.aiOrTools}</div>
            </div>
          </div>
        </div>

        {/* Key Engineering Modules */}
        <div className="mb-8 space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
            Specialized Backend & Core Modules
          </h3>
          <div className="space-y-2">
            {project.keyModules.map((mod, idx) => (
              <div
                key={mod}
                className="flex items-start gap-2.5 text-xs text-slate-700 p-2.5 rounded-lg bg-slate-50 border border-slate-200"
              >
                <span className="font-mono text-indigo-600 font-bold">0{idx + 1}.</span>
                <span>{mod}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Highlights */}
        <div className="mb-8 space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
            Key Contributions & Impact
          </h3>
          <ul className="space-y-2 text-xs text-slate-700">
            {project.highlights.map((hl, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub Repository</span>
            <ExternalLink className="h-3 w-3" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};
