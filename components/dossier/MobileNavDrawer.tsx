"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { ColorSchemeDrawerSection } from "@/components/dossier/ColorSchemeSelector";
import type { DossierPage } from "@/types/portfolio";

const TRANSITION_MS = 300;

interface MobileNavDrawerProps {
  open: boolean;
  currentPage: number;
  pages: DossierPage[];
  onClose: () => void;
  onPageSelect: (page: number) => void;
}

export function MobileNavDrawer({
  open,
  currentPage,
  pages,
  onClose,
  onPageSelect,
}: MobileNavDrawerProps) {
  const panelRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      return;
    }

    setVisible(false);
  }, [open]);

  useEffect(() => {
    if (!open || !mounted) return;

    setVisible(false);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });

    return () => cancelAnimationFrame(frame);
  }, [open, mounted]);

  useEffect(() => {
    if (!visible && mounted && !open) {
      const timer = window.setTimeout(() => {
        setMounted(false);
        setVisible(false);
      }, TRANSITION_MS);
      return () => window.clearTimeout(timer);
    }
  }, [visible, mounted, open]);

  useEffect(() => {
    if (!mounted) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mounted, onClose]);

  useEffect(() => {
    if (visible) panelRef.current?.focus();
  }, [visible]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${visible ? "" : "pointer-events-none"}`}
      role="presentation"
    >
      <button
        type="button"
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Cerrar menú"
        onClick={onClose}
        tabIndex={visible ? 0 : -1}
      />

      <aside
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        aria-hidden={!visible}
        className={`absolute inset-y-0 left-0 flex w-[min(18rem,85vw)] flex-col bg-sidebar-bg text-sidebar-fg shadow-xl outline-none transition-transform duration-300 ease-out ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <p className="text-sm font-semibold tracking-wide">Páginas</p>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded hover:bg-white/10 transition-colors"
            aria-label="Cerrar menú"
          >
            <X size={18} strokeWidth={2} aria-hidden />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3" aria-label="Navegación del dossier">
          <ul className="flex flex-col gap-0.5">
            {pages.map((page) => {
              const isActive = currentPage === page.id;

              return (
                <li key={page.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onPageSelect(page.id);
                      onClose();
                    }}
                    className={`flex w-full items-center gap-2 rounded px-2 py-2.5 text-left text-sm transition-colors hover:bg-white/10 ${
                      isActive
                        ? "bg-white/15 font-medium text-white ring-1 ring-accent"
                        : "text-sidebar-fg/90"
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
            })}
          </ul>
        </nav>

        <ColorSchemeDrawerSection />
      </aside>
    </div>
  );
}
