import React, { useState } from 'react';
import { FileText, Menu, X, Github, Linkedin, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/portfolio-data';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group"
        >
          <span className="font-mono text-indigo-600 font-bold text-xs group-hover:scale-105 transition-transform">&lt;/&gt;</span>
          <span className="tracking-tight text-slate-900 font-bold">
            Shikhar Mishra
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-600">
          <a
            href="#projects"
            className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0"
          >
            Skills
          </a>
          <a
            href="#leetcode"
            className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0"
          >
            LeetCode
          </a>
          <a
            href="#experience"
            className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200/80 rounded-md hover:bg-teal-100 hover:text-teal-900 transition-colors whitespace-nowrap shrink-0 shadow-xs active:scale-95"
          >
            <FileText className="h-3.5 w-3.5 text-teal-600" />
            <span>Resume</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="inline-flex md:hidden p-1.5 text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-5 py-4 space-y-3.5 shadow-xl">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-indigo-600"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-indigo-600"
            >
              Skills
            </a>
            <a
              href="#leetcode"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-indigo-600"
            >
              LeetCode
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-indigo-600"
            >
              Experience & Education
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-indigo-600"
            >
              Contact
            </a>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3 text-slate-500">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-indigo-600 p-1"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-indigo-600 p-1"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="hover:text-amber-600 p-1"
              >
                <Code2 className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="px-3 py-1.5 text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 rounded-md hover:bg-teal-100"
            >
              View Resume PDF
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
