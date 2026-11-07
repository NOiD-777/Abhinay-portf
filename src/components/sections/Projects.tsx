"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Workflow } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";
import { projects } from "@/data/projects";

const PROJECT_FLOWS: Record<string, { steps: string[]; badge: string }> = {
  artyatra: {
    badge: "VISION PIPELINE",
    steps: ["Artwork Upload", "Gemini Vision API", "LangChain Reasoning", "8 Art Forms Mapped"],
  },
  "autonomous-career-agent": {
    badge: "AGENTIC WORKFLOW",
    steps: ["Opportunity Telemetry", "Tool Calling", "Pydantic Schemas", "Automated Dispatch"],
  },
  "twitter-sentiment-analysis": {
    badge: "SOCIAL RADAR // NLP",
    steps: ["1.6M Social Stream", "NLTK Tokenizer", "Classifier Benchmark", "City Sentiment Decoded"],
  },
  "upi-offline-vault": {
    badge: "CRYPTOGRAPHIC PROTOCOL",
    steps: ["USSD Payload", "AES Handshake", "Local SQLite Vault", "Offline Settlement"],
  },
  "portfolio-miles-morales": {
    badge: "SPATIAL INTERFACE",
    steps: ["Next.js 16", "Turbopack", "GSAP & Motion", "Sol-3 Glitch"],
  },
  "face-recognition-edge": {
    badge: "CCTV SURVEILLANCE",
    steps: ["Live CCTV Stream", "Skip-Frame Queue", "FastAPI Engine", "Identify Criminals @ 92%"],
  },
  "edge-biometric-vision": {
    badge: "CCTV SURVEILLANCE",
    steps: ["Live CCTV Stream", "Skip-Frame Queue", "FastAPI Engine", "Identify Criminals @ 92%"],
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d] flex items-center gap-1.5">
            <span className="text-[#a855f7]">//</span>
            <span>MISSIONS &amp; DISPATCHES</span>
          </p>
          <h2 className="font-spiderman text-4xl sm:text-6xl text-white tracking-[0.06em] spider-glitch-hover cursor-default">
            THE MISSIONS &amp; TROPHIES
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-prose font-normal leading-relaxed">
            Real battle-tested systems shipped to production: 1st place state hackathons, Databricks financial lakehouses, CCTV criminal detection, and autonomous AI swarms with maximum aura.
          </p>
        </div>

        {/* Projects Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: idx * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="antigravity-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between gap-6 text-left group overflow-hidden"
            >
              {/* Subtle Comic Halftone Texture */}
              <div className="absolute inset-0 halftone-dots opacity-20 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Header row: Issue number + Category Pill + Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#a855f7] uppercase">
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
                    <h3 className="font-spiderman text-2xl sm:text-3xl text-white group-hover:text-[#ff0055] transition-colors flex items-center gap-2 tracking-[0.06em] group-hover:spider-glitch">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#a855f7]" />
                    </h3>
                  </Link>
                  <p className="text-xs font-mono text-[#ae040d] mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Story Directive / Mission Question */}
                <p className="text-xs font-mono text-zinc-400 italic border-l border-[#a855f7]/40 pl-2.5 py-0.5">
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
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#140920] text-purple-200 border border-[#2e0e47]/70 shadow-[-1px_0_0_rgba(168,85,247,0.35),1px_0_0_rgba(174,4,13,0.35)]"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                {/* Illustrative Micro Architecture Pipeline */}
                {PROJECT_FLOWS[project.slug] && (
                  <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#a855f7] uppercase tracking-wider flex items-center gap-1">
                        <Workflow className="w-3 h-3 text-[#a855f7]" />
                        <span>PIPELINE // {PROJECT_FLOWS[project.slug].badge}</span>
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-zinc-300">
                      {PROJECT_FLOWS[project.slug].steps.map((step, sIdx, arr) => (
                        <div key={step} className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-200">
                            {step}
                          </span>
                          {sIdx < arr.length - 1 && (
                            <span className="text-[#ae040d] font-bold">→</span>
                          )}
                        </div>
                      ))}
                    </div>
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
