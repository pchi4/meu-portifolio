"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen site-atmosphere flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-xs tracking-widest text-accent uppercase mb-6"
        >
          Erro 404
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-7xl md:text-8xl font-bold mb-4"
        >
          Página não encontrada
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted mb-10 leading-relaxed"
        >
          O recurso que você procura foi movido ou não existe.
        </motion.p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 font-semibold text-sm hover:bg-accent transition-colors"
        >
          <Home size={18} />
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
