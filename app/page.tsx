"use client";

import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Briefcase,
  GraduationCap,
  Code2,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { profile } from "@/src/data/profiles";
import { Reveal } from "@/src/components/Reveal";
import { DeviceMockup } from "@/src/components/DeviceMockup";
import { ScrollToTop } from "@/src/components/ScrollToTop";
import { BrowserMockup } from "@/src/components/WebMockup";
<footer className="mt-40 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-slate-950/50">
  <div className="max-w-6xl mx-auto px-6 py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <Reveal>
        <h2 className="text-4xl font-bold mb-6">
          Vamos construir algo <br />
          <span className="text-blue-500">incrível juntos?</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
          Engenheiro de Software focado em soluções mobile escaláveis e
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
      <div className="flex gap-6">
        <span>DESENVOLVIDO COM NEXT.JS & TAILWIND</span>
        <span className="text-blue-500">SALVADOR, BAHIA</span>
      </div>
    </div>
  </div>
</footer>;

<ScrollToTop />;

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <nav className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-white/5 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tighter text-xl">
            DL<span className="text-blue-500">.</span>
          </span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
              <a
                href="#experiencia"
                className="hover:text-blue-500 transition-colors"
              >
                Experiência
              </a>
              <a
                href="#projetos"
                className="hover:text-blue-500 transition-colors"
              >
                Projetos
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
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
                <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold px-6 py-3 hover:underline">
                  <FileText size={20} /> Currículo PDF
                </button>
              </a>
            </div>
          </Reveal>
        </section>
        <section className="mb-32">
          <Reveal>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Code2 className="text-blue-500" /> Stack & Expertise
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
              <h3 className="text-slate-500 mb-4 font-mono text-xs uppercase tracking-widest">
                Mobile Development
              </h3>
              <div className="flex flex-wrap gap-4">
                {profile.skills.mobile.map((skill) => (
                  <span key={skill} className="text-3xl md:text-4xl font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20">
              <h3 className="text-blue-100 mb-4 font-mono text-xs uppercase tracking-widest">
                Mestrado UFBA
              </h3>
              <p className="text-lg font-bold leading-tight">
                {profile.education[1].research}
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
              <h3 className="text-slate-500 mb-2 font-mono text-xs uppercase tracking-widest">
                Frontend
              </h3>
              <p className="font-bold text-lg">
                {profile.skills.frontend.slice(0, 3).join(", ")}
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
              <h3 className="text-slate-500 mb-2 font-mono text-xs uppercase tracking-widest">
                DevOps
              </h3>
              <p className="font-bold text-lg">Docker, CI/CD, Automação</p>
            </div>
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
              <h3 className="text-slate-500 mb-2 font-mono text-xs uppercase tracking-widest">
                Backend
              </h3>
              <p className="font-bold text-lg">Node.js, Nest.js</p>
            </div>
          </div>
        </section>
        <section id="educacao" className="mb-32">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <GraduationCap className="text-blue-500" /> Formação Académica
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profile.education.map((edu, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="relative group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all h-full">
                  {edu.status === "Cursando" && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">
                      Em Andamento
                    </span>
                  )}

                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <p className="text-blue-600 dark:text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-2">
                        {edu.institution.split(" – ")[0]}
                      </p>
                      <h3 className="text-xl font-bold leading-tight group-hover:text-blue-500 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-500 text-sm mt-1">
                        {edu.institution.split(" – ")[1]}
                      </p>
                    </div>

                    {edu.research && (
                      <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
                        <p className="text-xs text-slate-400 font-semibold uppercase mb-2">
                          Linha de Pesquisa:
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                          "{edu.research}"
                        </p>
                      </div>
                    )}

                    {edu.status === "Concluído" && (
                      <div className="mt-auto pt-6 flex items-center gap-2 text-green-600 dark:text-green-500 text-sm font-medium">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        {edu.status}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="experiencia" className="mb-32">
          <Reveal>
            <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
              <Briefcase className="text-blue-500" /> Experiência Profissional
            </h2>
          </Reveal>
          <div className="space-y-20">
            {profile.experience.map((exp, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="relative pl-0 md:pl-48">
                  <div className="hidden md:block absolute left-0 top-1 text-slate-400 font-mono text-sm">
                    {exp.period}
                  </div>
                  <div className="group">
                    <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-slate-500 mb-6">
                      {exp.company}
                    </p>
                    <ul className="space-y-3">
                      {exp.activities.map((act, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                        >
                          <ChevronRight
                            size={18}
                            className="text-blue-500 mt-1 flex-shrink-0"
                          />
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="projetos" className="mb-32">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Code2 className="text-blue-500" /> Projetos em Destaque
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-10">
            {profile.projects.map((proj, idx) => {
              const isMobile = proj.tech.some((t) =>
                ["React Native", "Flutter", "Dart"].includes(t),
              );

              const imagePath = `/projects/${proj.name.toLowerCase().replace(/ /g, "-")}.png`;

              return (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                      <div className="flex-1 space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-3xl font-bold group-hover:text-blue-500 transition-colors">
                            {proj.name}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {proj.tech.map((t) => (
                              <span
                                key={t}
                                className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                          {proj.description}
                        </p>

                        <div className="pt-4">
                          <a
                            href={proj.github}
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-500 hover:text-white px-5 py-2.5 rounded-xl font-semibold transition-all"
                          >
                            Explorar Código <Github size={18} />
                          </a>
                        </div>
                      </div>

                      <div className="w-full lg:w-[250px] flex justify-center">
                        {isMobile ? (
                          <div className="scale-90 md:scale-100">
                            <DeviceMockup imageSrc={imagePath} />
                          </div>
                        ) : (
                          <div className="w-full">
                            <BrowserMockup imageSrc={imagePath} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="certificacoes" className="mb-32">
          <Reveal>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <FileText className="text-blue-500" /> Certificações e Cursos
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.certifications.map((cert, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex flex-col justify-between h-full hover:border-blue-500/30 transition-colors">
                  <div>
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-4 font-bold">
                      {cert.org[0]}
                    </div>
                    <h3 className="font-bold text-lg mb-1 leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
                      {cert.org}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 mt-4">
                    <span className="text-[10px] text-slate-400 font-mono block mb-1">
                      CÓDIGO DE VERIFICAÇÃO
                    </span>
                    <code className="text-[11px] text-slate-500 break-all">
                      {cert.code}
                    </code>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-40 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="text-4xl font-bold mb-6">
                Vamos construir algo <br />
                <span className="text-blue-500">incrível juntos?</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
                Engenheiro de Software focado em soluções em Frontend escaláveis
                e arquitetura moderna.
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

      <ScrollToTop />
    </div>
  );
}
