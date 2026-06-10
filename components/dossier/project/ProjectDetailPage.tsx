"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ImageCarousel } from "@/components/dossier/project/ImageCarousel";
import type { WorkProjectDetail, WorkProjectBlock } from "@/types/portfolio";

interface ProjectDetailPageProps {
  project: WorkProjectDetail;
}

function KpiBar({ label, value, unit }: { label: string; value: number; unit: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const displayValue = unit === "/5" ? value.toFixed(1) : Math.round(value);
  const barPercent =
    unit === "/5" ? (value / 5) * 100 : unit === "min" ? Math.min(100, (5 / value) * 100) : Math.min(100, value);

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-xs font-sans">
        <span className="text-doc-subtle">{label}</span>
        <span className="font-semibold text-accent tabular-nums">
          {displayValue}
          {unit}
        </span>
      </div>
      <div className="h-2 rounded-full bg-doc-surface overflow-hidden">
        <div
          className={`h-full rounded-full bg-accent ${visible ? "kpi-bar-fill" : ""}`}
          style={{ width: visible ? `${barPercent}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function TechPills({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 font-sans">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-doc-border bg-doc-surface px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-doc-subtle"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function BlockRenderer({ block, project }: { block: WorkProjectBlock; project: WorkProjectDetail }) {
  switch (block.type) {
    case "hero":
      return (
        <header className="border-b border-doc-border pb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-doc-muted font-sans mb-1">
            {project.company} · {project.period}
          </p>
          <h1 className="text-2xl font-bold md:text-3xl">{project.name}</h1>
          {block.subtitle && (
            <p className="mt-2 text-doc-body leading-relaxed">{block.subtitle}</p>
          )}
          <p className="mt-3 text-accent font-sans text-sm font-medium">{project.role}</p>
          <div className="mt-4">
            <TechPills items={project.tech} />
          </div>
        </header>
      );

    case "text":
      return (
        <section className="space-y-3">
          {block.heading && (
            <h2 className="text-sm font-sans font-semibold uppercase tracking-wider text-accent">
              {block.heading}
            </h2>
          )}
          {block.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-doc-body leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>
      );

    case "gallery":
      return <ImageCarousel images={block.images} />;

    case "kpis":
      return (
        <section className="grid gap-4 sm:grid-cols-3">
          {block.items.map((kpi, i) => (
            <KpiBar key={i} label={kpi.label} value={kpi.value} unit={kpi.unit} />
          ))}
        </section>
      );

    case "tech":
      return (
        <section>
          <h2 className="text-sm font-sans font-semibold uppercase tracking-wider text-accent mb-3">
            Stack tecnológico
          </h2>
          <TechPills items={block.items} />
        </section>
      );

    case "list":
      return (
        <section>
          <h2 className="text-sm font-sans font-semibold uppercase tracking-wider text-accent mb-4">
            {block.heading}
          </h2>
          <ul className="space-y-2 border-l-2 border-accent pl-6">
            {block.items.map((item, i) => (
              <li key={i} className="text-doc-body leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>
      );

    default:
      return null;
  }
}

const backLinkClass =
  "inline-flex min-h-8 items-center justify-center gap-1 rounded-md border border-doc-border/80 bg-doc-bg px-2 py-1 font-sans text-xs font-medium text-doc-body shadow-sm transition-all hover:border-accent/40 hover:bg-accent-muted hover:text-accent active:scale-[0.98] sm:min-h-11 sm:gap-1.5 sm:rounded-lg sm:px-4 sm:py-2 sm:text-sm";

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <article className="dossier-page font-doc flex flex-col p-6 text-doc-text md:p-12">
      <header className="mb-8 flex items-center gap-3 border-b border-doc-border pb-4">
        <Link href="/?p=4" className={backLinkClass}>
          <ChevronLeft className="size-4 sm:size-[18px]" strokeWidth={2} aria-hidden />
          <span>Proyectos</span>
        </Link>
        <div className="h-4 w-px shrink-0 bg-doc-border" aria-hidden />
        <p className="min-w-0 truncate font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-doc-muted">
          Caso de estudio
        </p>
      </header>

      <div className="space-y-8">
        {project.blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} project={project} />
        ))}
      </div>

      {project.url && (
        <footer className="mt-10 border-t border-doc-border pt-6">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium text-accent hover:underline"
          >
            Ver enlace externo →
          </a>
        </footer>
      )}
    </article>
  );
}
