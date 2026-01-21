import { FileText } from "lucide-react";
import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";

export function Certifications() {
  return (
    <section id="certificacoes" className="mb-32">
      <Reveal>
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          <FileText className="text-blue-500" /> Certificações e Cursos
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.certifications.map((cert, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex flex-col justify-between h-full hover:border-blue-500/30 transition-colors">
              <div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-4 font-bold">
                  {cert.org[0]}
                </div>
                <h3 className="font-bold text-lg mb-1 leading-tight">
                  {cert.name}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {cert.org}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/5 mt-4">
                <span className="text-[10px] text-slate-400 font-mono block mb-1">
                  CÓDIGO DE VERIFICAÇÃO
                </span>
                <code className="text-[11px] text-slate-500 break-all">
                  {cert.code}
                </code>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
