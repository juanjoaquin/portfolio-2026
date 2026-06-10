import { profile } from "@/data/profile";
import { workProjects } from "@/data/workProjects";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";
import { DossierViewer } from "@/components/dossier/DossierViewer";
import { TOTAL_PAGES } from "@/types/portfolio";

interface HomeProps {
  searchParams: Promise<{ p?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { p } = await searchParams;
  const parsed = p ? parseInt(p, 10) : 1;
  const initialPage = parsed >= 1 && parsed <= TOTAL_PAGES ? parsed : 1;

  return (
    <div className="h-full min-w-0 overflow-x-hidden">
      <DossierViewer
        profile={profile}
        workProjects={workProjects}
        skills={skills}
        experience={experience}
        initialPage={initialPage}
      />
    </div>
  );
}
