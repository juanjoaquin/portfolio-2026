import type { WorkProjectDetail } from "@/types/portfolio";

export const proyectarg: WorkProjectDetail = {
  slug: "proyectarg",
  name: "Gestión de Proyectos y tareas",
  company: "Proyectarg",
  role: "Arquitecto UI Senior",
  period: "2025 — 2026",
  description:
    "Plataforma multi-tenant de gestión de proyectos y tareas en producción. Participé en el desarrollo frontend y en su evolución hacia una solución escalable con roles diferenciados, planificación mediante tabla y Gantt, y seguimiento operativo de entregables.",
  tech: ["TypeScript", "Next.js", "Tailwind CSS"],
  image: "/proyectarg/portada-proyecto.jpg",
  documentLabel: "Proyectarg · Gestión de Proyectos y tareas",
  blocks: [
    {
      type: "hero",
      subtitle:
        "Plataforma **multi-tenant** de gestión de proyectos y tareas para equipos de trabajo, con roles diferenciados, planificación mediante tabla y Gantt, y seguimiento operativo de entregables.",
    },
    {
      type: "gallery",
      images: [
        {
          src: "/proyectarg/1-inicio-sesion.png",
          alt: "Inicio de sesión",
          caption: "Acceso a la plataforma con autenticación por email",
          width: 1920,
          height: 911,
        },
        {
          src: "/proyectarg/3-home.png",
          alt: "Panel de inicio",
          caption: "Insights con tareas asignadas y proyectos personales",
          width: 1920,
          height: 911,
        },
        {
          src: "/proyectarg/4-proyectos.png",
          alt: "Listado de proyectos",
          caption: "Directorio de proyectos activos con progreso y encargados",
          width: 1920,
          height: 911,
        },
        {
          src: "/proyectarg/4-proyectos-1.png",
          alt: "Línea de tiempo de proyectos",
          caption: "Vista Gantt con duración y solapamiento de proyectos",
          width: 1920,
          height: 911,
        },
        {
          src: "/proyectarg/5-colaboradores.png",
          alt: "Gestión de colaboradores",
          caption: "Usuarios, roles y permisos en la plataforma",
          width: 1920,
          height: 911,
        },
        {
          src: "/proyectarg/6-tareas.png",
          alt: "Listado de tareas",
          caption: "Tareas con proyecto, asignados, etiquetas y estado",
          width: 1920,
          height: 911,
        },
        {
          src: "/proyectarg/6-tareas-1.png",
          alt: "Línea de tiempo de tareas",
          caption: "Vista Gantt de tareas por fecha de inicio y fin",
          width: 1920,
          height: 911,
        },
        {
          src: "/proyectarg/8-proyectos-id.png",
          alt: "Detalle de proyecto",
          caption: "Cronograma, presupuesto, etiquetas y personas asignadas",
          width: 1920,
          height: 911,
        },
        {
          src: "/proyectarg/9-tarea-id.png",
          alt: "Detalle de tarea",
          caption: "Especificaciones, actividad, comentarios y adjuntos",
          width: 1920,
          height: 911,
        },
        {
          src: "/proyectarg/10-crear-proyecto.png",
          alt: "Crear proyecto",
          caption: "Alta de proyecto con plantilla, color y presupuesto",
          width: 1920,
          height: 911,
        },
      ],
    },
    {
      type: "text",
      paragraphs: [
        "Proyectarg es una plataforma **multi-tenant** de gestión de proyectos y tareas desarrollada para equipos de trabajo con distintos niveles de acceso. El sistema permite la administración de proyectos, planificación de tareas y seguimiento del progreso mediante **vistas de tabla y diagramas de Gantt**, facilitando la organización y el control de entregables.",
        "La aplicación se apoya en **una arquitectura de microservicios basada en Clean Architecture**. **Desde el frontend** participé en la construcción y evolución del producto: definición de interfaces por rol, implementación de flujos de planificación y desarrollo de las vistas operativas para el seguimiento diario de proyectos y tareas.",
      ],
    },
    {
      type: "text",
      heading: "Modelo de permisos",
      paragraphs: [
        "El sistema incorpora un modelo de permisos basado en roles, incluyendo **administradores, gerentes de proyecto y empleados**, cada uno con capacidades específicas dentro de la plataforma. Los proyectos y tareas pueden crearse desde cero o a partir de **plantillas reutilizables**, permitiendo estandarizar procesos recurrentes y optimizar la gestión operativa.",
      ],
    },
    {
      type: "list",
      heading: "Funcionalidades destacadas",
      items: [
        "**Administración de proyectos y tareas** con seguimiento de estados, fechas y vencimientos.",
        "**Vistas de tabla y diagramas de Gantt** para planificar y visualizar el progreso de proyectos y tareas.",
        "**Modelo de permisos basado en roles** con distintos niveles de acceso para administradores, gerentes y empleados.",
        "**Plantillas reutilizables** para crear proyectos y tareas estandarizando procesos recurrentes.",
        "**Comentarios asociados** a proyectos y tareas para la colaboración entre miembros del equipo.",
        "**Carga de archivos** mediante almacenamiento en la nube vinculado a proyectos y tareas.",
        "**Personalización del perfil de usuario** y autenticación integrada en la plataforma.",
        "**Integración con APIs basadas en microservicios** para la comunicación entre los distintos módulos del sistema.",
      ],
    },
    {
      type: "tech",
      items: ["TypeScript", "Next.js", "Tailwind CSS"],
    },
  ],
};
