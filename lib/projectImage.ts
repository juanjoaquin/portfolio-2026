/** Contenedor uniforme para miniaturas de proyectos (listado y carrusel). */
export const PROJECT_IMAGE_ASPECT_CLASS = "aspect-[16/10]";

/** Ancho máximo del contenido en la vista de detalle del proyecto. */
export const PROJECT_DETAIL_MAX_WIDTH = 794;

export const GALLERY_IMAGE_SIZES = `(max-width: 768px) 100vw, ${PROJECT_DETAIL_MAX_WIDTH}px`;

export const PROJECT_THUMBNAIL_CONTAINER_CLASS = `relative w-full shrink-0 ${PROJECT_IMAGE_ASPECT_CLASS} md:w-[280px]`;

export function preloadImages(sources: string[]): Promise<void> {
  if (typeof window === "undefined" || sources.length === 0) {
    return Promise.resolve();
  }

  return Promise.all(
    sources.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        }),
    ),
  ).then(() => undefined);
}
