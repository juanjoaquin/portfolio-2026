import type { Experience } from "@/types/portfolio";

interface ExperiencePageProps {
  experience: Experience[];
}

function parseBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-doc-text">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function CompanyBadge({ company, url }: { company: string; url?: string }) {
  const className =
    "inline-block rounded-full bg-doc-text px-3 py-0.5 text-[10px] font-sans font-semibold uppercase tracking-wider text-doc-bg transition-opacity hover:opacity-80";

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`Visitar sitio de ${company}`}
      >
        {company}
      </a>
    );
  }

  return <span className={className}>{company}</span>;
}

function TechPills({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5 font-mono">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-doc-border bg-doc-surface px-2.5 py-1 text-[10px] font-medium text-doc-subtle"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function ExperienceEntry({ exp, isLast }: { exp: Experience; isLast: boolean }) {
  const meta = exp.location ? `${exp.period} | ${exp.location}` : exp.period;

  return (
    <section className={`relative pl-8 ${isLast ? "" : "border-b border-dashed border-doc-border pb-10 mb-10"}`}>
      <span
        className="absolute left-0 top-1.5 h-2 w-2 -translate-x-[calc(50%+0.5px)] rounded-full bg-accent"
        aria-hidden
      />

      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <CompanyBadge company={exp.company} url={exp.url} />
          <h3 className="text-lg font-bold md:text-xl">{exp.role}</h3>
        </div>
        <p className="shrink-0 rounded-md border border-doc-border px-2.5 py-1 text-[10px] font-sans text-doc-muted">
          {meta}
        </p>
      </div>

      <p className="mb-6 text-doc-body leading-relaxed">{exp.description}</p>

      <div className="mb-5 space-y-2">
        <p className="text-[10px] font-sans uppercase tracking-wider text-doc-muted">
          Logros clave en el cargo:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-doc-body leading-relaxed">
          {exp.achievements.map((item, i) => (
            <li key={i}>{parseBold(item)}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <p className="text-[10px] font-sans uppercase tracking-wider text-doc-muted">Stack:</p>
        <TechPills items={exp.tech} />
      </div>
    </section>
  );
}

export function ExperiencePage({ experience }: ExperiencePageProps) {
  return (
    <article className="dossier-page font-doc flex flex-col p-6 text-doc-text md:p-12">
      <header className="mb-8 border-b border-doc-border pb-4">
        <p className="mb-1 font-sans text-xs uppercase tracking-[0.2em] text-doc-muted">
          Sección 04 / Corporate Exp
        </p>
        <h2 className="text-2xl font-bold md:text-3xl">Trayectoria Curricular</h2>
      </header>

      <div className="relative border-l border-doc-border pl-0">
        {experience.map((exp, i) => (
          <ExperienceEntry key={i} exp={exp} isLast={i === experience.length - 1} />
        ))}
      </div>
    </article>
  );
}
