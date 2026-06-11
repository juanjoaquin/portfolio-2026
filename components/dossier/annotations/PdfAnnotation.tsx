"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { PdfAnnotationCard } from "./PdfAnnotationCard";
import { PdfCommentIcon } from "./PdfCommentIcon";

const CARD_WIDTH = 220;
const DESKTOP_GAP = 20;
const MOBILE_GAP = 8;
const WIDE_VIEWPORT_MIN = 1280;

interface PdfAnnotationProps {
  note: string;
  title?: string;
  date?: string;
  className?: string;
  triggerLabel?: string;
  children: ReactNode;
  side?: "left" | "right" | "corner";
}

interface CardPosition {
  cardTop: number;
  cardLeft: number;
  linePath: string | null;
}

function getCardWidth(viewportWidth: number): number {
  const padding = 32;
  return Math.min(CARD_WIDTH, viewportWidth - padding);
}

function computeDesktopPosition(
  trigger: DOMRect,
  pageRect: DOMRect | null,
  cardWidth: number,
): CardPosition {
  const padding = 16;
  const viewportWidth = window.innerWidth;
  const pageRight = pageRect?.right ?? trigger.right;
  const cardTop = trigger.top - 2;
  const cardAnchorY = cardTop + 28;

  const preferredLeft = pageRight + DESKTOP_GAP;
  const canUsePageMargin =
    viewportWidth >= WIDE_VIEWPORT_MIN && preferredLeft + cardWidth <= viewportWidth - padding;

  if (canUsePageMargin) {
    const x1 = trigger.right + 2;
    const y1 = trigger.top + trigger.height / 2;
    return {
      cardTop,
      cardLeft: preferredLeft,
      linePath: `M ${x1} ${y1} L ${preferredLeft} ${cardAnchorY}`,
    };
  }

  return computeNearTriggerPosition(trigger, cardWidth);
}

function clampHorizontal(left: number, width: number, padding = 16): number {
  const viewportWidth = window.innerWidth;
  return Math.max(padding, Math.min(left, viewportWidth - width - padding));
}

function computeNearTriggerPosition(
  trigger: DOMRect,
  cardWidth: number,
  gap = MOBILE_GAP,
): CardPosition {
  const padding = 16;
  const viewportWidth = window.innerWidth;
  const resolvedWidth = Math.min(cardWidth, viewportWidth - padding * 2);
  const triggerCenterX = trigger.left + trigger.width / 2;

  let cardLeft: number;
  if (triggerCenterX > viewportWidth * 0.55) {
    cardLeft = trigger.right - resolvedWidth;
  } else if (triggerCenterX < viewportWidth * 0.45) {
    cardLeft = trigger.left;
  } else {
    cardLeft = triggerCenterX - resolvedWidth / 2;
  }

  cardLeft = clampHorizontal(cardLeft, resolvedWidth, padding);
  const cardTop = trigger.bottom + gap;

  return {
    cardTop,
    cardLeft,
    linePath: null,
  };
}

function computeMobilePosition(trigger: DOMRect, cardWidth = CARD_WIDTH): CardPosition {
  const padding = 16;
  const viewportWidth = window.innerWidth;
  const resolvedWidth = Math.min(cardWidth, viewportWidth - padding * 2);
  const cardLeft = (viewportWidth - resolvedWidth) / 2;
  const cardTop = trigger.bottom + MOBILE_GAP;

  return {
    cardTop,
    cardLeft,
    linePath: null,
  };
}

export function PdfAnnotation({
  note,
  title = "Nota del autor",
  date,
  className = "",
  triggerLabel = "Ver nota del autor",
  children,
  side = "left",
}: PdfAnnotationProps) {
  const annotationId = useId();
  const cardId = `pdf-annotation-${annotationId}`;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState<CardPosition | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const triggerRect = trigger.getBoundingClientRect();
    const cardWidth = getCardWidth(window.innerWidth);

    if (isDesktop) {
      const pageRect = trigger.closest(".dossier-page")?.getBoundingClientRect() ?? null;
      setPosition(computeDesktopPosition(triggerRect, pageRect, cardWidth));
      return;
    }

    setPosition(computeMobilePosition(triggerRect, cardWidth));
  }, [isDesktop]);

  useEffect(() => {
    if (!open) {
      setPosition(null);
      return;
    }

    updatePosition();

    const scrollContainer = triggerRef.current?.closest("[data-dossier-scroll]");
    window.addEventListener("resize", updatePosition);
    scrollContainer?.addEventListener("scroll", updatePosition, { passive: true });

    return () => {
      window.removeEventListener("resize", updatePosition);
      scrollContainer?.removeEventListener("scroll", updatePosition);
    };
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target) || cardRef.current?.contains(target)) {
        return;
      }
      setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const cardStyle: CSSProperties | undefined = position
    ? {
        top: position.cardTop,
        left: position.cardLeft,
        width: getCardWidth(window.innerWidth),
        maxWidth: "calc(100vw - 2rem)",
      }
    : undefined;

  const floatingLayer =
    open && position && mounted
      ? createPortal(
          <>
            {position.linePath ? (
              <svg
                className="pointer-events-none fixed inset-0 z-40 h-full w-full"
                aria-hidden
              >
                <path
                  d={position.linePath}
                  stroke="#C9B84A"
                  strokeWidth="1"
                  strokeDasharray="3 2"
                  fill="none"
                  opacity="0.65"
                />
              </svg>
            ) : null}
            <PdfAnnotationCard
              ref={cardRef}
              id={cardId}
              title={title}
              date={date}
              note={note}
              variant="floating"
              style={cardStyle}
              className="fixed z-50"
              onClose={() => setOpen(false)}
            />
          </>,
          document.body,
        )
      : null;

  return (
    <span className={`pdf-annotation-anchor ${className}`.trim()}>
      {children}
      <span
        className={[
          "pdf-annotation-trigger-wrap",
          side === "left"
            ? "pdf-annotation-trigger-wrap--left"
            : side === "right"
              ? "pdf-annotation-trigger-wrap--right"
              : "pdf-annotation-trigger-wrap--corner",
        ].join(" ")}
      >
        <button
          ref={triggerRef}
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            setOpen((value) => !value);
          }}
          className={[
            "pdf-annotation-trigger inline-flex shrink-0 cursor-pointer items-center justify-center rounded-sm",
            "transition-transform duration-150 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B800]/50",
            open ? "pdf-annotation-trigger--active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-expanded={open}
          aria-controls={cardId}
          aria-label={triggerLabel}
          title="Ver nota"
        >
          <PdfCommentIcon className="size-3.5 md:size-4" />
        </button>
      </span>
      {floatingLayer}
    </span>
  );
}
