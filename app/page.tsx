"use client";

import React, { useEffect } from "react";
import { ScrollToTop } from "@/src/components/ScrollToTop";
import { NavBar } from "@/src/layout/Navbar";
import { Hero } from "@/src/components/Hero";
import { About } from "@/src/components/About";
import { Approach } from "@/src/components/Approach";
import { Skills } from "@/src/components/Skills";
import { Education } from "@/src/components/Education";
import { Experience } from "@/src/components/Experience";
import { Certifications } from "@/src/components/Certifications";
import { Footer } from "@/src/layout/Footer";
import { Projects } from "@/src/components/Projects";

export default function Portfolio() {
  useEffect(() => {
    const trackAccess = async () => {
      if (sessionStorage.getItem("notified_access")) return;

      try {
        const res = await fetch("/api/notify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ua: navigator.userAgent,
            origin: document.referrer || "Acesso Direto",
          }),
        });
        // Marca mesmo em 429 — o rate limit do servidor já cobriu este IP
        if (res.ok || res.status === 429) {
          sessionStorage.setItem("notified_access", "true");
        }
      } catch {
        // silencioso: tracking não deve afetar a UX
      }
    };

    trackAccess();
  }, []);

  return (
    <div className="min-h-screen site-atmosphere text-foreground transition-colors duration-500">
      <NavBar />
      <main className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Approach />
        <Skills />
        <Education />
        <Certifications />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
