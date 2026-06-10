import type { WorkProjectDetail } from "@/types/portfolio";

export const analyticsDashboard: WorkProjectDetail = {
  slug: "analytics-dashboard",
  name: "Analytics Dashboard",
  company: "Quantum Core",
  role: "Lead Developer",
  period: "2019 — 2022",
  description:
    "Panel de métricas en tiempo real con gráficos interactivos, filtros dinámicos y exportación de reportes. Implementación de CI/CD y cobertura de tests del 85%.",
  tech: ["Next.js", "TypeScript", "Recharts", "TanStack Query"],
  image:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  documentLabel: "Quantum Core · Analytics",
  blocks: [
    { type: "hero", subtitle: "Métricas en tiempo real para equipos de datos" },
    {
      type: "gallery",
      images: [
        {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
          alt: "Vista principal del dashboard",
          caption: "Panel principal con KPIs en tiempo real",
        },
        {
          src: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
          alt: "Gráficos interactivos",
          caption: "Gráficos con filtros dinámicos",
        },
        {
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
          alt: "Exportación de reportes",
          caption: "Generación de reportes PDF",
        },
      ],
    },
    {
      type: "text",
      paragraphs: [
        "Dashboard analítico con más de 10k filas virtualizadas, WebSocket para actualizaciones en vivo y exportación de reportes PDF. Stack moderno con React Query para gestión de caché.",
        "El dashboard reemplazó 3 herramientas legacy y centralizó la toma de decisiones para el equipo de producto.",
      ],
    },
    {
      type: "kpis",
      items: [
        { label: "Cobertura tests", value: 85, unit: "%" },
        { label: "Tiempo deploy", value: 3, unit: "min" },
        { label: "Satisfacción equipo", value: 4.8, unit: "/5" },
      ],
    },
    { type: "tech", items: ["Next.js", "TypeScript", "Recharts", "TanStack Query", "WebSocket"] },
  ],
};
