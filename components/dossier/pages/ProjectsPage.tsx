import type { WorkProject } from "@/types/portfolio";
import { PROJECTS_PER_PAGE } from "@/data/workProjects";
import { PdfAnnotation } from "@/components/dossier/annotations";
import { ProjectsGrid } from "./ProjectsGrid";

interface ProjectsPageProps {
  workProjects: WorkProject[];
  variant?: "primary" | "continued";
}

export function ProjectsPage({ workProjects, variant = "primary" }: ProjectsPageProps) {
  const isContinued = variant === "continued";

  return (
    <article className="dossier-page font-doc flex flex-col p-6 text-doc-text md:p-12">
      <header className="mb-8 border-b border-doc-border pb-4">
        <p className="text-xs uppercase tracking-[0.2em] text-doc-muted font-sans mb-1">
          {isContinued ? "Sección 02 · continuación" : "Sección 02"}
        </p>
        <h2 className="text-2xl font-bold md:text-3xl">Proyectos Profesionales</h2>
      </header>

      {!isContinued && (
        <section className="mb-8">
          <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-accent mb-3">
            Experiencia Profesional
          </h3>
          <p className="text-doc-body leading-relaxed text-sm md:text-base">
            Aplicaciones y productos en producción en los que participé como desarrollador frontend.
          </p>
          <p className="text-doc-body leading-relaxed text-sm md:text-base">
            Selecciona un proyecto para ver más detalles.
          </p>
        </section>
      )}

      {isContinued && (
        <section className="mb-8 flex items-center justify-between gap-4">
          <p className="text-doc-body leading-relaxed text-sm md:text-base">
            Continuación de proyectos productivos.
          </p>
          <PdfAnnotation
            note="Segunda sección de aplicaciones y productos en entornos productivos."
            triggerLabel="Ver nota sobre la continuación de proyectos"
            side="left"
            className="shrink-0"
          >
            <span className="inline-block size-4" aria-hidden />
          </PdfAnnotation>
        </section>
      )}

      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-doc-muted">
          {isContinued ? "Más proyectos" : "Selección de proyectos"}
        </h3>
        <p className="font-sans text-[10px] uppercase tracking-wide text-doc-muted/70">
          {workProjects.length} proyectos · Haz clic para abrir
        </p>
      </div>

      <ProjectsGrid
        workProjects={workProjects}
        startIndex={isContinued ? PROJECTS_PER_PAGE : 0}
      />
    </article>
  );
}
