"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, RefreshCw } from "lucide-react";

/**
 * SlidingDigitReel: Smooth vertical rolling reel that animates
 * through a sequence of digits or labels with easeOutExpo deceleration.
 */
function SlidingDigitReel({
  items,
  targetIndex,
  duration = 1.3,
  delay = 0,
  triggerKey = 0,
  className = "",
  itemClassName = "",
}: {
  items: (string | number)[];
  targetIndex: number;
  duration?: number;
  delay?: number;
  triggerKey?: number;
  className?: string;
  itemClassName?: string;
}) {
  const total = items.length;
  // Calculate percentage translation: - (targetIndex / total) * 100%
  const targetPercent = total > 0 ? (targetIndex / total) * 100 : 0;

  return (
    <span className={`inline-block overflow-hidden relative align-baseline ${className}`}>
      <motion.span
        key={triggerKey}
        initial={{ y: "0%" }}
        animate={{ y: `-${targetPercent}%` }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1], // snappy easeOutExpo
        }}
        className="flex flex-col"
      >
        {items.map((item, idx) => (
          <span
            key={idx}
            className={`flex items-center justify-center select-none leading-none ${itemClassName}`}
          >
            {item}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export default function HeroStats() {
  const [autoSlideKey, setAutoSlideKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-sliding interval: re-rolls the numbers every 7.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setAutoSlideKey((k) => k + 1);
    }, 7500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Manual re-slide trigger
  const handleTriggerSlide = useCallback(() => {
    setAutoSlideKey((k) => k + 1);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-4 xl:col-span-4 flex flex-col justify-end text-left order-3 pb-2 space-y-3.5 max-w-sm w-full"
    >
      {/* =========================================================================
          SECTION 1: GDGC LEAD · MLRIT PILL BADGE (Image 1)
          Positioned directly on the right side of Abhinay
          ========================================================================= */}
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="self-start inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/85 border border-white/15 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.8)] group cursor-default spider-glitch-hover"
      >
        {/* Official Google Developer Bracket Emblem */}
        <div className="relative w-6 h-3.5 flex items-center justify-center shrink-0">
          <Image
            src="/logos/gdgc-mark.svg"
            alt="Google Developer Groups on Campus (GDGC)"
            width={24}
            height={14}
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(66,133,244,0.4)]"
          />
        </div>

        {/* Monospaced Leadership Title */}
        <span className="font-mono text-xs sm:text-[13px] font-bold tracking-wider text-zinc-100 group-hover:text-white transition-colors">
          GDGC LEAD · MLRIT
        </span>

        {/* Subtle live indicator dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse ml-0.5" />
      </motion.div>

      {/* =========================================================================
          SECTION 2: TELEMETRY & STATS CARD (Image 2)
          Features auto-sliding number reels, live increasing animations,
          and clubbed production experience.
          ========================================================================= */}
      <div className="p-4 sm:p-5 rounded-2xl bg-black/75 border border-white/10 backdrop-blur-md space-y-4 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)] relative overflow-hidden group">
        {/* Background Halftone & Ambient Glow */}
        <div className="absolute inset-0 halftone-dots opacity-15 pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#ae040d]/10 blur-2xl pointer-events-none" />

        {/* Top Tagline Row with Star/Sparkle Icon & Auto-Sliding Status */}
        <div className="space-y-2 relative z-10">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 rounded-full bg-[#ae040d]/20 border border-[#ae040d]/40 flex items-center justify-center text-[#ff4d5a] shadow-[0_0_12px_rgba(174,4,13,0.4)] shrink-0">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
                <span>SOL-3 // AUTO-STREAMING</span>
              </span>
            </div>

            {/* Clickable Live Automation Pill */}
            <button
              type="button"
              onClick={handleTriggerSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/5 hover:bg-[#ae040d]/20 text-zinc-400 hover:text-[#ff4d5a] border border-white/10 hover:border-[#ae040d]/40 transition-all flex items-center gap-1"
              title="Click to re-slide numbers"
            >
              <RefreshCw className="w-2.5 h-2.5 animate-spin" style={{ animationDuration: "10s" }} />
              <span>LIVE</span>
            </button>
          </div>

          {/* User's Exact Tagline from Image 2 */}
          <p className="text-xs sm:text-[13px] text-zinc-200 font-normal leading-relaxed pl-0.5">
            Turning raw data and intent into powerful autonomous realities.
          </p>
        </div>

        {/* -----------------------------------------------------------------
            STAT ROW 1: 2+ YEARS EXPERIENCE (Image 2)
            ----------------------------------------------------------------- */}
        <div
          onClick={handleTriggerSlide}
          className="pt-3 border-t border-white/10 space-y-1.5 cursor-pointer group/stat transition-colors"
        >
          <div className="flex items-baseline gap-2.5">
            {/* Auto-sliding Digit Reel: 0 -> 1 -> 2 */}
            <div className="flex items-baseline font-bebas text-4xl sm:text-5xl text-white tracking-tight leading-none filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">
              <SlidingDigitReel
                items={[0, 1, 2]}
                targetIndex={2}
                duration={1.2}
                delay={0.1}
                triggerKey={autoSlideKey}
                className="h-[1.05em]"
                itemClassName="h-[1.05em]"
              />
              <motion.span
                key={autoSlideKey}
                initial={{ opacity: 0, scale: 0.5, y: -4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.7 }}
                className="text-3xl sm:text-4xl text-[#ae040d] ml-0.5"
              >
                +
              </motion.span>
            </div>

            {/* Label from Image 2 */}
            <div className="flex flex-col">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-200 group-hover/stat:text-white transition-colors">
                YEARS EXPERIENCE
              </span>
              <span className="text-[11px] font-mono text-[#00f0ff] tracking-tight">
                Data &amp; AI Engineering @ JMAN Group
              </span>
            </div>
          </div>

          {/* Clubbed Experience Details Pill Row (FT + Internships) */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10">
              JMAN Group <span className="text-[#00f0ff] font-semibold">(FT + Intern)</span>
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10">
              AI AXISS <span className="text-purple-400">(Intern)</span>
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10">
              Brihaspathi <span className="text-pink-400">(Intern)</span>
            </span>
          </div>

          {/* Animated Sliding Telemetry Energy Bar */}
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-1.5">
            <motion.div
              key={autoSlideKey}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#ae040d] via-[#a855f7] to-[#00f0ff]"
            />
          </div>
        </div>

        {/* -----------------------------------------------------------------
            STAT ROW 2: 16+ PRODUCTION REPOS (Image 2)
            ----------------------------------------------------------------- */}
        <div
          onClick={handleTriggerSlide}
          className="pt-3 border-t border-white/10 space-y-1.5 cursor-pointer group/stat transition-colors"
        >
          <div className="flex items-baseline gap-2.5">
            {/* Auto-sliding Digit Reel: Tens: 0 -> 1; Ones: 0 -> 1 -> ... -> 6 */}
            <div className="flex items-baseline font-bebas text-4xl sm:text-5xl text-white tracking-tight leading-none filter drop-shadow-[0_2px_8px_rgba(168,85,247,0.3)]">
              {/* Tens digit: 0 -> 1 */}
              <SlidingDigitReel
                items={[0, 1]}
                targetIndex={1}
                duration={1.0}
                delay={0.2}
                triggerKey={autoSlideKey}
                className="h-[1.05em]"
                itemClassName="h-[1.05em]"
              />
              {/* Ones digit: rolls through odometer sequence and settles on 6 */}
              <SlidingDigitReel
                items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6]}
                targetIndex={16}
                duration={1.4}
                delay={0.15}
                triggerKey={autoSlideKey}
                className="h-[1.05em]"
                itemClassName="h-[1.05em]"
              />
              <motion.span
                key={autoSlideKey}
                initial={{ opacity: 0, scale: 0.5, y: -4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.9 }}
                className="text-3xl sm:text-4xl text-[#a855f7] ml-0.5"
              >
                +
              </motion.span>
            </div>

            {/* Label from Image 2 */}
            <div className="flex flex-col">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-200 group-hover/stat:text-white transition-colors">
                PRODUCTION REPOS
              </span>
              <span className="text-[11px] font-mono text-zinc-400 tracking-tight">
                Full-Stack, GenAI &amp; Distributed Systems
              </span>
            </div>
          </div>

          {/* Core Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
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

          {/* Animated Sliding Telemetry Energy Bar */}
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-1.5">
            <motion.div
              key={autoSlideKey}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.3, delay: 0.35, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#a855f7] via-[#00f0ff] to-[#10b981]"
            />
          </div>
        </div>

        {/* -----------------------------------------------------------------
            STAT ROW 3: 1st BUILDAI4INDIA WINNER (Image 2)
            ----------------------------------------------------------------- */}
        <div
          onClick={handleTriggerSlide}
          className="pt-3 border-t border-white/10 space-y-1.5 cursor-pointer group/stat transition-colors"
        >
          <div className="flex items-baseline gap-2.5">
            {/* Auto-sliding Digit Reel: Digit rolls 0 -> 1; Podium rolls 3rd -> 2nd -> 1st */}
            <div className="flex items-baseline font-bebas text-4xl sm:text-5xl text-[#00f0ff] tracking-tight leading-none filter drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]">
              <SlidingDigitReel
                items={[0, 1]}
                targetIndex={1}
                duration={0.9}
                delay={0.25}
                triggerKey={autoSlideKey}
                className="h-[1.05em]"
                itemClassName="h-[1.05em]"
              />
              <SlidingDigitReel
                items={["—", "3rd", "2nd", "1st"]}
                targetIndex={3}
                duration={1.4}
                delay={0.3}
                triggerKey={autoSlideKey}
                className="h-[1.05em] text-2xl sm:text-3xl ml-1 text-[#00f0ff]"
                itemClassName="h-[1.05em]"
              />
            </div>

            {/* Label from Image 2 */}
            <div className="flex flex-col">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-200 group-hover/stat:text-white transition-colors">
                BUILDAI4INDIA WINNER
              </span>
              <span className="text-[11px] font-mono text-zinc-400 tracking-tight">
                Swecha Telangana State Hackathon
              </span>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex items-center justify-between text-[10px] font-mono pt-0.5">
            <span className="text-zinc-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              <span>Project ArtYatra · AI Cultural Engine</span>
            </span>
            <span className="text-[#00f0ff] px-2 py-0.5 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/20 uppercase">
              1st Place
            </span>
          </div>

          {/* Animated Sliding Telemetry Energy Bar */}
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-1.5">
            <motion.div
              key={autoSlideKey}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#00f0ff] via-[#10b981] to-[#ae040d]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
