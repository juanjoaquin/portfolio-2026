export type SkillCategory = "frontend" | "backend" | "tools" | "design";

export type ColorScheme = "light" | "dark" | "system";

export type ResolvedColorScheme = "light" | "dark";

export interface Profile {
  name: string;
  documentName: string;
  bio: string;
  email: string;
  linkedin: string;
  github?: string;
  location: string;
  availability: string;
  dossierLabel: string;
  executiveSummary: string[];
  techStack: string;
  workMode: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  bundleSize: string;
  fcp: string;
  logs: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number;
  instrumentation: string;
}

export interface ExperienceKpi {
  label: string;
  value: number;
  unit: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  kpis: ExperienceKpi[];
}

export interface WorkProject {
  slug: string;
  name: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  image: string;
  url?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export type WorkProjectBlock =
  | { type: "hero"; subtitle?: string }
  | { type: "text"; heading?: string; paragraphs: string[] }
  | { type: "gallery"; images: ProjectImage[] }
  | { type: "kpis"; items: ExperienceKpi[] }
  | { type: "tech"; items: string[] }
  | { type: "list"; heading: string; items: string[] };

export interface WorkProjectDetail extends WorkProject {
  documentLabel: string;
  blocks: WorkProjectBlock[];
}

export interface DossierPage {
  id: number;
  title: string;
  bookmark: string;
}

export const DOSSIER_PAGES: DossierPage[] = [
  { id: 1, title: "Sobre mí", bookmark: "About" },
  { id: 2, title: "Proyectos", bookmark: "Projects" },
  { id: 3, title: "Proyectos II", bookmark: "Projects+" },
  { id: 4, title: "Experiencia", bookmark: "Experience" },
  { id: 5, title: "Habilidades", bookmark: "Skills" },
  { id: 6, title: "Contacto", bookmark: "Contact" },
];

export const TOTAL_PAGES = DOSSIER_PAGES.length;
