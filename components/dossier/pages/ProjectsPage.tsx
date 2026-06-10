import Image from "next/image";
import Link from "next/link";
import type { WorkProject } from "@/types/portfolio";

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
          Índice de entregables
        </h3>
        <p className="text-doc-body leading-relaxed text-sm md:text-base">
          Casos de estudio documentados como anexos del dossier. Selecciona un proyecto para
          abrir su ficha completa.
        </p>
      </section>

      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-doc-muted">
          Anexos disponibles
        </h3>
        <p className="font-sans text-[10px] uppercase tracking-wide text-doc-muted/70">
          {workProjects.length} dossiers · Haz clic para abrir
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {workProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/proyecto/${project.slug}`}
            className="group relative flex min-h-[180px] flex-col overflow-hidden rounded-lg border border-doc-border bg-doc-bg text-left transition-colors hover:border-accent/40 hover:bg-doc-surface/50 md:min-h-[200px] md:flex-row md:items-stretch"
          >
            <div className="relative aspect-[16/10] w-full shrink-0 border-b border-doc-border bg-doc-surface md:aspect-auto md:w-2/5 md:min-h-[200px] md:border-b-0 md:border-r">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>

            <div className="relative flex min-w-0 flex-1 flex-col p-4 md:p-5">
              <span
                className="pointer-events-none absolute right-3 top-2 font-doc text-5xl font-bold leading-none text-doc-border/80 select-none md:right-4 md:text-6xl"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="relative z-10 font-sans text-[10px] uppercase tracking-wide text-doc-muted">
                {project.company} • {project.period}
              </p>

              <h3 className="relative z-10 mt-2 font-sans text-sm font-bold uppercase tracking-wide text-doc-text md:text-base">
                {project.name}
              </h3>

              <p className="relative z-10 mt-2 line-clamp-3 flex-1 font-sans text-xs leading-relaxed text-doc-muted">
                {project.description}
              </p>

              <ul className="relative z-10 mt-3 flex flex-wrap gap-1.5 font-sans">
                {project.tech.slice(0, 4).map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-doc-border bg-doc-surface px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-doc-subtle"
                  >
                    {tech}
                  </li>
                ))}
                {project.tech.length > 4 && (
                  <li className="rounded-full border border-doc-border bg-doc-surface px-2 py-0.5 text-[9px] font-medium text-doc-muted">
                    +{project.tech.length - 4}
                  </li>
                )}
              </ul>

              <span className="relative z-10 mt-3 font-sans text-xs font-medium text-accent transition-colors group-hover:text-accent/80">
                Abrir dossier →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
