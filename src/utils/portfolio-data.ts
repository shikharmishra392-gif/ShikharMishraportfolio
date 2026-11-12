import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Shikhar Mishra',
  title: 'Backend Developer · Java & Spring Boot · DSA Problem Solver',
  summary:
    'Computer Science undergraduate graduating in 2027 specializing in backend engineering with hands-on experience building Java, Spring Boot, RESTful APIs, MySQL, and scalable web architectures. Strong foundation in Data Structures and Algorithms, object-oriented programming, database design, and clean code.',
  email: 'shikharmishra392@gmail.com',
  phone: '+91 8077690991',
  location: 'Bareilly, Uttar Pradesh, India',
  github: 'https://github.com/shikharmishra392-gif',
  githubUsername: 'shikharmishra392-gif',
  linkedin: 'https://linkedin.com/in/shikhar-mishra-82b744327',
  linkedinUsername: 'shikhar-mishra-82b744327',
  leetcode: 'https://leetcode.com/u/Shikharr_Mishra',
  leetcodeUsername: 'Shikharr_Mishra',
  resumePdfPath: '/assets/aistudio/ShikharAwsResume_c1f316e8.pdf',
  achievements: ['Academic Scholarship Holder'],
  gradYear: '2027',
};

export const PROJECTS: Project[] = [
  {
    id: 'studyai',
    title: 'StudyAI',
    subtitle: 'AI Video Learning Platform',
    category: 'ai',
    description:
      'A full-stack learning platform supporting video processing, AI-generated notes, summaries, quizzes, and contextual QA through five integrated backend modules.',
    highlights: [
      'Developed five integrated backend modules for authentication, video processing, session history, database CRUD operations, and LLM integration.',
      'Constructed RESTful APIs with Spring Boot for media pipeline handling, utilizing yt-dlp for video ingestion.',
      'Created a responsive conversational interface for student-friendly interaction and dynamic quiz evaluation.',
      'Integrated Google Gemini and OpenRouter APIs for automated structured lecture summaries and adaptive note generation.',
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'yt-dlp', 'Gemini API', 'OpenRouter API', 'RESTful APIs'],
    architecture: {
      frontend: 'JavaScript Conversational Interface',
      backend: 'Spring Boot REST Architecture (5 Specialized Services)',
      database: 'MySQL Relational Schema for Users, Sessions & Quizzes',
      aiOrTools: 'Google Gemini & OpenRouter APIs + yt-dlp',
    },
    keyModules: [
      'Video Ingestion & Processing Pipeline',
      'LLM Summarization & Note Generation',
      'Dynamic Quiz & Question Answering Engine',
      'Session History & User Store',
      'Authentication & API Gateway',
    ],
    githubUrl: 'https://github.com/shikharmishra392-gif',
    accentColor: '#38bdf8',
  },
  {
    id: 'wanderplan-ai',
    title: 'WanderPlan AI',
    subtitle: 'Context-Aware AI Travel Itinerary Planner',
    category: 'ai',
    description:
      'A full-stack AI travel application that generates personalized, multi-day itineraries based on user destinations, budgets, and specific interests using Google Gemini LLM.',
    highlights: [
      'Engineered WanderBot: a context-aware AI travel chatbot powered by Google Gemini LLM for conversational itinerary adjustments.',
      'Constructed interactive 2D vector map integration to help travelers visualize daily routes, accommodations, and dining spots in real-time.',
      'Built Spring Boot backend handling budget breakdowns, day-by-day scheduling, and MySQL persistence for saved trip blueprints.',
      'Implemented clean responsive interface using React and Tailwind CSS.',
    ],
    technologies: ['React', 'Spring Boot', 'MySQL', 'Google Gemini API', 'Tailwind CSS', 'Vector Maps'],
    architecture: {
      frontend: 'React.js with Tailwind CSS & Interactive 2D Vector Map',
      backend: 'Spring Boot Service Layer & REST Controllers',
      database: 'MySQL for Destination Records & User Preferences',
      aiOrTools: 'Google Gemini LLM Prompt Engineering & Context Injection',
    },
    keyModules: [
      'Multi-Day Schedule Generation Algorithm',
      'WanderBot Contextual Chat Engine',
      'Interactive 2D Route Mapper',
      'Budget Estimator & Expense Categorizer',
      'Itinerary Persistence Manager',
    ],
    githubUrl: 'https://github.com/shikharmishra392-gif',
    accentColor: '#818cf8',
  },
  {
    id: 'campusfind',
    title: 'CampusFind Platform',
    subtitle: 'Campus Lost & Found Claim & Verification Portal',
    category: 'campus',
    description:
      'A full-stack campus portal for reporting, searching, matching, and claiming lost or found items with image uploads, student details, database-backed records, and admin supervision.',
    highlights: [
      'Architected end-to-end claim verification workflows capturing student roll number, branch, batch, and contact details for dispute-free handover.',
      'Built multi-criteria search and category indexing across lost items for instantaneous keyword and location retrieval.',
      'Implemented secure admin dashboard to audit claims, verify student identities, and manage resolved cases.',
      'Engineered hybrid data persistence utilizing MySQL for relational integrity and MongoDB for item metadata.',
    ],
    technologies: ['React.js', 'Spring Boot', 'Java', 'MySQL', 'MongoDB', 'Tailwind CSS'],
    architecture: {
      frontend: 'React.js Component Architecture with Tailwind UI',
      backend: 'Spring Boot REST APIs with Exception Handling',
      database: 'Dual DB: MySQL (Auth/Claims) + MongoDB (Item Catalog)',
      aiOrTools: 'Image Upload Handler & Verification Protocol',
    },
    keyModules: [
      'Item Reporting & Image Upload Pipeline',
      'Claim Submission & Student Verification Flow',
      'Keyword & Category Search Indexer',
      'Admin Supervisory & Audit Dashboard',
      'Notification & Handover Resolver',
    ],
    githubUrl: 'https://github.com/shikharmishra392-gif',
    accentColor: '#34d399',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend & Systems',
    description: 'Enterprise services, clean REST APIs, and database engineering',
    skills: [
      { name: 'Java (Core & Advanced)', level: 'Advanced', appliedIn: 'StudyAI, CampusFind, Ensino R&D' },
      { name: 'Spring Boot', level: 'Proficient', appliedIn: 'StudyAI, WanderPlan, CampusFind' },
      { name: 'RESTful API Design', level: 'Proficient', appliedIn: 'Microservices & Full-Stack Apps' },
      { name: 'JDBC & Collections Framework', level: 'Advanced', appliedIn: 'Core Java Training & Systems' },
      { name: 'JSP & Servlets', level: 'Proficient', appliedIn: 'Java Web Architecture' },
      { name: 'Maven Build Tool', level: 'Proficient', appliedIn: 'Build & Dependency Management' },
      { name: 'Exception Handling & Clean Code', level: 'Advanced', appliedIn: 'Production Backends' },
    ],
  },
  {
    id: 'databases',
    name: 'Databases & Modeling',
    description: 'Relational design, normalization, transactions, and NoSQL storage',
    skills: [
      { name: 'MySQL', level: 'Advanced', appliedIn: 'StudyAI, WanderPlan, CampusFind' },
      { name: 'MongoDB', level: 'Proficient', appliedIn: 'CampusFind Metadata Store' },
      { name: 'SQL Querying & Normalization', level: 'Proficient', appliedIn: 'Relational Schemas' },
      { name: 'CRUD Operations & Transactions', level: 'Advanced', appliedIn: 'All Backend Projects' },
    ],
  },
  {
    id: 'dsa',
    name: 'DSA & Fundamentals',
    description: 'Algorithmic problem solving with clean, efficient Java code',
    skills: [
      { name: 'Data Structures (Arrays, Strings, Linked Lists)', level: 'Advanced', appliedIn: 'LeetCode & Problem Solving' },
      { name: 'Stacks, Queues & Monotonic Deques', level: 'Advanced', appliedIn: 'Algorithmic Solutions' },
      { name: 'Searching & Sorting Algorithms', level: 'Advanced', appliedIn: 'Java Implementations' },
      { name: 'Recursion & Backtracking', level: 'Proficient', appliedIn: 'Algorithmic Puzzles' },
      { name: 'Object-Oriented Programming (OOP)', level: 'Advanced', appliedIn: 'Encapsulation, Polymorphism, Interfaces' },
      { name: 'DBMS & Operating System Basics', level: 'Proficient', appliedIn: 'Academic & System Design' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    description: 'Responsive, accessible, and reactive user interfaces',
    skills: [
      { name: 'React.js', level: 'Proficient', appliedIn: 'WanderPlan AI, CampusFind Portal' },
      { name: 'JavaScript (ES6+)', level: 'Proficient', appliedIn: 'Interactive Web Apps' },
      { name: 'Tailwind CSS', level: 'Proficient', appliedIn: 'Clean Minimal Layouts' },
      { name: 'HTML5 & CSS3', level: 'Proficient', appliedIn: 'Semantic Web Standards' },
      { name: 'Responsive Design', level: 'Advanced', appliedIn: 'Cross-Device Layouts' },
    ],
  },
  {
    id: 'ai-cloud',
    name: 'Generative AI & Cloud',
    description: 'Cloud foundations, LLM integrations, and modern toolchains',
    skills: [
      { name: 'AWS Generative AI Foundations', level: 'Certified', appliedIn: 'AWS Academy Graduate' },
      { name: 'Google Gemini API', level: 'Proficient', appliedIn: 'StudyAI, WanderPlan AI' },
      { name: 'OpenRouter & LLM APIs', level: 'Proficient', appliedIn: 'StudyAI Video Summarizer' },
      { name: 'Cloud Computing (IaaS, PaaS, SaaS)', level: 'Proficient', appliedIn: 'IBM Technical Internship' },
      { name: 'Git & GitHub', level: 'Advanced', appliedIn: 'Version Control' },
      { name: 'IntelliJ IDEA & VS Code', level: 'Advanced', appliedIn: 'Primary IDEs' },
    ],
  },
];

export const DSA_TOPICS = [
  {
    title: 'Arrays & Strings',
    patterns: ['Two Pointers', 'Sliding Window', 'Prefix Sums', 'In-place Traversal'],
    description: 'Linear data structures with constant-space pointers and frequency hashing.',
  },
  {
    title: 'Linked Lists & Pointers',
    patterns: ['Fast & Slow Pointers', 'List Reversal', 'Sorted Merging', 'Floyd Cycle Detection'],
    description: 'Node manipulation, pointer traversal, and cycle detection.',
  },
  {
    title: 'Stacks & Queues',
    patterns: ['Monotonic Stack', 'Parentheses Validation', 'Deque Buffering', 'Level Order Traversal'],
    description: 'LIFO & FIFO logic, monotonic sequence tracking, and balanced expressions.',
  },
  {
    title: 'Searching & Sorting',
    patterns: ['Binary Search on Values & Ranges', 'QuickSort / MergeSort', 'Divide & Conquer'],
    description: 'Logarithmic search intervals and optimal divide-and-conquer sorting.',
  },
  {
    title: 'Recursion & Backtracking',
    patterns: ['Subset Generation', 'Decision Trees', 'Base Case Validation'],
    description: 'Recursive call stack tracing, tree pruning, and state exploration.',
  },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: 'ensino',
    role: 'Core Java Trainee',
    company: 'Ensino Research and Development Pvt. Ltd.',
    location: 'Dehradun, India',
    period: 'Jun 2026 - Jul 2026',
    description: [
      'Completed a six-week offline training program covering Core Java, OOP, collections, exception handling, file handling, debugging, and modular application development.',
      'Applied encapsulation, inheritance, abstraction, polymorphism, interfaces, reusable methods, and logical problem-solving techniques through hands-on Java programs.',
    ],
    technologies: ['Core Java', 'OOP', 'Collections Framework', 'Exception Handling', 'Debugging'],
  },
  {
    id: 'ibm',
    role: 'Cloud Computing Trainee',
    company: 'IBM',
    location: '2-Month Program',
    period: '2-Month Program',
    description: [
      'Studied cloud architecture, virtualization, deployment and service models (IaaS, PaaS, SaaS), scalability, availability, security fundamentals, and container concepts.',
    ],
    technologies: ['Cloud Computing', 'IaaS / PaaS / SaaS', 'Virtualization', 'Containerization'],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    institution: 'Shri Ram Murti Smarak College of Engineering & Technology, Bareilly',
    period: 'Expected 2027',
    details: 'Coursework in Data Structures & Algorithms, Object Oriented Programming, DBMS, and Software Engineering.',
  },
  {
    id: 'class12',
    degree: 'Class XII (CBSE Senior Secondary)',
    institution: 'Brij Bhushan Lal Public School, Bareilly',
    period: 'May 2023',
    grade: '70.6%',
    details: 'Science Stream (PCM & Computer Science).',
  },
  {
    id: 'class10',
    degree: 'Class X (CBSE Secondary)',
    institution: 'Brij Bhushan Lal Public School, Bareilly',
    period: 'Mar 2021',
    grade: '93.6%',
    details: 'Distinction in Mathematics and Science.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'aws-genai',
    title: 'AWS Academy Graduate - Generative AI Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'October 2026',
  },
  {
    id: 'hackerrank-java',
    title: 'Java Certificate',
    issuer: 'HackerRank',
    date: 'July 2026',
  },
  {
    id: 'ibm-cloud',
    title: 'Enterprise Cloud Computing Technical Internship Certification',
    issuer: 'IBM',
    date: 'July 2026',
  },
  {
    id: 'ensino-cert',
    title: 'Core Java Project Practicum Certification',
    issuer: 'Ensino Research and Development',
    date: 'June 2026',
  },
];
