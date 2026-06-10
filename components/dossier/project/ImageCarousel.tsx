"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ProjectImage } from "@/components/dossier/project/ProjectImage";
import { ImageCarouselSkeleton } from "@/components/dossier/project/ImageCarouselSkeleton";
import {
  GALLERY_IMAGE_SIZES,
  PROJECT_IMAGE_ASPECT_CLASS,
  preloadImages,
} from "@/lib/projectImage";
import type { ProjectImage as ProjectImageType } from "@/types/portfolio";

interface ImageCarouselProps {
  images: ProjectImageType[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [imagesReady, setImagesReady] = useState(false);
  const [index, setIndex] = useState(0);
  const total = images.length;

  useEffect(() => {
    let cancelled = false;

    void preloadImages(images.map((image) => image.src)).then(() => {
      if (!cancelled) setImagesReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [images]);

  const goTo = useCallback(
    (next: number) => {
      if (total === 0) return;
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext]);

  if (total === 0) return null;

  if (!imagesReady) {
    return <ImageCarouselSkeleton />;
  }

  const current = images[index];
  const hasIntrinsicDimensions = images.every(
    (image) => image.width != null && image.height != null,
  );
  const isPortrait = (image: ProjectImageType) =>
    image.width != null && image.height != null && image.width < image.height;
  const isCurrentPortrait = isPortrait(current);

  return (
    <div className="space-y-3">
      <div className={`relative ${isCurrentPortrait ? "mx-auto max-w-[380px]" : "w-full"}`}>
        <div
          className={`relative w-full ${hasIntrinsicDimensions ? "" : PROJECT_IMAGE_ASPECT_CLASS}`}
        >
          {images.map((image, i) => (
            <div
              key={image.src}
              className={
                hasIntrinsicDimensions
                  ? `transition-opacity duration-300 ${i === index ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`
                  : `absolute inset-0 transition-opacity duration-300 ${
                      i === index ? "opacity-100" : "pointer-events-none opacity-0"
                    }`
              }
            >
              <ProjectImage
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority={i === 0}
                className="rounded-lg border border-doc-border"
                imageClassName={hasIntrinsicDimensions ? "" : "object-cover object-top"}
                sizes={GALLERY_IMAGE_SIZES}
              />
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-doc-border bg-doc-bg/90 text-doc-text shadow-sm transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="size-4" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-doc-border bg-doc-bg/90 text-doc-text shadow-sm transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="size-4" strokeWidth={2} />
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col items-center gap-2">
        {current.caption && (
          <p className="text-center font-sans text-xs text-doc-muted">{current.caption}</p>
        )}
        {total > 1 && (
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Imágenes del carrusel">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Imagen ${i + 1}: ${image.alt}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-5 bg-accent" : "w-2 bg-doc-border hover:bg-doc-muted"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
