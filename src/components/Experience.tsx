import { Briefcase, ChevronRight } from "lucide-react";
import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";

export function Experience() {
  return (
    <section id="experiencia" className="mb-32">
      <Reveal>
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
          <Briefcase className="text-blue-500" /> Experiência Profissional
        </h2>
      </Reveal>
      <div className="space-y-20">
        {profile.experience.map((exp, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <div className="relative pl-0 md:pl-48">
              <div className="hidden md:block absolute left-0 top-1 text-slate-400 font-mono text-sm">
                {exp.period}
              </div>
              <div className="group">
                <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-lg font-medium text-slate-500 mb-6">
                  {exp.company}
                </p>
                <ul className="space-y-3">
                  {exp.activities.map((act, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                    >
                      <ChevronRight
                        size={18}
                        className="text-blue-500 mt-1 flex-shrink-0"
                      />
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
