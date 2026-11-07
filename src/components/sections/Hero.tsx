"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, ArrowDown } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";
import { personal } from "@/data/personal";
import HeroProfile from "./HeroProfile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Authoritative Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
        >
          {/* Spider-Verse Role Tag */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ae040d]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ae040d] animate-pulse" />
            <span className="text-zinc-500">EARTH-1610 //</span>
            <span className="text-white font-semibold">Full-Stack &amp; AI Engineer</span>
          </div>

          {/* Crisp, Strong Name with Spider-Verse Glitch Hover */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] text-white leading-[1.05] spider-glitch-hover cursor-default">
              Abhinay Musku
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 font-normal leading-snug max-w-xl tracking-[-0.015em]">
              Turning raw data into intelligence, and human intent into living autonomous systems.
            </p>
          </div>

          {/* Story Hook */}
          <div className="border-l border-[#ae040d]/60 pl-4 py-1 space-y-1">
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
              Data Engineer at <span className="text-white font-medium">JMAN Group</span> · GDG Tech Lead · Hackathon Winner.
            </p>
            <p className="text-xs text-zinc-500 font-mono">
              From campus hackrooms to enterprise lakehouses — building for scale and the leap of faith.
            </p>
          </div>

          {/* Solid Refined CTAs — Spider-Verse Accent */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-white rounded-lg bg-[#ae040d] hover:bg-[#c50512] transition-all duration-150 shadow-[-2px_0_0_rgba(0,240,255,0.4),2px_0_0_rgba(225,6,0,0.6)]"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-zinc-300 rounded-lg bg-[#111115] hover:bg-[#18181f] border border-white/10 hover:border-white/20 hover:text-white transition-colors duration-150"
            >
              <FileDown className="w-4 h-4 text-zinc-400" />
              <span>Resume PDF</span>
            </Link>
          </div>

          {/* Grounded Career Footprint with Official Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 w-full text-left">
            <div>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Current</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-10 h-5 shrink-0 flex items-center justify-center">
                  <Image
                    src="/logos/jman-logo.svg"
                    alt="JMAN Group"
                    width={40}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-zinc-100">JMAN Group</p>
              </div>
              <p className="text-xs text-zinc-500 font-normal mt-0.5">Data Engineer</p>
            </div>

            <div>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Leadership</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-5 h-4 shrink-0 flex items-center justify-center">
                  <Image
                    src="/logos/gdg-mark.svg"
                    alt="Google Developer Groups"
                    width={20}
                    height={16}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-zinc-100">GDG MLRIT</p>
              </div>
              <p className="text-xs text-zinc-500 font-normal mt-0.5">Technical Lead</p>
            </div>

            <div>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Recognition</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-8 h-4 shrink-0 flex items-center justify-center">
                  <Image
                    src="/logos/swecha.svg"
                    alt="Swecha Telangana"
                    width={32}
                    height={16}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-zinc-100">BuildAI4India</p>
              </div>
              <p className="text-xs text-zinc-500 font-normal mt-0.5">Swecha Telangana · 1st</p>
            </div>

            <div>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Open Source</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-5 h-5 rounded overflow-hidden bg-white/5 p-0.5 shrink-0 flex items-center justify-center text-zinc-400">
                  <Github className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm font-semibold text-zinc-100">16+ Repos</p>
              </div>
              <p className="text-xs text-zinc-500 font-normal mt-0.5">@NOiD-777</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Profile Cutout */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <HeroProfile />
        </div>
      </div>

      {/* Understated scroll prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1.5 text-xs text-zinc-600 font-mono pointer-events-none">
        <span>scroll down</span>
        <ArrowDown className="w-3 h-3 text-[#ae040d]" />
      </div>
    </section>
  );
}
