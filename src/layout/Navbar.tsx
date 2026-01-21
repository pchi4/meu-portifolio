"use client";

import React, { useState, useEffect } from "react";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/50 dark:border-white/10 bg-white/70 dark:bg-[#020617]/70 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="group">
          <span className="font-bold tracking-tighter text-2xl">
            DL<span className="text-blue-500 group-hover:animate-pulse">.</span>
          </span>
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600 dark:text-slate-400">
            <a
              href="#experiencia"
              className="hover:text-blue-500 transition-colors"
            >
              Experiência
            </a>
            <a
              href="#projetos"
              className="hover:text-blue-500 transition-colors"
            >
              Projetos
            </a>
            <a
              href="#educacao"
              className="hover:text-blue-500 transition-colors"
            >
              Formação
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
