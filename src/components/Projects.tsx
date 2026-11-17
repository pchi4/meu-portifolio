import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/src/components/Reveal";
import { DeviceMockup } from "@/src/components/DeviceMockup";
import { getFeaturedProjects, getOtherProjects } from "@/src/data/profiles";

export function Projects() {
  const featured = getFeaturedProjects();
  const others = getOtherProjects();

  return (
    <section id="projetos" className="mb-28 md:mb-36">
      <Reveal>
        <div className="section-rule pt-8 mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
              02 — Trabalho selecionado
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Projetos em destaque
            </h2>
          </div>
          <p className="font-mono text-xs text-muted tracking-wide sm:text-right">
            MOP · App190 · SGM
          </p>
        </div>
      </Reveal>

      <div className="space-y-0">
        {featured.map((proj, idx) => {
          const isMobileShot =
            proj.icon === "mobile" &&
            proj.images.some((img) => img.orientation === "portrait");
          const preview =
            proj.images.find((img) => img.orientation === "portrait")?.src ??
            proj.cover;

          return (
            <Reveal key={proj.slug} delay={idx * 0.08}>
              <article
                className={`py-12 border-b border-border ${
                  idx === 0 ? "md:py-16" : ""
                }`}
              >
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

                    <h3
                      className={`font-display font-bold mb-4 ${
                        idx === 0
                          ? "text-3xl md:text-4xl"
                          : "text-2xl md:text-3xl"
                      }`}
                    >
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

      {others.length > 0 && (
        <Reveal delay={0.1}>
          <div className="mt-12 md:mt-16 border border-border p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-widest text-accent uppercase mb-2">
                Mais projetos
              </p>
              <p className="font-display text-xl md:text-2xl font-bold mb-2">
                Sentinela, Hydra, Edge Vision e outros
              </p>
              <p className="text-muted text-sm max-w-md leading-relaxed">
                Veja a história completa dos demais projetos — contexto,
                desafio, solução e impacto.
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
