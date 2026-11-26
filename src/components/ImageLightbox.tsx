"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectImage } from "@/src/data/profiles";

type ImageLightboxProps = {
  images: ProjectImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function ImageLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const [loaded, setLoaded] = useState(false);
  const open = index !== null && Boolean(images[index]);
  const current = open && index !== null ? images[index] : null;

  const goPrev = useCallback(() => {
    if (index === null || images.length < 2) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null || images.length < 2) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    setLoaded(false);
  }, [index]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, goPrev, goNext]);

  const isPortrait = current?.orientation === "portrait";

  return (
    <AnimatePresence>
      {current && index !== null && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[100] flex flex-col bg-background/92 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-4 md:px-6 py-4 shrink-0">
            <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
              {index + 1} / {images.length}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="inline-flex items-center justify-center w-10 h-10 border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center min-h-0 px-4 md:px-16 pb-6">
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Imagem anterior"
                className="absolute left-2 md:left-4 z-10 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-border bg-background/80 text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            <motion.figure
              key={current.src}
              className={`relative flex h-full w-full flex-col items-center justify-center ${
                isPortrait ? "max-w-lg" : "max-w-6xl"
              }`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[min(78vh,860px)] w-full">
                {!loaded && (
                  <div className="absolute inset-0 bg-surface/60 animate-pulse" />
                )}
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  priority
                  quality={95}
                  sizes="100vw"
                  className={`object-contain transition-opacity duration-300 ${
                    loaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setLoaded(true)}
                />
              </div>
              {(current.caption || current.alt) && (
                <figcaption className="mt-4 text-center font-mono text-xs text-muted tracking-wide max-w-lg px-4">
                  {current.caption ?? current.alt}
                </figcaption>
              )}
            </motion.figure>

            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Próxima imagem"
                className="absolute right-2 md:right-4 z-10 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-border bg-background/80 text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
