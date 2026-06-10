import { ImageCarouselSkeleton } from "@/components/dossier/project/ImageCarouselSkeleton";

export default function ProjectLoading() {
  return (
    <div className="flex h-full min-w-0 flex-col overflow-hidden bg-background">
      <div className="h-12 shrink-0 animate-pulse border-b border-doc-border bg-doc-surface/50" />
      <div className="flex min-h-0 flex-1 justify-center overflow-y-auto p-2 sm:p-4 md:p-4 lg:p-8">
        <article className="dossier-page w-full min-w-0 max-w-full animate-pulse p-6 font-doc text-doc-text lg:max-w-[794px] md:p-12">
          <header className="mb-8 flex items-center gap-3 border-b border-doc-border pb-4">
            <div className="h-8 w-28 rounded-lg bg-doc-border/50" />
            <div className="h-4 w-px bg-doc-border" />
            <div className="h-3 w-24 rounded bg-doc-border/40" />
          </header>

          <div className="mb-8 space-y-3 border-b border-doc-border pb-6">
            <div className="h-3 w-40 rounded bg-doc-border/40" />
            <div className="h-8 w-3/4 rounded bg-doc-border/60" />
            <div className="h-4 w-full rounded bg-doc-border/40" />
            <div className="flex gap-2">
              <div className="h-6 w-20 rounded-full bg-doc-border/40" />
              <div className="h-6 w-24 rounded-full bg-doc-border/40" />
            </div>
          </div>

          <ImageCarouselSkeleton />

          <div className="mt-8 space-y-3">
            <div className="h-4 w-full rounded bg-doc-border/40" />
            <div className="h-4 w-5/6 rounded bg-doc-border/40" />
            <div className="h-4 w-4/5 rounded bg-doc-border/40" />
          </div>
        </article>
      </div>
    </div>
  );
}
