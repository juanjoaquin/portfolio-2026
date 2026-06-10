"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ColorScheme, ResolvedColorScheme } from "@/types/portfolio";
import { COLOR_SCHEME_STORAGE_KEY } from "@/lib/colorSchemeScript";

export const COLOR_SCHEME_CYCLE: ColorScheme[] = ["system", "light", "dark"];

export const COLOR_SCHEME_LABELS: Record<ColorScheme, string> = {
  system: "Tema del sistema",
  light: "Tema claro",
  dark: "Tema oscuro",
};

function getSystemColorScheme(): ResolvedColorScheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveColorScheme(preference: ColorScheme): ResolvedColorScheme {
  if (preference === "system") return getSystemColorScheme();
  return preference;
}

function isValidColorScheme(value: string | null): value is ColorScheme {
  return value === "light" || value === "dark" || value === "system";
}

interface ThemeContextValue {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  cycleColorScheme: () => void;
  resolvedColorScheme: ResolvedColorScheme;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>("system");
  const [resolvedColorScheme, setResolvedColorScheme] = useState<ResolvedColorScheme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedScheme = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
    if (isValidColorScheme(storedScheme)) {
      setColorSchemeState(storedScheme);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const resolved = resolveColorScheme(colorScheme);
    setResolvedColorScheme(resolved);
    document.documentElement.setAttribute("data-color-scheme", resolved);
    localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, colorScheme);

    if (colorScheme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const next = resolveColorScheme("system");
      setResolvedColorScheme(next);
      document.documentElement.setAttribute("data-color-scheme", next);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [colorScheme, mounted]);

  const setColorScheme = useCallback((next: ColorScheme) => {
    setColorSchemeState(next);
  }, []);

  const cycleColorScheme = useCallback(() => {
    setColorSchemeState((current) => {
      const index = COLOR_SCHEME_CYCLE.indexOf(current);
      return COLOR_SCHEME_CYCLE[(index + 1) % COLOR_SCHEME_CYCLE.length];
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        colorScheme,
        setColorScheme,
        cycleColorScheme,
        resolvedColorScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
