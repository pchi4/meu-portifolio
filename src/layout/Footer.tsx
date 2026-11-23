import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";

export function Footer() {
  return (
    <footer id="contato" className="mt-24 section-rule">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
              Contato
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-5 text-balance">
              {profile.conversationSubject}.
            </h2>
            <p className="text-muted max-w-md leading-relaxed mb-3">
              {profile.openToWork}
            </p>
            <p className="text-foreground/85 max-w-md leading-relaxed mb-3 text-sm">
              {profile.seeking}
            </p>
            <p className="font-mono text-xs text-muted mb-8">
              {profile.location} · {profile.availability}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(profile.conversationSubject)}`}
                className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 text-sm font-semibold hover:bg-accent transition-colors"
              >
                <Mail size={18} /> {profile.conversationSubject}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-accent hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-8 md:text-right md:pt-10">
              <div>
                <p className="font-mono text-[10px] tracking-widest text-muted uppercase mb-1">
                  Localização
                </p>
                <p className="text-lg font-medium">{profile.location}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-muted uppercase mb-1">
                  E-mail
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-lg font-medium hover:text-accent transition-colors"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-muted uppercase mb-1">
                  Telefone / WhatsApp
                </p>
                <p className="text-lg font-medium">{profile.phone}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-[11px] text-muted">
          <p>
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <p>{profile.role}</p>
        </div>
      </div>
    </footer>
  );
}
