import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { LeetCodeSection } from './components/LeetCodeSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans bg-tech-grid relative">
      <div className="absolute top-0 left-0 right-0 h-[480px] bg-radial-gradient pointer-events-none z-0" />
      {/* Top Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <ProjectsSection />
        <SkillsSection />
        <LeetCodeSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
