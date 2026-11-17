import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";

export function Experience() {
  return (
    <section id="experiencia" className="mb-28 md:mb-36">
      <Reveal>
        <div className="flex items-end justify-between gap-4 mb-12 section-rule pt-8">
          <div>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
              01 — Trajetória
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Experiência
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="space-y-0">
        {profile.experience.map((exp, idx) => (
          <Reveal key={`${exp.company}-${exp.role}`} delay={idx * 0.08}>
            <article className="grid grid-cols-1 md:grid-cols-[11rem_1fr] gap-4 md:gap-10 py-10 border-b border-border group">
              <div className="font-mono text-xs text-muted tracking-wide pt-1">
                <p>{exp.period}</p>
                <p className="mt-2 text-muted/70">{exp.type}</p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <p className="text-muted mt-1 mb-1">{exp.company}</p>
                <p className="font-mono text-[11px] text-muted/70 mb-5">
                  {exp.location}
                </p>
                <p className="text-foreground/85 leading-relaxed mb-6 max-w-3xl">
                  {exp.summary}
                </p>
                <ul className="space-y-3 max-w-3xl">
                  {exp.activities.map((act) => (
                    <li
                      key={act}
                      className="flex gap-3 text-muted leading-relaxed"
                    >
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
