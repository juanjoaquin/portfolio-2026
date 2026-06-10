import type { WorkProjectDetail } from "@/types/portfolio";

export const remolquesColon: WorkProjectDetail = {
  slug: "remolques-colon",
  name: "Landing Page",
  company: "Remolques Colon",
  role: "Desarrollador Frontend",
  period: "2025 — 2025",
  description:
    "Landing page informativa para Remolques Colon. Desarrollada con Next.js y enfoque mobile first.",
  tech: ["Next.js", "Tailwind CSS"],
  image: "/remolques-colon/1-home.png",
  documentLabel: "Remolques Colon · Landing Page",
  url: "https://www.remolquescolon.com/",
  blocks: [
    {
      type: "hero",
      subtitle:
        "**Landing page** informativa para Remolques Colon, desarrollada con **Next.js** y enfoque **mobile first**.",
    },
    {
      type: "gallery",
      images: [
        {
          src: "/remolques-colon/1-home.png",
          alt: "Inicio de Remolques Colon",
          caption: "Hero con propuesta de valor y acceso a la flota de remolques",
          width: 1920,
          height: 911,
        },
        {
          src: "/remolques-colon/2-flota.png",
          alt: "Flota de remolques",
          caption: "Sección de flota con modelos disponibles",
          width: 1920,
          height: 911,
        },
      ],
    },
    {
      type: "text",
      paragraphs: [
        "Remolques Colon es una **landing page** sencilla e informativa para presentar la empresa y su oferta de remolques. El sitio está **en producción** en remolquescolon.com.",
        "El proyecto no tiene una lógica de negocio compleja ni funcionalidades avanzadas: se trata de una página de presentación con secciones claras para conocer la empresa y explorar la flota disponible.",
        "**Desde el frontend** lo desarrollé con **Next.js**, priorizando un diseño **mobile first** para que la experiencia sea cómoda desde el celular, que es el dispositivo principal de consulta para este tipo de sitio.",
      ],
    },
    {
      type: "tech",
      items: ["Next.js", ],
    },
  ],
};
