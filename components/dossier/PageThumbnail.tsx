import type { CSSProperties } from "react";

interface PageThumbnailProps {
  pageId: number;
}

function ThumbnailBlock({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return <div className={`rounded-sm bg-doc-muted/20 ${className}`} style={style} />;
}

function PageHeader() {
  return (
    <div className="border-b border-doc-border/50 pb-1.5">
      <ThumbnailBlock className="mb-1 h-1 w-[28%] bg-doc-muted/30" />
      <ThumbnailBlock className="h-2 w-[68%] bg-doc-text/20" />
    </div>
  );
}

function CoverThumbnail() {
  return (
    <div className="relative flex h-full w-full flex-col gap-[3px] p-2.5">
      <ThumbnailBlock className="h-0.5 w-3 bg-accent/70" />
      <ThumbnailBlock className="h-2 w-[78%] bg-doc-text/25" />
      <ThumbnailBlock className="h-1 w-[52%] bg-doc-muted/30" />

      <div className="mt-0.5 flex-1 rounded border border-doc-border/50 bg-doc-surface/60 p-1.5">
        <ThumbnailBlock className="mb-1 h-1 w-[38%] bg-doc-muted/35" />
        <div className="space-y-[2px]">
          <ThumbnailBlock className="h-[3px] w-full" />
          <ThumbnailBlock className="h-[3px] w-[92%]" />
          <ThumbnailBlock className="h-[3px] w-[84%]" />
        </div>
        <div className="mt-1.5 flex gap-1">
          <div className="h-2 w-6 rounded-full border border-doc-border/40 bg-doc-surface" />
          <div className="h-2 w-5 rounded-full border border-doc-border/40 bg-doc-surface" />
          <div className="h-2 w-7 rounded-full border border-doc-border/40 bg-doc-surface" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="aspect-[5/4] rounded-sm border border-doc-border/40 bg-doc-bg p-1"
          >
            <ThumbnailBlock className="mb-0.5 h-[3px] w-[55%] bg-doc-muted/30" />
            <ThumbnailBlock className="h-1 w-[80%] bg-doc-text/15" />
          </div>
        ))}
      </div>

      <div
        className="absolute right-2 top-2 size-3 rounded-full border border-doc-border/50 bg-doc-muted/25"
        aria-hidden
      />
    </div>
  );
}

