import type { WorkProjectDetail } from "@/types/portfolio";

export const paginaInstitucional: WorkProjectDetail = {
  slug: "pagina-institucional",
  name: "Página Institucional",
  company: "Contarg",
  role: "Desarrollador Frontend",
  period: "2026 — 2026",
  description:
    "Sitio institucional multi-idioma en producción para Contarg. Participé en dos ciclos de desarrollo frontend, incluyendo la renovación actual del sitio corporativo.",
  tech: ["Next.js", "Tailwind CSS"],
  image: "/contarg/1-home.png",
  documentLabel: "Contarg · Página Institucional",
  url: "https://contarg.com",
  blocks: [
    {
      type: "hero",
      subtitle:
        "Página institucional **multi-idioma** de Contarg — la startup donde trabajé — con la última **renovación** del sitio en producción.",
    },
    {
      type: "gallery",
      images: [
        {
          src: "/contarg/1-home.png",
          alt: "Inicio de Contarg",
          caption: "Hero con propuesta de valor, acceso a demo y selector de idioma",
          width: 1920,
          height: 911,
        },
        {
          src: "/contarg/2-app.png",
          alt: "Servicios y clientes",
          caption: "Servicios de consultoría, desarrollo, integración y escalabilidad",
          width: 1920,
          height: 911,
        },
        {
          src: "/contarg/3-software.png",
          alt: "Contarg App",
          caption: "Soluciones por actividad: Cars, BI, Proyectos y Salud",
          width: 1920,
          height: 911,
        },
      ],
    },
    {
      type: "text",
      paragraphs: [
        "Contarg es la **startup donde trabajé** y este proyecto corresponde a su **página institucional**: el sitio donde se presentan servicios de consultoría, desarrollo de software e integraciones. Comunica la propuesta de valor de la empresa y canaliza el acceso a demos, contacto comercial y soluciones del ecosistema **Contarg App**.",
        "Participé **en dos ocasiones** en el desarrollo frontend de la página institucional. La intervención más reciente corresponde a la **renovación actual del sitio**, que se encuentra **en producción** en contarg.com, con un diseño renovado, secciones de servicios y presentación de productos del portfolio.",
        "**Desde el frontend** implementé las vistas del sitio, priorizando una experiencia clara para visitantes y clientes potenciales, con énfasis en la navegación entre servicios, novedades y acceso a las distintas soluciones de la empresa.",
      ],
    },
    {
      type: "text",
      heading: "Sitio multi-idioma",
      paragraphs: [
        "Uno de los aspectos destacados del proyecto es que la página institucional es **multi-idioma**, permitiendo alternar entre español e inglés desde la interfaz. Esto facilita la comunicación con clientes y partners en distintos mercados sin duplicar sitios ni mantener versiones separadas del contenido.",
      ],
    },
    {
      type: "list",
      heading: "Funcionalidades destacadas",
      items: [
        "**Sitio multi-idioma** con selector de idioma integrado en la navegación.",
        "**Renovación visual** del sitio con hero, servicios y portfolio de clientes.",
        "**Presentación de Contarg App** y soluciones por vertical: Cars, BI, Proyectos y Salud.",
        "**Modo claro y oscuro** para adaptar la experiencia de lectura.",
        "**Acceso a demo y contacto comercial** desde distintas secciones del sitio.",
        "**Integración con WhatsApp** para consultas directas desde la página.",
      ],
    },
    {
      type: "tech",
      items: ["Next.js", "Tailwind CSS"],
    },
  ],
};
