import { profile } from "../data/profiles";

export function Experience() {
  return (
    <section className="bg-slate-950 text-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-10">Experiência Profissional</h2>

        <div className="space-y-10">
          {profile.experience.map((job, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">{job.company}</h3>
              <p className="text-slate-400">
                {job.role} • {job.period}
              </p>

              <ul className="list-disc list-inside mt-4 space-y-2 text-slate-300">
                {job.activities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
