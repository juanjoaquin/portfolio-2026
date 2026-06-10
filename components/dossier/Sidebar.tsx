"use client";

import { useEffect, useRef } from "react";
import { PageThumbnail } from "@/components/dossier/PageThumbnail";
import type { DossierPage } from "@/types/portfolio";

export type SidebarStyle = "dossier" | "simple";

interface SidebarProps {
  open: boolean;
  currentPage: number;
  pages: DossierPage[];
  style: SidebarStyle;
  onStyleChange: (style: SidebarStyle) => void;
  onPageSelect: (page: number) => void;
}

export function Sidebar({
  open,
  currentPage,
  pages,
  style,
  onStyleChange,
  onPageSelect,
}: SidebarProps) {
  const activeItemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (style !== "dossier" || !open) return;
    activeItemRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [currentPage, style, open]);

  return (
    <aside
      className={`hidden h-full min-h-0 shrink-0 flex-col overflow-hidden bg-sidebar-bg text-sidebar-fg transition-all duration-300 md:flex ${
        open ? "w-52 min-w-0" : "w-0 min-w-0"
      }`}
      aria-hidden={!open}
    >
      <div className="w-52 shrink-0 border-b border-white/10 p-3">
        <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider opacity-60">
          Páginas
        </p>
        <div
          className="flex items-center rounded-md border border-white/15 bg-black/20 p-0.5"
          role="group"
          aria-label="Estilo del panel lateral"
        >
          <button
            type="button"
            onClick={() => onStyleChange("dossier")}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-1.5 text-xs transition-colors ${
              style === "dossier"
                ? "bg-white/15 font-medium text-white"
                : "text-sidebar-fg/70 hover:bg-white/5 hover:text-sidebar-fg"
            }`}
            aria-pressed={style === "dossier"}
            title="Miniaturas con scroll automático"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <rect x="3" y="3" width="7" height="18" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="12" width="7" height="9" rx="1" />
            </svg>
            Miniaturas
          </button>
          <button
            type="button"
            onClick={() => onStyleChange("simple")}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-1.5 text-xs transition-colors ${
              style === "simple"
                ? "bg-white/15 font-medium text-white"
                : "text-sidebar-fg/70 hover:bg-white/5 hover:text-sidebar-fg"
            }`}
            aria-pressed={style === "simple"}
            title="Lista compacta de páginas"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
            Lista
          </button>
        </div>
      </div>
      <nav
        className="flex min-h-0 w-52 flex-1 flex-col overflow-y-auto overscroll-y-contain p-3 pt-2"
        aria-label={style === "dossier" ? "Miniaturas del dossier" : "Navegación del dossier"}
      >
        <ul className={`flex flex-col ${style === "dossier" ? "gap-2" : "gap-0.5"}`}>
          {pages.map((page) => {
            const isActive = currentPage === page.id;

            if (style === "simple") {
              return (
                <li key={page.id}>
                  <button
                    type="button"
                    onClick={() => onPageSelect(page.id)}
                    className={`flex w-full items-center gap-2 rounded px-2 py-2 text-left text-sm transition-colors hover:bg-white/10 ${
                      isActive ? "bg-white/15 font-medium text-white ring-1 ring-accent" : "text-sidebar-fg/90"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded text-xs tabular-nums ${
                        isActive ? "bg-accent text-white" : "bg-white/10"
                      }`}
                    >
                      {page.id}
                    </span>
                    <span className="min-w-0 flex-1 truncate">{page.title}</span>
                  </button>
                </li>
              );
            }

            return (
              <li key={page.id} ref={isActive ? activeItemRef : undefined}>
                <button
                  type="button"
                  onClick={() => onPageSelect(page.id)}
                  className={`group flex w-full flex-col gap-1 rounded p-2 text-left transition-colors hover:bg-white/10 ${
                    isActive ? "bg-white/15 ring-1 ring-accent" : ""
                  }`}
                >
                  <div className="aspect-[210/297] w-full overflow-hidden rounded border border-doc-border bg-doc-bg">
                    <PageThumbnail pageId={page.id} />
                  </div>
                  <span className="flex items-center justify-between text-xs">
                    <span>
                      {page.id}. {page.title}
                    </span>
                    <span className="opacity-50">{page.bookmark}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
