"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { ProjectImage } from "@/types/portfolio";

interface ImageCarouselProps {
  images: ProjectImage[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

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

  const current = images[index];

  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-doc-border bg-doc-surface">
          {images.map((image, i) => (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-300 ${
                i === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                priority={i === 0}
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
          <p className="font-sans text-xs text-doc-muted text-center">{current.caption}</p>
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
