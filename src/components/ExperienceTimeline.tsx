import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2, Trophy } from 'lucide-react';
import { EXPERIENCE_LIST, EDUCATION_LIST, CERTIFICATIONS, PERSONAL_INFO } from '../utils/portfolio-data';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 lg:py-24 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Experience & Education
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Technical training, formal academic coursework, and verified industry credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Internships & Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold flex items-center gap-2">
              <Briefcase className="h-3.5 w-3.5 text-indigo-600" />
              <span>Technical Internships</span>
            </h3>

            <div className="space-y-4">
              {EXPERIENCE_LIST.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-xl border border-slate-200/90 bg-white p-5 space-y-3 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {exp.role}
                      </h4>
                      <p className="text-xs text-indigo-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>

                    <div className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
                    {exp.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-50 border border-slate-200 text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Block */}
            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold flex items-center gap-2 mb-3">
                <Award className="h-3.5 w-3.5 text-amber-600" />
                <span>Verified Certifications</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-3.5 rounded-xl border border-slate-200/90 bg-white shadow-xs"
                  >
                    <div className="text-xs font-bold text-slate-900 mb-0.5">
                      {cert.title}
                    </div>
                    <div className="text-[11px] font-mono font-medium text-teal-800">
                      {cert.issuer}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">
                      {cert.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold flex items-center gap-2">
              <GraduationCap className="h-3.5 w-3.5 text-teal-700" />
              <span>Academic Education</span>
            </h3>

            <div className="space-y-3.5">
              {EDUCATION_LIST.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-1.5 shadow-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-bold text-slate-900">
                      {edu.degree}
                    </h4>
                    {edu.grade && (
                      <span className="text-[10px] font-mono font-medium text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/80">
                        {edu.grade}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 font-medium">
                    {edu.institution}
                  </p>

                  <div className="text-[11px] font-mono text-slate-500">
                    {edu.period}
                  </div>

                  {edu.details && (
                    <p className="text-[11px] text-slate-500 pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Achievements Card */}
            <div className="rounded-xl border border-amber-200/90 bg-amber-50/70 p-4 flex items-center gap-3 shadow-xs">
              <div className="p-2 rounded-lg bg-amber-100 text-amber-700 border border-amber-300/80 shrink-0">
                <Trophy className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Key Achievement</div>
                <div className="text-xs text-amber-900 font-semibold">Academic Scholarship Holder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
