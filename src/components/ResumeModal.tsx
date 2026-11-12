import React, { useEffect, useState } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/portfolio-data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeView, setActiveView] = useState<'embed' | 'summary'>('embed');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md">
      <div
        className="relative flex flex-col w-full max-w-4xl h-[90vh] rounded-xl border border-slate-200/90 bg-white text-slate-800 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-5 py-3">
          <div className="flex items-center gap-2.5">
            <FileText className="h-4 w-4 text-indigo-600" />
            <div>
              <h2 id="resume-modal-title" className="text-sm font-bold text-slate-900">
                Shikhar Mishra — Resume
              </h2>
              <div className="text-[11px] text-slate-500 font-medium">
                Backend Developer · Graduating 2027
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center p-0.5 bg-white rounded border border-slate-200 mr-2 text-xs shadow-xs">
              <button
                type="button"
                onClick={() => setActiveView('embed')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeView === 'embed'
                    ? 'bg-slate-100 text-indigo-700 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                PDF View
              </button>
              <button
                type="button"
                onClick={() => setActiveView('summary')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeView === 'summary'
                    ? 'bg-slate-100 text-indigo-700 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Overview
              </button>
            </div>

            <a
              href={PERSONAL_INFO.resumePdfPath}
              download="Shikhar_Mishra_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
            </a>

            <a
              href={PERSONAL_INFO.resumePdfPath}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors ml-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 bg-slate-100/60 overflow-hidden">
          {activeView === 'embed' ? (
            <iframe
              src={`${PERSONAL_INFO.resumePdfPath}#toolbar=0&navpanes=0`}
              title="Shikhar Mishra Resume PDF"
              className="w-full h-full border-none"
            />
          ) : (
            <div className="h-full overflow-y-auto p-6 sm:p-8 space-y-6 max-w-3xl mx-auto text-xs">
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono">
                  Summary
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700 font-mono">
                  Core Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                  <div>
                    <span className="text-slate-500 block font-mono text-[11px] font-semibold">Backend:</span>
                    <span>Java (Core & Adv), Spring Boot, RESTful APIs, JDBC, Maven</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-mono text-[11px] font-semibold">Databases:</span>
                    <span>MySQL, MongoDB, CRUD Operations, Relational Design</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-mono text-[11px] font-semibold">DSA:</span>
                    <span>Arrays, Strings, Linked Lists, Stacks, Queues, Searching, Sorting</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-mono text-[11px] font-semibold">AI & Cloud:</span>
                    <span>AWS Academy Graduate (GenAI), Google Gemini API, OpenRouter</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 space-y-2 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 font-mono">
                  Key Achievement
                </h3>
                <p className="text-slate-800 font-medium">
                  Academic Scholarship Holder — Shri Ram Murti Smarak College of Engineering & Technology
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
