// ─── Single source of truth for all portfolio content ───────────────────────
// Edit this file to update every section of the site instantly.

export const profile = {
  name: "Zilen Modi",
  firstName: "Zilen",
  role: "Full Stack Engineer",
  tagline: "Building scalable web applications & cloud-native systems.",
  about: [
    "I'm a Full Stack Engineer with 2+ years of experience crafting enterprise-grade products and cloud-native architectures. Currently at Distinction Dev, I design serverless pipelines on AWS and ship fast, production-ready frontends.",
    "I care deeply about scalable system design, clean code, and delivering measurable impact — whether that's a 70% Lighthouse score improvement or an auction platform handling 2.4M participants.",
  ],
  focus: [
    "Scalable backend architecture & serverless systems",
    "Frontend performance & React/Next.js engineering",
    "Cloud infrastructure on AWS",
    "Mentoring & engineering culture",
  ],
  email: "zilenmodi@gmail.com",
  phone: "+91-9724666420",
  github: "https://github.com/zilenmodi",
  linkedin: "https://linkedin.com/in/zilen-modi",
  leetcode: "https://leetcode.com/zilenmodi",
  gfg: "https://geeksforgeeks.org",
  location: "Ahmedabad, India",
  available: true,
};

export const stats = [
  { value: "2+",   label: "Years experience" },
  { value: "12+",  label: "Devs mentored" },
  { value: "70%",  label: "Lighthouse boost" },
  { value: "785+", label: "LeetCode solved" },
];

export const skills: { category: string; color: string; items: string[] }[] = [
  {
    category: "Frontend",
    color: "blue",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "TanStack Query", "Redux Toolkit", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    color: "green",
    items: ["Node.js", "Express.js", "REST APIs", "tRPC"],
  },
  {
    category: "Database",
    color: "violet",
    items: ["MongoDB", "PostgreSQL", "Sequelize", "Prisma", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    color: "orange",
    items: ["AWS Lambda", "AWS SQS", "AWS S3", "DLQ", "CloudFront", "GitHub Actions", "CI/CD"],
  },
  {
    category: "Languages",
    color: "rose",
    items: ["JavaScript", "TypeScript", "C++", "C"],
  },
  {
    category: "Tools",
    color: "slate",
    items: ["Git", "GitHub", "Bitbucket", "JIRA", "Cursor AI", "GitHub Copilot"],
  },
];

export const experiences = [
  {
    id: "1",
    company: "Distinction Dev",
    location: "Ahmedabad, IN",
    role: "Software Developer",
    period: "Jul 2025 – Present",
    current: true,
    highlights: [
      "Developed a serverless ETL pipeline using AWS Lambda, SQS, S3, and DLQ — enabling async processing, automatic retries, and full error isolation.",
      "Designed a decoupled data ingestion architecture with Combine, Universe, and Mongo Adapters to handle complex multi-valued transformations and MongoDB persistence.",
      "Migrated an ERP application to Next.js with Redux Toolkit for state management, organized as a monorepo.",
    ],
  },
  {
    id: "2",
    company: "Bacancy Technology",
    location: "Ahmedabad, IN",
    role: "Software Engineer",
    period: "Aug 2023 – Jun 2025",
    current: false,
    highlights: [
      "Built the auction module for HLSR — a platform driving $100M+ revenue and 2.4M participants for the 2025 event.",
      "Led frontend development across multiple client web apps using Next.js, TypeScript, and React.",
      "Trained and mentored 12+ junior developers, raising team productivity and code quality.",
      "Enforced engineering best practices, achieving a 70% improvement in Lighthouse performance scores.",
    ],
  },
  {
    id: "3",
    company: "Simform Solutions",
    location: "Ahmedabad, IN",
    role: "Software Engineer Trainee",
    period: "Feb 2023 – Jul 2023",
    current: false,
    highlights: [
      "Built a Kanban task scheduler with Firebase real-time backend for team project mapping.",
      "Set up GitHub Actions CI/CD pipelines deploying to AWS S3 + CloudFront for zero-downtime releases.",
      "Optimized React application performance by 15% using useMemo and useCallback patterns.",
    ],
  },
];

export const projects = [
  {
    id: "1",
    title: "Portfolio CRM + Auto-Resume",
    description:
      "A full-stack monorepo combining an admin CRM and a public portfolio site. All professional data — experience, skills, projects — is managed in one place and automatically powers a beautifully typeset PDF resume.",
    tech: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "Framer Motion", "React-PDF", "Turborepo"],
    github: "https://github.com/zilenmodi",
    live: null,
    featured: true,
  },
  {
    id: "2",
    title: "HLSR Auction Platform",
    description:
      "Enterprise auction module for the Houston Livestock Show and Rodeo — the largest livestock event in the US. Served 2.4M participants and facilitated $100M+ in auction revenue for the 2025 season.",
    tech: ["Next.js", "TypeScript", "React", "Node.js", "REST API"],
    github: null,
    live: null,
    featured: true,
  },
  {
    id: "3",
    title: "Serverless ETL Pipeline",
    description:
      "AWS-native data pipeline using Lambda, SQS, S3, and DLQ. Handles asynchronous multi-valued data ingestion with automatic retries, error isolation, and a pluggable adapter pattern (Combine, Universe, Mongo).",
    tech: ["AWS Lambda", "SQS", "S3", "DLQ", "Node.js", "MongoDB"],
    github: null,
    live: null,
    featured: false,
  },
  {
    id: "4",
    title: "Mobimed Solution",
    description:
      "Embedded a new React app into a legacy system via iframe, rewriting 6+ modules (client orgs, maps, order workflows) from class-based to functional components using MUI for a modernized enterprise UI.",
    tech: ["React.js", "MUI", "JavaScript", "iframe"],
    github: null,
    live: null,
    featured: false,
  },
];

export const education = [
  {
    institution: "Vishwakarma Government Engineering College",
    degree: "B.E. in Computer Engineering",
    period: "Jul 2019 – May 2023",
    score: "CGPA: 8.82 / 10",
    detail: "Data Structures, Algorithms, DBMS, Computer Networks, OS, Machine Learning",
  },
  {
    institution: "Vishwakarma Government Engineering College",
    degree: "Class XII — HSC",
    period: "Jul 2017 – Mar 2019",
    score: "85.80%",
    detail: "",
  },
];

export const awards = [
  { icon: "🏆", text: "Best Team of the Quarter — Q1 2025 at Distinction Dev" },
  { icon: "⭐", text: "Best Employee of the Quarter — Q1 2024 at Bacancy" },
  { icon: "🚀", text: "Top team out of 461 — Azadi Ka Amrit Mahotsav Hackathon (2022)" },
  { icon: "💻", text: "785+ problems solved on LeetCode" },
  { icon: "📘", text: "270+ problems solved on GeeksforGeeks" },
];

export const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

/** Serialized on the server and passed into the client home UI (SSG / static HTML). */
export const homeContent = {
  profile,
  stats,
  skills,
  experiences,
  projects,
  education,
  awards,
};

export type HomeContent = typeof homeContent;
