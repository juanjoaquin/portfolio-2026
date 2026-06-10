"use client";

import { useEffect, useRef, useState } from "react";
import type { Experience } from "@/types/portfolio";

interface ExperiencePageProps {
  experience: Experience[];
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
      { threshold: 0.3 }
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

export function ExperiencePage({ experience }: ExperiencePageProps) {
  return (
    <article className="dossier-page font-doc flex flex-col p-6 text-doc-text md:p-12">
      <header className="mb-8 border-b border-doc-border pb-4">
        <p className="text-xs uppercase tracking-[0.2em] text-doc-muted font-sans mb-1">
          Sección 03
        </p>
        <h2 className="text-2xl font-bold md:text-3xl">Experiencia & Casos de Éxito</h2>
      </header>

      <div className="space-y-10">
        {experience.map((exp, i) => (
          <section key={i} className="border-l-2 border-accent pl-6">
            <div className="mb-2">
              <h3 className="text-lg font-bold md:text-xl">{exp.role}</h3>
              <p className="text-accent font-sans text-sm font-medium">{exp.company}</p>
              <p className="text-doc-muted font-sans text-xs mt-0.5">{exp.period}</p>
            </div>
            <p className="text-doc-body leading-relaxed mb-6">{exp.description}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {exp.kpis.map((kpi, j) => (
                <KpiBar key={j} label={kpi.label} value={kpi.value} unit={kpi.unit} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
