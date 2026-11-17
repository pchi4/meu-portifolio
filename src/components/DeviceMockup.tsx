"use client";
import { useState } from "react";
import { Smartphone } from "lucide-react";

export function DeviceMockup({
  imageSrc,
  alt = "App screenshot",
  className = "",
}: {
  imageSrc: string;
  alt?: string;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative mx-auto border-foreground/90 bg-foreground border-[6px] rounded-[1.75rem] h-[380px] w-[190px] shadow-xl overflow-hidden flex-shrink-0 ${className}`}
    >
      <div className="absolute top-0 inset-x-0 h-4 bg-foreground flex justify-center items-end pb-0.5 z-20">
        <div className="w-10 h-2 bg-background/20 rounded-full" />
      </div>

      <div className="relative w-full h-full bg-surface flex items-center justify-center overflow-hidden">
        {hasError ? (
          <div className="flex flex-col items-center gap-2 px-4 text-center">
            <Smartphone size={28} className="text-muted" />
            <span className="text-[10px] font-mono text-muted uppercase">
              Preview
            </span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover object-top"
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
}
