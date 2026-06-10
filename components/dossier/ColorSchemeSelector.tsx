"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import {
  COLOR_SCHEME_CYCLE,
  COLOR_SCHEME_LABELS,
  useTheme,
} from "@/components/dossier/ThemeProvider";
import type { ColorScheme } from "@/types/portfolio";

function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ColorSchemeIcon({ scheme }: { scheme: ColorScheme }) {
  if (scheme === "light") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }

  if (scheme === "dark") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function useDismissOnOutsideClick(
  ref: RefObject<HTMLElement | null>,
  open: boolean,
  onClose: () => void,
) {
  useEffect(() => {
    if (!open) return;

    const handleClick = (event: MouseEvent) => {
      if (ref.current?.contains(event.target as Node)) return;
      onClose();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, ref]);
}

export function ColorSchemeDropdown() {
  const { colorScheme, setColorScheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useDismissOnOutsideClick(ref, open, () => setOpen(false));

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex h-8 items-center gap-1.5 rounded border border-white/20 px-2 hover:bg-white/10 transition-colors"
        aria-label={`Modo de color: ${COLOR_SCHEME_LABELS[colorScheme]}`}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <ColorSchemeIcon scheme={colorScheme} />
        <span className="hidden sm:inline text-xs">{COLOR_SCHEME_LABELS[colorScheme]}</span>
        <ChevronDownIcon />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full z-50 mt-1 min-w-44 rounded-md border border-white/15 bg-[#2a2a2a] py-1 shadow-lg"
          role="listbox"
          aria-label="Modo de color"
        >
          {COLOR_SCHEME_CYCLE.map((scheme) => (
            <button
              key={scheme}
              type="button"
              role="option"
              aria-selected={colorScheme === scheme}
              onClick={() => {
                setColorScheme(scheme);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors hover:bg-white/10 ${
                colorScheme === scheme ? "bg-white/10" : ""
              }`}
            >
              <ColorSchemeIcon scheme={scheme} />
              <span className="flex-1">{COLOR_SCHEME_LABELS[scheme]}</span>
              {colorScheme === scheme && <CheckIcon />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ColorSchemeDrawerSection() {
  const { colorScheme, setColorScheme } = useTheme();

  return (
    <div className="border-t border-white/10 p-3">
      <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wide text-sidebar-fg/60">
        Modo de color
      </p>
      <ul className="flex flex-col gap-0.5" role="listbox" aria-label="Modo de color">
        {COLOR_SCHEME_CYCLE.map((scheme) => {
          const isActive = colorScheme === scheme;

          return (
            <li key={scheme}>
              <button
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => setColorScheme(scheme)}
                className={`flex w-full items-center gap-2.5 rounded px-2 py-2.5 text-left text-sm transition-colors hover:bg-white/10 ${
                  isActive
                    ? "bg-white/15 font-medium text-white ring-1 ring-accent"
                    : "text-sidebar-fg/90"
                }`}
              >
                <ColorSchemeIcon scheme={scheme} />
                <span className="flex-1">{COLOR_SCHEME_LABELS[scheme]}</span>
                {isActive && <CheckIcon />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
