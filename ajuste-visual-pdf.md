# Dossier Interactivo PDF - Mateo Silva (Frontend Engineer)
## Documentación Estructural del Proyecto para Iteración de Curso

Este documento contiene la especificación técnica completa y el diseño conceptual de la aplicación **Dossier Interactivo de Mateo Silva**, estructurada en un simulador de visor PDF profesional similar a Adobe Acrobat Reader. Es ideal para ser suministrado a una Inteligencia Artificial para continuar expandiendo, adaptando o modificando el proyecto en tu curso de desarrollo de software.

---

## 1. Visión General del Proyecto

La aplicación es un **Portfolio Full-Stack (React 18 + Node.js/Express + Drizzle ORM / SQLite / Firebase)** presentado bajo la metáfora de un lector de PDFs interactivo oficial. 
El usuario visualiza las páginas del currículum de **Mateo Silva (Frontend Engineer & UI Architecture Lead)** como si fuera un documento A4 real, pero con capacidades extendidas digitales: terminal de comandos interactiva, simuladores dinámicos de KPIs, chats interactivos con IA acerca de su perfil, y un sistema para que los reclutadores de talento firmen y dejen registro de su visita de manera oficial.

---

## 2. Aspectos de Diseño y UX

- **Estilo Suizo y Editorial**: Se prioriza una tipografía Sans-serif de alta legibilidad ("Inter") para las secciones de interfaz de usuario y una elegante tipografía Serif ("Playfair Display" o fuentes clásicas) para el cuerpo del texto del documento PDF, logrando un contraste elegante y sofisticado.
- **Micro-interacciones Fluidas**: Transiciones suaves de escala para el Zoom y animaciones interactivas al cambiar de página o abrir paneles.
- **Selector de Enfoque Temático**: El usuario puede presionar botones de color para cambiar de manera global la acentuación de marca del portfolio (Colores: *Crimson*, *Blue*, *Emerald*, y *Graphite*), los cuales se propagan por todo el documento y la interfaz.
- **Sidebar de Páginas (Miniaturas y Marcadores)**: Panel lateral que muestra las miniaturas visuales de cada página del PDF con el número de página correspondiente y marcadores de acceso inmediato.

---

## 3. Arquitectura del Sistema (Full-Stack)

El proyecto cuenta con una estructura robusta y escalable que se autocompila para producción con alta eficiencia:

### A. Capa de Servidor (Backend) — `server.ts`
- Implementa un servidor Express en TypeScript que corre en el puerto `3000`.
- **Integración con IA de Gemini**: Cuenta con rutas seguras en `/api/chat` para procesar consultas usando la SDK de Google GenAI (`@google/genai`) y la API-Key server-side de manera 100% segura (sin exponer secretos en el navegador).
- **Procesamiento de Contactos y Firmas**: Endpoint en `/api/contact` que recibe los formularios de los reclutadores junto con sus firmas personalizadas y las almacena de forma segura.
- **Vite Middleware integrado**: En modo desarrollo (dev) acopla los servicios hot module de Vite de manera directa; en producción, compila el servidor a un único bundle rápido mediante `esbuild` (`dist/server.cjs`) y sirve los contenidos estáticos.

### B. Capa Cliente (Frontend React) — `src/`
- **`src/App.tsx`**: Contiene la lógica del visor PDF, los estados persistentes dinámicos, coordinadores de zoom, y el renderizado modular de las 5 secciones/páginas del Dossier.
- **`src/types.ts`**: Modulo con la tipificación para Mensajes del Chat, Firmas de Contacto, Sellos e hitos del Portfolio.

---

## 4. Secciones / Páginas Implementadas en el PDF

### Página 1: Portada Corporativa (Cover Page)
- **Título principal estilizado**: Mateo Silva (Frontend Engineer & UI Architecture Lead).
- **Metadatos del Documento**: Sello de Confidencialidad Pública, indicador de páginas totales y fecha dinámica en UTC.
- **Visuales**: Un contenedor elegante minimalista libre de clutter, excelente para un impacto inicial enfocado en un diseño pulcro y tipográfico continuo.

