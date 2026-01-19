import { profile } from "../data/profiles";

export function Certifications() {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Certificações</h2>

        <div className="space-y-4">
          {profile.certifications.map((cert, index) => (
            <div key={index} className="bg-slate-800 p-4 rounded">
              <p className="font-semibold">{cert.name}</p>
              <p className="text-slate-400">{cert.org}</p>
              <p className="text-slate-500 text-sm">Código: {cert.code}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
