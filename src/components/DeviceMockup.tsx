"use client";
import { motion } from "framer-motion";

interface MockupProps {
  imageSrc: string;
  type?: "ios" | "android";
}

export function DeviceMockup({ imageSrc, type = "ios" }: MockupProps) {
  return (
    /* Diminuímos de h-[500px] w-[250px] para h-[420px] w-[210px] */
    <div className="relative mx-auto border-slate-900 dark:border-slate-800 bg-slate-900 border-[7px] rounded-[2rem] h-[420px] w-[210px] shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 flex-shrink-0">
      {/* Notch Menor */}
      <div className="absolute top-0 inset-x-0 h-5 bg-slate-900 flex justify-center items-end pb-1 z-20">
        <div className="w-12 h-2.5 bg-black rounded-full"></div>
      </div>

      {/* Tela do App */}
      <div className="relative w-full h-full bg-slate-950 overflow-hidden">
        <img
          src={imageSrc}
          alt="Screenshot"
          className="w-full h-full object-cover"
          // Caso não tenha a imagem ainda, um placeholder:
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/210x420?text=App+Preview";
          }}
        />
        {/* Reflexo de vidro sutil */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
      </div>

      {/* Botões laterais reduzidos */}
      <div className="h-[25px] w-[2px] bg-slate-800 absolute -left-[9px] top-[60px] rounded-l-lg"></div>
      <div className="h-[35px] w-[2px] bg-slate-800 absolute -left-[9px] top-[100px] rounded-l-lg"></div>
    </div>
  );
}
