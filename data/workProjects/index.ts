import type { WorkProject, WorkProjectDetail } from "@/types/portfolio";
import { agusto } from "./agusto";
import { dentoImagen } from "./dento-imagen";
import { denunciasParakeet } from "./denuncias-parakeet";
import { lpe } from "./lpe";
import { paginaInstitucional } from "./pagina-institucional";
import { proyectarg } from "./proyectarg";

export const workProjectDetails: WorkProjectDetail[] = [
  dentoImagen,
  proyectarg,
  denunciasParakeet,
  agusto,
  lpe,
  paginaInstitucional,
];

/** Proyectos por hoja A4 en la sección del dossier. */
export const PROJECTS_PER_PAGE = 5;

export const workProjectDetailsBySlug: Record<string, WorkProjectDetail> =
  Object.fromEntries(workProjectDetails.map((p) => [p.slug, p]));

export const workProjects: WorkProject[] = workProjectDetails.map(
  ({ documentLabel: _documentLabel, blocks: _blocks, ...summary }) => summary,
);

export const workProjectsPrimary: WorkProject[] = workProjects.slice(0, PROJECTS_PER_PAGE);

export const workProjectsContinued: WorkProject[] = workProjects.slice(PROJECTS_PER_PAGE);

export function getWorkProjectsListPage(slug: string): number {
  const index = workProjectDetails.findIndex((project) => project.slug === slug);
  return index >= PROJECTS_PER_PAGE ? 3 : 2;
}
