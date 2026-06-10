import { getProjectBySlug, getProjects } from "@/lib/portfolio";
import type { Project } from "@/types/portfolio";

export function executeCommand(input: string): string[] {
  const trimmed = input.trim();
  if (!trimmed) return [];

  const [command, ...args] = trimmed.split(/\s+/);
  const arg = args.join(" ");

  switch (command.toLowerCase()) {
    case "help":
      return [
        "Comandos disponibles:",
        "  help              — Muestra esta ayuda",
        "  projects          — Lista todos los proyectos",
        "  run <slug>        — Detalle y stack de un proyecto",
        "  metrics <slug>    — KPIs simulados (bundle, FCP)",
        "  logs <slug>       — Logs de ejemplo del proyecto",
        "  clear             — Limpia la terminal",
      ];
    case "projects":
      return getProjects().map((p) => `  • ${p.slug} — ${p.name}`);
    case "run":
      return formatProjectDetail(arg);
    case "metrics":
      return formatProjectMetrics(arg);
    case "logs":
      return formatProjectLogs(arg);
    case "clear":
      return ["__CLEAR__"];
    default:
      return [`Comando desconocido: "${command}". Escribe "help" para ver opciones.`];
  }
}

function formatProjectDetail(slug: string): string[] {
  const project = getProjectBySlug(slug);
  if (!project) return [`Proyecto no encontrado: "${slug}". Usa "projects" para listar.`];
  return [
    `▸ ${project.name}`,
    "",
    project.description,
    "",
    `Stack: ${project.tech.join(", ")}`,
  ];
}

function formatProjectMetrics(slug: string): string[] {
  const project = getProjectBySlug(slug);
  if (!project) return [`Proyecto no encontrado: "${slug}".`];
  return [
    `Métricas — ${project.name}`,
    `  Bundle size: ${project.bundleSize}`,
    `  First Contentful Paint: ${project.fcp}`,
    `  Status: ✓ Production ready`,
  ];
}

function formatProjectLogs(slug: string): string[] {
  const project = getProjectBySlug(slug);
  if (!project) return [`Proyecto no encontrado: "${slug}".`];
  return [`Logs — ${project.name}:`, ...project.logs.map((l) => `  ${l}`)];
}

export function getProjectSlugs(): string[] {
  return getProjects().map((p: Project) => p.slug);
}
