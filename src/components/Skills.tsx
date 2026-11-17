import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";

const spotlight = [
  "React Native",
  "Expo",
  "TypeScript",
  "React",
  "Vue",
  "Clean Architecture",
];

const groups = [
  { key: "mobile" as const, label: "Mobile" },
  { key: "frontend" as const, label: "Frontend" },
  { key: "architecture" as const, label: "Architecture" },
  { key: "backend" as const, label: "Backend & Data" },
  { key: "delivery" as const, label: "DevOps & Quality" },
  { key: "ai" as const, label: "AI Engineering" },
];

export function Skills() {
  return (
    <section id="competencias" className="mb-28 md:mb-36">
      <Reveal>
        <div className="section-rule pt-8 mb-10">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            03 — Expertise
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Competências
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mb-12 md:mb-14 pb-10 border-b border-border">
          <p className="font-mono text-[10px] tracking-widest text-muted uppercase mb-5">
            Stack principal
          </p>
          <ul className="flex flex-wrap gap-x-3 gap-y-3 md:gap-x-4 md:gap-y-4">
            {spotlight.map((skill, idx) => (
              <li
                key={skill}
                className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground/90"
              >
                {skill}
                {idx < spotlight.length - 1 && (
                  <span className="text-accent ml-3 md:ml-4 font-normal">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14">
        {groups.map((group, idx) => (
          <Reveal key={group.key} delay={0.06 + idx * 0.04}>
            <div className="py-7 border-b border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-5 bg-accent shrink-0" />
                <h3 className="font-mono text-[11px] tracking-widest text-muted uppercase">
                  {group.label}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {profile.skills[group.key].map((skill) => (
                  <li
                    key={skill}
                    className="text-sm md:text-[15px] text-foreground/85 border border-border px-3 py-1.5 hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
