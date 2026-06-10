"use client";

import { useState } from "react";
import { getSkillsByCategory } from "@/lib/portfolio";
import { SkillFilters } from "@/components/dossier/skills/SkillFilters";
import { SkillMeter } from "@/components/dossier/skills/SkillMeter";
import type { Skill, SkillCategory } from "@/types/portfolio";

interface SkillsPageProps {
  skills: Skill[];
}

const ALL_CATEGORIES: (SkillCategory | "all")[] = [
  "all",
  "frontend",
  "backend",
  "tools",
  "design",
];

export function SkillsPage({ skills }: SkillsPageProps) {
  const [filter, setFilter] = useState<SkillCategory | "all">("all");
  const filtered = filter === "all" ? skills : getSkillsByCategory(filter);

  return (
    <article className="dossier-page font-doc flex flex-col p-6 text-doc-text md:p-12">
      <header className="mb-6 border-b border-doc-border pb-4">
        <p className="text-xs uppercase tracking-[0.2em] text-doc-muted font-sans mb-1">
          Sección 05
        </p>
        <h2 className="text-2xl font-bold md:text-3xl">Estructura Tecnológica</h2>
      </header>

      <SkillFilters
        categories={ALL_CATEGORIES}
        active={filter}
        onChange={setFilter}
      />

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {filtered.map((skill) => (
          <SkillMeter key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>

      <section className="mt-10 space-y-4">
        <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-accent">
          Instrumentación
        </h3>
        {filtered.map((skill) => (
          <div key={skill.name} className="space-y-1">
            <div className="flex justify-between text-xs font-sans">
              <span className="font-medium text-doc-body">{skill.name}</span>
              <span className="text-doc-muted">{skill.level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-doc-surface overflow-hidden">
              <div
                className="h-full rounded-full bg-accent skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <p className="text-xs text-doc-muted font-sans">{skill.instrumentation}</p>
          </div>
        ))}
      </section>
    </article>
  );
}
