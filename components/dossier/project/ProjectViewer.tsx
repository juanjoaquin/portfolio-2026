"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "@/components/dossier/ThemeProvider";
import { Toolbar } from "@/components/dossier/Toolbar";
import { Sidebar, type SidebarStyle } from "@/components/dossier/Sidebar";
import { MobileNavDrawer } from "@/components/dossier/MobileNavDrawer";
import { ProjectDetailPage } from "@/components/dossier/project/ProjectDetailPage";
import { useSidebarLayout } from "@/lib/useMediaQuery";
import type { WorkProjectDetail } from "@/types/portfolio";
import { DOSSIER_PAGES } from "@/types/portfolio";

const SIDEBAR_STYLE_KEY = "dossier-sidebar-style";

/** Página activa en el sidebar mientras se visualiza un proyecto */
const PROJECT_CONTEXT_PAGE = 2;

interface ProjectViewerProps {
  project: WorkProjectDetail;
}

function ProjectViewerContent({ project }: ProjectViewerProps) {
  const router = useRouter();
  const { hasSidebar, isWideDesktop, isMobileNav } = useSidebarLayout();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [sidebarStyle, setSidebarStyle] = useState<SidebarStyle>("dossier");

  useEffect(() => {
    const stored = localStorage.getItem(SIDEBAR_STYLE_KEY);
    if (stored === "dossier" || stored === "simple") {
      setSidebarStyle(stored);
    }
  }, []);

  useEffect(() => {
    if (!hasSidebar) {
      setSidebarOpen(false);
      return;
    }
    setMobileNavOpen(false);
    setSidebarOpen(isWideDesktop);
  }, [hasSidebar, isWideDesktop]);

  const handleSidebarStyleChange = useCallback((style: SidebarStyle) => {
    setSidebarStyle(style);
    localStorage.setItem(SIDEBAR_STYLE_KEY, style);
  }, []);

  const navigateToDossierPage = useCallback(
    (page: number) => {
      router.push(`/?p=${page}`);
    },
    [router],
  );

  return (
    <div className="flex h-full min-w-0 max-w-full flex-col overflow-hidden">
      <Toolbar
        documentName={project.name}
        documentLabel={project.documentLabel}
        isMobile={isMobileNav}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((o) => !o)}
        mobileNavOpen={mobileNavOpen}
        onToggleMobileNav={() => setMobileNavOpen((o) => !o)}
        currentPage={1}
        totalPages={1}
      />
      <MobileNavDrawer
        open={mobileNavOpen}
        currentPage={PROJECT_CONTEXT_PAGE}
        pages={DOSSIER_PAGES}
        onClose={() => setMobileNavOpen(false)}
        onPageSelect={navigateToDossierPage}
      />
      <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden">
        <Sidebar
          open={sidebarOpen}
          currentPage={PROJECT_CONTEXT_PAGE}
          pages={DOSSIER_PAGES}
          style={sidebarStyle}
          allowDossierStyle={isWideDesktop}
          onStyleChange={handleSidebarStyleChange}
          onPageSelect={navigateToDossierPage}
        />
        <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-background">
          <div className="flex min-h-0 min-w-0 flex-1 items-start justify-center overflow-x-hidden overflow-y-auto p-2 sm:p-4 md:p-4 lg:p-8">
            <div className="w-full min-w-0 max-w-full lg:max-w-[794px] page-enter-forward">
              <ProjectDetailPage project={project} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export function ProjectViewer({ project }: ProjectViewerProps) {
  return (
    <ThemeProvider>
      <ProjectViewerContent project={project} />
    </ThemeProvider>
  );
}
