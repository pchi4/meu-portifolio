"use client";
import { useState } from "react";
import { Monitor } from "lucide-react";

export function BrowserMockup({ imageSrc }: { imageSrc: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-full max-w-[500px] mx-auto group-hover:scale-[1.02] transition-transform duration-500">
      <div className="bg-slate-200 dark:bg-slate-800 rounded-t-xl py-2 px-4 flex gap-1.5 items-center border-t border-x border-slate-300 dark:border-slate-700">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="ml-2 w-full h-4 bg-white/50 dark:bg-slate-900/50 rounded-md" />
      </div>

      <div className="relative aspect-video bg-slate-100 dark:bg-slate-950 border-x border-b border-slate-300 dark:border-slate-700 rounded-b-xl overflow-hidden shadow-2xl flex items-center justify-center">
        {hasError ? (
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <Monitor size={32} strokeWidth={1.5} />
            <span className="text-[10px] font-mono uppercase tracking-widest">
              Web Preview em breve
            </span>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt="Web App Preview"
            className="w-full h-full object-cover object-top"
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
}
