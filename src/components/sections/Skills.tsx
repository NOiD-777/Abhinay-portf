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
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d]">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em]">
            Technical Stack &amp; Tooling
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-normal">
            Technologies and frameworks applied across multi-cloud data pipelines, generative AI applications, and frontend systems.
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
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-xl p-6 border border-white/5 bg-[#09090b] hover:border-[#ae040d]/40 flex flex-col justify-between gap-6 text-left transition-colors duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-md bg-white/5 text-zinc-300">
                      <IconComponent className="w-4 h-4 text-[#ae040d]" />
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
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#121215] border border-white/5 text-xs font-mono text-zinc-300 hover:text-white hover:border-[#ae040d]/40 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#ae040d]" />
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
