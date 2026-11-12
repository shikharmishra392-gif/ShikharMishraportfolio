import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../utils/portfolio-data';
import { Terminal, Database, Code, Cpu, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('backend');

  const activeCategory = SKILL_CATEGORIES.find((c) => c.id === activeCategoryId) || SKILL_CATEGORIES[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return <Cpu className="h-4 w-4" />;
      case 'databases':
        return <Database className="h-4 w-4" />;
      case 'dsa':
        return <Code className="h-4 w-4" />;
      case 'frontend':
        return <Terminal className="h-4 w-4" />;
      case 'ai-cloud':
        return <Sparkles className="h-4 w-4" />;
      default:
        return <Cpu className="h-4 w-4" />;
    }
  };

  return (
    <section id="skills" className="py-16 lg:py-24 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Technical Skills
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Languages, frameworks, databases, and developer tools applied in backend architectures.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategory.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryId(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200/90 shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Container */}
        <div className="rounded-xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
          <div className="mb-4 pb-3 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">
              {activeCategory.name}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-3.5 rounded-lg bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-bold text-slate-800">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono font-medium text-teal-800 bg-teal-50 px-1.5 py-0.2 rounded border border-teal-200/70">
                    {skill.level}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500">
                  <span className="text-slate-400">Applied in:</span> {skill.appliedIn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
