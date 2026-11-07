"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, FileDown } from "lucide-react";
import { personal } from "@/data/personal";
import HeroProfile from "./HeroProfile";
import GraffitiNameTag from "@/components/ui/GraffitiNameTag";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll Experience Parallax Layers
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  return (
    <motion.section
      ref={containerRef}
      id="top"
      style={{ opacity: contentFade }}
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      {/* Background Comic Halftone Texture */}
      <div className="absolute inset-0 halftone-dots opacity-20 pointer-events-none" />

      {/* Top Framing Bar */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex items-center justify-between pb-6 border-b border-white/5">
        <div className="flex flex-col text-left">
          <span className="font-mono text-[11px] sm:text-xs font-bold text-[#ae040d] tracking-widest uppercase">
            FULL-STACK &amp; AI ENGINEER
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] text-zinc-400 tracking-wider uppercase">
            DATA ENGINEER @ JMAN GROUP · HYDERABAD
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-widest text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ae040d] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ae040d]" />
          </span>
          <span className="text-zinc-400 hidden sm:inline">AVAILABLE FOR MISSIONS</span>
          <span className="text-zinc-400 sm:hidden">AVAILABLE</span>
          <span className="text-[#ae040d] font-bold text-sm">＋</span>
        </div>
      </div>

      {/* Main 3-Column Content Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end my-auto py-4">
        {/* Left Column (lg:col-span-4): Bio & Identity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 xl:col-span-4 flex flex-col items-start text-left order-2 lg:order-1"
        >
          {/* Spider-Verse Graffiti "HELLO. I'M" Name Tag Badge (inspired by Into the Spider-Verse) */}
          <div className="mb-3 pt-6" aria-label="Hello, I'm Abhinay Musku">
            <GraffitiNameTag />
          </div>

          {/* Surname & Super Hero Architect Wordmark */}
          <div className="space-y-1">
            <h1 className="font-spiderman text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-[0.06em] leading-[0.88] uppercase spider-glitch-hover cursor-default">
              MUSKU
            </h1>
            <p className="font-spiderman text-base sm:text-lg md:text-xl text-[#ae040d] tracking-[0.12em] uppercase font-bold">
              FULL-STACK &amp; AI ARCHITECT
            </p>
          </div>

          {/* Editorial Paragraph */}
          <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed max-w-sm mt-3">
            I architect enterprise data pipelines, production Generative AI systems, and high-performance web applications with the precision of a spider-sense. Building resilient architectures that transform complex data into effortless intelligence.
          </p>

          {/* Location / Origin Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ae040d]/40 bg-[#ae040d]/10 text-[10px] sm:text-[11px] font-mono text-[#ff4d5a] mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ae040d] animate-pulse" />
            <span>#BEYOURSELF · EARTH-1610 · HYDERABAD</span>
          </div>

          {/* Miles Morales Inspired Superhero CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-5 w-full">
            <Link
              href="#projects"
              className="clip-spider-btn inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#ae040d] hover:bg-[#c50512] transition-all duration-150 shadow-[-2px_0_0_rgba(0,240,255,0.4),2px_0_0_rgba(225,6,0,0.6)]"
            >
              <span>Explore Missions</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-zinc-300 rounded-lg bg-[#111115] hover:bg-[#18181f] border border-white/10 hover:border-white/20 hover:text-white transition-colors duration-150"
            >
              <FileDown className="w-4 h-4 text-zinc-400" />
              <span>Resume PDF</span>
            </Link>
          </div>
        </motion.div>

        {/* Center Column (lg:col-span-4): Cutout Portrait with Parallax Depth */}
        <motion.div
          style={{ y: portraitY }}
          className="lg:col-span-4 xl:col-span-4 flex justify-center items-end order-1 lg:order-2"
        >
          <HeroProfile />
        </motion.div>

        {/* Right Column (lg:col-span-4): Spark Tagline & Stacked Stat Counters */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 xl:col-span-4 flex flex-col justify-end text-left order-3 pb-2"
        >
          {/* Spark Tagline */}
          <div className="flex items-start gap-3 mb-6 max-w-xs">
            <div className="w-7 h-7 rounded-full bg-[#ae040d]/15 border border-[#ae040d]/30 flex items-center justify-center shrink-0 text-[#ae040d]">
              <span className="text-sm font-bold">✦</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-snug">
              Turning raw data and intent into powerful autonomous realities.
            </p>
          </div>

          {/* Clean Stat Stack with Dividers */}
          <div className="space-y-4 max-w-xs w-full">
            {/* Stat 1: Experience */}
            <div className="border-t border-white/10 pt-3">
              <div className="flex items-baseline gap-2">
                <span className="font-bebas text-4xl sm:text-5xl text-white tracking-tight leading-none">
                  2+
                </span>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  Years Experience
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                Data &amp; AI Engineering @ JMAN Group
              </p>
            </div>

            {/* Stat 2: Projects / Repos */}
            <div className="border-t border-white/10 pt-3">
              <div className="flex items-baseline gap-2">
                <span className="font-bebas text-4xl sm:text-5xl text-white tracking-tight leading-none">
                  16+
                </span>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  Production Repos
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                Full-Stack, GenAI &amp; Distributed Systems
              </p>
            </div>

            {/* Stat 3: Swecha Championship */}
            <div className="border-t border-white/10 pt-3 border-b border-white/10 pb-3">
              <div className="flex items-baseline gap-2">
                <span className="font-bebas text-4xl sm:text-5xl text-[#00f0ff] tracking-tight leading-none">
                  1st
                </span>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  BuildAI4India Winner
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                Swecha Telangana State Hackathon
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section Framing Bar: Connects to Next Section */}
      <div className="relative z-20 max-w-7xl w-full mx-auto pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="font-spiderman text-base sm:text-lg text-white tracking-[0.14em] uppercase">
            SELECTED PROJECTS
          </span>
          <span className="hidden sm:inline-block w-16 h-[1px] bg-white/15" />
          <span className="hidden md:inline text-[11px] text-zinc-500">
            CHAPTER 01 // PRODUCTION ARCHITECTURES &amp; SYSTEMS
          </span>
        </div>

        <Link
          href="#projects"
          className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          <span className="tracking-wider uppercase text-[11px] sm:text-xs">VIEW ALL PROJECTS</span>
          <span className="text-[#ae040d] group-hover:translate-x-1 transition-transform">⟶</span>
        </Link>
      </div>
    </motion.section>
  );
}
