import { profile } from "../data/profiles";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { fadeUp } from "../utils/animations";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-3xl text-center space-y-6 px-4"
      >
        <h1 className="text-5xl font-bold tracking-tight">{profile.name}</h1>

        <p className="text-xl text-blue-400">{profile.role}</p>

        <p className="text-slate-400">
          {profile.location} • {profile.email}
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-6">
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 bg-blue-600 px-5 py-3 rounded-2xl hover:bg-blue-700 transition"
          >
            <FaFileDownload /> Currículo
          </a>

          <a
            href={profile.github}
            target="_blank"
            className="flex items-center gap-2 border border-slate-700 px-5 py-3 rounded-2xl hover:bg-slate-800 transition"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            className="flex items-center gap-2 border border-slate-700 px-5 py-3 rounded-2xl hover:bg-slate-800 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
