import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectViewer } from "@/components/dossier/project/ProjectViewer";
import { getWorkProjectBySlug, getWorkProjectSlugs } from "@/lib/portfolio";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getWorkProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProjectBySlug(slug);
  if (!project) return { title: "Proyecto no encontrado" };

  return {
    title: `${project.name} — Portfolio Dossier`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getWorkProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="h-full min-w-0 overflow-x-hidden">
      <ProjectViewer project={project} />
    </div>
  );
}
