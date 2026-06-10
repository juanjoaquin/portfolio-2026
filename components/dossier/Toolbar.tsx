"use client";

import { ColorSchemeDropdown } from "@/components/dossier/ColorSchemeSelector";
import { Menu } from "lucide-react";

interface ToolbarProps {
  documentName: string;
  documentLabel: string;
  isMobile: boolean;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  mobileNavOpen: boolean;
  onToggleMobileNav: () => void;
  currentPage: number;
  totalPages: number;
}

export function Toolbar({
  documentName,
  documentLabel,
  isMobile,
  sidebarOpen,
  onToggleSidebar,
  mobileNavOpen,
  onToggleMobileNav,
  currentPage,
  totalPages,
}: ToolbarProps) {
  return (
    <header className="relative z-20 flex min-h-12 shrink-0 items-center justify-between gap-2 bg-toolbar-bg px-3 py-2 text-toolbar-fg sm:gap-4 sm:px-4">
      <div className="flex min-w-0 items-center gap-3">
        {isMobile ? (
          <button
            type="button"
            onClick={onToggleMobileNav}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded hover:bg-white/10 transition-colors"
            aria-label={mobileNavOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={mobileNavOpen}
          >
            <Menu size={18} strokeWidth={2} aria-hidden />
          </button>
        ) : (
          <button
            type="button"
            onClick={onToggleSidebar}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded hover:bg-white/10 transition-colors"
            aria-label={sidebarOpen ? "Cerrar panel lateral" : "Abrir panel lateral"}
            aria-pressed={sidebarOpen}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </button>
        )}
        <div className="h-8 w-px shrink-0 bg-white/20" aria-hidden />
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="flex shrink-0 items-center justify-center rounded bg-white p-0.5 sm:p-1">
            <img
              src="/pdf-svgrepo-com.svg"
              alt=""
              aria-hidden
              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
            />
          </span>
          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="truncate text-sm font-medium text-white" title={documentName}>
              {documentName}
            </span>
            <span className="truncate text-[10px] text-neutral-400 sm:text-xs" title={documentLabel}>
              {documentLabel}
            </span>
          </div>
          <div className="h-8 w-px shrink-0 bg-white/20" aria-hidden />
          <span className="shrink-0 text-xs text-white/85 sm:text-sm">
            Pág. {currentPage}/{totalPages}
          </span>
        </div>
      </div>

      {!isMobile && (
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ColorSchemeDropdown />
        </div>
      )}
    </header>
  );
}
