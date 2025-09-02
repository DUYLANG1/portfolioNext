// Centralized data (skills, experiences, projects) migrated from old portfolio
// Keeping structure simple for now; can be localized later.

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  current?: boolean;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  github?: string;
  demo?: string;
  image?: string; // path under /public
  tags?: string[];
}

export interface EducationItem {
  id: number;
  school: string;
  degree: string;
  period: string;
  focus?: string;
}

export interface SkillItem {
  name: string;
  category: string;
  icon?: string; // optional custom icon asset path
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "ReactJS Developer",
    company: "FPT Software",
    period: "Nov 2024 - Present",
    current: true,
  },
  {
    id: 2,
    title: "SAP ABAP Developer",
    company: "FPT Software",
    period: "Dec 2023 - Nov 2024",
  },
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "My Local Swapping Skills",
    description: "A platform for people to swap skills with each other.",
    github: "https://github.com/DUYLANG1/LSS-FRONTEND",
    demo: "#",
    image: "/next.svg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Portfolio (This Site)",
    description:
      "Modern portfolio built with Next.js App Router, Tailwind & shadcn style components.",
    github: "https://github.com/DUYLANG1/myportfolio", 
    demo: "#",
    image: "/assets/hero.svg",
    tags: ["Next.js", "Framer Motion", "Lottie"],
  },
];

export const education: EducationItem[] = [
  {
    id: 1,
    school: "National Economics University - Vietnam",
    degree: "Computer Science",
    period: "2020 - 2024",
    focus: "Software Engineering, Computer Theory",
  },
  {
    id: 2,
    school: "Self Learning & Certifications",
    degree: "Online Courses / Workshops (Udemy, Coursera, etc.)",
    period: "Ongoing",
    focus: "Advanced React, Distributed Systems, Cloud Architecture",
  },
];

export const skills: SkillItem[] = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Javascript", category: "Frontend" },
  { name: "Typescript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next JS", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "MaterialUI", category: "Frontend" },
  { name: "Antd", category: "Frontend" },
  { name: "Express JS", category: "Backend" },
  { name: "Nest JS", category: "Backend" },
  { name: "SQL", category: "Database" },
  { name: "NoSQL", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Firebase", category: "Cloud" },
  { name: "Figma", category: "Design" },
];
