import type { Experience } from "@/types/portfolio";

export const experience: Experience[] = [
  {
    company: "Contarg",
    role: "Frontend Dev",
    period: "Abr 2025 — Jun 2026",
    location: "Presencial",
    url: "https://contarg.com",
    description:
      "Desarrollé y escalé módulos centrales del frontend para productos SaaS empresariales, garantizando una alta mantenibilidad y experiencias de usuario fluidas bajo estándares arquitectónicos robustos.",
    achievements: [
      "Implementé principios de **Clean Architecture** en múltiples funcionalidades, desacoplando la lógica de negocio de la capa de UI para mejorar la capacidad de prueba (testability) y la escalabilidad a largo plazo.",
      "Integré el desarrollo frontend con **arquitecturas basadas en microservicios**, asegurando una comunicación de datos eficiente, de alto rendimiento y una correcta sincronización de estados.",
      "Apliqué **patrones de diseño** y estructuras de componentes reutilizables, optimizando los ciclos de desarrollo y manteniendo la consistencia visual y funcional del producto.",
      "Trabajé con **microfrontends** y **packages compartidos**, desarrollando e integrando módulos frontend reutilizables entre múltiples aplicaciones del ecosistema. Cada package encapsula componentes, utilidades y lógica común, permitiendo que distintos productos evolucionen de forma independiente sin duplicar código ni romper la consistencia entre equipos.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];
