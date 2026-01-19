import { profile } from "../data/profiles";

export function Education() {
  return (
    <section className="bg-slate-950 text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Formação Acadêmica</h2>

        <div className="space-y-6">
          {profile.education.map((edu, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4">
              <p className="font-semibold">{edu.institution}</p>
              <p className="text-slate-300">
                {edu.degree} • {edu.status}
              </p>

              {"research" in edu && (
                <p className="text-slate-400 text-sm mt-1">
                  Linha de pesquisa: {edu.research}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
