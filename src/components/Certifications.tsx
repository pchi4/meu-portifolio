import { ExternalLink } from "lucide-react";
import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";

export function Certifications() {
  return (
    <section id="certificacoes" className="mb-16 md:mb-24">
      <Reveal>
        <div className="section-rule pt-8 mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
              05 — Credenciais
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Certificações
            </h2>
          </div>
          <p className="font-mono text-xs text-muted tracking-wide">
            {profile.certifications.length} credenciais · Udemy
          </p>
        </div>
      </Reveal>

      <div className="border border-border divide-y divide-border">
        {profile.certifications.map((cert, idx) => (
          <Reveal key={cert.code} delay={idx * 0.05}>
            <article className="group grid grid-cols-[2.5rem_1fr] md:grid-cols-[3rem_7rem_1fr_auto] gap-x-4 gap-y-3 p-5 md:p-6 hover:bg-surface/50 transition-colors">
              <span className="font-mono text-xs text-muted pt-1">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <div className="hidden md:block pt-1">
                <p className="font-mono text-xs text-muted tracking-wide">
                  {cert.issued}
                </p>
                <p className="font-mono text-[11px] text-accent mt-1">
                  {cert.org}
                </p>
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2 md:hidden">
                  <span className="font-mono text-[11px] text-muted">
                    {cert.issued}
                  </span>
                  <span className="font-mono text-[11px] text-accent">
                    {cert.org}
                  </span>
                </div>

                <h3 className="font-display text-lg md:text-xl font-bold leading-snug mb-3 group-hover:text-accent transition-colors">
                  {cert.name}
                </h3>

                <ul className="flex flex-wrap gap-2 mb-3">
                  {cert.focus.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-[10px] tracking-wide text-muted border border-border px-2 py-1"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <p className="font-mono text-[10px] text-muted/60 break-all md:hidden">
                  {cert.code}
                </p>
              </div>

              <div className="col-span-2 md:col-span-1 md:text-right md:pl-4 flex md:flex-col items-center md:items-end justify-between md:justify-start gap-3">
                <p className="hidden md:block font-mono text-[10px] text-muted/60 break-all max-w-[11rem] text-right leading-relaxed">
                  {cert.code}
                </p>
                {"url" in cert && cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted hover:text-accent transition-colors border border-border px-3 py-2 hover:border-accent"
                  >
                    Credencial <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
