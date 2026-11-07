"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";
import { personal } from "@/data/personal";

export default function GitHubStats() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d] flex items-center gap-1.5">
            <span className="text-[#00f0ff]">//</span>
            <span>TELEMETRY // SPIDER-GRID COMMITS</span>
          </p>
          <h2 className="font-spiderman text-3xl sm:text-5xl text-white tracking-[0.06em] spider-glitch-hover cursor-default">
            COMMITS IN THE DARK
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-normal">
            Midnight pushes, green squares, and zero uncommitted chaos under @NOiD-777. Locked in 24/7.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl p-6 border border-white/5 bg-[#09090b] space-y-1.5 text-left">
            <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Public Repos</span>
            <p className="text-3xl font-semibold text-white font-mono tracking-tight">16+</p>
            <p className="text-xs text-zinc-400">Shipped &amp; battle-tested</p>
          </div>

          <div className="rounded-xl p-6 border border-white/5 bg-[#09090b] space-y-1.5 text-left">
            <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Weaponry</span>
            <p className="text-3xl font-semibold text-white font-mono tracking-tight">Python / TS</p>
            <p className="text-xs text-zinc-400">Full-stack lethality</p>
          </div>

          <div className="rounded-xl p-6 border border-white/5 bg-[#09090b] space-y-1.5 text-left">
            <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Cadence</span>
            <p className="text-3xl font-semibold text-white font-mono tracking-tight">Relentless</p>
            <p className="text-xs text-zinc-400">Zero days off GitHub</p>
          </div>

          <div className="rounded-xl p-6 border border-white/5 bg-[#09090b] space-y-1.5 text-left">
            <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Deployments</span>
            <p className="text-3xl font-semibold text-white font-mono tracking-tight">Cloud &amp; Edge</p>
            <p className="text-xs text-zinc-400">Live prod apps</p>
          </div>
        </div>

        {/* GitHub External Banner */}
        <div className="rounded-2xl p-8 border border-white/5 bg-[#09090b] flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Github className="w-4 h-4 text-[#ae040d]" />
              <span>Peek The Source Code</span>
            </h3>
            <p className="text-sm text-zinc-400 max-w-lg font-normal">
              Inspect battle-tested codebases: ArtYatra, deep sentiment pipelines, autonomous AI agents, and high-frequency backends.
            </p>
          </div>

          <Link
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 hover:border-white/20 transition-all duration-200 shrink-0"
          >
            <span>Visit @NOiD-777</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
