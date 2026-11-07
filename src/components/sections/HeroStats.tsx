"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

/**
 * SlidingDigitReel: Smooth vertical rolling reel that animates
 * through a sequence of digits or labels with easeOutExpo deceleration.
 */
function SlidingDigitReel({
  items,
  targetIndex,
  duration = 1.2,
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

interface StatItem {
  id: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  numberType: "exp" | "repos" | "award";
  tags: { label: string; note?: string; color: string }[];
  accentColor: string;
  energyGradient: string;
}

const STATS: StatItem[] = [
  {
    id: "exp",
    shortLabel: "01 // 2+ EXP",
    title: "YEARS EXPERIENCE",
    subtitle: "Data & AI Engineering @ JMAN Group",
    numberType: "exp",
    tags: [
      { label: "JMAN Group", note: "(FT + Intern)", color: "text-[#00f0ff]" },
      { label: "AI AXISS", note: "(Intern)", color: "text-purple-400" },
      { label: "Brihaspathi", note: "(Intern)", color: "text-pink-400" },
    ],
    accentColor: "#ae040d",
    energyGradient: "from-[#ae040d] via-[#a855f7] to-[#00f0ff]",
  },
  {
    id: "repos",
    shortLabel: "02 // 16+ REPOS",
    title: "PRODUCTION REPOS",
    subtitle: "Autonomous Agents, LLMs & Distributed Systems",
    numberType: "repos",
    tags: [
      { label: "LangChain & Gemini", color: "text-cyan-300" },
      { label: "Databricks & PySpark", color: "text-purple-300" },
      { label: "FastAPI & Agent Swarms", color: "text-emerald-300" },
    ],
    accentColor: "#a855f7",
    energyGradient: "from-[#a855f7] via-[#00f0ff] to-[#10b981]",
  },
  {
    id: "awards",
    shortLabel: "03 // 1st WINNER",
    title: "BUILDAI4INDIA WINNER",
    subtitle: "Swecha Telangana State Hackathon",
    numberType: "award",
    tags: [
      { label: "Project ArtYatra", color: "text-white" },
      { label: "AI Cultural Preservation", color: "text-[#00f0ff]" },
      { label: "1st Place Winner", color: "text-emerald-400" },
    ],
    accentColor: "#00f0ff",
    energyGradient: "from-[#00f0ff] via-[#10b981] to-[#ae040d]",
  },
];

const SLIDE_DURATION = 4800; // ms per slide

export default function HeroStats() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const [timerKey, setTimerKey] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % STATS.length);
    setTimerKey((k) => k + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + STATS.length) % STATS.length);
    setTimerKey((k) => k + 1);
  }, []);

  const selectSlide = useCallback((idx: number) => {
    setDirection(idx > activeIdx ? 1 : -1);
    setActiveIdx(idx);
    setTimerKey((k) => k + 1);
  }, [activeIdx]);

  // Auto-sliding interval for the single sliding window
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, timerKey]);

  const currentStat = STATS[activeIdx];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col justify-end text-left pb-2 space-y-3 max-w-sm w-full mx-auto lg:mx-0"
    >
      {/* =========================================================================
          SECTION 1: GDGC LEAD · MLRIT PILL BADGE (Image 1)
          Positioned on the right side of Abhinay
          ========================================================================= */}
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="self-start inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/85 border border-white/15 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.8)] group cursor-default spider-glitch-hover"
      >
        <div className="relative w-6 h-3.5 flex items-center justify-center shrink-0">
          <Image
            src="/logos/gdgc-mark.svg"
            alt="Google Developer Groups on Campus (GDGC)"
            width={24}
            height={14}
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(66,133,244,0.4)]"
          />
        </div>

        <span className="font-mono text-xs sm:text-[13px] font-bold tracking-wider text-zinc-100 group-hover:text-white transition-colors">
          GDGC LEAD · MLRIT
        </span>

        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse ml-0.5" />
      </motion.div>

      {/* =========================================================================
          SECTION 2: ALL 3 STATS IN 1 COMPACT SLIDING WINDOW
          Features auto-sliding carousel transitions, live increasing reels,
          interactive tab switchers, and energy bars. Fits perfectly in viewport.
          ========================================================================= */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="p-4 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-md space-y-3.5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.85)] relative overflow-hidden group"
      >
        {/* Background Halftone Texture & Ambient Glow */}
        <div className="absolute inset-0 halftone-dots opacity-15 pointer-events-none" />
        <div
          className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl pointer-events-none transition-colors duration-500"
          style={{
            backgroundColor: `${currentStat.accentColor}25`,
          }}
        />

        {/* Top Tagline Row with Sparkle & Slide Controls */}
        <div className="flex items-center justify-between gap-2 relative z-10">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full bg-[#ae040d]/20 border border-[#ae040d]/40 flex items-center justify-center text-[#ff4d5a] shadow-[0_0_10px_rgba(174,4,13,0.4)] shrink-0">
              <Sparkles className="w-3 h-3 animate-pulse" />
            </div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
              <span>LIVE TELEMETRY WINDOW</span>
            </span>
          </div>

          {/* Navigation Controls: Prev, Pause/Play, Next */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Stat"
              className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Play Auto-Slide" : "Pause Auto-Slide"}
              className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              title={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
            >
              {isPaused ? <Play className="w-2.5 h-2.5 fill-current" /> : <Pause className="w-2.5 h-2.5 fill-current" />}
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Stat"
              className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* User's Exact Tagline */}
        <p className="text-xs text-zinc-300 font-normal leading-relaxed pl-0.5 relative z-10">
          Turning raw data and intent into powerful autonomous realities.
        </p>

        {/* -----------------------------------------------------------------
            3 SLIDING TABS SWITCHER (Shows all 3, highlights active slide)
            ----------------------------------------------------------------- */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-black/60 border border-white/5 relative z-10">
          {STATS.map((s, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => selectSlide(idx)}
                className={`relative px-2 py-1.5 rounded-lg text-[10px] font-mono transition-all overflow-hidden flex flex-col items-center gap-1 text-center ${
                  isActive
                    ? "bg-white/10 text-white border border-white/20 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border border-transparent"
                }`}
              >
                <span className="font-semibold tracking-wider whitespace-nowrap">{s.shortLabel}</span>

                {/* Progress bar filling over duration for active slide */}
                <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                  {isActive && (
                    <motion.div
                      key={`timer-${idx}-${timerKey}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? undefined : "100%" }}
                      transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-[#ae040d] via-[#a855f7] to-[#00f0ff]"
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* -----------------------------------------------------------------
            THE 1 SLIDING WINDOW CONTENT
            Smooth directional slide transition with number animations
            ----------------------------------------------------------------- */}
        <div className="relative min-h-[118px] z-10 overflow-hidden pt-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentStat.id}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2 text-left"
            >
              {/* Stat Number & Title Row */}
              <div className="flex items-baseline gap-2.5">
                {/* Number Reels based on type */}
                {currentStat.numberType === "exp" && (
                  <div className="flex items-baseline font-bebas text-4xl sm:text-5xl text-white tracking-tight leading-none filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">
                    <SlidingDigitReel
                      items={[0, 1, 2]}
                      targetIndex={2}
                      duration={1.0}
                      delay={0.05}
                      triggerKey={timerKey}
                      className="h-[1.05em]"
                      itemClassName="h-[1.05em]"
                    />
                    <motion.span
                      key={`suffix-exp-${timerKey}`}
                      initial={{ opacity: 0, scale: 0.5, y: -4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      className="text-3xl sm:text-4xl text-[#ae040d] ml-0.5"
                    >
                      +
                    </motion.span>
                  </div>
                )}

                {currentStat.numberType === "repos" && (
                  <div className="flex items-baseline font-bebas text-4xl sm:text-5xl text-white tracking-tight leading-none filter drop-shadow-[0_2px_8px_rgba(168,85,247,0.3)]">
                    <SlidingDigitReel
                      items={[0, 1]}
                      targetIndex={1}
                      duration={0.8}
                      delay={0.1}
                      triggerKey={timerKey}
                      className="h-[1.05em]"
                      itemClassName="h-[1.05em]"
                    />
                    <SlidingDigitReel
                      items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6]}
                      targetIndex={16}
                      duration={1.2}
                      delay={0.05}
                      triggerKey={timerKey}
                      className="h-[1.05em]"
                      itemClassName="h-[1.05em]"
                    />
                    <motion.span
                      key={`suffix-repos-${timerKey}`}
                      initial={{ opacity: 0, scale: 0.5, y: -4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="text-3xl sm:text-4xl text-[#a855f7] ml-0.5"
                    >
                      +
                    </motion.span>
                  </div>
                )}

                {currentStat.numberType === "award" && (
                  <div className="flex items-baseline font-bebas text-4xl sm:text-5xl text-[#00f0ff] tracking-tight leading-none filter drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]">
                    <SlidingDigitReel
                      items={[0, 1]}
                      targetIndex={1}
                      duration={0.8}
                      delay={0.05}
                      triggerKey={timerKey}
                      className="h-[1.05em]"
                      itemClassName="h-[1.05em]"
                    />
                    <motion.span
                      key={`suffix-award-${timerKey}`}
                      initial={{ opacity: 0, scale: 0.5, y: -4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="text-2xl sm:text-3xl text-[#00f0ff] ml-0.5"
                    >
                      st
                    </motion.span>
                  </div>
                )}

                {/* Title & Subtitle */}
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-100">
                    {currentStat.title}
                  </span>
                  <span
                    className="text-[11px] font-mono tracking-tight"
                    style={{ color: currentStat.accentColor }}
                  >
                    {currentStat.subtitle}
                  </span>
                </div>
              </div>

              {/* Tag / Badge Pills for Active Stat */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {currentStat.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                  >
                    <span className={t.color}>{t.label}</span>
                    {t.note && <span className="ml-1 text-zinc-400">{t.note}</span>}
                  </span>
                ))}
              </div>

              {/* Animated Sliding Energy Bar */}
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-1.5">
                <motion.div
                  key={`energy-${currentStat.id}-${timerKey}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${currentStat.energyGradient}`}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
