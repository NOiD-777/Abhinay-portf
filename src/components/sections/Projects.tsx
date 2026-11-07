"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";
import { projects, projectCategories } from "@/data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d] flex items-center gap-1.5">
            <span className="text-[#00f0ff]">//</span>
            <span>MISSIONS &amp; DISPATCHES</span>
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em]">
            Featured Systems &amp; Case Studies
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-normal">
            Every project is a mission to solve what matters: cultural preservation with AI, high-throughput social telemetry, and offline-first finance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-[#ae040d] text-white"
                  : "bg-[#0c0c0e] text-zinc-400 hover:text-white border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="spider-panel rounded-2xl p-7 flex flex-col justify-between gap-6 text-left group overflow-hidden"
            >
              {/* Subtle Comic Halftone Texture */}
              <div className="absolute inset-0 halftone-dots opacity-20 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Header row: Issue number + Category Pill + Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase">
                      ISSUE #0{idx + 1} //
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <Github className="w-4 h-4" />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md text-zinc-400 hover:text-[#ae040d] hover:bg-white/5 transition-colors"
                        aria-label={`${project.title} Live URL`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group-hover:text-[#ae040d] transition-colors"
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#ff0055] transition-colors flex items-center gap-2 tracking-[-0.02em] group-hover:spider-glitch">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#00f0ff]" />
                    </h3>
                  </Link>
                  <p className="text-xs font-mono text-[#ae040d] mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Story Directive / Mission Question */}
                <p className="text-xs font-mono text-zinc-400 italic border-l border-[#00f0ff]/40 pl-2.5 py-0.5">
                  &ldquo;{project.storyDirective}&rdquo;
                </p>

                {/* Description Logline */}
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Key Metrics */}
                {project.metrics && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#140920] text-purple-200 border border-[#2e0e47]/70 shadow-[-1px_0_0_rgba(0,240,255,0.25),1px_0_0_rgba(174,4,13,0.35)]"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Tech Stack Pills & Case Study Link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-zinc-600">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 shrink-0"
                >
                  <span>Case Study</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
