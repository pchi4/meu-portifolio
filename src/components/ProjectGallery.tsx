"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import type { ProjectImage } from "@/src/data/profiles";
import { DeviceMockup } from "@/src/components/DeviceMockup";
import { ImageLightbox } from "@/src/components/ImageLightbox";

type ProjectGalleryProps = {
  portraitImages: ProjectImage[];
  landscapeImages: ProjectImage[];
  cover: string;
  projectName: string;
  children?: ReactNode;
};

export function ProjectGallery({
  portraitImages,
  landscapeImages,
  cover,
  projectName,
  children,
}: ProjectGalleryProps) {
  const allImages: ProjectImage[] =
    portraitImages.length > 0 || landscapeImages.length > 0
      ? [...portraitImages, ...landscapeImages]
      : [
          {
            src: cover,
            alt: projectName,
            orientation: "landscape",
          },
        ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openAt = (src: string) => {
    const i = allImages.findIndex((img) => img.src === src);
    setActiveIndex(i >= 0 ? i : 0);
  };

  return (
    <>
      {portraitImages.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-8 mb-14 border border-border bg-surface/40">
          {portraitImages.map((img, i) => (
            <figure key={img.src} className="text-center">
              <button
                type="button"
                onClick={() => openAt(img.src)}
                className="group relative cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`Ampliar: ${img.alt}`}
              >
                <DeviceMockup
                  imageSrc={img.src}
                  alt={img.alt}
                  priority={i === 0}
                  quality={90}
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-[1.75rem] bg-background/0 opacity-0 transition-opacity duration-300 group-hover:bg-background/35 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 border border-border bg-background/90 px-2.5 py-1.5 font-mono text-[10px] tracking-widest uppercase text-foreground">
                    <Expand size={12} /> Ver
                  </span>
                </span>
              </button>
              {img.caption && (
                <figcaption className="mt-4 max-w-[190px] mx-auto font-mono text-[11px] text-muted tracking-wide">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => openAt(cover)}
          className="relative block w-full aspect-[16/9] overflow-hidden border border-border mb-14 bg-surface cursor-zoom-in group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={`Ampliar: ${projectName}`}
        >
          <Image
            src={cover}
            alt={projectName}
            fill
            priority
            quality={90}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 1200px) 100vw, 1100px"
          />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-opacity duration-300 group-hover:bg-background/30 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1.5 border border-border bg-background/90 px-2.5 py-1.5 font-mono text-[10px] tracking-widest uppercase text-foreground">
              <Expand size={12} /> Ver
            </span>
          </span>
        </button>
      )}

      {children}

      {landscapeImages.length > 0 && (
        <section className="mb-20">
          <h2 className="font-display text-2xl font-bold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {landscapeImages.map((img) => (
              <figure key={img.src} className="border border-border">
                <button
                  type="button"
                  onClick={() => openAt(img.src)}
                  className="relative block w-full aspect-[16/10] bg-surface cursor-zoom-in group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={`Ampliar: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    quality={90}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-opacity duration-300 group-hover:bg-background/30 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 border border-border bg-background/90 px-2.5 py-1.5 font-mono text-[10px] tracking-widest uppercase text-foreground">
                      <Expand size={12} /> Ver
                    </span>
                  </span>
                </button>
                {img.caption && (
                  <figcaption className="p-4 font-mono text-[11px] text-muted tracking-wide">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      <ImageLightbox
        images={allImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
