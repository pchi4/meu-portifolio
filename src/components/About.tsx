import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";

export function About() {
  return (
    <section id="sobre" className="mb-20 md:mb-28">
      <Reveal>
        <div className="section-rule pt-8 mb-8">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Sobre
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold max-w-xl text-balance">
            Engenharia com impacto operacional.
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="text-muted text-lg leading-relaxed max-w-3xl">
          {profile.summary}
        </p>
      </Reveal>
    </section>
  );
}
