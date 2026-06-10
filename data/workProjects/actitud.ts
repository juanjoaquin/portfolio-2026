import type { WorkProjectDetail } from "@/types/portfolio";

export const actitud: WorkProjectDetail = {
  slug: "actitud",
  name: "Institución de Recursos Humanos",
  company: "Actitud",
  role: "Desarrollador Frontend",
  period: "2025 — 2025",
  description:
    "Sitio web corporativo para Actitud, empresa de recursos humanos. Varias secciones informativas — institucional, servicios, talentos y publicaciones — desarrollado con Next.js.",
  tech: ["Next.js", "Tailwind CSS"],
  image: "/actitud/1-home.png",
  documentLabel: "Actitud · Institución de Recursos Humanos",
  url: "https://www.serviciosactitud.com/",
  blocks: [
    {
      type: "hero",
      subtitle:
        "Sitio corporativo para **Actitud**, empresa de **recursos humanos**, con secciones de servicios, talentos y publicaciones. **En producción** en serviciosactitud.com.",
    },
    {
      type: "gallery",
      images: [
        {
          src: "/actitud/1-home.png",
          alt: "Inicio de Actitud",
          caption: "Hero con propuesta de valor y acceso a servicios y publicaciones",
          width: 1920,
          height: 911,
        },
        {
          src: "/actitud/2-servicio.png",
          alt: "Nuestros servicios",
          caption: "Catálogo de servicios de recursos humanos y Change Human Management",
          width: 1920,
          height: 911,
        },
        {
          src: "/actitud/3-id.png",
          alt: "Detalle de servicio",
          caption: "Vista individual de un servicio con descripción y navegación",
          width: 1920,
          height: 911,
        },
      ],
    },
    {
      type: "text",
      paragraphs: [
        "Actitud es una empresa de **recursos humanos** y este proyecto corresponde a su **sitio web corporativo**: contenido editorial orientado al capital humano y catálogo de servicios.",
        "No es una landing page de una sola pantalla, sino un sitio con **varias secciones** — inicio, institucional, servicios, talentos y publicaciones — pensado para que visitantes y clientes potenciales exploren la oferta de la empresa de forma ordenada.",
        "Tampoco implica una arquitectura de aplicación compleja: se trata de un **sitio informativo** sin lógica de negocio avanzada ni paneles internos. **Desde el frontend** lo desarrollé con **Next.js**, implementando las distintas vistas y la navegación entre secciones.",
      ],
    },
    {
      type: "list",
      heading: "Secciones del sitio",
      items: [
        "**Inicio e institucional** con la propuesta de valor y filosofía de la empresa.",
        "**Nuestros servicios** con catálogo de ofertas de recursos humanos y vista de detalle por servicio.",
        "**Talentos** para la presentación del equipo.",
        "**Publicaciones Actitud** con artículos sobre salud de empleados, trabajo remoto y temas del capital humano.",
      ],
    },
    {
      type: "tech",
      items: ["Next.js", "Tailwind CSS"],
    },
  ],
};
