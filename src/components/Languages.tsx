import { profile } from "../data/profiles";

export function Languages() {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Idiomas</h2>

        {profile.languagesSpoken.map((lang, index) => (
          <p key={index} className="text-slate-300">
            {lang.name} — {lang.level}
          </p>
        ))}
      </div>
    </section>
  );
}
