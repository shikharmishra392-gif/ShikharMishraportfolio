export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'fullstack' | 'campus';
  description: string;
  highlights: string[];
  technologies: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    aiOrTools: string;
  };
  keyModules: string[];
  githubUrl: string;
  demoUrl?: string;
  accentColor: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Core"
    appliedIn: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export interface DsaTopic {
  title: string;
  patterns: string[];
  description: string;
}
