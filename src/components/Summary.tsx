import { profile } from "../data/profiles";

export function Summary() {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Resumo Profissional</h2>
        <p className="text-slate-300 whitespace-pre-line">
          {profile.summary.trim()}
        </p>
      </div>
    </section>
  );
}
