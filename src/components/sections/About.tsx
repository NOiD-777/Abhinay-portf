"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Database, Cpu, Code2, MapPin } from "lucide-react";
import { SpiderIcon } from "@/components/ui/Icons";
import { personal } from "@/data/personal";

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d] flex items-center gap-1.5">
            <span className="text-[#00f0ff]">//</span>
            <span>STORY ARC: EARTH-1610</span>
          </p>
          <h2 className="font-spiderman text-4xl sm:text-6xl text-white tracking-[0.06em] spider-glitch-hover cursor-default">
            THE STORY SO FAR
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 max-w-prose font-normal leading-relaxed">
            Three defining acts. From campus hackrooms to enterprise data crucibles and autonomous AI frontiers.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Earth-1610 Spider-Verse Dossier Card (Sticky Companion on Scroll) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center gap-5 lg:sticky lg:top-28 self-start"
          >
            {/* Comic Cover Dossier Box with Antigravity Elevation */}
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden antigravity-card shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9),-3px_0_0_rgba(0,240,255,0.35),3px_0_0_rgba(174,4,13,0.55)] group">
              {/* Halftone Comic Dots Pattern */}
              <div className="absolute inset-0 halftone-dots-spider opacity-25 pointer-events-none" />

              {/* Comic Book Header Banner */}
              <div className="relative z-10 px-4 py-2.5 bg-black/90 border-b border-white/10 flex items-center justify-between text-[11px] font-mono tracking-widest uppercase">
                <div className="flex items-center gap-1.5 text-[#00f0ff]">
                  <SpiderIcon className="w-3.5 h-3.5 text-[#ae040d]" />
                  <span className="font-spiderman tracking-[0.12em] text-white">SPIDER-MAN</span>
                  <span className="text-zinc-400">// ISSUE #01</span>
                </div>
                <span className="text-zinc-400 font-mono">VOL. 2026</span>
              </div>

              {/* Spider-Verse Centerpiece Graphic */}
              <div className="relative z-10 p-6 flex flex-col items-center text-center space-y-4">
                <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1b082e] via-[#0b0314] to-black border border-[#3b0764] flex items-center justify-center shadow-[0_0_30px_rgba(42,8,69,0.7)] group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-2xl halftone-dots-cyan opacity-40 pointer-events-none" />
                  <SpiderIcon className="w-14 h-14 text-[#ae040d] filter drop-shadow-[0_0_12px_rgba(225,6,0,0.8)] spider-glitch" />
                  <span className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#ae040d] text-white">
                    1610
                  </span>
                </div>

                {/* Identity & Status */}
                <div className="space-y-1">
                  <h3 className="font-spiderman text-2xl text-white tracking-[0.14em] spider-glitch-hover cursor-default">
                    ABHINAY MUSKU
                  </h3>
                  <p className="text-xs font-spiderman text-[#00f0ff] uppercase tracking-[0.14em]">
                    FULL-STACK &amp; AI ENGINEER
                  </p>
                </div>

                {/* Comic Narration Monologue Box (Miles Morales Style) */}
                <div className="w-full text-left p-3.5 rounded-lg bg-black/80 border border-white/10 space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    // NARRATIVE CAPTION:
                  </p>
                  <p className="text-xs text-zinc-200 font-mono italic leading-relaxed">
                    &ldquo;That&apos;s all it is, Miles. A leap of faith.&rdquo;
                  </p>
                  <p className="text-[10px] font-mono text-[#ae040d] uppercase pt-0.5">
                    Status: Active · Multi-Cloud Streaming
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metadata with Real Brand Vector Logos */}
            <div className="w-full max-w-sm flex flex-col gap-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border border-white/5 bg-[#09090b]">
                <div className="w-14 h-4 shrink-0 flex items-center justify-center">
                  <Image src="/logos/jman-logo.svg" alt="JMAN Group" width={56} height={16} className="w-full h-full object-contain" />
                </div>
                <span>Data Engineer · JMAN Group</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border border-white/5 bg-[#09090b]">
                <div className="w-5 h-4 shrink-0 flex items-center justify-center">
                  <Image src="/logos/gdgc-mark.svg" alt="GDGC" width={20} height={16} className="w-full h-full object-contain" />
                </div>
                <span>GDGC on Campus MLRIT · Technical Lead</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border border-white/5 bg-[#09090b]">
                <div className="w-4 h-4 shrink-0 flex items-center justify-center">
                  <Image src="/logos/mlrit.svg" alt="MLRIT" width={16} height={16} className="w-full h-full object-contain" />
                </div>
                <span>B.E. in Information Technology · MLRIT</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border border-white/5 bg-[#09090b]">
                <MapPin className="w-4 h-4 text-[#ae040d] shrink-0" />
                <span>{personal.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Narrative Story Beats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            {/* 3 Story Panels */}
            <div className="space-y-3.5">
              {personal.storyBeats.map((beat, idx) => {
                const isCyan = beat.accent === "cyan";
                const isCrimson = beat.accent === "crimson";

                const badgeStyle = isCyan
                  ? "text-[#00f0ff] border-[#00f0ff]/40 bg-[#00f0ff]/10"
                  : isCrimson
                  ? "text-[#ff4d5a] border-[#ae040d]/50 bg-[#ae040d]/10"
                  : "text-[#c084fc] border-[#a855f7]/40 bg-[#a855f7]/10";

                const panelBorder = isCyan
                  ? "hover:border-[#00f0ff]/40 shadow-[-2px_0_0_rgba(0,240,255,0.25)]"
                  : isCrimson
                  ? "hover:border-[#ae040d]/60 shadow-[-2px_0_0_rgba(174,4,13,0.45)]"
                  : "hover:border-[#a855f7]/50 shadow-[-2px_0_0_rgba(168,85,247,0.35)]";

                return (
                  <motion.div
                    key={beat.act}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.09,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`relative rounded-2xl p-6 antigravity-card space-y-3 group ${panelBorder}`}
                  >
                    <div className="absolute inset-0 halftone-dots opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-xl" />
                    {/* Chapter Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest border ${badgeStyle}`}>
                          {beat.act} · {beat.codename}
                        </span>
                        <h3 className="font-spiderman text-lg sm:text-xl text-white tracking-[0.06em]">
                          {beat.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {beat.location}
                      </span>
                    </div>

                    {/* Concise Narrative */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      {beat.narrative}
                    </p>

                    {/* Verified Real-World Field Photograph */}
                    {beat.image && (
                      <div className="relative mt-2 rounded-xl overflow-hidden border border-white/10 group/photo bg-black/60 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8)]">
                        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                          <Image
                            src={beat.image}
                            alt={beat.imageCaption || beat.title}
                            fill
                            className="object-cover object-center filter contrast-105 brightness-95 group-hover/photo:scale-[1.02] group-hover/photo:brightness-100 transition-all duration-500"
                          />
                          {/* Spider-Verse Halftone & Cinematic Gradient Vignette */}
                          <div className="absolute inset-0 halftone-dots opacity-15 pointer-events-none" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                          {/* Top-Right Official Google Developer Groups Emblem */}
                          <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                            <div className="w-4 h-2.5 relative flex items-center justify-center">
                              <Image
                                src="/logos/gdgc-mark.svg"
                                alt="GDGC"
                                width={16}
                                height={10}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="font-semibold text-white">GDGC MLRIT</span>
                          </div>

                          {/* Bottom Telemetry Caption Bar */}
                          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                            <span className="text-[#00f0ff] flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-[#00f0ff]/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
                              <span>FIELD LOG // STAGE PRESENTATION</span>
                            </span>
                            <span className="text-zinc-300 hidden sm:inline px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10">
                              CORE TEAM · TECHNICAL LEAD
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Milestone Chip */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ae040d]" />
                        <span>{beat.milestone}</span>
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-xl border border-white/5 bg-[#09090b] flex flex-col gap-2">
                <div className="p-1.5 rounded-md bg-[#ae040d]/10 text-[#ae040d] w-fit">
                  <Database className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-white text-xs">Enterprise Data</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-normal">
                  Databricks, PySpark &amp; Delta Lake for multi-cloud financial streaming.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/5 bg-[#09090b] flex flex-col gap-2">
                <div className="p-1.5 rounded-md bg-[#a855f7]/15 text-[#c084fc] w-fit">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-white text-xs">GenAI &amp; Agents</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-normal">
                  Gemini API, LangChain &amp; agentic reasoning architectures.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/5 bg-[#09090b] flex flex-col gap-2">
                <div className="p-1.5 rounded-md bg-[#00f0ff]/10 text-[#00f0ff] w-fit">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-white text-xs">Full-Stack Core</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-normal">
                  Next.js, Angular, TypeScript &amp; high-concurrency microservices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
