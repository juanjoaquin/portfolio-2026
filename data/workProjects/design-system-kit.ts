import type { WorkProjectDetail } from "@/types/portfolio";

export const designSystemKit: WorkProjectDetail = {
  slug: "design-system-kit",
  name: "Design System Kit",
  company: "Pulse Networks",
  role: "Arquitecto UI Senior",
  period: "2022 — Presente",
  description:
    "Biblioteca de componentes accesibles con tokens de diseño, documentación Storybook y pruebas visuales automatizadas. Reducción del bundle en un 40% tras la migración a Next.js.",
  tech: ["React", "Tailwind CSS", "Storybook", "Next.js"],
  image:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  documentLabel: "Pulse Networks · Design System",
  blocks: [
    { type: "hero", subtitle: "Sistema de diseño escalable para productos B2B" },
    {
      type: "gallery",
      images: [
        {
          src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
          alt: "Editor de componentes",
          caption: "Storybook — 42 stories documentadas",
        },
        {
          src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
          alt: "Tokens de diseño",
          caption: "Design tokens semánticos",
        },
        {
          src: "https://images.unsplash.com/photo-1507238691740-187a29b4b1e0?w=800&h=500&fit=crop",
          alt: "Pruebas visuales",
          caption: "Regresión visual automatizada",
        },
      ],
    },
    {
      type: "text",
      paragraphs: [
        "Liderazgo técnico en la creación de un design system unificado que sirve a 4 productos internos. Tokens semánticos, componentes accesibles WCAG 2.1 AA y documentación viva en Storybook.",
        "La adopción del design system redujo el tiempo de desarrollo de nuevas features en un 30% y eliminó inconsistencias visuales entre equipos.",
      ],
    },
    {
      type: "kpis",
      items: [
        { label: "Reducción bundle", value: 40, unit: "%" },
        { label: "Cobertura tests", value: 85, unit: "%" },
        { label: "NPS clientes", value: 92, unit: "pts" },
      ],
    },
    {
      type: "list",
      heading: "Fases de implementación",
      items: [
        "Auditoría de componentes existentes y definición de tokens base",
        "Migración progresiva con feature flags por producto",
        "Documentación Storybook con guías de uso y accesibilidad",
        "Integración de pruebas visuales en pipeline CI/CD",
      ],
    },
    { type: "tech", items: ["React", "Tailwind CSS", "Storybook", "Next.js", "Vitest"] },
  ],
};
