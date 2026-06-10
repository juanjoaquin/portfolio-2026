import type { WorkProjectDetail } from "@/types/portfolio";

export const dentoImagen: WorkProjectDetail = {
  slug: "dento-imagen",
  name: "Plataforma de Gestión Médica",
  company: "Dento Imagen",
  role: "Desarrollador Frontend",
  period: "2025 — 2026",
  description:
    "Plataforma de gestión médica en producción. Participé en el desarrollo frontend a medida para un cliente clave y en su posterior evolución hacia un modelo SaaS multi-tenant escalable.",
  tech: ["TypeScript", "Next.js", "Tailwind CSS"],
  image: "/salud/dento-home.png",
  documentLabel: "Dento Imagen · Gestión Médica",
  url: "https://www.dentoimagen.com.ar/",
  blocks: [
    {
      type: "hero",
      subtitle:
        "Plataforma de gestión odontológica en producción para centros de diagnóstico por imágenes, evolucionada desde un desarrollo a medida hacia un modelo **SaaS multi-tenant**.",
    },
    {
      type: "gallery",
      images: [
        {
          src: "/salud/pacientes-1.png",
          alt: "Directorio de pacientes",
          caption: "Gestión y búsqueda de pacientes por obra social, DNI o CUIT",
          width: 1920,
          height: 911,
        },
        {
          src: "/salud/pacientes-7.png",
          alt: "Ficha de paciente",
          caption: "Perfil del paciente con datos personales, contacto y cobertura",
          width: 1920,
          height: 911,
        },
        {
          src: "/salud/tablero-practicas-11.png",
          alt: "Tablero de prácticas",
          caption: "Reportes por técnico, obra social y tipo de práctica",
          width: 1920,
          height: 911,
        },
        {
          src: "/salud/sucursales-14.png",
          alt: "Crear sucursal",
          caption: "Alta de sucursal con disponibilidad y ventanas horarias",
          width: 1920,
          height: 911,
        },
        {
          src: "/salud/obras-sociales-17.png",
          alt: "Configuración de obra social",
          caption: "Precios comerciales, cobertura y coseguro por servicio",
          width: 1920,
          height: 911,
        },
        {
          src: "/salud/practicas-crear-19.jpg",
          alt: "Crear práctica",
          caption: "Alta de práctica con selección de paciente, servicio y franja horaria",
          width: 1519,
          height: 790,
        },
        {
          src: "/salud/practica-id-22.png",
          alt: "Detalle de práctica",
          caption: "Vista de práctica con técnico asignado, paciente y cobertura",
          width: 1917,
          height: 865,
        },
        {
          src: "/salud/practica-adjunto-23.png",
          alt: "Adjuntos de la práctica",
          caption: "Cronología de estudios y carga documental por práctica",
          width: 1920,
          height: 911,
        },
        {
          src: "/salud/practica-cobro-24.png",
          alt: "Cobros de la práctica",
          caption: "Confirmación de venta del lote con totales y copago",
          width: 1920,
          height: 911,
        },
        {
          src: "/salud/practica-cobro-partes-29.png",
          alt: "Registro de cobros",
          caption: "Cobro parcial del paciente con múltiples medios de pago",
          width: 1920,
          height: 911,
        },
        {
          src: "/salud/cajas-arqueo-34.png",
          alt: "Arqueo de caja",
          caption: "Tesorería: arqueo de caja con saldo teórico e historial",
          width: 1920,
          height: 911,
        },
        {
          src: "/salud/servicio-id.png",
          alt: "Detalle de servicio",
          caption: "Ficha de servicio con equipos asociados, precio y sucursal",
          width: 1920,
          height: 911,
        },
      ],
    },
    {
      type: "text",
      paragraphs: [
        "Dento Imagen es una plataforma de gestión odontológica orientada a centros de diagnóstico por imágenes dentales, utilizada en **entornos productivos** para la administración integral de pacientes, profesionales y estudios clínicos.",
        "La solución se apoya en **una arquitectura de microservicios basada en Clean Architecture**. **Desde el frontend** participé en la construcción y evolución del producto: desarrollo de módulos funcionales, definición de interfaces por perfil de usuario e implementación de procesos clave para la operación diaria del centro.",
      ],
    },
    {
      type: "text",
      heading: "Perfiles de usuario",
      paragraphs: [
        "El sistema contempla distintos perfiles —**pacientes, técnicos y profesionales de la salud**—, cada uno con permisos y flujos propios. Los pacientes acceden a sus estudios mediante cuentas asociadas; los profesionales visualizan estudios de pacientes vinculados y gestionan información clínica relevante.",
      ],
    },
    {
      type: "text",
      heading: "Lógica de negocio",
      paragraphs: [
        "Uno de los componentes más críticos es la administración de **coberturas médicas y obras sociales**. Desarrollé flujos que contemplan coberturas totales y esquemas de **coseguro**, determinando automáticamente la imputación económica en las cuentas corrientes del paciente o de la entidad prestadora.",
      ],
    },
    {
      type: "list",
      heading: "Funcionalidades destacadas",
      items: [
        "**Gestión de pacientes, técnicos y profesionales** mediante un sistema de roles y permisos.",
        "**Administración y visualización de estudios diagnósticos** asociados a cada paciente.",
        "**Gestión de cuentas corrientes, cobros y movimientos administrativos**.",
        "**Integración con obras sociales y flujos de coseguro**, contemplando distintos esquemas de cobertura e imputación automática de movimientos económicos.",
        "**Sistema de turnos** con creación inmediata o programada, incluyendo reprogramación, cancelación, inicio y finalización de citas.",
        "**Carga y gestión documental** de estudios clínicos.",
        "**Notificaciones automáticas** por correo electrónico para pacientes y profesionales.",
        "**Integración con APIs basadas en microservicios** para la comunicación entre los distintos módulos del sistema.",
      ],
    },
    {
      type: "tech",
      items: ["TypeScript", "Next.js", "Tailwind CSS"],
    },
  ],
};
