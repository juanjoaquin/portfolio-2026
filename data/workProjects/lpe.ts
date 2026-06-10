import type { WorkProjectDetail } from "@/types/portfolio";

export const lpe: WorkProjectDetail = {
  slug: "lpe",
  name: "Plataforma de Torneos Esports",
  company: "LPE",
  role: "Desarrollador Frontend",
  period: "2025 — 2025",
  description:
    "Plataforma de gestión de torneos esports para organizaciones, equipos y competiciones. Participé en el desarrollo frontend de creación de torneos, brackets y administración del ecosistema competitivo.",
  tech: ["TypeScript", "Next.js", "Tailwind CSS"],
  image: "/lpe/1-home.png",
  documentLabel: "LPE · Torneos Esports",
  url: "https://lpe.gg",
  blocks: [
    {
      type: "hero",
      subtitle:
        "Plataforma de **gestión de torneos esports** para administrar organizaciones, equipos, jugadores y competiciones. **Actualmente no se encuentra en funcionamiento.**",
    },
    {
      type: "gallery",
      images: [
        {
          src: "/lpe/1-home.png",
          alt: "Inicio de LPE",
          caption: "Landing de Liga Patagónica eSports con acceso a torneos y registro",
          width: 1920,
          height: 911,
        },
        {
          src: "/lpe/2-torneos.png",
          alt: "Torneos regionales",
          caption: "Listado de torneos regionales por ciudad patagónica",
          width: 1920,
          height: 911,
        },
        {
          src: "/lpe/3-inicio-sesion.png",
          alt: "Inicio de sesión",
          caption: "Acceso con email y contraseña para jugadores y equipos",
          width: 1920,
          height: 911,
        },
        {
          src: "/lpe/4-crear-cuenta.png",
          alt: "Crear cuenta",
          caption: "Registro de perfil de jugador o equipo con gametag y validación",
          width: 1920,
          height: 911,
        },
      ],
    },
    {
      type: "text",
      paragraphs: [
        " LPE fue una plataforma de **gestión de torneos esports** diseñada para administrar organizaciones, equipos, jugadores y competiciones desde una única aplicación. El proyecto fue desarrollado utilizando **una arquitectura basada en microservicios y principios de Clean Architecture**, separando las responsabilidades de autenticación, gestión de usuarios y lógica de negocio.",
        "La plataforma permitía a comunidades, organizaciones y grupos de jugadores **crear y administrar torneos personalizados** para distintos videojuegos, facilitando la inscripción de equipos, la organización de enfrentamientos y el seguimiento de resultados hasta la definición del campeón.",
        "**Desde el frontend** participé en el desarrollo de las interfaces de administración y gestión de torneos, implementando flujos complejos relacionados con la creación de competencias, visualización de brackets y administración de entidades vinculadas al ecosistema competitivo. **Actualmente la plataforma no se encuentra en funcionamiento.**",
      ],
    },
    {
      type: "text",
      heading: "Gestión de organizaciones y equipos",
      paragraphs: [
        "El sistema estaba inspirado en la **estructura habitual de los clubes y organizaciones de esports**. Una organización podía administrar múltiples equipos pertenecientes a distintos videojuegos, mientras que cada equipo contaba con sus propios integrantes y participación en competiciones específicas.",
      ],
    },
    {
      type: "list",
      heading: "Entidades del ecosistema",
      items: [
        "**Organizaciones esports** con administración centralizada de equipos y competiciones.",
        "**Equipos** asociados a una organización y vinculados a un videojuego.",
        "**Jugadores y participantes** con perfiles registrados en la plataforma.",
        "**Juegos disponibles** para configurar competiciones por título.",
        "**Roles y permisos de acceso** para distintos niveles de administración.",
      ],
    },
    {
      type: "text",
      heading: "Sistema de torneos",
      paragraphs: [
        "La funcionalidad principal de la plataforma era la **creación y administración de torneos personalizados**. Los usuarios podían generar competiciones para comunidades privadas o eventos organizados, configurando distintos parámetros de participación y formato competitivo.",
      ],
    },
    {
      type: "list",
      heading: "Características principales",
      items: [
        "**Creación de torneos** para hasta 250 equipos participantes.",
        "**Sistema de eliminación directa** con progresión automática de instancias.",
        "**Series configurables BO1** (Best of One) **y BO3** (Best of Three).",
        "**Generación automática de cruces** según el formato del torneo.",
        "**Definición de campeón y tercer puesto** al completar las finales.",
        "**Seguimiento de resultados en tiempo real** durante la competición.",
      ],
    },
    {
      type: "text",
      heading: "Generación de brackets",
      paragraphs: [
        "Uno de los desafíos técnicos más relevantes del proyecto fue el desarrollo de **generación de brackets**. La estructura de enfrentamientos fue modelada utilizando **nodos y grafos**, permitiendo construir dinámicamente árboles de eliminación que avanzaban automáticamente a medida que se registraban los resultados de cada partida.",
        "Esta implementación permitió soportar **torneos de gran escala** manteniendo la consistencia de los cruces y garantizando la correcta progresión de los participantes hasta las instancias finales.",
      ],
    },
    {
      type: "text",
      heading: "Arquitectura y tecnologías",
      paragraphs: [
        "La solución fue construida bajo **una arquitectura de microservicios** con separación de dominios principales: servicio de autenticación, servicio de gestión de usuarios y entidades base, y servicio principal de torneos y competiciones.",
        "La aplicación siguió **principios de Clean Architecture** para desacoplar reglas de negocio, infraestructura y presentación, facilitando la escalabilidad y mantenibilidad del sistema.",
      ],
    },
    {
      type: "tech",
      items: ["TypeScript", "Next.js", "Tailwind CSS"],
    },
  ],
};
