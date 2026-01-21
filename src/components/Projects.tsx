import { Code2, Github } from "lucide-react";
import { Reveal } from "@/src/components/Reveal";
import { profile } from "@/src/data/profiles";
import { DeviceMockup } from "@/src/components/DeviceMockup";
import { BrowserMockup } from "@/src/components/WebMockup";

export function Projects() {
  return (
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
  );
}