### Página 2: Perfil Profesional y Sandbox Interactivo
- **Resumen Ejecutivo**: Introducción a su enfoque en desarrollo robusto, accesibilidad (a11y) y performance de renderizado.
- **Sandbox CLI Interactivo (Terminal)**: Una simulación de consola de comandos interactiva donde el reclutador puede preseleccionar un proyecto y correr comandos en la terminal (`help`, `run`, `metrics`, `logs`) para ver en tiempo real cómo responde la arquitectura de software.

### Página 3: Experiencia Concreta y Casos de Éxito
- **Desglose de Roles**: Arquitecto UI Senior en *Pulse Networks* y Lead Developer en *Quantum Core*.
- **KPIs interactivos**: Gráficos dinámicos e indicadores dinámicos de progreso técnico enfocados en la optimización de bundles, velocidad de carga real (FCP), y satisfacción del cliente (NPS).

### Página 4: Estructura Tecnológica (Competency Meters)
- **Diales de Progreso SVG Circulares**: Indicadores de maestría en tecnologías clave (TypeScript, React/Next.js, Tailwind/Design Systems, y Node.js/Cloud Architectures).
- **Filtros por Categoría**: Botones para filtrar y categorizar las habilidades del candidato de manera limpia.
- **Tickers de Instrumentación**: Barras dinámicas animadas con aplicación práctica realista para cada tecnología elegida.

### Página 5: Registro de Reclutadores y Firmas
- **Formulario Completo**: Nombre, correo, asunto y propuesta de llamada directa.
- **Lienzo de Firma Digital**: Un simulador sofisticado donde el usuario puede realizar su trazo de firma táctil u holográfico mediante el ratón o teclado.
- **Historial de Visitas**: Muestra comentarios históricos dejados por otros managers con fecha, hora y validez de la firma digital asociada.

---

## 5. El Asistente de Inteligencia Artificial (AI Panel)

Integrado de manera lateral con acceso directo, se incluye un panel de chat estilo Sidebar conversacional. Su comportamiento consiste en:
- Procesar las preguntas del usuario sobre Mateo Silva mediante IA utilizando Gemini 2.5 Flash de forma asincrónica.
- Permitir sugerencias automáticas dinámicas (por ejemplo: *"¿Cuáles son sus tecnologías favoritas?"*, *"Ver disponibilidad"*, *"Pedir propuesta"*).

- Funciona 100% de manera offline con un simulador determinista elegante en caso de carecer de API Key, asegurando que el portfolio nunca sea inoperante.

---

## 6. Personalizaciones Realizadas Recientemente

1. **Simplicidad Absoluta en Visualización**: Se removió el sello por defecto "Aprobado" de color verde que venía cargado sobre la portada del documento para lograr un diseño limpio y formal de origen.
2. **Remoción de Inputs Suplementarios**: Se despejó la barra de herramientas del lector de PDF para eliminar elementos distractores que mermaban la elegibilidad profesional del Dossier. Se eliminaron:
   - El buscador estático de texto en el PDF.
   - El sintetizador/guía de audio-guía de voz interactiva.
   - El selector para estampar sellos personalizados ("Colocar sello...").
   - El panel de post-its ("Notas Adhesivas").
3. **Optimización de Toolbar**: La barra superior ahora contiene de forma exclusiva los controles técnicos de lectura: el botón del panel lateral para navegar entre miniaturas y el regulador elegante del nivel de zoom general.

---

## Cómo utilizar este archivo para iterar el proyecto en tu curso:
*Suministra este archivo `.md` a cualquier IA generativa y pídele:*
1. *"Quiero expandir la interfaz de comandos interactiva de la Página 2 del Dossier de Mateo Silva, agregando tres nuevos comandos: `analyze`, `clear`, y `download-bundle`."*
2. *"Por favor, añade una integración real de Base de Datos para registrar las firmas de los Recruiters de la Página 5 y hacer que se guarden permanentemente."*
3. *"Quiero adaptar visualmente la portada para que en vez de Mateo Silva sea mi propio nombre, cambiando las tecnologías por mis competencias específicas."*
