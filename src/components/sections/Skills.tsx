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
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em] spider-glitch-hover cursor-default">
            Technical Stack &amp; Tooling
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-normal">
            Weapons of choice across enterprise data lakehouses, generative AI agent protocols, and high-concurrency microservices.
          </p>
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
                className={`relative rounded-xl p-6 border bg-[#09090b] flex flex-col justify-between gap-6 text-left transition-all duration-200 group overflow-hidden ${
                  isPurple
                    ? "border-white/5 hover:border-[#3b0764] hover:bg-[#0c0715] hover:shadow-[-2px_0_0_rgba(168,85,247,0.35)]"
                    : "border-white/5 hover:border-[#ae040d]/50 hover:bg-[#0f0709] hover:shadow-[-2px_0_0_rgba(0,240,255,0.3),2px_0_0_rgba(174,4,13,0.4)]"
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
                    <h3 className="text-base font-semibold text-white">
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
