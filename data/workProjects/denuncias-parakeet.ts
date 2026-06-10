import type { WorkProjectDetail } from "@/types/portfolio";

export const denunciasParakeet: WorkProjectDetail = {
  slug: "denuncias-parakeet",
  name: "Plataforma de Denuncias",
  company: "Parakeet",
  role: "Desarrollador Frontend",
  period: "2025 — 2025",
  description:
    "Plataforma de denuncias y seguimiento en producción para Parakeet. Canal público de reportes anónimos o identificados y plataforma interna para revisión y resolución de casos.",
  tech: ["TypeScript", "Next.js", "Tailwind CSS"],
  image: "/denuncias-parakeet/1-denuncias-home.png",
  documentLabel: "Parakeet · Plataforma de Denuncias",
  blocks: [
    {
      type: "hero",
      subtitle:
        "Plataforma de **denuncias y seguimiento** para el grupo Parakeet, con un canal público para reportar incidentes y una **plataforma interna** para revisar, gestionar y resolver cada caso.",
    },
    {
      type: "gallery",
      images: [
        {
          src: "/denuncias-parakeet/1-denuncias-home.png",
          alt: "Inicio de la plataforma de denuncias",
          caption: "Landing con acceso a denuncia y seguimiento, anónimo o identificado",
          width: 1920,
          height: 911,
        },
        {
          src: "/denuncias-parakeet/2-inicio-sesion.png",
          alt: "Inicio de sesión",
          caption: "Acceso a la plataforma interna con autenticación por OTP",
          width: 1920,
          height: 911,
        },
        {
          src: "/denuncias-parakeet/3-denuncias-externas.png",
          alt: "Formulario de denuncias externas",
          caption: "Alta de denuncia externa con formulario por pasos y categorización",
          width: 1920,
          height: 911,
        },
        {
          src: "/denuncias-parakeet/4-seguimiento.png",
          alt: "Seguimiento de denuncias",
          caption: "Consulta del estado y progreso mediante número de seguimiento",
          width: 1920,
          height: 911,
        },
      ],
    },
    {
      type: "text",
      paragraphs: [
        "Parakeet Denuncias es una plataforma de **denuncias y seguimiento** desarrollada para el **grupo Parakeet**, orientada a canalizar reportes de forma segura y transparente. El sistema permite realizar denuncias de manera **anónima o identificada**, con un flujo guiado que acompaña al usuario desde el registro del incidente hasta el seguimiento de su resolución.",
        "La solución contempla **dos frentes**: un canal público para la presentación y consulta de denuncias, y una **plataforma interna** donde el equipo de Parakeet revisa, gestiona y resuelve cada caso. **Desde el frontend** participé en el desarrollo de ambos entornos, implementando los flujos de reporte, seguimiento y las interfaces operativas para la gestión interna.",
      ],
    },
    {
      type: "text",
      heading: "Canal público e interno",
      paragraphs: [
        "En el **canal público**, los usuarios acceden a un formulario por pasos para registrar denuncias externas, con categorización del incidente, descripción de los hechos y opción de anonimato. El módulo de **seguimiento** permite consultar el estado de una denuncia mediante un número único, garantizando transparencia en el proceso.",
        "En la **plataforma interna**, el equipo de Parakeet accede mediante autenticación para revisar las denuncias recibidas, actualizar su estado y llevar adelante la resolución de cada caso dentro de un flujo de trabajo centralizado.",
      ],
    },
    {
      type: "list",
      heading: "Funcionalidades destacadas",
      items: [
        "**Formulario de denuncias** con flujo por pasos, categorización y registro anónimo o identificado.",
        "**Seguimiento de denuncias** mediante número único para consultar estado y progreso.",
        "**Plataforma interna** para la revisión, gestión y resolución de casos por el equipo de Parakeet.",
        "**Autenticación por OTP** para el acceso seguro al entorno interno.",
        "**Proceso transparente** con etapas claras desde la presentación hasta la resolución.",
      ],
    },
    {
      type: "tech",
      items: ["TypeScript", "Next.js", "Tailwind CSS"],
    },
  ],
};
