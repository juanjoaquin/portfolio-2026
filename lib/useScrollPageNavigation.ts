"use client";

import { useEffect, useRef, type RefObject } from "react";
import { PAGE_TRANSITION_MS } from "@/lib/pageTransition";

const SCROLL_THRESHOLD = 8;

function isAtTop(el: HTMLElement) {
  return el.scrollTop <= SCROLL_THRESHOLD;
}

function isAtBottom(el: HTMLElement) {
  return el.scrollTop + el.clientHeight >= el.scrollHeight - SCROLL_THRESHOLD;
}

function canScroll(el: HTMLElement) {
  return el.scrollHeight > el.clientHeight + SCROLL_THRESHOLD;
}

function getScrollableAncestor(
  target: EventTarget | null,
  container: HTMLElement,
): HTMLElement | null {
  let node = target as HTMLElement | null;
  while (node && node !== container) {
    const { overflowY } = getComputedStyle(node);
    if ((overflowY === "auto" || overflowY === "scroll") && canScroll(node)) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
}

interface UseScrollPageNavigationOptions {
  containerRef: RefObject<HTMLElement | null>;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  enabled?: boolean;
}

export function useScrollPageNavigation({
  containerRef,
  currentPage,
  totalPages,
  onPageChange,
  enabled = true,
}: UseScrollPageNavigationOptions) {
  const lockedRef = useRef(false);
  const currentPageRef = useRef(currentPage);

  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !enabled) return;

    const onWheel = (e: WheelEvent) => {
      if (lockedRef.current) return;

      const delta = e.deltaY;
      if (delta === 0) return;

      const inner = getScrollableAncestor(e.target, container);

      if (inner) {
        if (delta > 0 && !isAtBottom(inner)) return;
        if (delta < 0 && !isAtTop(inner)) return;
      }

      const pageScrollable = canScroll(container);
      const atTop = isAtTop(container);
      const atBottom = isAtBottom(container);
      const page = currentPageRef.current;

      if (delta > 0) {
        if (pageScrollable && !atBottom) return;
        if (page >= totalPages) return;

        e.preventDefault();
        lockedRef.current = true;
        onPageChange(page + 1);
        window.setTimeout(() => {
          lockedRef.current = false;
        }, PAGE_TRANSITION_MS);
      } else {
        if (pageScrollable && !atTop) return;
        if (page <= 1) return;

        e.preventDefault();
        lockedRef.current = true;
        onPageChange(page - 1);
        window.setTimeout(() => {
          lockedRef.current = false;
        }, PAGE_TRANSITION_MS);
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [containerRef, enabled, onPageChange, totalPages]);
}
