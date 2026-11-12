import React, { useState } from 'react';
import {
  Code2,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Copy,
  Check,
  FileText,
  MapPin,
  Sparkles,
  Server,
  Database,
} from 'lucide-react';
import { PERSONAL_INFO } from '../utils/portfolio-data';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Typographic Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/80">
                Backend Developer
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500">Bareilly, India</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight [text-wrap:balance]">
              Engineering reliable backend architectures, Spring Boot services, and cloud systems.
            </h1>

            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              I’m <strong className="text-slate-900 font-semibold">Shikhar Mishra</strong>, a Computer Science undergraduate (graduating 2027) specializing in backend engineering with hands-on experience in Java, Spring Boot, RESTful APIs, MySQL, and cloud-native systems. Focused on Data Structures & Algorithms, database design, and clean code.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors whitespace-nowrap shrink-0 shadow-sm active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200/90 rounded-md hover:bg-teal-100 hover:text-teal-900 transition-colors whitespace-nowrap shrink-0 shadow-xs"
              >
                <FileText className="h-3.5 w-3.5 text-teal-600" />
                <span>Resume PDF</span>
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-mono text-slate-600 hover:text-slate-900 bg-white border border-slate-200/90 rounded-md shadow-xs transition-colors"
                title="Copy email to clipboard"
              >
                <Mail className="h-3.5 w-3.5 text-indigo-500" />
                <span>{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-slate-400" />
                )}
              </button>
            </div>

            {/* Direct Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 transition-colors flex items-center gap-1.5"
              >
                <Github className="h-3.5 w-3.5 text-slate-700" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300">/</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="h-3.5 w-3.5 text-blue-600" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300">/</span>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-600 transition-colors flex items-center gap-1.5"
              >
                <Code2 className="h-3.5 w-3.5 text-amber-600" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quiet Minimalist Overview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 space-y-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Technical Overview</h3>
                  <p className="text-xs text-slate-500">B.Tech Computer Science (2023 - 2027)</p>
                </div>
                <span className="text-[11px] font-mono font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80">
                  Expected 2027
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-indigo-600 font-semibold block text-[11px] font-mono mb-1">Core Backend</span>
                  <p className="text-slate-700">Java (Core & Adv), Spring Boot, REST APIs, JDBC, Maven</p>
                </div>

                <div>
                  <span className="text-teal-700 font-semibold block text-[11px] font-mono mb-1">Databases</span>
                  <p className="text-slate-700">MySQL, MongoDB, CRUD Operations, Relational Schemas</p>
                </div>

                <div>
                  <span className="text-amber-700 font-semibold block text-[11px] font-mono mb-1">DSA & Problem Solving</span>
                  <p className="text-slate-700">Arrays, Strings, Linked Lists, Stacks, Queues, Searching & Sorting</p>
                </div>

                <div>
                  <span className="text-violet-700 font-semibold block text-[11px] font-mono mb-1">Generative AI & Cloud</span>
                  <p className="text-slate-700">AWS Academy Graduate (GenAI), Gemini API, OpenRouter, Git</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-slate-400" />
                  <span>SRMS CET, Bareilly</span>
                </span>
                <span className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200/80 text-[11px] font-mono font-medium">Academic Scholarship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
