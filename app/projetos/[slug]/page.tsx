import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Smartphone,
  Eye,
  Globe,
  Radio,
} from "lucide-react";
import { getProjectBySlug, profile } from "@/src/data/profiles";
import { NavBar } from "@/src/layout/Navbar";
import { Footer } from "@/src/layout/Footer";
import { ProjectGallery } from "@/src/components/ProjectGallery";

const iconMap = {
  mobile: Smartphone,
  vision: Eye,
  web: Globe,
  iot: Radio,
};

export function generateStaticParams() {
  return profile.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projeto | Douglas Lopes" };
  return {
    title: `${project.name} | Douglas Lopes`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const Icon = iconMap[project.icon];
  const others = profile.projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);
  const portraitImages = project.images.filter(
    (img) => img.orientation === "portrait",
  );
  const landscapeImages = project.images.filter(
    (img) => img.orientation !== "portrait",
  );

  return (
    <div className="min-h-screen site-atmosphere text-foreground">
      <NavBar />
      <main className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-muted hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Voltar aos projetos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_16rem] gap-10 mb-10">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center justify-center w-10 h-10 border border-border text-accent">
                <Icon size={18} />
              </span>
              <p className="font-mono text-xs text-muted tracking-wide">
                {project.period}
                {project.company ? ` · ${project.company}` : ""}
              </p>
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-bold mb-5 text-balance">
              {project.name}
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-6">
              {project.description}
            </p>

            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-0 max-w-lg mb-8 border border-border">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-4 border-r border-border last:border-r-0"
                  >
                    <p className="font-display text-2xl font-bold text-accent tracking-tight">
                      {m.value}
                    </p>
                    <p className="font-mono text-[10px] text-muted tracking-wide mt-1">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {project.evidence === "supporting" && (
              <p className="font-mono text-[11px] tracking-wide text-muted mb-6 max-w-xl">
                Evidência visual limitada (ambiente institucional) — foco em
                contexto, stack e impacto da atuação.
              </p>
            )}

            <div className="flex flex-wrap gap-3">
              {project.store && (
                <a
                  href={project.store}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2.5 text-sm font-semibold hover:bg-accent transition-colors"
                >
                  Ver na Play Store <ExternalLink size={15} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                >
                  GitHub <Github size={16} />
                </a>
              )}
            </div>
          </div>

          <aside className="lg:pt-16">
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase mb-3">
              Stack
            </p>
            <ul className="space-y-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="font-mono text-sm border-l border-border pl-3"
                >
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <ProjectGallery
          portraitImages={portraitImages}
          landscapeImages={landscapeImages}
          cover={project.cover}
          projectName={project.name}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Desafio", body: project.challenge },
              { title: "Solução", body: project.solution },
              { title: "Impacto", body: project.impact },
            ].map((block) => (
              <div key={block.title} className="border-t border-border pt-5">
                <h2 className="font-mono text-[11px] tracking-widest text-accent uppercase mb-3">
                  {block.title}
                </h2>
                <p className="text-muted leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-5">A história</h2>
            <p className="text-muted text-lg leading-relaxed max-w-3xl whitespace-pre-line">
              {project.story}
            </p>
            {project.highlights.length > 0 && (
              <ul className="mt-8 space-y-3 max-w-2xl">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-foreground/85">
                    <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </ProjectGallery>

        {others.length > 0 && (
          <section className="section-rule pt-10">
            <h2 className="font-display text-xl font-bold mb-6">
              Outros projetos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projetos/${p.slug}`}
                  className="group flex gap-4 border border-border p-4 hover:border-accent/50 transition-colors"
                >
                  <div className="relative w-28 h-20 shrink-0 overflow-hidden bg-surface">
                    <Image
                      src={p.cover}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                  <div>
                    <p className="font-display font-bold group-hover:text-accent transition-colors">
                      {p.name}
                    </p>
                    <p className="text-sm text-muted line-clamp-2 mt-1">
                      {p.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
