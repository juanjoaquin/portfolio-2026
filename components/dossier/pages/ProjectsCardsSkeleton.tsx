import { PROJECT_THUMBNAIL_CONTAINER_CLASS } from "@/lib/projectImage";

interface ProjectsCardsSkeletonProps {
  count: number;
}

export function ProjectsCardsSkeleton({ count }: ProjectsCardsSkeletonProps) {
  return (
    <div className="flex flex-col gap-3" aria-busy="true" aria-label="Cargando proyectos">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="flex min-h-[180px] flex-col overflow-hidden rounded-lg border border-doc-border bg-doc-bg md:min-h-[175px] md:flex-row md:items-stretch"
        >
          <div
            className={`${PROJECT_THUMBNAIL_CONTAINER_CLASS} border-b border-doc-border md:border-b-0 md:border-r`}
          >
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-doc-surface via-doc-border/30 to-doc-surface" />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-3 p-4 md:p-5">
            <div className="h-2.5 w-32 animate-pulse rounded bg-doc-border/60" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-doc-border/70" />
            <div className="space-y-2">
              <div className="h-3 w-full animate-pulse rounded bg-doc-border/50" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-doc-border/50" />
            </div>
            <div className="mt-auto flex gap-1.5">
              <div className="h-5 w-14 animate-pulse rounded-full bg-doc-border/50" />
              <div className="h-5 w-16 animate-pulse rounded-full bg-doc-border/50" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
