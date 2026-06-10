"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/** Sidebar fijo visible (lg+: 1024px) */
export const SIDEBAR_LAYOUT_QUERY = "(min-width: 1024px)";

/** Sidebar completo con miniaturas abierto por defecto (xl+: 1280px) */
export const WIDE_DESKTOP_QUERY = "(min-width: 1280px)";

export function useSidebarLayout() {
  const hasSidebar = useMediaQuery(SIDEBAR_LAYOUT_QUERY);
  const isWideDesktop = useMediaQuery(WIDE_DESKTOP_QUERY);

  return {
    hasSidebar,
    isWideDesktop,
    isMobileNav: !hasSidebar,
  };
}
