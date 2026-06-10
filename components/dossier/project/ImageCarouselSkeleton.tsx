import { PROJECT_IMAGE_ASPECT_CLASS } from "@/lib/projectImage";

export function ImageCarouselSkeleton() {
  return (
    <div className="space-y-3" aria-busy="true" aria-label="Cargando imágenes">
      <div
        className={`relative w-full overflow-hidden rounded-lg border border-doc-border bg-doc-surface ${PROJECT_IMAGE_ASPECT_CLASS}`}
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-doc-surface via-doc-border/30 to-doc-surface" />
      </div>
      <div className="mx-auto h-3 w-48 animate-pulse rounded bg-doc-border/50" />
    </div>
  );
}
