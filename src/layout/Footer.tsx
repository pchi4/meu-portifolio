import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";

export function Footer() {
  return (
    <footer className="mt-40 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="text-4xl font-bold mb-6">
              Vamos construir algo <br />
              <span className="text-blue-500">incrível juntos?</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
              Engenheiro de Software focado em soluções em Frontend escaláveis e
              arquitetura moderna.
            </p>
            <div className="flex gap-4">
              <a
                href={profile.linkedin}
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={profile.github}
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:text-blue-500 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:text-blue-500 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6 md:text-right">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Localização
                </p>
                <p className="text-lg font-medium">{profile.location}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  E-mail Profissional
                </p>
                <p className="text-lg font-medium hover:text-blue-500 transition-colors">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Telefone / WhatsApp
                </p>
                <p className="text-lg font-medium">{profile.phone}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-mono">
          <p>
            © {new Date().getFullYear()} {profile.name.toUpperCase()}
          </p>
        </div>
      </div>
    </footer>
  );
}
