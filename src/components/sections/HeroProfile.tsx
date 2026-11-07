"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroProfile() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto flex items-center justify-center">
      {/* Background Michelangelo Creation of Adam — Atmospheric Art Motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-35 sm:opacity-45">
        <Image
          src="/creation-of-adam-clean.png"
          alt="Atmospheric artwork"
          width={1200}
          height={863}
          priority
          className="w-full h-auto object-contain filter contrast-125 brightness-90"
        />
      </div>

      {/* Frame Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        {/* Cutout Portrait Image */}
        <div className="relative w-[300px] sm:w-[360px] lg:w-[400px] h-[380px] sm:h-[440px] lg:h-[480px] flex items-end justify-center overflow-hidden">
          <Image
            src="/profile-cutout.webp"
            alt="Abhinay Musku"
            width={1200}
            height={1200}
            priority
            className="w-auto h-full object-contain object-bottom filter contrast-105 drop-shadow-[0_20px_35px_rgba(59,7,100,0.4)] drop-shadow-[0_10px_20px_rgba(174,4,13,0.25)] select-none pointer-events-none"
          />
        </div>

        {/* Floating Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -bottom-3 left-4 sm:left-6 flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#09090b] border border-white/10 shadow-2xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ae040d] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ae040d]" />
          </span>
          <div className="text-left">
            <p className="text-xs font-medium text-white tracking-tight">Abhinay Musku</p>
            <p className="text-[10px] text-zinc-400 font-mono">Data Engineer · JMAN Group</p>
          </div>
        </motion.div>

        {/* Floating Leadership Pill with Dark Royal Purple */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute -top-3 right-4 sm:right-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#140824] border border-[#3b0764] shadow-2xl text-[11px] font-mono text-purple-200"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#a855f7]" />
          <span>GDG Lead · MLRIT</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

