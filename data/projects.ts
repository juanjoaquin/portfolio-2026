import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "portfolio-2026",
    name: "Portfolio Dossier 2026",
    description:
      "Portfolio interactivo con metáfora de visor PDF, terminal CLI y visualización de skills. Next.js 16, App Router, SSG para deploy en Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React 19"],
    bundleSize: "142 KB",
    fcp: "0.8s",
    logs: [
      "[build] Static pages generated: 1",
      "[build] First Load JS: 142 KB",
      "[deploy] Vercel edge cache warmed",
      "[lighthouse] Performance score: 98",
    ],
  },
  {
    slug: "design-system",
    name: "Design System Kit",
    description:
      "Biblioteca de componentes accesibles con tokens de diseño, documentación Storybook y pruebas visuales automatizadas.",
    tech: ["React", "Tailwind", "Storybook", "Vitest"],
    bundleSize: "89 KB",
    fcp: "0.6s",
    logs: [
      "[storybook] 42 stories loaded",
      "[a11y] WCAG 2.1 AA compliance verified",
      "[test] 156 component tests passed",
      "[bundle] Tree-shaking enabled",
    ],
  },
  {
    slug: "dashboard-analytics",
    name: "Analytics Dashboard",
    description:
      "Panel de métricas en tiempo real con gráficos interactivos, filtros dinámicos y exportación de reportes.",
    tech: ["Next.js", "TypeScript", "Recharts", "TanStack Query"],
    bundleSize: "218 KB",
    fcp: "1.1s",
    logs: [
      "[api] WebSocket connection established",
      "[cache] React Query staleTime: 30s",
      "[render] Virtualized list: 10k rows",
      "[export] PDF report generated",
    ],
  },
];
