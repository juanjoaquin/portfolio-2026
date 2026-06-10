"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ProjectImage } from "@/components/dossier/project/ProjectImage";
import { ProjectsCardsSkeleton } from "@/components/dossier/pages/ProjectsCardsSkeleton";
import { PROJECT_THUMBNAIL_CONTAINER_CLASS, preloadImages } from "@/lib/projectImage";
import type { WorkProject } from "@/types/portfolio";

interface ProjectsGridProps {
  workProjects: WorkProject[];
}

export function ProjectsGrid({ workProjects }: ProjectsGridProps) {
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    void preloadImages(workProjects.map((project) => project.image)).then(() => {
      if (!cancelled) setImagesReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [workProjects]);

  if (!imagesReady) {
    return <ProjectsCardsSkeleton count={workProjects.length} />;
  }

  return (
    <div className="flex flex-col gap-3">
      {workProjects.map((project, index) => (
        <Link
          key={project.slug}
          href={`/proyecto/${project.slug}`}
          className="group relative flex flex-col overflow-hidden rounded-lg border border-doc-border bg-doc-bg text-left transition-colors hover:border-accent/40 hover:bg-doc-surface/50 md:flex-row md:items-stretch"
        >
          <ProjectImage
            src={project.image}
            alt={project.name}
            priority={index === 0}
            className={`${PROJECT_THUMBNAIL_CONTAINER_CLASS} shrink-0 border-b border-doc-border md:border-b-0 md:border-r`}
            imageClassName="object-cover object-top opacity-80 transition-opacity group-hover:opacity-100"
          />

          <div className="relative flex min-w-0 flex-1 flex-col p-4 md:p-5">
            <span
              className="pointer-events-none absolute right-3 top-2 font-doc text-5xl font-bold leading-none text-doc-border/80 transition-colors select-none group-hover:text-accent/40 md:right-4 md:text-6xl"
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

            <span className="relative z-10 mt-3 inline-flex items-center gap-1 font-sans text-xs font-medium text-accent transition-colors group-hover:text-accent/80">
              Ver proyecto
              <ArrowRight className="size-3.5" strokeWidth={2} aria-hidden />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
