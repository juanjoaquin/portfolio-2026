import type { Skill } from "@/types/portfolio";

export const skills: Skill[] = [
  {
    name: "TypeScript",
    category: "frontend",
    level: 92,
    instrumentation: "Tipado estricto en proyectos full-stack y librerías compartidas",
  },
  {
    name: "React / Next.js",
    category: "frontend",
    level: 95,
    instrumentation: "App Router, Server Components, SSG/ISR en producción",
  },
  {
    name: "Tailwind / Design Systems",
    category: "design",
    level: 88,
    instrumentation: "Tokens CSS, componentes reutilizables, documentación Storybook",
  },
  {
    name: "Node.js / APIs",
    category: "backend",
    level: 78,
    instrumentation: "REST, Route Handlers, integraciones con servicios externos",
  },
  {
    name: "Testing",
    category: "tools",
    level: 82,
    instrumentation: "Vitest, Testing Library, pruebas E2E con Playwright",
  },
  {
    name: "Git / CI/CD",
    category: "tools",
    level: 85,
    instrumentation: "GitHub Actions, deploy automatizado en Vercel",
  },
  {
    name: "Figma / UI Design",
    category: "design",
    level: 75,
    instrumentation: "Prototipado, handoff a desarrollo, design tokens",
  },
  {
    name: "Performance",
    category: "frontend",
    level: 90,
    instrumentation: "Lighthouse, Core Web Vitals, optimización de bundles",
  },
];
