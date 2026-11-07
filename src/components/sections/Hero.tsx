"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, FileDown } from "lucide-react";
import { personal } from "@/data/personal";
import HeroProfile from "./HeroProfile";
import HeroStats from "./HeroStats";
import GraffitiNameTag from "@/components/ui/GraffitiNameTag";
import SpiderDoodleArrow from "@/components/ui/SpiderDoodleArrow";

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

      {/* Spider-Verse Hand-Drawn Doodle Arrow: Arches directly from "ABHINAY" name tag to Abhinay's Face */}
      <SpiderDoodleArrow />

      {/* Top Framing Bar */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex items-center justify-between pb-6 border-b border-white/5">
        <div className="flex flex-col text-left">
          <span className="font-mono text-[11px] sm:text-xs font-bold text-[#ae040d] tracking-widest uppercase">
            ABHINAY MUSKU // SOL-3 AI ENGINEER
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] text-zinc-400 tracking-wider uppercase">
            DATA &amp; AI ENGINEER @ JMAN GROUP // CHENNAI
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-widest text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ae040d] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ae040d]" />
          </span>
          <span className="text-zinc-400 hidden sm:inline">LOCKED IN · AVAILABLE FOR MISSIONS</span>
          <span className="text-zinc-400 sm:hidden">LOCKED IN</span>
          <span className="text-[#ae040d] font-bold text-sm">＋</span>
        </div>
      </div>

      {/* Main 3-Column Content Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end my-auto py-4">
        {/* Left Column (lg:col-span-4): Bio & Identity. On mobile, contents allows Name Tag to be order-1 and Bio to be order-3 */}
        <div className="contents lg:flex lg:flex-col lg:col-span-4 xl:col-span-4 lg:items-start lg:text-left lg:order-1">
          {/* Graffiti "HELLO. I'M" Name Tag Badge: Order-1 on mobile so it comes first before portrait */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-none mb-2 pt-2 lg:pt-6 w-full flex justify-center lg:justify-start"
            aria-label="Hello, I'm Abhinay Musku"
          >
            <GraffitiNameTag />
          </motion.div>

          {/* Bio, Title, Location & CTA Buttons: Order-3 on mobile (after the portrait) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="order-3 lg:order-none flex flex-col items-start text-left w-full"
          >
            {/* Super Hero Architect Wordmark (Removed giant MUSKU per user directive) */}
            <div className="space-y-1 mt-2">
              <h1 className="font-spiderman text-2xl sm:text-3xl lg:text-4xl text-[#ae040d] tracking-[0.12em] uppercase font-bold spider-glitch-hover cursor-default">
                AUTONOMOUS AI ENGINEER
              </h1>
            </div>

            {/* Editorial Paragraph */}
            <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed max-w-sm mt-3">
              Talk is cheap — I&apos;m out here engineering autonomous GenAI agent swarms with one hand and taming multi-terabyte Databricks lakehouses with the other. High aura, zero data drop, and yeah... the shoes are untied. It&apos;s a choice.
            </p>

            {/* Location / Origin Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ae040d]/40 bg-[#ae040d]/10 text-[10px] sm:text-[11px] font-mono text-[#ff4d5a] mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ae040d] animate-pulse" />
              <span>#BEYOURSELF · SOL-3 · HYDERABAD</span>
            </div>

            {/* Superhero CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-5 w-full">
              <Link
                href="#projects"
                className="clip-spider-btn inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#ae040d] hover:bg-[#c50512] transition-all duration-150 shadow-[-2px_0_0_rgba(168,85,247,0.4),2px_0_0_rgba(225,6,0,0.6)]"
              >
                <span>Peep The Missions</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-zinc-300 rounded-lg bg-[#111115] hover:bg-[#18181f] border border-white/10 hover:border-white/20 hover:text-white transition-colors duration-150"
              >
                <FileDown className="w-4 h-4 text-zinc-400" />
                <span>Grab The Dossier</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Center Column (lg:col-span-4): Cutout Portrait with Parallax Depth (Order-2 on mobile) */}
        <motion.div
          style={{ y: portraitY }}
          className="lg:col-span-4 xl:col-span-4 flex justify-center items-end order-2 lg:order-2"
        >
          <HeroProfile />
        </motion.div>

        {/* Right Column (lg:col-span-4): Animated Interactive Telemetry & Stat Stack (Order-4 on mobile) */}
        <div className="order-4 lg:order-3 lg:col-span-4 xl:col-span-4 w-full">
          <HeroStats />
        </div>
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
