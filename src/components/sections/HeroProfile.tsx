"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroProfile() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto flex items-center justify-center">
      {/* Spider-Verse Dimensional Aperture / Subtle Radial Halo */}
      <div className="absolute w-[320px] sm:w-[380px] lg:w-[440px] aspect-square rounded-full bg-gradient-to-b from-[#ae040d]/40 via-[#2a0845]/20 to-transparent pointer-events-none blur-3xl -translate-y-4" />

      {/* Subtle Ben-Day Comic Halftone Disc */}
      <div className="absolute w-[260px] sm:w-[340px] aspect-square rounded-full halftone-dots-spider opacity-25 pointer-events-none -translate-y-4" />

      {/* Spider-Verse Framing Ring */}
      <div className="absolute w-[280px] sm:w-[360px] aspect-square rounded-3xl border border-white/5 pointer-events-none -translate-y-4 shadow-[-2px_0_0_rgba(0,240,255,0.2),2px_0_0_rgba(174,4,13,0.3)]" />

      {/* Frame Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        {/* Cutout Portrait Image with Charminar Architectural Emblem in Background */}
        <div className="relative w-[320px] sm:w-[380px] lg:w-[440px] h-[420px] sm:h-[480px] lg:h-[540px] flex items-end justify-center overflow-hidden">
          {/* Front-Facing Charminar Architectural Emblem Behind User */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -translate-y-8 z-0">
            <div className="relative w-[280px] sm:w-[340px] lg:w-[380px] h-[340px] sm:h-[400px] lg:h-[450px] opacity-70 sm:opacity-85">
              <Image
                src="/logos/charminar-hero.webp"
                alt="Charminar Architectural Emblem"
                fill
                priority
                className="object-contain filter drop-shadow-[0_0_35px_rgba(174,4,13,0.9)] drop-shadow-[-3px_0_0_rgba(0,240,255,0.75)] animate-pulse"
                style={{ animationDuration: "5s" }}
              />
            </div>
          </div>

          {/* Target Anchor for the Spider-Doodle Arrow (Positioned Directly at Top of Abhinay's Head) */}
          <div
            id="hero-face-target"
            className="absolute top-[17%] sm:top-[19%] left-[54%] sm:left-[56%] w-4 h-4 pointer-events-none z-20"
            aria-hidden="true"
          />

          {/* User Portrait Cutout (Comic Stylized: Black & White with Red Outline) */}
          <Image
            src="/profile-pointing-comic.webp"
            alt="Abhinay Musku"
            width={1024}
            height={973}
            priority
            className="relative z-10 w-auto h-full object-contain object-bottom scale-[1.24] sm:scale-[1.28] origin-bottom -translate-y-8 sm:-translate-y-12 filter drop-shadow-[0_0_25px_rgba(225,6,0,0.55)] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] select-none pointer-events-none"
          />
        </div>

        {/* Floating Status Pill with Official JMAN Group Vector Logo — Antigravity Levitation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -bottom-3 left-4 sm:left-6 flex items-center gap-3 px-4 py-2.5 rounded-xl antigravity-glass spider-glitch-hover antigravity-float z-20"
        >
          <div className="relative w-14 h-6 shrink-0 flex items-center justify-center">
            <Image
              src="/logos/jman-logo.svg"
              alt="JMAN Group Official Logo"
              width={56}
              height={24}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-left border-l border-white/10 pl-2.5">
            <p className="text-xs font-semibold text-white tracking-tight flex items-center gap-1.5">
              <span className="font-spiderman tracking-[0.14em] text-sm">ABHINAY</span>
              <span className="text-[10px] text-[#00f0ff] font-mono">// SOL-3</span>
            </p>
            <p className="text-[10px] text-zinc-400 font-mono">Data &amp; AI Engineer · JMAN Forge</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

