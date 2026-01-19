import { profile } from "../data/profiles";

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span key={i} className="bg-slate-700 px-3 py-1 rounded text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { skills } = profile;

  return (
    <section className="bg-slate-950 text-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-10">Habilidades Técnicas</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillBlock title="Mobile" items={skills.mobile} />
          <SkillBlock title="Frontend" items={skills.frontend} />
          <SkillBlock title="Backend / APIs" items={skills.backend} />
          <SkillBlock title="DevOps / Infra" items={skills.devops} />
          <SkillBlock title="Ferramentas" items={skills.tools} />
          <SkillBlock title="Linguagens" items={skills.languages} />
        </div>
      </div>
    </section>
  );
}
