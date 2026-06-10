"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Toolbar } from "@/components/dossier/Toolbar";
import { Sidebar, type SidebarStyle } from "@/components/dossier/Sidebar";
import { MobileNavDrawer } from "@/components/dossier/MobileNavDrawer";
import { DESKTOP_QUERY, useMediaQuery } from "@/lib/useMediaQuery";
import { useScrollPageNavigation } from "@/lib/useScrollPageNavigation";
import { getPageDirection, type PageDirection } from "@/lib/pageTransition";
import type { DossierPage } from "@/types/portfolio";

const SIDEBAR_STYLE_KEY = "dossier-sidebar-style";

const navButtonClass =
  "inline-flex min-h-8 min-w-8 items-center justify-center gap-1 rounded-md border border-doc-border/80 bg-doc-bg px-2 py-1 text-xs font-medium text-doc-body shadow-sm transition-all hover:border-accent/40 hover:bg-accent-muted hover:text-accent active:scale-[0.98] disabled:pointer-events-none disabled:border-transparent disabled:bg-transparent disabled:text-doc-muted/50 disabled:shadow-none disabled:active:scale-100 sm:min-h-11 sm:min-w-0 sm:gap-1.5 sm:rounded-lg sm:px-4 sm:py-2 sm:text-sm";

interface DocumentViewerProps {
  documentName: string;
  documentLabel: string;
  pages: DossierPage[];
  renderPage: (pageId: number, goToPage: (page: number) => void) => ReactNode;
  initialPage?: number;
}

export function DocumentViewer({
  documentName,
  documentLabel,
  pages,
  renderPage,
  initialPage = 1,
}: DocumentViewerProps) {
  const totalPages = pages.length;
  const safeInitialPage = Math.min(Math.max(1, initialPage), totalPages || 1);
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const contentScrollRef = useRef<HTMLDivElement>(null);
  const currentPageRef = useRef(safeInitialPage);
  const [currentPage, setCurrentPage] = useState(safeInitialPage);
  const [pageDirection, setPageDirection] = useState<PageDirection>("forward");
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
    if (isDesktop) {
      setSidebarOpen(true);
      setMobileNavOpen(false);
    } else {
      setSidebarOpen(false);
    }
  }, [isDesktop]);

  const handleSidebarStyleChange = useCallback((style: SidebarStyle) => {
    setSidebarStyle(style);
    localStorage.setItem(SIDEBAR_STYLE_KEY, style);
  }, []);

  const goToPage = useCallback((page: number) => {
    const prev = currentPageRef.current;
    if (page === prev) return;
    setPageDirection(getPageDirection(prev, page));
    currentPageRef.current = page;
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  useScrollPageNavigation({
    containerRef: contentScrollRef,
    currentPage,
    totalPages,
    onPageChange: goToPage,
    enabled: !mobileNavOpen,
  });

  useEffect(() => {
    const resetScroll = () => contentScrollRef.current?.scrollTo({ top: 0 });
    resetScroll();
    const frame = requestAnimationFrame(resetScroll);
    return () => cancelAnimationFrame(frame);
  }, [currentPage]);

  return (
    <div className="flex h-full min-w-0 max-w-full flex-col overflow-hidden">
      <Toolbar
        documentName={documentName}
        documentLabel={documentLabel}
        isMobile={!isDesktop}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((o) => !o)}
        mobileNavOpen={mobileNavOpen}
        onToggleMobileNav={() => setMobileNavOpen((o) => !o)}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <MobileNavDrawer
        open={mobileNavOpen}
        currentPage={currentPage}
        pages={pages}
        onClose={() => setMobileNavOpen(false)}
        onPageSelect={goToPage}
      />
      <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden">
        <Sidebar
          open={sidebarOpen}
          currentPage={currentPage}
          pages={pages}
          style={sidebarStyle}
          onStyleChange={handleSidebarStyleChange}
          onPageSelect={goToPage}
        />
        <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-background">
          <div
            ref={contentScrollRef}
            className="flex min-h-0 min-w-0 flex-1 items-start justify-center overflow-x-hidden overflow-y-auto p-2 sm:p-4 md:p-8"
          >
            <div
              key={currentPage}
              className={`w-full min-w-0 max-w-full md:max-w-[794px] ${
                pageDirection === "forward" ? "page-enter-forward" : "page-enter-backward"
              }`}
            >
              {renderPage(currentPage, goToPage)}
            </div>
          </div>
          <nav
            className="flex shrink-0 items-center justify-center gap-2 bg-nav-bg px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] font-sans sm:gap-5 sm:px-4 sm:py-3 sm:pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            aria-label="Navegación de páginas"
          >
            <button
              type="button"
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={navButtonClass}
              aria-label="Página anterior"
            >
              <ChevronLeft className="size-4 sm:size-[18px]" strokeWidth={2} aria-hidden />
              <span className="hidden sm:inline">Anterior</span>
            </button>
            <span className="min-w-10 rounded-full border border-doc-border/60 bg-doc-bg px-2 py-1 text-center text-[10px] font-medium tabular-nums text-doc-subtle shadow-sm sm:min-w-14 sm:px-3 sm:py-1.5 sm:text-xs">
              <span className="text-doc-text">{currentPage}</span>
              <span className="mx-0.5 opacity-40 sm:mx-1">/</span>
              {totalPages}
            </span>
            <button
              type="button"
              onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={navButtonClass}
              aria-label="Página siguiente"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ChevronRight className="size-4 sm:size-[18px]" strokeWidth={2} aria-hidden />
            </button>
          </nav>
        </main>
      </div>
    </div>
  );
}
