import type { WorkProject, WorkProjectDetail } from "@/types/portfolio";
import { agusto } from "./agusto";
import { dentoImagen } from "./dento-imagen";
import { denunciasParakeet } from "./denuncias-parakeet";
import { proyectarg } from "./proyectarg";
import { nextjsMigration } from "./nextjs-migration";

export const workProjectDetails: WorkProjectDetail[] = [
  dentoImagen,
  proyectarg,
  denunciasParakeet,
  agusto,
  nextjsMigration,
];

export const workProjectDetailsBySlug: Record<string, WorkProjectDetail> =
  Object.fromEntries(workProjectDetails.map((p) => [p.slug, p]));

export const workProjects: WorkProject[] = workProjectDetails.map(
  ({ documentLabel: _documentLabel, blocks: _blocks, ...summary }) => summary,
);
