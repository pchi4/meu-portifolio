"use client";

import { MapPin, Linkedin, Mail, FileText, Github } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/src/data/profiles";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative pt-8 md:pt-14 pb-16 md:pb-20 mb-20 md:mb-28">
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-border origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease, delay: 0.15 }}
      />

      <div className="relative z-10 max-w-3xl">
        <motion.div
          className="flex flex-wrap items-center gap-x-3 gap-y-2 text-muted font-mono text-xs tracking-wide mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-accent" />
            {profile.location}
          </span>
          <span className="text-border">/</span>
          <span>{profile.availability}</span>
          <span className="inline-flex items-center gap-1.5 border border-accent/35 text-accent px-2.5 py-1 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Aberto a oportunidades
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] mb-5"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.28 }}
        >
          {profile.name}
        </motion.h1>

        <motion.div
          className="h-1 w-16 bg-accent mb-7 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.55 }}
        />

        <motion.p
          className="font-display text-lg md:text-xl font-semibold text-foreground/90 max-w-2xl mb-3 text-balance"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
        >
          {profile.role}
        </motion.p>

        <motion.p
          className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.72 }}
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 font-semibold text-sm tracking-wide hover:bg-accent hover:text-background transition-colors"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 border border-border px-5 py-3 font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
          >
            <Mail size={18} /> Contato
          </a>
          <a
            href={profile.resume}
            className="inline-flex items-center gap-2 border border-border px-5 py-3 font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
          >
            <FileText size={18} /> Currículo
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-5 py-3 font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
          >
            <Github size={18} /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
