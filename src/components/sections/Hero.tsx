"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, ArrowDown } from "lucide-react";
import { personal } from "@/data/personal";

// Dynamically load 3D Canvas
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] sm:h-[480px] lg:h-[550px] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border border-white/10 border-t-[#ae040d] animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Authoritative Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
        >
          {/* Subtle Role Tag */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ae040d]">
            <span className="w-2 h-2 rounded-full bg-[#ae040d]" />
            <span>Full-Stack &amp; AI Engineer</span>
          </div>

          {/* Crisp, Strong Name */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] text-white leading-[1.05]">
              Abhinay Musku
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 font-normal leading-snug max-w-xl tracking-[-0.015em]">
              Architecting scalable enterprise data pipelines and production Generative AI systems.
            </p>
          </div>

          {/* Concise Professional Bio */}
          <p className="text-sm sm:text-base text-zinc-400 max-w-lg leading-relaxed font-normal">
            Data Engineer at <span className="text-zinc-200 font-medium">JMAN Group</span> developing high-throughput Databricks &amp; PySpark pipelines. Winner of the BuildAI4India Hackathon and Technical Lead at Google Developers Group.
          </p>

          {/* Refined CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium text-white rounded-lg bg-[#ae040d] hover:bg-[#c50512] transition-colors duration-200"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium text-zinc-300 rounded-lg bg-[#111115] hover:bg-[#18181f] border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200"
            >
              <FileDown className="w-4 h-4 text-zinc-400" />
              <span>Resume PDF</span>
            </Link>
          </div>

          {/* Grounded Career Footprint */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 w-full text-left">
            <div>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Current</p>
              <p className="text-sm font-medium text-zinc-200 mt-1">JMAN Group</p>
              <p className="text-xs text-zinc-500">Data Engineer</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Leadership</p>
              <p className="text-sm font-medium text-zinc-200 mt-1">GDG MLRIT</p>
              <p className="text-xs text-zinc-500">Technical Lead</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Recognition</p>
              <p className="text-sm font-medium text-zinc-200 mt-1">BuildAI4India</p>
              <p className="text-xs text-zinc-500">Hackathon Winner</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Open Source</p>
              <p className="text-sm font-medium text-zinc-200 mt-1">16+ Repos</p>
              <p className="text-xs text-zinc-500">@NOiD-777</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Neural Network */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <HeroScene />
        </motion.div>
      </div>

      {/* Understated scroll prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1.5 text-xs text-zinc-600 font-mono pointer-events-none">
        <span>scroll down</span>
        <ArrowDown className="w-3 h-3 text-[#ae040d]" />
      </div>
    </section>
  );
}
