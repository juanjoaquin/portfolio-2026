import { projects } from "@/data/projects";
import { workProjectDetails, workProjectDetailsBySlug, workProjects } from "@/data/workProjects";
import { skills } from "@/data/skills";
import type { Project, Skill, SkillCategory, WorkProject, WorkProjectDetail } from "@/types/portfolio";

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getWorkProjects(): WorkProject[] {
  return workProjects;
}

export function getWorkProjectBySlug(slug: string): WorkProjectDetail | undefined {
  return workProjectDetailsBySlug[slug];
}

export function getWorkProjectSlugs(): string[] {
  return workProjectDetails.map((p) => p.slug);
}

export function getSkills(): Skill[] {
  return skills;
}

export function getSkillsByCategory(category: SkillCategory | "all"): Skill[] {
  if (category === "all") return skills;
  return skills.filter((s) => s.category === category);
}

export function getSkillCategories(): SkillCategory[] {
  return [...new Set(skills.map((s) => s.category))];
}
