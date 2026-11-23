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
            Trajetória em produtos mission-critical.
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="text-muted text-lg leading-relaxed max-w-3xl mb-8">
          {profile.summary}
        </p>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="border-l-2 border-accent pl-5 max-w-2xl">
          <p className="font-mono text-[10px] tracking-widest text-accent uppercase mb-2">
            O que busco
          </p>
          <p className="font-display text-lg md:text-xl font-semibold text-foreground/90 text-balance">
            {profile.seeking}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
