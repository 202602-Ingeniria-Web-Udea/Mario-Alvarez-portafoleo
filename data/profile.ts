// Central editable content for the portfolio.
// Language-neutral facts live here; every user-facing string lives in
// `@/lib/i18n` so the ES/EN toggle can swap them at runtime.
//
// Why the split: components stay disposable renderers, and content changes
// (new project, new email, new photo) never require touching a component.
// The interface arrays below deliberately store only the language-neutral
// keys via `Pick<...>`, so TypeScript refuses a translation-only edit here
// and a missing translation can never overwrite a real fact.

export interface ContactItem {
  id: "city" | "phone" | "email" | "freelance";
  value?: string; // Omitted when the value itself is localized (freelance).
  accent?: boolean;
}

export interface BarSkill {
  name: string;
  level: number; // 0-100
}

export interface LanguageSkill {
  id: "spanish" | "english";
  level: number; // 0-100
}

export type ExtraSkillId =
  | "teamwork"
  | "communication"
  | "git"
  | "agile"
  | "problemSolving";

export interface KnowledgeItem {
  icon: "code" | "illustration" | "web" | "photo" | "game" | "seo";
  title: string;
  description: string;
}

export interface EducationItem {
  school: string;
  role: string;
  period: string;
  certificate?: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  tag: string;
  description: string;
  details: string;
  githubUrl: string;
  image: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon:
    | "github"
    | "linkedin"
    | "twitter"
    | "dribbble"
    | "instagram"
    | "facebook"
    | "mail";
}

export const profile = {
  name: "Mario Andres Alvarez Isaza",
  nameLead: "Mario Andres",
  nameAccent: "Alvarez Isaza",
  photo: "/Mario.png",
  email: "mario.alvarezi@udea.edu.co",
  // Static CV served from `public/`; linked by the "Download CV" button.
  cvFile: "/Mario-Alvarez-CV.pdf",
  contact: [
    { id: "city", value: "Medellín" },
    { id: "phone", value: "3185678901" },
    { id: "email", value: "mario.alvarezi@udea.edu.co" },
    { id: "freelance", accent: true },
  ] as ContactItem[],
  languages: [
    { id: "spanish", level: 100 },
    { id: "english", level: 60 },
  ] as LanguageSkill[],
  programming: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 90 },
  ] as BarSkill[],
  extraSkills: [
    "teamwork",
    "communication",
    "git",
    "agile",
    "problemSolving",
  ] as ExtraSkillId[],
  // Icon + school/period/tag/URL facts; titles and descriptions come
  // from the i18n dictionary so both languages stay in sync by index.
  knowledge: [
    { icon: "web" },
    { icon: "code" },
    { icon: "illustration" },
    { icon: "seo" },
    { icon: "photo" },
    { icon: "game" },
  ] as Array<Pick<KnowledgeItem, "icon">>,
  education: [
    {
      school: "Universidad de Antioquia",
      period: "2018 – Present",
    },
    {
      school: "Institución Educativa San Antonio de Prado",
      period: "2012 – 2017",
    },
    {
      school: "Ude@ — Universidad de Antioquia",
      period: "2022 – 2023",
    },
  ] as Array<Pick<EducationItem, "school" | "period">>,
  projects: [
    {
      tag: "system",
      githubUrl: "https://github.com/MalvarezU/inventory-system",
      image: "/project-inventory-udea.jpg",
    },
    {
      tag: "template",
      githubUrl: "https://github.com/MalvarezU/course-landing-page",
      image: "/project-landing-curso.jpg",
    },
    {
      tag: "app",
      githubUrl: "https://github.com/MalvarezU/task-manager-app",
      image: "/project-task-app.jpg",
    },
  ] as Array<Pick<ProjectItem, "githubUrl" | "image"> & { tag: string }>,
  socials: [
    { label: "GitHub", href: "https://github.com/MalvarezU", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mario-alvarez-isaza",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/mario.alvarezi",
      icon: "instagram",
    },
    {
      label: "Email",
      href: "mailto:mario.alvarezi@udea.edu.co",
      icon: "mail",
    },
  ] as SocialLink[],
};
