"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Layers,
  Cpu,
  Cloud,
  Zap,
  CheckCircle2,
  Workflow,
  Activity,
  Sparkles,
} from "lucide-react";
import { experiences } from "@/data/experience";

function JmanFieldDossier() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-1">
      {/* Left Column: Real-World On-Site Photograph & Steve Jobs Wall Quote */}
      <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 group/jman shadow-[0_15px_35px_-10px_rgba(0,0,0,0.9)] flex flex-col justify-between">
        <div className="relative w-full aspect-[568/660] overflow-hidden">
          <Image
            src="/images/jman-abhinay.webp"
            alt="Abhinay Musku on-site at JMAN Group office with Steve Jobs quote wall"
            fill
            priority
            className="object-cover object-center filter contrast-105 brightness-95 group-hover/jman:scale-[1.02] group-hover/jman:brightness-100 transition-all duration-500"
          />
          {/* Halftone & Vignette Overlays */}
          <div className="absolute inset-0 halftone-dots opacity-15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Top Header Telemetry & Logo */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#00f0ff] uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
              <span>ON-SITE ARTIFACT // JMAN FORGE</span>
            </span>
            <div className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 flex items-center">
              <div className="w-12 h-3 relative flex items-center justify-center">
                <Image
                  src="/logos/jman-logo.svg"
                  alt="JMAN Group"
                  width={48}
                  height={12}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom Telemetry & Status Stamp (Clean overlay so Abhinay & Steve Jobs wall are 100% visible) */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-zinc-300">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md border border-white/10 text-[#ef4444] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-pulse" />
              <span>DATA &amp; AI ENGINEER · JMAN FORGE</span>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md border border-white/10 text-zinc-400">
              MAY 2026 – PRESENT
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Illustrative Medallion Data Lakehouse Architecture Schematic */}
      <div className="lg:col-span-7 antigravity-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-5 text-left border border-white/10 bg-[#09090b]/80 relative overflow-hidden">
        {/* Subtle grid watermark */}
        <div className="absolute inset-0 halftone-dots opacity-15 pointer-events-none" />

        {/* Header */}
        <div className="space-y-1 relative z-10">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#00f0ff] flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>SYSTEM BLUEPRINT // DATA FABRIC WEAPONRY</span>
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20">
              COOKING LIVE IN PROD
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight">
            Multi-Cloud Medallion Lakehouse Engine
          </h4>
          <p className="text-xs text-zinc-400 font-normal leading-relaxed">
            Engineered to swallow high-velocity financial streams whole and spit out pristine ACID Delta Lake intelligence. Sub-second queries, zero panic.
          </p>
        </div>

        {/* 4 Connected Pipeline Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
          {/* Stage 1: Ingestion & Gateways */}
          <div className="p-3.5 rounded-xl bg-black/60 border border-[#00f0ff]/20 hover:border-[#00f0ff]/40 transition-colors space-y-1.5 group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#00f0ff] font-semibold tracking-wider flex items-center gap-1">
                <Cloud className="w-3 h-3" /> STAGE 01 // INGESTION
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
            </div>
            <p className="text-xs font-semibold text-zinc-100">Multi-Cloud Streaming Gateways</p>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Azure REST API microservices &amp; AWS Lambda hooks ingesting high-volume transaction feeds with zero data drop.
            </p>
          </div>

          {/* Stage 2: Databricks PySpark Engine */}
          <div className="p-3.5 rounded-xl bg-black/60 border border-[#ef4444]/20 hover:border-[#ef4444]/40 transition-colors space-y-1.5 group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#ef4444] font-semibold tracking-wider flex items-center gap-1">
                <Cpu className="w-3 h-3" /> STAGE 02 // COMPUTE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
            </div>
            <p className="text-xs font-semibold text-zinc-100">Databricks &amp; PySpark Cluster</p>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Distributed in-memory transformation engine optimized for 30% query throughput boost and sub-second batching.
            </p>
          </div>

          {/* Stage 3: Delta Lake Medallion Storage */}
          <div className="p-3.5 rounded-xl bg-black/60 border border-[#a855f7]/20 hover:border-[#a855f7]/40 transition-colors space-y-1.5 group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#a855f7] font-semibold tracking-wider flex items-center gap-1">
                <Layers className="w-3 h-3" /> STAGE 03 // MEDALLION
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
            </div>
            <p className="text-xs font-semibold text-zinc-100">Delta Lake Medallion Tiers</p>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Bronze (Raw) → Silver (Enforced Schema) → Gold (Financial KPI Marts) delivering 99.9% batch ETL reliability.
            </p>
          </div>

          {/* Stage 4: Autonomous GenAI Layer */}
          <div className="p-3.5 rounded-xl bg-black/60 border border-[#10b981]/20 hover:border-[#10b981]/40 transition-colors space-y-1.5 group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#10b981] font-semibold tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> STAGE 04 // GENAI QA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            </div>
            <p className="text-xs font-semibold text-zinc-100">LangChain Anomaly Triaging</p>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Autonomous GenAI verification pipelines checking tabular schemas and reducing manual triage time by 40%.
            </p>
          </div>
        </div>

        {/* Bottom Performance Metric Ribbon */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono relative z-10">
          <span className="px-2.5 py-1 rounded-md bg-[#ef4444]/10 text-red-300 border border-[#ef4444]/20 flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-[#ef4444]" />
            <span>+30% Query Throughput</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-[#00f0ff]/10 text-cyan-300 border border-[#00f0ff]/20 flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-[#00f0ff]" />
            <span>99.9% Batch ETL Reliability</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-[#10b981]/10 text-emerald-300 border border-[#10b981]/20 flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-[#10b981]" />
            <span>-40% Triage Turnaround</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function AiAxissSchematic() {
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#09090b]/80 border border-purple-500/20 text-left space-y-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#a855f7] flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-[#a855f7]" />
          <span>REACTIVE ENGINE // ZERO-LAG TELEMETRY BLUEPRINT</span>
        </span>
        <span className="text-[10px] font-mono text-purple-300 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
          BUTTER SMOOTH 60 FPS
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1">
          <p className="font-mono text-[10px] text-zinc-400 uppercase">Input Telemetry</p>
          <p className="font-semibold text-white text-xs">High-Frequency Client Events</p>
          <p className="text-[11px] text-zinc-400">Real-time operation metric streams pushed over RESTful APIs</p>
        </div>
        <div className="p-3 rounded-xl bg-black/60 border border-purple-500/20 space-y-1">
          <p className="font-mono text-[10px] text-[#a855f7] uppercase">Reactive State Core</p>
          <p className="font-semibold text-white text-xs">Angular &amp; RxJS Store</p>
          <p className="text-[11px] text-zinc-400">Decoupled observable streams synchronizing client-server state</p>
        </div>
        <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1">
          <p className="font-mono text-[10px] text-zinc-400 uppercase">Operational Output</p>
          <p className="font-semibold text-white text-xs">Sub-16ms Viewport Sync</p>
          <p className="text-[11px] text-zinc-400">Responsive dashboards rendering high-fidelity telemetry with zero jitter</p>
        </div>
      </div>
    </div>
  );
}

function BrihaspathiSchematic() {
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#09090b]/80 border border-pink-500/20 text-left space-y-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#ec4899] flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#ec4899]" />
          <span>EDGE SILICON // CCTV CRIMINAL DETECTION SCHEMATIC</span>
        </span>
        <span className="text-[10px] font-mono text-pink-300 px-2 py-0.5 rounded bg-pink-500/10 border border-pink-500/20">
          92% ACCURACY · TINY SILICON
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1">
          <p className="font-mono text-[10px] text-zinc-400 uppercase">CCTV Camera Sensor Feed</p>
          <p className="font-semibold text-white text-xs">Real-Time Street Optical Feed</p>
          <p className="text-[11px] text-zinc-400">Continuous video input capturing live perimeter feeds to scan for criminals and threats</p>
        </div>
        <div className="p-3 rounded-xl bg-black/60 border border-pink-500/20 space-y-1">
          <p className="font-mono text-[10px] text-[#ec4899] uppercase">Inference Engine</p>
          <p className="font-semibold text-white text-xs">FastAPI &amp; OpenCV Batching</p>
          <p className="text-[11px] text-zinc-400">Asynchronous request batching &amp; custom skip-frame logic cutting CPU load by 35%</p>
        </div>
        <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1">
          <p className="font-mono text-[10px] text-zinc-400 uppercase">Edge Silicon Deployment</p>
          <p className="font-semibold text-white text-xs">Target &amp; Criminal Flagging</p>
          <p className="text-[11px] text-zinc-400">~92% detection accuracy executing purely on constrained local chips</p>
        </div>
      </div>
    </div>
  );
}

const TECH_TAGS: Record<string, string[]> = {
  "Data & AI Engineer": ["Databricks", "PySpark", "Delta Lake", "Azure", "AWS Lambda", "LangChain"],
  "Data Engineer": ["Databricks", "PySpark", "Delta Lake", "Azure", "AWS Lambda", "LangChain"],
  "Software Engineer Intern": ["AI Pipelines", "React", "TypeScript", "Data Quality", "REST APIs"],
  "Angular Developer Intern": ["Angular", "TypeScript", "RxJS", "RESTful APIs", "WebSocket Telemetry"],
  "Software Developer Intern — AI & ML": ["Python", "FastAPI", "OpenCV", "Edge Silicon", "Biometrics"],
};

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d] flex items-center gap-1.5">
            <span className="text-[#00f0ff]">//</span>
            <span>CHRONICLES: SOL-3</span>
          </p>
          <h2 className="font-spiderman text-4xl sm:text-6xl text-white tracking-[0.06em] spider-glitch-hover cursor-default">
            WHERE WE COOKED IN PRODUCTION
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-prose font-normal leading-relaxed">
            Theory is cool, but have you ever kept a multi-cloud financial pipeline alive during a traffic surge? Yeah, we don&apos;t drop bytes here. No cap.
          </p>
        </div>

        {/* Timeline Web Spine with Dynamic Scroll-Drawn Electrified Thread */}
        <div ref={timelineRef} className="relative border-l border-white/10 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-14">
          {/* Base track */}
          <div className="absolute -left-[1px] top-2 bottom-2 w-[2px] bg-white/5 pointer-events-none" />

          {/* Dynamic Scroll-Drawn Electrified Web Strand */}
          <div className="absolute -left-[1px] top-2 bottom-2 w-[2px] overflow-hidden pointer-events-none">
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="w-full h-full bg-gradient-to-b from-[#00f0ff] via-[#ae040d] to-[#a855f7] shadow-[0_0_10px_rgba(0,240,255,0.8),0_0_14px_rgba(174,4,13,0.9)]"
            />
          </div>

          {experiences.map((exp, expIdx) => {
            const isJMAN = exp.company.includes("JMAN");
            const isAiAxiss = exp.company.includes("AXISS");
            const isBrihaspathi = exp.company.includes("Brihaspathi");

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: expIdx * 0.1 }}
                className="relative text-left space-y-6"
              >
                {/* Spider-Verse Web Node Dot */}
                <div
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full flex items-center justify-center bg-black border border-[#ae040d]/60 shadow-[-2px_0_0_rgba(0,240,255,0.7),2px_0_0_rgba(174,4,13,0.8)]"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping opacity-60"
                  />
                  <div
                    className="absolute w-1.5 h-1.5 rounded-full bg-[#ae040d]"
                  />
                </div>

                {/* Chapter Telemetry + Company Info */}
                <div className="space-y-2 border-b border-white/5 pb-3">
                  <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase">
                    {exp.chapter}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      {isJMAN ? (
                        <div className="w-20 h-9 rounded-lg bg-white/5 border border-white/10 px-2 py-1 shrink-0 flex items-center justify-center">
                          <Image
                            src="/logos/jman-logo.svg"
                            alt="JMAN Group Official Logo"
                            width={72}
                            height={32}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-[#140824] border border-[#3b0764]/70 shrink-0 flex items-center justify-center text-xs font-mono font-bold text-purple-300">
                          {exp.company.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        {exp.company}
                      </h3>
                    </div>
                    <span className="text-xs text-zinc-400 font-mono">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Illustrative Dossiers & Architectural Schematics */}
                {isJMAN && <JmanFieldDossier />}
                {isAiAxiss && <AiAxissSchematic />}
                {isBrihaspathi && <BrihaspathiSchematic />}

                {/* Roles */}
                <div className="space-y-4">
                  {exp.roles.map((role, roleIdx) => {
                    const tags = TECH_TAGS[role.title] || [];

                    return (
                      <div
                        key={roleIdx}
                        className="antigravity-card rounded-2xl p-6 sm:p-7 space-y-4"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <h4 className="text-base font-semibold text-zinc-100">
                              {role.title}
                            </h4>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#130a1e] text-purple-300 border border-[#2e0e47]/60">
                              {role.type}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-zinc-400">
                            {role.period}
                          </span>
                        </div>

                        {/* Mission Directive */}
                        <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed border-l border-[#ae040d]/60 pl-3 py-0.5">
                          {role.mission}
                        </p>

                        {/* Key Milestones */}
                        <div className="space-y-2 pt-1">
                          {role.milestones.map((milestone, mIdx) => (
                            <div key={mIdx} className="flex items-start gap-2.5 text-xs text-zinc-400 font-normal leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shrink-0 mt-1.5" />
                              <span>{milestone}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Mini Tags */}
                        {tags.length > 0 && (
                          <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mr-1">
                              Stack:
                            </span>
                            {tags.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
