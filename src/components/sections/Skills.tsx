"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Cloud,
  Code,
  Eye,
  Database,
} from "lucide-react";
import { skillCategories } from "@/data/skills";

const ICON_MAP: Record<string, React.ElementType> = {
  Brain,
  Globe,
  Cloud,
  Code,
  Eye,
  Database,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d] flex items-center gap-1.5">
            <span className="text-[#00f0ff]">//</span>
            <span>THE SUIT &amp; ARSENAL</span>
          </p>
          <h2 className="font-spiderman text-4xl sm:text-6xl text-white tracking-[0.06em] spider-glitch-hover cursor-default">
            TECHNICAL STACK &amp; TOOLING
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-prose font-normal leading-relaxed">
            Weapons of choice across enterprise data lakehouses, generative AI agent protocols, and high-concurrency microservices.
          </p>
        </div>

        {/* Illustrative Ecosystem Blueprint Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#09090b]/80 border border-white/10 text-left relative overflow-hidden">
          <div className="absolute inset-0 halftone-dots opacity-10 pointer-events-none" />

          {/* Pillar 1 */}
          <div className="space-y-1.5 p-3 rounded-xl bg-black/50 border border-[#ef4444]/20 relative z-10">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#ef4444]">
              <span className="font-semibold tracking-wider uppercase">// PILLAR 01</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-pulse" />
            </div>
            <h4 className="text-sm font-semibold text-white">Enterprise Data Fabric</h4>
            <p className="text-[11px] text-zinc-400">
              Databricks · PySpark · Delta Lake · Microsoft Azure · AWS Lambda
            </p>
            <div className="text-[10px] font-mono text-zinc-500 pt-1 border-t border-white/5">
              High-throughput ACID pipelines &amp; sub-second batching
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-1.5 p-3 rounded-xl bg-black/50 border border-[#00f0ff]/20 relative z-10">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#00f0ff]">
              <span className="font-semibold tracking-wider uppercase">// PILLAR 02</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
            </div>
            <h4 className="text-sm font-semibold text-white">Agentic AI Protocols</h4>
            <p className="text-[11px] text-zinc-400">
              Google Gemini API · LangChain · FastAPI · Pydantic · Multi-Agent
            </p>
            <div className="text-[10px] font-mono text-zinc-500 pt-1 border-t border-white/5">
              Autonomous reasoning loops &amp; multi-tool function calling
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="space-y-1.5 p-3 rounded-xl bg-black/50 border border-[#a855f7]/20 relative z-10">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#a855f7]">
              <span className="font-semibold tracking-wider uppercase">// PILLAR 03</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
            </div>
            <h4 className="text-sm font-semibold text-white">Reactive Full-Stack</h4>
            <p className="text-[11px] text-zinc-400">
              Next.js 16 · React 19 · TypeScript · Angular · Tailwind CSS
            </p>
            <div className="text-[10px] font-mono text-zinc-500 pt-1 border-t border-white/5">
              Sub-16ms telemetry sync &amp; spatial spider-verse interfaces
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pt-1">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-[#ae040d] text-white"
                : "bg-[#0c0c0e] text-zinc-400 hover:text-white border border-white/5"
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === cat.title
                  ? "bg-[#ae040d] text-white"
                  : "bg-[#0c0c0e] text-zinc-400 hover:text-white border border-white/5"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category, idx) => {
            const IconComponent = ICON_MAP[category.iconName] || Brain;
            const isPurple =
              category.title.includes("Data") ||
              category.title.includes("Cloud") ||
              category.title.includes("Full-Stack") ||
              category.title.includes("Databases");

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-2xl p-6 antigravity-card flex flex-col justify-between gap-6 text-left group overflow-hidden ${
                  isPurple
                    ? "hover:border-[#a855f7]/60 hover:shadow-[-2px_0_0_rgba(168,85,247,0.4)]"
                    : "hover:border-[#ae040d]/60 hover:shadow-[-2px_0_0_rgba(0,240,255,0.35),2px_0_0_rgba(174,4,13,0.5)]"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2 rounded-md ${
                        isPurple
                          ? "bg-[#180a26] text-[#c084fc]"
                          : "bg-[#200508] text-[#ae040d]"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-600">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-spiderman text-xl sm:text-2xl text-white tracking-[0.06em]">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 transition-colors ${
                        isPurple
                          ? "bg-[#130a1e] border border-[#2a0e44]/60 hover:text-white hover:border-[#4c1d95]"
                          : "bg-[#14080a] border border-[#3b0d12]/60 hover:text-white hover:border-[#ae040d]/40"
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full ${
                          isPurple ? "bg-[#a855f7]" : "bg-[#ae040d]"
                        }`}
                      />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