function ExperienceThumbnail() {
  return (
    <div className="flex h-full w-full flex-col gap-2 p-2.5 pt-3">
      <PageHeader />

      <div className="flex flex-1 gap-1.5">
        <div className="relative w-0.5 shrink-0 rounded-full bg-doc-border" aria-hidden>
          <div className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1">
            <div className="h-2 rounded-full bg-doc-text/80 px-1.5" style={{ width: "28%" }} />
            <ThumbnailBlock className="h-1.5 w-[38%] bg-doc-text/25" />
          </div>
          <div className="space-y-[2px]">
            <ThumbnailBlock className="h-[3px] w-full" />
            <ThumbnailBlock className="h-[3px] w-[88%]" />
          </div>
          <div className="space-y-[2px] pl-1">
            <ThumbnailBlock className="h-[2px] w-[52%] bg-doc-muted/30" />
            <ThumbnailBlock className="h-[2px] w-full" />
            <ThumbnailBlock className="h-[2px] w-[84%]" />
          </div>
          <div className="flex flex-wrap gap-0.5">
            {[22, 18, 20].map((width) => (
              <div
                key={width}
                className="h-1.5 rounded-sm border border-doc-border/50 bg-doc-surface"
                style={{ width: `${width}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-1.5 pl-2">
        <div className="relative w-0.5 shrink-0 rounded-full bg-doc-border/60" aria-hidden>
          <div className="absolute left-1/2 top-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-accent/70" />
        </div>
        <ThumbnailBlock className="h-1.5 w-[58%] bg-doc-text/15" />
      </div>
    </div>
  );
}

function ProjectsThumbnail() {
  return (
    <div className="flex h-full w-full flex-col gap-2 p-2.5 pt-3">
      <PageHeader />
      <ThumbnailBlock className="h-1 w-[90%]" />
      <div className="flex flex-1 flex-col gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex overflow-hidden rounded-sm border border-doc-border/40 bg-doc-bg"
          >
            <div className="aspect-square w-[30%] shrink-0 bg-doc-surface/80" />
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 p-1">
              <ThumbnailBlock className="h-1 w-[52%] bg-doc-muted/30" />
              <ThumbnailBlock className="h-1.5 w-[78%] bg-doc-text/20" />
              <ThumbnailBlock className="h-[3px] w-full" />
              <div className="mt-0.5 flex gap-0.5">
                <div className="h-1.5 w-4 rounded-full border border-doc-border/40 bg-doc-surface" />
                <div className="h-1.5 w-3.5 rounded-full border border-doc-border/40 bg-doc-surface" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsThumbnail() {
  const levels = [82, 65, 90, 48, 76, 58, 70, 62];

  return (
    <div className="flex h-full w-full flex-col gap-2 p-2.5 pt-3">
      <PageHeader />

      <div className="flex gap-1">
        <div className="h-2 flex-1 rounded-sm bg-accent/45" />
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-2 flex-1 rounded-sm border border-doc-border/40 bg-doc-surface" />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-1">
        {levels.map((level, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <div
              className="size-3.5 rounded-full border border-doc-border/40"
              style={{
                background: `conic-gradient(color-mix(in srgb, var(--accent) 55%, transparent) ${level}%, var(--doc-surface) 0)`,
              }}
            />
            <ThumbnailBlock className="h-[2px] w-full bg-doc-muted/25" />
          </div>
        ))}
      </div>

      <div className="mt-auto space-y-1">
        <ThumbnailBlock className="h-1 w-[42%] bg-accent/40" />
        {[88, 72, 95].map((width) => (
          <div key={width} className="space-y-0.5">
            <div className="flex justify-between gap-1">
              <ThumbnailBlock className="h-[2px] w-[45%] bg-doc-muted/30" />
              <ThumbnailBlock className="h-[2px] w-[18%] bg-doc-muted/20" />
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-doc-surface">
              <div className="h-full rounded-full bg-accent/50" style={{ width: `${width}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactThumbnail() {
  return (
    <div className="flex h-full w-full flex-col gap-2 p-2.5 pt-3">
      <PageHeader />
      <ThumbnailBlock className="h-1.5 w-[88%]" />

      <div className="grid flex-1 grid-cols-2 gap-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-sm border border-doc-border/40 bg-doc-surface/50 p-1"
          >
            <div className="mb-0.5 flex items-center gap-0.5">
              <div
                className={`size-1.5 rounded-sm ${i === 0 ? "bg-accent/50" : "bg-doc-muted/35"}`}
              />
              <ThumbnailBlock className="h-1 flex-1 bg-doc-muted/25" />
            </div>
            <ThumbnailBlock className="h-1.5 w-[82%] bg-doc-text/15" />
          </div>
        ))}
      </div>

      <div className="border-t border-doc-border/40 pt-1">
        <ThumbnailBlock className="h-1 w-[55%] bg-doc-muted/20" />
      </div>
    </div>
  );
}

function FallbackThumbnail({ pageId }: { pageId: number }) {
  return (
    <div className="flex h-full w-full items-center justify-center p-2">
      <span className="font-doc text-[10px] text-doc-muted/60">{pageId}</span>
    </div>
  );
}

export function PageThumbnail({ pageId }: PageThumbnailProps) {
  const content = (() => {
    switch (pageId) {
      case 1:
        return <CoverThumbnail />;
      case 2:
      case 3:
        return <ProjectsThumbnail />;
      case 4:
        return <ExperienceThumbnail />;
      case 5:
        return <SkillsThumbnail />;
      case 6:
        return <ContactThumbnail />;
      default:
        return <FallbackThumbnail pageId={pageId} />;
    }
  })();

  return (
    <div
      className="h-full w-full overflow-hidden"
      aria-hidden
    >
      {content}
    </div>
  );
}
