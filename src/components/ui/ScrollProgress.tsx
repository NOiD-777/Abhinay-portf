"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SpiderIcon } from "@/components/ui/Icons";

const CHAPTERS: Record<string, string> = {
  top: "00 // ORIGIN",
  about: "01 // DOSSIER",
  skills: "02 // ARSENAL",
  projects: "03 // MISSIONS",
  experience: "04 // CHRONICLES",
  education: "05 // ACADEMICS",
  contact: "06 // FREQUENCY",
};

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState(0);
  const [activeChapter, setActiveChapter] = useState("00 // ORIGIN");

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setPercent(Math.round(v * 100));
    });
  }, [scrollYProgress]);

  useEffect(() => {
    const sectionIds = Object.keys(CHAPTERS);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(CHAPTERS[entry.target.id] || "SOL-3");
          }
        });
      },
      { rootMargin: "-25% 0px -40% 0px", threshold: 0.05 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top Scroll Progress Beam */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        {/* Solid Crimson Beam */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-[#ae040d] origin-left shadow-[0_0_10px_rgba(174,4,13,0.8)]"
          style={{ scaleX }}
        />
      </div>

      {/* Floating Telemetry HUD (Bottom Right Corner) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl antigravity-glass shadow-[-2px_0_0_rgba(168,85,247,0.35),2px_0_0_rgba(174,4,13,0.55)] pointer-events-none select-none text-[10px] font-mono tracking-widest uppercase"
      >
        <SpiderIcon className="w-3.5 h-3.5 text-[#ae040d] animate-pulse" />
        <span className="text-[#a855f7] tabular-data font-semibold">{percent}%</span>
        <span className="text-zinc-600">·</span>
        <span className="text-zinc-300 font-medium">{activeChapter}</span>
      </motion.div>
    </>
  );
}
