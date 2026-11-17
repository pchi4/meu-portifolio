import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getFeaturedProjects, getOtherProjects, profile } from "@/src/data/profiles";
import { NavBar } from "@/src/layout/Navbar";
import { Footer } from "@/src/layout/Footer";

export const metadata = {
  title: "Projetos | Douglas Lopes",
  description:
    "Portfólio de projetos — MOP, App190, Sentinela, SGM, Hydra, Edge Vision e mais.",
};

export default function ProjectsIndexPage() {
  const featured = getFeaturedProjects();
  const others = getOtherProjects();

  return (
    <div className="min-h-screen site-atmosphere text-foreground">
      <NavBar />
      <main className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-muted hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Voltar ao início
        </Link>

        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Todos os projetos
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance">
            Histórias de produto e engenharia
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Do mission-critical de segurança pública a MVPs de edge AI — contexto,
            desafios e decisões técnicas.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="font-mono text-[11px] tracking-widest text-muted uppercase mb-6">
            Em destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((proj) => (
              <Link
                key={proj.slug}
                href={`/projetos/${proj.slug}`}
                className="group border border-border hover:border-accent/50 transition-colors flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-surface overflow-hidden">
                  <Image
                    src={proj.cover}
                    alt={proj.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="font-mono text-[11px] text-muted mb-2">
                    {proj.period}
                  </p>
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {proj.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-4 flex-1">
                    {proj.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold">
                    Ver história <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-mono text-[11px] tracking-widest text-muted uppercase mb-6">
            Demais projetos
          </h2>
          <div className="border border-border divide-y divide-border">
            {others.map((proj, idx) => (
              <Link
                key={proj.slug}
                href={`/projetos/${proj.slug}`}
                className="group grid grid-cols-1 sm:grid-cols-[10rem_1fr_auto] gap-4 p-5 md:p-6 hover:bg-surface/50 transition-colors items-center"
              >
                <div className="relative w-full sm:w-40 aspect-[16/10] bg-surface overflow-hidden border border-border">
                  <Image
                    src={proj.cover}
                    alt={proj.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-muted mb-1">
                    {String(idx + 1).padStart(2, "0")} · {proj.period}
                    {proj.company ? ` · ${proj.company}` : ""}
                  </p>
                  <h3 className="font-display text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                    {proj.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-muted group-hover:text-accent transition-colors">
                  História <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-10 font-mono text-[11px] text-muted">
          {profile.projects.length} projetos no portfólio
        </p>
      </main>
      <Footer />
    </div>
  );
}
