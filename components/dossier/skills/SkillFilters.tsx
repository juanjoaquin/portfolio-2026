"use client";

import type { SkillCategory } from "@/types/portfolio";

const CATEGORY_LABELS: Record<SkillCategory | "all", string> = {
  all: "Todos",
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
  design: "Design",
};

interface SkillFiltersProps {
  categories: (SkillCategory | "all")[];
  active: SkillCategory | "all";
  onChange: (category: SkillCategory | "all") => void;
}

export function SkillFilters({ categories, active, onChange }: SkillFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 font-sans" role="group" aria-label="Filtrar skills">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            active === cat
              ? "bg-accent text-white"
              : "bg-doc-surface text-doc-subtle hover:bg-doc-border"
          }`}
          aria-pressed={active === cat}
        >
          {CATEGORY_LABELS[cat]}
        </button>
      ))}
    </div>
  );
}
