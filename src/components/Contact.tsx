import { profile } from "../data/profiles";

export function Contact() {
  return (
    <section className="bg-slate-950 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold">Contato</h2>

        <p>{profile.email}</p>
        <p>{profile.phone}</p>

        <div className="flex justify-center gap-6 pt-4">
          <a href={profile.github} target="_blank" className="text-blue-400">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" className="text-blue-400">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
