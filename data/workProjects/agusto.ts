import type { ProjectImage, WorkProjectDetail } from "@/types/portfolio";

const MOBILE_WIDTH = 764;
const MOBILE_HEIGHT = 1558;

function mobileImage(src: string, alt: string, caption: string): ProjectImage {
  return { src, alt, caption, width: MOBILE_WIDTH, height: MOBILE_HEIGHT };
}

function desktopImage(
  src: string,
  alt: string,
  caption: string,
  width: number,
  height: number,
): ProjectImage {
  return { src, alt, caption, width, height };
}

export const agusto: WorkProjectDetail = {
  slug: "agusto",
  name: "App de Pedidos y Delivery",
  company: "Agusto",
  role: "Desarrollador Frontend",
  period: "2026 — 2026",
  description:
    "Plataforma multi-sucursal de pedidos y delivery para un local gastronómico. Catálogo, carrito y checkout similares a un mini PedidosYa, con retiro en sucursal o envío a domicilio y roles para repartidores, empleados y gerentes de sucursal.",
  tech: ["TypeScript", "Next.js", "Tailwind CSS"],
  image: "/agusto/portada-agusto.jpg",
  documentLabel: "Agusto · Pedidos y Delivery",
  blocks: [
    {
      type: "hero",
      subtitle:
        "Plataforma de **pedidos y delivery** para un local gastronómico, con catálogo multi-sucursal, checkout, integración con **Google Maps** y pagos con **Banco Macro**.",
    },
    {
      type: "gallery",
      images: [
        mobileImage(
          "/agusto/1-primera-pestana.png",
          "Inicio con selección de sucursal",
          "Home con selector de sucursal, producto destacado y acceso a mercado o ensalada",
        ),
        mobileImage(
          "/agusto/2-mercado.png",
          "Mercado orgánico",
          "Vista del mercado orgánico con productos listos al carrito y destacados de la semana",
        ),
        mobileImage(
          "/agusto/2-mercado-1.png",
          "Catálogo por categorías",
          "Catálogo visual: ensaladas, tartas gourmet, empanadas, carnes y pizzas",
        ),
        mobileImage(
          "/agusto/2-mercado-3.png",
          "Listado de productos",
          "Listado de ensaladas con opción de armar o agregar al carrito",
        ),
        mobileImage(
          "/agusto/2-mercado-2.png",
          "Productos destacados del mercado",
          "Mercado orgánico con sección de productos destacados de la semana",
        ),
        mobileImage(
          "/agusto/6-bowl-1.png",
          "Elegir bowl",
          "Selección de bowls y ensaladas armables con rango de precios",
        ),
        mobileImage(
          "/agusto/6-bowl-3.png",
          "Configurador de ingredientes",
          "Personalización por categorías: quesos, aderezos y extras",
        ),
        mobileImage(
          "/agusto/6-bowl-2.png",
          "Resumen de configuración",
          "Vista previa del bowl armado antes de agregar al carrito",
        ),
        mobileImage(
          "/agusto/6-bowl-5.png",
          "Carrito con producto armable",
          "Resumen del pedido con ensalada personalizada e ingredientes elegidos",
        ),
        mobileImage(
          "/agusto/5-carrito-1.png",
          "Paso 1 — Carrito",
          "Resumen del pedido con productos, cantidades y total parcial",
        ),
        mobileImage(
          "/agusto/5-carrito-2.png",
          "Paso 2 — Entrega",
          "Elección entre envío por delivery o retiro en sucursal",
        ),
        mobileImage(
          "/agusto/5-carrito-5.png",
          "Paso 3 — Resumen",
          "Revisión final del pedido antes del pago",
        ),
        mobileImage(
          "/agusto/5-carrito-10.png",
          "Paso 4 — Pago",
          "Formulario de pago con tarjeta de crédito",
        ),
        mobileImage(
          "/agusto/9-perfil-cliente-1.png",
          "Mi cuenta",
          "Perfil del cliente con datos personales y direcciones",
        ),
        mobileImage(
          "/agusto/9-perfil-cliente-2.png",
          "Datos y direcciones",
          "Gestión de datos personales y múltiples direcciones de entrega",
        ),
        mobileImage(
          "/agusto/9-perfil-cliente-4.png",
          "Seguimiento de pedido",
          "Estado del pedido en tiempo real: recibido, en cocina, en camino y entregado",
        ),
        mobileImage(
          "/agusto/9-perfil-cliente-5.png",
          "Soporte y ubicación",
          "Contacto con soporte y mapa de la sucursal",
        ),
        desktopImage(
          "/agusto/7-pedidos-backoffice-1.png",
          "Backoffice — Pedidos",
          "Listado de órdenes con estado, repartidor asignado y pago",
          1916,
          909,
        ),
        desktopImage(
          "/agusto/7-pedidos-backoffice-2.png",
          "Backoffice — Detalle de orden",
          "Detalle del pedido con cliente, ítems, pago con Banco Macro y asignación de repartidor",
          1916,
          913,
        ),
        desktopImage(
          "/agusto/7-productos-backoffice-3.png",
          "Backoffice — Productos",
          "Administración de catálogo con precios, stock y productos armables",
          1917,
          911,
        ),
        desktopImage(
          "/agusto/7-locales-backoffice-6.png",
          "Backoffice — Local",
          "Ficha de sucursal con dirección, radio de entrega y zona de cobertura",
          1916,
          914,
        ),
        desktopImage(
          "/agusto/7-locales-backoffice-7.png",
          "Backoffice — Horarios y delivery",
          "Configuración de horarios de atención y radio de delivery por local",
          1915,
          790,
        ),
      ],
    },
    {
      type: "text",
      paragraphs: [
        "Agusto es una plataforma de **pedidos y delivery** orientada a un local gastronómico, diseñada para gestionar todo el ciclo operativo de una compra, desde la selección de productos hasta la **entrega final al cliente**.",
        "La solución permite realizar pedidos para **retiro en sucursal o envío a domicilio**, integrando cálculo automático de cobertura y costos de entrega mediante la **API de Google Maps**. El sistema valida si la dirección del cliente se encuentra dentro del radio de atención configurado para cada sucursal y determina la logística correspondiente para el pedido.",
        "**Desde el frontend** participé en el desarrollo de la plataforma completa, implementando funcionalidades para clientes, empleados, repartidores, gerentes de sucursal y administradores, construyendo interfaces enfocadas en escalabilidad, mantenibilidad y experiencia de usuario.",
      ],
    },
    {
      type: "text",
      heading: "Experiencia de compra",
      paragraphs: [
        "Los clientes pueden explorar un **catálogo de productos dinámico** asociado a la sucursal seleccionada, agregar productos al carrito, personalizar bowls de ensaladas mediante configuradores específicos y completar el pago utilizando la integración con **Banco Macro**.",
        "La plataforma incluye **autenticación completa**, registro de usuarios, recuperación y actualización de contraseñas, historial de pedidos y **notificaciones por correo electrónico** para distintas etapas del proceso de compra.",
      ],
    },
    {
      type: "list",
      heading: "Funcionalidades destacadas",
      items: [
        "**Gestión multi-sucursal** con catálogo independiente por ubicación.",
        "**Carrito de compras y checkout** para retiro en sucursal o delivery.",
        "**Integración de pagos** con Banco Macro.",
        "**Cálculo automático de cobertura y distancia** utilizando Google Maps.",
        "**Configuración de bowls** y productos personalizables.",
        "**Sistema de autenticación**, recuperación de contraseña y validación por correo electrónico.",
        "**Historial de pedidos** y seguimiento de estados.",
      ],
    },
    {
      type: "list",
      heading: "Gestión operativa por roles",
      items: [
        "**Administrador:** administración global de todas las sucursales, gestión de usuarios y permisos, y supervisión completa de la operación.",
        "**Gerente de sucursal:** administración de productos, categorías e ingredientes, configuración de productos destacados, gestión de empleados y asignación de roles, creación de plantillas para bowls personalizados y configuración operativa de la sucursal.",
        "**Empleado:** recepción y procesamiento de pedidos, actualización de estados de pago y preparación, visualización de comandas y asignación de repartidores para entregas.",
        "**Repartidor:** recepción de pedidos asignados mediante notificaciones, acceso a información de entrega y ubicación del cliente, gestión de estados de entrega y reporte de incidencias durante el reparto.",
      ],
    },
    {
      type: "text",
      heading: "Tecnologías y arquitectura",
      paragraphs: [
        "Aplicación desarrollada bajo **una arquitectura monolítica** con separación clara de responsabilidades entre módulos de negocio, administración y operación, consumiendo servicios de geolocalización, pasarela de pagos y sistemas de notificaciones para soportar el flujo completo de compra y entrega.",
      ],
    },
    {
      type: "tech",
      items: ["TypeScript", "Next.js", "Tailwind CSS"],
    },
  ],
};
