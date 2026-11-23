import { GitBranch, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";

const icons = [MessageSquare, GitBranch, ShieldCheck, Sparkles] as const;

export function Approach() {
  return (
    <section id="abordagem" className="mb-28 md:mb-36">
      <Reveal>
        <div className="section-rule pt-8 mb-10">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Como trabalho
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold max-w-xl text-balance">
            Liderança, delivery e critério em produção.
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
        {profile.practice.map((item, idx) => {
          const Icon = icons[idx] ?? ShieldCheck;
          return (
            <Reveal key={item.title} delay={idx * 0.06}>
              <div
                className={`p-6 md:p-8 h-full ${
                  idx % 2 === 0 ? "md:border-r border-border" : ""
                } ${idx < 2 ? "border-b border-border" : ""}`}
              >
                <Icon size={20} className="text-accent mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
