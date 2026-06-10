"use client";

import { DocumentViewer } from "@/components/dossier/DocumentViewer";
import { ThemeProvider } from "@/components/dossier/ThemeProvider";
import { CoverPage } from "@/components/dossier/pages/CoverPage";
import { ExperiencePage } from "@/components/dossier/pages/ExperiencePage";
import { ProjectsPage } from "@/components/dossier/pages/ProjectsPage";
import { SkillsPage } from "@/components/dossier/pages/SkillsPage";
import { ContactPage } from "@/components/dossier/pages/ContactPage";
import type { Experience, Profile, Skill, WorkProject } from "@/types/portfolio";
import { DOSSIER_PAGES } from "@/types/portfolio";

interface DossierViewerProps {
  profile: Profile;
  workProjectsPrimary: WorkProject[];
  workProjectsContinued: WorkProject[];
  skills: Skill[];
  experience: Experience[];
  initialPage?: number;
}

function DossierContent({
  profile,
  workProjectsPrimary,
  workProjectsContinued,
  skills,
  experience,
  initialPage = 1,
}: DossierViewerProps) {
  const renderPage = (pageId: number, goToPage: (page: number) => void) => {
    switch (pageId) {
      case 1:
        return <CoverPage profile={profile} onPageSelect={goToPage} />;
      case 2:
        return <ProjectsPage workProjects={workProjectsPrimary} variant="primary" />;
      case 3:
        return <ProjectsPage workProjects={workProjectsContinued} variant="continued" />;
      case 4:
        return <ExperiencePage experience={experience} />;
      case 5:
        return <SkillsPage skills={skills} />;
      case 6:
        return <ContactPage profile={profile} />;
      default:
        return null;
    }
  };

  return (
    <DocumentViewer
      documentName={profile.documentName}
      documentLabel={profile.dossierLabel}
      pages={DOSSIER_PAGES}
      renderPage={renderPage}
      initialPage={initialPage}
    />
  );
}

export function DossierViewer(props: DossierViewerProps) {
  return (
    <ThemeProvider>
      <DossierContent {...props} />
    </ThemeProvider>
  );
}
