import type { Experience } from "@/types/portfolio";

export const experience: Experience[] = [
  {
    company: "Pulse Networks",
    role: "Arquitecto UI Senior",
    period: "2022 — Presente",
    description:
      "Liderazgo técnico en design system y migración a Next.js. Reducción del bundle en un 40% y mejora del FCP en un 35%.",
    kpis: [
      { label: "Reducción bundle", value: 40, unit: "%" },
      { label: "Mejora FCP", value: 35, unit: "%" },
      { label: "NPS clientes", value: 92, unit: "pts" },
    ],
  },
  {
    company: "Quantum Core",
    role: "Lead Developer",
    period: "2019 — 2022",
    description:
      "Desarrollo de dashboards analíticos y componentes accesibles. Implementación de CI/CD y pruebas automatizadas.",
    kpis: [
      { label: "Cobertura tests", value: 85, unit: "%" },
      { label: "Tiempo deploy", value: 3, unit: "min" },
      { label: "Satisfacción equipo", value: 4.8, unit: "/5" },
    ],
  },
];
