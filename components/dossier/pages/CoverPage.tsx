"use client";

import { Laptop, MapPin, Zap } from "lucide-react";
import { PdfAnnotation } from "@/components/dossier/annotations";
import { renderBoldText } from "@/lib/renderBoldText";
import { DOSSIER_PAGES, type Profile } from "@/types/portfolio";

const quickAccessPages = DOSSIER_PAGES.filter((page) => page.id > 1);

interface CoverPageProps {
  profile: Profile;
  onPageSelect: (page: number) => void;
}

export function CoverPage({ profile, onPageSelect }: CoverPageProps) {
  return (
    <article className="dossier-page flex flex-col gap-8 p-6 text-doc-text md:gap-10 md:p-12">
      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="h-px w-6 shrink-0 bg-accent" aria-hidden />
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-accent md:text-xs">
            {profile.dossierLabel}
          </p>
        </div>
        <h1 className="font-doc text-4xl font-bold uppercase leading-none tracking-tight md:text-5xl">
          {profile.name}
        </h1>
      </header>

      <section className="rounded-lg border border-doc-border bg-doc-bg p-5 md:p-7">
        <div className="mb-4 flex items-center gap-2">
          <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
          <h2 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-doc-muted">
            Sobre mí
          </h2>
        </div>

        <div className="font-doc space-y-4 text-sm leading-relaxed text-doc-body md:text-base">
          {profile.executiveSummary.map((paragraph, index) => (
            <p key={index}>{renderBoldText(paragraph)}</p>
          ))}
        </div>

        <ul className="mt-6 flex flex-wrap gap-2 overflow-visible font-sans">
          <li className="mb-1">
            <PdfAnnotation
              note="Con posibilidad de relocalización"
              triggerLabel="Ver nota sobre relocalización"
              side="corner"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-doc-border bg-doc-surface px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-doc-subtle">
                <MapPin className="size-3 shrink-0 text-doc-muted" strokeWidth={2} aria-hidden />
                {profile.location}
              </span>
            </PdfAnnotation>
          </li>
          <li className="inline-flex items-center gap-1.5 rounded-full border border-doc-border bg-doc-surface px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-doc-subtle">
            <Laptop className="size-3 shrink-0 text-doc-muted" strokeWidth={2} aria-hidden />
            {profile.workMode}
          </li>
          <li className="inline-flex items-center gap-1.5 rounded-full border border-doc-border bg-doc-surface px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-doc-subtle">
            <Zap className="size-3 shrink-0 text-doc-muted" strokeWidth={2} aria-hidden />
            {profile.techStack}
          </li>
        </ul>
      </section>

      <section>
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-doc-muted">
            Acceso Rápido Interactivo
          </h2>
          <p className="font-sans text-[10px] uppercase tracking-wide text-doc-muted/70">
            Haz clic para saltar a una página
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickAccessPages.map((page, index) => (
            <button
              key={page.id}
              type="button"
              onClick={() => onPageSelect(page.id)}
              className="group relative flex min-h-[140px] cursor-pointer flex-col rounded-lg border border-doc-border bg-doc-bg p-4 text-left transition-colors hover:border-accent/40 hover:bg-doc-surface/50 md:min-h-[152px] md:p-5"
            >
              <span
                className="pointer-events-none absolute right-3 top-2 font-doc text-5xl font-bold leading-none text-doc-border/80 select-none md:right-4 md:text-6xl"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="relative z-10 font-sans text-[10px] uppercase tracking-wide text-doc-muted">
                Pág. {String(page.id).padStart(2, "0")} • {page.bookmark}
              </p>

              <h3 className="relative z-10 mt-3 font-sans text-sm font-bold uppercase tracking-wide text-doc-text md:text-base">
                {page.title}
              </h3>

              <span className="relative z-10 mt-auto pt-3 font-sans text-xs font-medium text-accent transition-colors group-hover:text-accent/80">
                Ir a {page.title} →
              </span>
            </button>
          ))}
        </div>
      </section>
    </article>
  );
}
