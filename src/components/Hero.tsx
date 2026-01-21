import { MapPin, Linkedin, Mail, FileText } from "lucide-react";
import { profile } from "@/src/data/profiles";
import { Reveal } from "@/src/components/Reveal";

export function Hero() {
  return (
    <section className="mb-32">
      <Reveal>
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-sm mb-4">
          <MapPin size={16} /> {profile.location}
        </div>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6">
          {profile.name.split(" ").slice(0, 2).join(" ")}
          <span className="block text-slate-400 dark:text-slate-600">
            {profile.name.split(" ").slice(2).join(" ")}
          </span>
        </h1>
        <p className="max-w-2xl text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          {profile.summary}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-full font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Mail size={20} /> Contato
          </a>
          <a
            href="/curriculo-douglas-lopes.pdf"
            className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-full font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <FileText size={20} /> Currículo PDF
          </a>
        </div>
      </Reveal>
    </section>
  );
}
