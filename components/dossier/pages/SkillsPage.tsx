import type { Skill, SkillCategory } from "@/types/portfolio";

interface SkillsPageProps {
  skills: Skill[];
}

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
  design: "Diseño",
};

const CATEGORY_ORDER: SkillCategory[] = ["frontend", "design"];

function SkillEntry({ skill, isLast }: { skill: Skill; isLast: boolean }) {
  return (
    <section
      className={`space-y-3 ${isLast ? "" : "mb-6 border-b border-dashed border-doc-border pb-6"}`}
    >
      <h4 className="font-sans text-base font-bold text-doc-text md:text-lg">{skill.name}</h4>

      <div className="h-1 overflow-hidden rounded-sm bg-doc-surface">
        <div
          className="h-full w-full bg-accent skill-bar-fill"
          role="presentation"
        />
      </div>
    </section>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <section className="mb-10 last:mb-0">
      <div className="mb-4 flex items-center gap-2">
        <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
        <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-doc-muted">
          {title}
        </h3>
      </div>

      <div className="rounded-lg border border-doc-border bg-doc-bg p-5 md:p-6">
        {skills.map((skill, i) => (
          <SkillEntry key={skill.name} skill={skill} isLast={i === skills.length - 1} />
        ))}
      </div>
    </section>
  );
}

export function SkillsPage({ skills }: SkillsPageProps) {
  const groupedSkills = CATEGORY_ORDER.map((category) => ({
    category,
    skills: skills.filter((skill) => skill.category === category),
  })).filter((group) => group.skills.length > 0);

  return (
    <article className="dossier-page font-doc flex flex-col p-6 text-doc-text md:p-12">
      <header className="mb-8 border-b border-doc-border pb-4">
        <p className="mb-1 font-sans text-xs uppercase tracking-[0.2em] text-doc-muted">
          Sección 05 / Tech Stack
        </p>
        <h2 className="text-2xl font-bold md:text-3xl">Estructura Tecnológica</h2>
      </header>

      <section className="mb-8">
        <h3 className="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-accent">
          Competencias Técnicas
        </h3>
        <p className="text-sm leading-relaxed text-doc-body md:text-base">
          Stack y herramientas con las que trabajo en producción.
        </p>
      </section>

      {groupedSkills.map((group) => (
        <SkillGroup
          key={group.category}
          title={CATEGORY_LABELS[group.category]}
          skills={group.skills}
        />
      ))}
    </article>
  );
}
