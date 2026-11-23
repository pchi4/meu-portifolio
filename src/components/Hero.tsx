"use client";

import { MapPin, Linkedin, Mail, FileText, ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/src/data/profiles";

const ease = [0.22, 1, 0.36, 1] as const;

const conversationHref = `mailto:${profile.email}?subject=${encodeURIComponent(profile.conversationSubject)}`;

export function Hero() {
  return (
    <section className="relative pt-8 md:pt-14 pb-16 md:pb-20 mb-16 md:mb-24">
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
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Aberto a oportunidades
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-[clamp(2.25rem,5.5vw,3.5rem)] font-bold leading-[1.08] mb-5"
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
          className="font-display text-xl md:text-2xl font-semibold text-foreground/90 max-w-2xl mb-3 text-balance"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
        >
          {profile.positioning}
        </motion.p>

        <motion.p
          className="font-mono text-xs md:text-sm tracking-wide text-accent mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.55 }}
        >
          {profile.stackLine}
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
          className="flex flex-wrap gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.72 }}
        >
          <a
            href="/#projetos"
            className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 font-semibold text-sm tracking-wide hover:bg-accent hover:text-background transition-colors group"
          >
            Ver case MOP
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href={conversationHref}
            className="inline-flex items-center gap-2 border border-accent/50 text-accent px-5 py-3 font-semibold text-sm tracking-wide hover:bg-accent hover:text-background transition-colors"
          >
            <MessageSquare size={18} /> {profile.conversationSubject}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-5 py-3 font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href={profile.resume}
            className="inline-flex items-center gap-2 border border-border px-5 py-3 font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
          >
            <FileText size={18} /> Currículo
          </a>
        </motion.div>

        <motion.dl
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-2xl border-t border-border pt-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.85 }}
        >
          {profile.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="font-display text-xl md:text-2xl font-bold text-accent tracking-tight">
                {metric.value}
              </dt>
              <dd className="font-mono text-[10px] md:text-[11px] tracking-wide text-muted leading-snug mt-1">
                {metric.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
