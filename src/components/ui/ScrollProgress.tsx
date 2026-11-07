"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SpiderIcon } from "@/components/ui/Icons";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setPercent(Math.round(v * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Spider-Verse Chromatic Dual Progress Beams */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        {/* Cyan Chromatic Offset Beam */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-[#00f0ff] opacity-70 origin-left"
          style={{ scaleX }}
        />
        {/* Primary Michelangelo Crimson Beam */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-[#ae040d] origin-left shadow-[0_0_10px_rgba(174,4,13,0.8)]"
          style={{ scaleX }}
        />
      </div>

      {/* Floating Spider-Verse Telemetry HUD (Bottom Right Corner) — Antigravity Glass */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl antigravity-glass shadow-[-2px_0_0_rgba(0,240,255,0.35),2px_0_0_rgba(174,4,13,0.55)] pointer-events-none select-none text-[10px] font-mono tracking-widest uppercase"
      >
        <SpiderIcon className="w-3.5 h-3.5 text-[#ae040d] animate-pulse" />
        <span className="text-zinc-500">EARTH-1610 //</span>
        <span className="text-[#00f0ff] tabular-data font-semibold">{percent}%</span>
        <span className="text-zinc-600">·</span>
        <span className="text-zinc-400">LEAP OF FAITH</span>
      </motion.div>
    </>
  );
}
