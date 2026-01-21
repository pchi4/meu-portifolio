"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Terminal, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="p-6 rounded-full bg-blue-500/10 border border-blue-500/20">
            <AlertCircle size={48} className="text-blue-500" />
          </div>
        </motion.div>

        <h1 className="text-9xl font-black text-slate-200 dark:text-slate-800/50 mb-4 tracking-tighter">
          404
        </h1>

        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Rota não encontrada
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto font-mono text-sm">
            O recurso que você procura foi movido ou não existe na nossa
            arquitetura.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href="/"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 transition-all"
          >
            <Home size={20} />
            Voltar para o Início
          </Link>
        </motion.div>

        <div className="mt-20 flex items-center justify-center gap-2 text-slate-400 dark:text-slate-600 font-mono text-[10px] uppercase tracking-widest">
          <Terminal size={12} />
          <span>Douglas Lopes v2.0.26</span>
        </div>
      </div>
    </div>
  );
}
