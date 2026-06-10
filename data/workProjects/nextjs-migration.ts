import type { WorkProjectDetail } from "@/types/portfolio";

export const nextjsMigration: WorkProjectDetail = {
  slug: "nextjs-migration",
  name: "Migración Next.js",
  company: "Pulse Networks",
  role: "Arquitecto UI Senior",
  period: "2023 — 2024",
  description:
    "Migración progresiva de aplicaciones legacy a Next.js App Router con SSG y edge caching. Mejora del FCP en un 35% y despliegues en menos de 3 minutos.",
  tech: ["Next.js", "TypeScript", "Vercel", "React 19"],
  image:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  documentLabel: "Pulse Networks · Migración",
  blocks: [
    { type: "hero", subtitle: "De SPA legacy a Next.js App Router" },
    {
      type: "gallery",
      images: [
        {
          src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
          alt: "Código de migración",
          caption: "App Router y rutas dinámicas",
        },
        {
          src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
          alt: "Pipeline CI/CD",
          caption: "Deploy automatizado en Vercel",
        },
        {
          src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=500&fit=crop",
          alt: "Métricas de rendimiento",
          caption: "Lighthouse score: 98",
        },
      ],
    },
    {
      type: "text",
      paragraphs: [
        "Migración incremental de 3 aplicaciones monolíticas a Next.js 16 con App Router, SSG para páginas estáticas y edge caching en Vercel. Sin downtime en producción.",
        "La migración redujo el First Contentful Paint un 35% y el bundle total un 40%, mejorando la experiencia en mercados con conexiones lentas.",
      ],
    },
    {
      type: "kpis",
      items: [
        { label: "Mejora FCP", value: 35, unit: "%" },
        { label: "Reducción bundle", value: 40, unit: "%" },
        { label: "Tiempo deploy", value: 3, unit: "min" },
      ],
    },
    {
      type: "list",
      heading: "Enfoque de migración",
      items: [
        "Inventario de rutas y dependencias por aplicación",
        "Migración por módulos con reverse proxy gradual",
        "SSG para contenido estático, SSR solo donde es necesario",
        "Validación de rendimiento con Lighthouse CI en cada PR",
      ],
    },
    { type: "tech", items: ["Next.js", "TypeScript", "Vercel", "React 19", "Turbopack"] },
  ],
};
