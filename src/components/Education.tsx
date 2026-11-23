import { Languages } from "lucide-react";
import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";

export function Education() {
  return (
    <section id="formacao" className="mb-28 md:mb-36">
      <Reveal>
        <div className="section-rule pt-8 mb-12">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            04 — Formação
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Formação acadêmica
          </h2>
        </div>
      </Reveal>

      <div className="space-y-0">
        {profile.education.map((edu, idx) => (
          <Reveal key={edu.institution} delay={idx * 0.08}>
            <article className="grid grid-cols-1 md:grid-cols-[11rem_1fr] gap-4 md:gap-10 py-10 border-b border-border">
              <div className="font-mono text-xs text-muted tracking-wide pt-1">
                <p>{edu.period}</p>
                <p
                  className={`mt-2 ${
                    edu.status === "Cursando" ? "text-accent" : "text-muted/70"
                  }`}
                >
                  {edu.status}
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold mb-1">
                  {edu.degree}
                </h3>
                <p className="text-muted mb-4">{edu.institution}</p>
                {edu.research && (
                  <div className="max-w-2xl space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-muted block mb-2">
                        Linha de pesquisa
                      </span>
                      {edu.research}
                    </p>
                    {"bridge" in edu && edu.bridge && (
                      <p className="text-muted leading-relaxed border-l border-accent/50 pl-4">
                        {edu.bridge}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-10 border border-border p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <Languages size={20} className="text-accent" />
            <h3 className="font-display font-bold text-lg">Idiomas</h3>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {profile.languagesSpoken.map((lang) => (
              <li key={lang.name}>
                <span className="font-medium">{lang.name}</span>
                <span className="font-mono text-xs text-muted ml-2">
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
