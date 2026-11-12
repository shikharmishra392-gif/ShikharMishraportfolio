import React from 'react';
import { Code2, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, DSA_TOPICS } from '../utils/portfolio-data';

export const LeetCodeSection: React.FC = () => {
  return (
    <section id="leetcode" className="py-16 lg:py-24 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-amber-600" />
              <span>LeetCode & Problem Solving</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Practicing Data Structures & Algorithms in Java with a focus on optimal runtime and clean logic.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-md bg-amber-50 border border-amber-200/90 text-amber-800 hover:bg-amber-100 transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <span>leetcode.com/u/{PERSONAL_INFO.leetcodeUsername}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Overview Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-xs">
            <div className="text-xs font-mono text-indigo-600 font-semibold mb-1">Language</div>
            <div className="text-sm font-bold text-slate-900">Java (Core & Collections)</div>
            <p className="text-xs text-slate-500 mt-1">HashMap, Deque, PriorityQueue, OOP</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-xs">
            <div className="text-xs font-mono text-teal-700 font-semibold mb-1">Focus Areas</div>
            <div className="text-sm font-bold text-slate-900">Optimal Time & Space</div>
            <p className="text-xs text-slate-500 mt-1">In-place pointers, minimal memory overhead</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-xs">
            <div className="text-xs font-mono text-amber-700 font-semibold mb-1">Platform</div>
            <div className="text-sm font-bold text-slate-900">LeetCode Active</div>
            <p className="text-xs text-slate-500 mt-1">Continuous algorithmic learning</p>
          </div>
        </div>

        {/* Topic Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DSA_TOPICS.map((topic) => (
            <div
              key={topic.title}
              className="p-5 rounded-xl border border-slate-200/90 bg-white shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {topic.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {topic.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {topic.patterns.map((pat) => (
                    <span
                      key={pat}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-50 border border-slate-200/80 text-slate-700"
                    >
                      {pat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Java Implementations</span>
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Practiced</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
