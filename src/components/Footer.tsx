import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/portfolio-data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white text-slate-600 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-sm font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <span className="text-indigo-600 font-mono font-bold text-xs">&lt;/&gt;</span>
              <span>SHIKHAR MISHRA</span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Backend Developer · Java & Spring Boot · DSA Problem Solver
            </p>
          </div>

          {/* Nav & Socials */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-600 transition-colors flex items-center gap-1.5"
            >
              <Github className="h-4 w-4 text-slate-700" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="h-4 w-4 text-blue-600" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-600 transition-colors flex items-center gap-1.5"
            >
              <Code2 className="h-4 w-4 text-amber-600" />
              <span>LeetCode</span>
            </a>
          </div>

          {/* Jump to top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors shadow-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Shikhar Mishra. Built with React & Tailwind CSS.
          </div>
          <div>
            Bareilly, Uttar Pradesh, India
          </div>
        </div>
      </div>
    </footer>
  );
};
