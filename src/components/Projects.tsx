import { profile } from "../data/profiles";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Projetos em Destaque
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {profile.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>

              <p className="text-slate-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-600/20 text-blue-400 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <FaGithub /> Código
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
