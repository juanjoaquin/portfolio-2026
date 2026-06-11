"use client";

import { X } from "lucide-react";
import { forwardRef } from "react";

interface PdfAnnotationCardProps {
  id: string;
  title: string;
  date?: string;
  note: string;
  variant?: "floating" | "inline";
  style?: React.CSSProperties;
  className?: string;
  onClose?: () => void;
}

export const PdfAnnotationCard = forwardRef<HTMLDivElement, PdfAnnotationCardProps>(
  function PdfAnnotationCard(
    { id, title, date, note, variant = "floating", style, className = "", onClose },
    ref,
  ) {
    return (
      <div
        ref={ref}
        id={id}
        role="note"
        style={style}
        className={[
          "pdf-annotation-card font-sans",
          variant === "inline" ? "pdf-annotation-card--inline mt-2" : "pdf-annotation-card--floating",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <header className="flex items-center justify-between gap-2 border-b border-[#E8D98A]/60 px-3 py-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6B5B1A]">
            {title}
          </p>
          <div className="flex shrink-0 items-center gap-1.5">
            {date ? (
              <time className="text-[9px] tabular-nums text-[#8B7A2E]/80">{date}</time>
            ) : null}
            {onClose ? (
              <button
                type="button"
                onClick={onClose}
                className="pdf-annotation-close inline-flex cursor-pointer items-center justify-center rounded-sm p-0.5 text-[#8B7A2E]/80 transition-colors hover:bg-[#E8D98A]/40 hover:text-[#6B5B1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B800]/50"
                aria-label="Cerrar nota"
              >
                <X className="size-3" strokeWidth={2.25} aria-hidden />
              </button>
            ) : null}
          </div>
        </header>
        <p className="px-3 py-2.5 text-xs leading-relaxed text-[#4A4020]">{note}</p>
      </div>
    );
  },
);
