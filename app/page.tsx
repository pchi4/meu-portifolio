"use client";

import React, { useEffect } from "react";
import { ScrollToTop } from "@/src/components/ScrollToTop";
import { NavBar } from "@/src/layout/Navbar";
import { Hero } from "@/src/components/Hero";
import { Skills } from "@/src/components/Skills";
import { Education } from "@/src/components/Education";
import { Experience } from "@/src/components/Experience";
import { Certifications } from "@/src/components/Certifications";
import { Footer } from "@/src/layout/Footer";
import { Projects } from "@/src/components/Projects";

export default function Portfolio() {
  useEffect(() => {
    const trackAccess = async () => {
      const hasNotified = sessionStorage.getItem("notified_access");

      if (!hasNotified) {
        try {
          await fetch("/api/notify", {
            method: "POST",
            body: JSON.stringify({
              ua: navigator.userAgent,
              origin: document.referrer || "Acesso Direto",
            }),
          });
          sessionStorage.setItem("notified_access", "true");
        } catch (err) {
          console.error("Erro no tracking", err);
        }
      }
    };

    trackAccess();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <NavBar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
