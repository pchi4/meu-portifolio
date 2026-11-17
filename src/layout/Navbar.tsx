"use client";

import React, { useState, useEffect } from "react";
import { profile } from "@/src/data/profiles";
import { ThemeToggle } from "@/src/components/ThemeToggle";

const links = [
  { href: "/#experiencia", label: "Experiência" },
  { href: "/projetos", label: "Projetos" },
  { href: "/#competencias", label: "Competências" },
  { href: "/#formacao", label: "Formação" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
        <a
          href="/"
          className="font-display text-xl font-bold tracking-tight group"
        >
          DL
          <span className="text-accent group-hover:opacity-80 transition-opacity">
            .
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wide text-muted">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs tracking-wide text-muted hover:text-accent transition-colors"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
