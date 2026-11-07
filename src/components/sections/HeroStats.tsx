"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Trophy, GitBranch, Briefcase } from "lucide-react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1200; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-4 xl:col-span-4 flex flex-col justify-end text-left order-3 pb-2 space-y-4 max-w-sm w-full"
    >
      {/* Spider-Sense Telemetry Header Card */}
      <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md space-y-2 relative overflow-hidden group">
        <div className="absolute inset-0 halftone-dots opacity-10 pointer-events-none" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full bg-[#ae040d]/20 border border-[#ae040d]/40 flex items-center justify-center text-[#ff4d5a] shadow-[0_0_10px_rgba(174,4,13,0.5)]">
              <span className="text-xs font-bold animate-spin" style={{ animationDuration: "14s" }}>✦</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
              <span>SPIDER-RADAR TELEMETRY</span>
            </span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            ONLINE
          </span>
        </div>
        <p className="text-xs text-zinc-300 font-normal leading-relaxed pl-1">
          Spider-sense tingles whenever a pipeline fails. Good thing mine never do.
        </p>
      </div>

      {/* Interactive Stat 1: Total Experience (Clubbing Full-Time & All Internships) */}
      <motion.div
        whileHover={{ y: -2, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="p-3.5 sm:p-4 rounded-xl antigravity-card border border-white/10 hover:border-[#ae040d]/50 hover:shadow-[-2px_0_0_rgba(0,240,255,0.4),2px_0_0_rgba(174,4,13,0.6)] transition-all space-y-2 group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bebas text-4xl sm:text-5xl text-white tracking-tight leading-none filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">
              <Counter target={2} suffix="+" />
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#ae040d]" />
                <span>YEARS COMBINED EXP</span>
              </span>
              <span className="text-[10px] font-mono text-[#00f0ff] uppercase tracking-wider">
                Full-Time &amp; Production Internships
              </span>
            </div>
          </div>
          <span className="w-2 h-2 rounded-full bg-[#ae040d] group-hover:animate-ping" />
        </div>

        {/* Company breakdown pills clubbing full-time and internships */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-1.5">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10 group-hover:border-white/20 transition-colors">
            JMAN Group <span className="text-[#00f0ff] font-bold">(FT + Intern)</span>
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10">
            AI AXISS <span className="text-purple-400">(Intern)</span>
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10">
            Brihaspathi <span className="text-pink-400">(Intern)</span>
          </span>
        </div>

        {/* Dynamic Telemetry Energy Bar */}
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-1">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-[#ae040d] via-[#a855f7] to-[#00f0ff]"
          />
        </div>
      </motion.div>

      {/* Interactive Stat 2: Projects / Battle-Tested Repositories */}
      <motion.div
        whileHover={{ y: -2, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="p-3.5 sm:p-4 rounded-xl antigravity-card border border-white/10 hover:border-[#a855f7]/50 hover:shadow-[-2px_0_0_rgba(168,85,247,0.4)] transition-all space-y-2 group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bebas text-4xl sm:text-5xl text-white tracking-tight leading-none filter drop-shadow-[0_2px_8px_rgba(168,85,247,0.3)]">
              <Counter target={16} suffix="+" />
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-[#a855f7]" />
                <span>BATTLE-TESTED REPOS</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                Full-Stack · GenAI · Data Lakehouses
              </span>
            </div>
          </div>
          <span className="w-2 h-2 rounded-full bg-[#a855f7] group-hover:animate-ping" />
        </div>

        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-1.5">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
            Databricks &amp; PySpark
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-400 border border-white/10">
            LangChain &amp; Gemini
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-400 border border-white/10">
            Next.js &amp; Angular
          </span>
        </div>

        {/* Dynamic Telemetry Energy Bar */}
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-1">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.35, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-[#a855f7] via-[#00f0ff] to-[#10b981]"
          />
        </div>
      </motion.div>

      {/* Interactive Stat 3: Swecha Championship */}
      <motion.div
        whileHover={{ y: -2, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="p-3.5 sm:p-4 rounded-xl antigravity-card border border-white/10 hover:border-[#00f0ff]/50 hover:shadow-[-2px_0_0_rgba(0,240,255,0.5),2px_0_0_rgba(174,4,13,0.4)] transition-all space-y-2 group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bebas text-4xl sm:text-5xl text-[#00f0ff] tracking-tight leading-none filter drop-shadow-[0_0_12px_rgba(0,240,255,0.7)]">
              1<span className="text-3xl sm:text-4xl">st</span>
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>STATE CHAMPIONS W</span>
              </span>
              <span className="text-[10px] font-mono text-[#00f0ff] uppercase tracking-wider">
                Swecha Telangana · BuildAI4India
              </span>
            </div>
          </div>
          <Zap className="w-3.5 h-3.5 text-[#00f0ff] animate-pulse" />
        </div>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
          <span className="text-zinc-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
            <span>Project ArtYatra · AI Cultural Preservation</span>
          </span>
          <span className="text-[#00f0ff] px-2 py-0.5 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/20 uppercase">
            Top Winner
          </span>
        </div>

        {/* Dynamic Telemetry Energy Bar */}
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-1">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-[#00f0ff] via-[#10b981] to-[#ae040d]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
