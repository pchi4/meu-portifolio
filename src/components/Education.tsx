import { GraduationCap } from "lucide-react";
import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";

export function Education() {
  return (
    <section id="educacao" className="mb-32">
      <Reveal>
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <GraduationCap className="text-blue-500" /> Formação Académica
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {profile.education.map((edu, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <div className="relative group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all h-full">
              {edu.status === "Cursando" && (
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">
                  Em Andamento
                </span>
              )}

              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <p className="text-blue-600 dark:text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-2">
                    {edu.institution.split(" – ")[0]}
                  </p>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-blue-500 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    {edu.institution.split(" – ")[1]}
                  </p>
                </div>

                {edu.research && (
                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
                    <p className="text-xs text-slate-400 font-semibold uppercase mb-2">
                      Linha de Pesquisa:
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                      {edu.research}
                    </p>
                  </div>
                )}

                {edu.status === "Concluído" && (
                  <div className="mt-auto pt-6 flex items-center gap-2 text-green-600 dark:text-green-500 text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    {edu.status}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
