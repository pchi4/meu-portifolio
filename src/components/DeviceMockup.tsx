"use client";
import { useState } from "react";
import { Smartphone } from "lucide-react";

export function DeviceMockup({ imageSrc }: { imageSrc: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative mx-auto border-slate-900 dark:border-slate-800 bg-slate-900 border-[7px] rounded-[2rem] h-[420px] w-[210px] shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 flex-shrink-0">
      <div className="absolute top-0 inset-x-0 h-5 bg-slate-900 flex justify-center items-end pb-1 z-20">
        <div className="w-12 h-2.5 bg-black rounded-full"></div>
      </div>

      <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
        {hasError ? (
          <div className="flex flex-col items-center gap-2 px-4 text-center">
            <Smartphone size={32} className="text-slate-700" />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">
              Preview em breve
            </span>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt="App Screenshot"
            className="w-full h-full object-cover"
            onError={() => setHasError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
      </div>

      <div className="h-[25px] w-[2px] bg-slate-800 absolute -left-[9px] top-[60px] rounded-l-lg"></div>
      <div className="h-[35px] w-[2px] bg-slate-800 absolute -left-[9px] top-[100px] rounded-l-lg"></div>
    </div>
  );
}
