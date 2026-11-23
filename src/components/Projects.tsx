import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/src/components/Reveal";
import { DeviceMockup } from "@/src/components/DeviceMockup";
import {
  getFeaturedProjects,
  getOtherProjects,
  getProjectBySlug,
} from "@/src/data/profiles";

export function Projects() {
  const featured = getFeaturedProjects();
  const sgm = getProjectBySlug("sgm");
  const others = getOtherProjects().filter((p) => p.slug !== "sgm");
  const hero = featured[0];
  const rest = featured.slice(1);

  return (
    <section id="projetos" className="mb-28 md:mb-36">
      <Reveal>
        <div className="section-rule pt-8 mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
              02 — Trabalho selecionado
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Case hero + seleção
            </h2>
          </div>
          <p className="font-mono text-xs text-muted tracking-wide sm:text-right">
            MOP · App190 · SGM
          </p>
        </div>
      </Reveal>

      {hero && (
        <Reveal>
          <article className="py-12 md:py-16 border-b border-border">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-14">
              <Link
                href={`/projetos/${hero.slug}`}
                className="shrink-0 self-center lg:self-start group"
              >
                <DeviceMockup
                  imageSrc={
                    hero.images.find((img) => img.orientation === "portrait")
                      ?.src ?? hero.cover
                  }
                  alt={hero.name}
                  priority
                  className="transition-transform duration-500 group-hover:-translate-y-1"
                />
              </Link>

              <div className="flex-1 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-accent border border-accent/40 px-2 py-1">
                    Case hero
                  </span>
                  <p className="font-mono text-xs text-muted tracking-wide">
                    {hero.period}
                  </p>
                  {hero.company && (
                    <span className="font-mono text-[10px] tracking-wide text-muted">
                      {hero.company}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
                  <Link
                    href={`/projetos/${hero.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {hero.name}
                  </Link>
                </h3>

                <p className="text-muted text-lg leading-relaxed mb-6">
                  {hero.description}
                </p>

                {hero.metrics && hero.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mb-8 border border-border">
                    {hero.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3 md:p-4 border-r border-border last:border-r-0"
                      >
                        <p className="font-display text-xl md:text-2xl font-bold text-accent tracking-tight">
                          {m.value}
                        </p>
                        <p className="font-mono text-[10px] text-muted tracking-wide mt-1 leading-snug">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {hero.highlights.length > 0 && (
                  <ul className="space-y-2.5 mb-8">
                    {hero.highlights.slice(0, 3).map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-foreground/80 leading-relaxed"
                      >
                        <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/projetos/${hero.slug}`}
                    className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2.5 text-sm font-semibold hover:bg-accent transition-colors group"
                  >
                    Ver história
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                  {hero.store && (
                    <a
                      href={hero.store}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                    >
                      Play Store <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:w-44 shrink-0 lg:pt-2">
                <p className="font-mono text-[10px] tracking-widest text-muted uppercase mb-3">
                  Stack
                </p>
                <ul className="space-y-2">
                  {hero.tech.map((t) => (
                    <li
                      key={t}
                      className="font-mono text-sm text-foreground/80 border-l border-border pl-3"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      )}

      <div className="space-y-0">
        {rest.map((proj, idx) => {
          const isMobileShot =
            proj.icon === "mobile" &&
            proj.images.some((img) => img.orientation === "portrait");
          const preview =
            proj.images.find((img) => img.orientation === "portrait")?.src ??
            proj.cover;

          return (
            <Reveal key={proj.slug} delay={idx * 0.08}>
              <article className="py-12 border-b border-border">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                  <Link
                    href={`/projetos/${proj.slug}`}
                    className={`shrink-0 ${
                      isMobileShot
                        ? "self-center lg:self-start"
                        : "relative w-full lg:w-64 aspect-[16/10] overflow-hidden border border-border bg-surface group"
                    }`}
                  >
                    {isMobileShot ? (
                      <DeviceMockup imageSrc={preview} alt={proj.name} />
                    ) : (
                      <Image
                        src={proj.cover}
                        alt={proj.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 256px"
                      />
                    )}
                  </Link>

                  <div className="flex-1 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <p className="font-mono text-xs text-muted tracking-wide">
                        {proj.period}
                      </p>
                      {proj.company && (
                        <span className="font-mono text-[10px] tracking-wide text-muted">
                          {proj.company}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
                      <Link
                        href={`/projetos/${proj.slug}`}
                        className="hover:text-accent transition-colors"
                      >
                        {proj.name}
                      </Link>
                    </h3>

                    <p className="text-muted text-lg leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    {proj.highlights.length > 0 && (
                      <ul className="space-y-2.5 mb-8">
                        {proj.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex gap-3 text-foreground/80 leading-relaxed"
                          >
                            <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/projetos/${proj.slug}`}
                        className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                      >
                        Ver história <ArrowUpRight size={16} />
                      </Link>
                      {proj.store && (
                        <a
                          href={proj.store}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                        >
                          Play Store <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="lg:w-44 shrink-0 lg:pt-2">
                    <p className="font-mono text-[10px] tracking-widest text-muted uppercase mb-3">
                      Stack
                    </p>
                    <ul className="space-y-2">
                      {proj.tech.map((t) => (
                        <li
                          key={t}
                          className="font-mono text-sm text-foreground/80 border-l border-border pl-3"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {sgm && (
        <Reveal delay={0.08}>
          <article className="mt-12 md:mt-14 border border-border overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <Link
                href={`/projetos/${sgm.slug}`}
                className="relative w-full md:w-[42%] aspect-[16/10] md:aspect-auto md:min-h-[220px] bg-surface shrink-0 group overflow-hidden"
              >
                <Image
                  src={sgm.cover}
                  alt={sgm.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </Link>
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-accent border border-accent/40 px-2 py-1">
                    Também web
                  </span>
                  <p className="font-mono text-xs text-muted tracking-wide">
                    {sgm.period}
                    {sgm.company ? ` · ${sgm.company}` : ""}
                  </p>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                  <Link
                    href={`/projetos/${sgm.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {sgm.name}
                  </Link>
                </h3>
                <p className="text-muted leading-relaxed mb-6 max-w-xl">
                  {sgm.description} Prova de cobertura full stack além do
                  mobile — Vue, REST e fluxos administrativos reais.
                </p>
                <Link
                  href={`/projetos/${sgm.slug}`}
                  className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent transition-colors self-start"
                >
                  Ver história <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      )}

      {others.length > 0 && (
        <Reveal delay={0.1}>
          <div className="mt-10 md:mt-12 border border-border p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-widest text-accent uppercase mb-2">
                Mais projetos
              </p>
              <p className="font-display text-xl md:text-2xl font-bold mb-2">
                Sentinela, Hydra e Edge Vision
              </p>
              <p className="text-muted text-sm max-w-md leading-relaxed">
                Atuação institucional e MVP — com transparência sobre nível de
                evidência visual.
              </p>
            </div>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 text-sm font-semibold hover:bg-accent transition-colors shrink-0"
            >
              Ver todos os projetos <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      )}
    </section>
  );
}
