import { Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import type { Profile } from "@/types/portfolio";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

interface ContactPageProps {
  profile: Profile;
}

function ContactCard({
  label,
  icon,
  iconClassName = "text-doc-muted",
  children,
}: {
  label: string;
  icon: ReactNode;
  iconClassName?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded border border-doc-border bg-doc-surface/40 p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className={iconClassName}>{icon}</span>
        <p className="text-xs uppercase tracking-wider text-doc-muted font-sans">{label}</p>
      </div>
      {children}
    </div>
  );
}

const linkClass =
  "font-sans text-base font-medium text-doc-text transition-opacity hover:opacity-70 md:text-lg";

export function ContactPage({ profile }: ContactPageProps) {
  return (
    <article className="dossier-page font-doc flex flex-col p-6 text-doc-text md:p-12">
      <header className="mb-8 border-b border-doc-border pb-4">
        <p className="text-xs uppercase tracking-[0.2em] text-doc-muted font-sans mb-1">
          Sección 06
        </p>
        <h2 className="text-2xl font-bold md:text-3xl">Contacto</h2>
      </header>

      <div className="flex flex-1 flex-col gap-8">
        <section className="max-w-2xl">
          <p className="text-base text-doc-body leading-relaxed md:text-lg">
            Estas son mis formas de contacto. Podés escribirme por cualquiera de los canales a
            continuación.
          </p>
        </section>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ContactCard
            label="Email"
            iconClassName="text-accent"
            icon={<Mail size={16} strokeWidth={2} aria-hidden />}
          >
            <a href={`mailto:${profile.email}`} className={`break-all ${linkClass}`}>
              {profile.email}
            </a>
          </ContactCard>

          <ContactCard
            label="LinkedIn"
            iconClassName="text-[#0A66C2]"
            icon={<LinkedInIcon className="h-4 w-4" />}
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 ${linkClass}`}
            >
              <LinkedInIcon className="h-[18px] w-[18px] shrink-0 text-[#0A66C2]" />
              juan-manuel-joaquin
            </a>
          </ContactCard>

          {profile.github && (
            <ContactCard
              label="GitHub"
              iconClassName="text-doc-text"
              icon={<GitHubIcon className="h-4 w-4" />}
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${linkClass}`}
              >
                <GitHubIcon className="h-[18px] w-[18px] shrink-0 text-doc-text" />
                juanjoaquin
              </a>
            </ContactCard>
          )}

          <ContactCard
            label="Ubicación"
            iconClassName="text-doc-muted"
            icon={<MapPin size={16} strokeWidth={2} aria-hidden />}
          >
            <p className="font-sans text-base text-doc-text md:text-lg">{profile.location}</p>
            <p className="mt-1 font-sans text-sm text-doc-muted">
              Con posibilidad a relocalización.
            </p>
          </ContactCard>

          <ContactCard
            label="Disponibilidad"
            iconClassName="text-emerald-600"
            icon={
              <span className="flex h-4 w-4 items-center justify-center" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
              </span>
            }
          >
            <p className="font-sans text-base text-doc-text md:text-lg">{profile.availability}</p>
          </ContactCard>
        </div>
      </div>

      <footer className="mt-10 border-t border-doc-border pt-6 text-sm text-doc-muted font-sans">
        <p>Fin del dossier — {profile.name}</p>
      </footer>
    </article>
  );
}
