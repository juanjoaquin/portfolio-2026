import type { WorkProject } from "@/types/portfolio";
import { ProjectsGrid } from "./ProjectsGrid";

interface ProjectsPageProps {
  workProjects: WorkProject[];
}

export function ProjectsPage({ workProjects }: ProjectsPageProps) {
  return (
    <article className="dossier-page font-doc flex flex-col p-6 text-doc-text md:p-12">
      <header className="mb-8 border-b border-doc-border pb-4">
        <p className="text-xs uppercase tracking-[0.2em] text-doc-muted font-sans mb-1">
          Sección 02
        </p>
        <h2 className="text-2xl font-bold md:text-3xl">Proyectos Profesionales</h2>
      </header>

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

      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-doc-muted">
          Selección de proyectos
        </h3>
        <p className="font-sans text-[10px] uppercase tracking-wide text-doc-muted/70">
          {workProjects.length} proyectos · Haz clic para abrir
        </p>
      </div>

      <ProjectsGrid workProjects={workProjects} />
    </article>
  );
}
