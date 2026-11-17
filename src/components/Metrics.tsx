import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";

export function Metrics() {
  return (
    <section className="mb-24 md:mb-32" aria-label="Indicadores">
      <Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-border">
          {profile.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 md:p-8 border-r border-b border-border"
            >
              <p className="font-display text-2xl md:text-3xl font-bold text-accent mb-2 tracking-tight">
                {metric.value}
              </p>
              <p className="font-mono text-[11px] tracking-wide text-muted leading-snug">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
