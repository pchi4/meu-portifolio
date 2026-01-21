import { Code2 } from "lucide-react";
import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";

export function Skills() {
  return (
    <section className="mb-32">
      <Reveal>
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          <Code2 className="text-blue-500" /> Stack & Expertise
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
          <h3 className="text-slate-500 mb-4 font-mono text-xs uppercase tracking-widest">
            Mobile Development
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {profile.skills.mobile.map((skill) => (
              <span key={skill} className="text-3xl md:text-4xl font-bold">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20 flex flex-col justify-between">
          <h3 className="text-blue-100 mb-4 font-mono text-xs uppercase tracking-widest">
            Mestrado UFBA
          </h3>
          <p className="text-lg font-bold leading-tight">
            {profile.education[1].research}
          </p>
        </div>
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
          <h3 className="text-slate-500 mb-3 font-mono text-xs uppercase tracking-widest">
            Frontend
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.frontend.map((s) => (
              <span
                key={s}
                className="text-sm font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
          <h3 className="text-slate-500 mb-3 font-mono text-xs uppercase tracking-widest">
            Backend
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.backend.map((s) => (
              <span
                key={s}
                className="text-sm font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
          <h3 className="text-slate-500 mb-3 font-mono text-xs uppercase tracking-widest">
            DevOps & Tools
          </h3>
          <div className="flex flex-wrap gap-2 text-sm font-bold">
            {profile.skills.devops
              .concat(profile.skills.tools)
              .slice(0, 6)
              .map((s) => (
                <span key={s} className="text-blue-500">
                  #{s.replace(/\s+/g, "")}
                </span>
              ))}
          </div>
        </div>
        <div className="md:col-span-3 p-6 rounded-3xl bg-slate-100 dark:bg-slate-800/50 border border-transparent flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
          <span className="text-slate-500 font-mono text-xs uppercase tracking-widest text-center md:text-left">
            Core Languages
          </span>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
            {profile.skills.languages.map((lang) => (
              <span
                key={lang}
                className="font-bold tracking-tighter italic text-xl md:text-2xl"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
