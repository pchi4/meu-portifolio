import { GitBranch, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/src/components/Reveal";

const principles = [
  {
    Icon: ShieldCheck,
    title: "Confiabilidade primeiro",
    text: "Priorizo estabilidade, previsibilidade de release e decisões que sustentam operação em produção.",
  },
  {
    Icon: GitBranch,
    title: "Arquitetura evolutiva",
    text: "Clean Architecture, TypeScript strict, offline-first e padrões claros para o time escalar.",
  },
  {
    Icon: MessageSquare,
    title: "Liderança próxima do código",
    text: "Mentoria, code review e alinhamento com stakeholders — técnica a serviço do negócio.",
  },
  {
    Icon: Sparkles,
    title: "AI-assisted engineering",
    text: "Uso Codex e workflows agentic para análise de codebase, refatoração e acelerar entrega com qualidade.",
  },
];

export function Approach() {
  return (
    <section id="abordagem" className="mb-28 md:mb-36">
      <Reveal>
        <div className="section-rule pt-8 mb-10">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Como trabalho
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold max-w-xl text-balance">
            Engenharia com critério e impacto.
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
        {principles.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 0.06}>
            <div
              className={`p-6 md:p-8 h-full ${
                idx % 2 === 0 ? "md:border-r border-border" : ""
              } ${idx < 2 ? "border-b border-border" : ""}`}
            >
              <item.Icon size={20} className="text-accent mb-4" />
              <h3 className="font-display text-lg font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
