"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
}

export function ProjectImage({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 280px",
  priority = false,
  className = "",
  imageClassName = "object-cover object-top",
  width,
  height,
}: ProjectImageProps) {
  const [loaded, setLoaded] = useState(false);
  const useIntrinsicLayout = width != null && height != null;

  return (
    <div
      className={`relative overflow-hidden bg-doc-surface ${useIntrinsicLayout ? "" : className}`}
    >
      {!useIntrinsicLayout && (
        <div
          className={`absolute inset-0 bg-doc-surface transition-opacity duration-300 ${
            loaded ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          aria-hidden
        >
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-doc-surface via-doc-border/30 to-doc-surface" />
        </div>
      )}

      {useIntrinsicLayout ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={`h-auto w-full transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${className} ${imageClassName}`}
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${imageClassName}`}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
