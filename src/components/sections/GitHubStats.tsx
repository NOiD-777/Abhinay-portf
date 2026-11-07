"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, RefreshCw } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";
import { personal } from "@/data/personal";

const DEV_MEMES = [
  {
    category: "Code Review",
    headline: "👉 👈",
    caption: "Me reviewing my 3 AM commits",
  },
  {
    category: "Local Runtime",
    headline: "100%",
    caption: "Works on my machine ¯\\_(ツ)_/¯",
  },
  {
    category: "QA Protocol",
    headline: "Prod Tested",
    caption: "Real users are the best unit tests",
  },
  {
    category: "Merge Strategy",
    headline: "--force",
    caption: "git push & pray to prod",
  },
  {
    category: "Bug Resolution",
    headline: "Feature™",
    caption: "Undocumented autonomous behavior",
  },
];

export default function GitHubStats() {
  const [memeIndex, setMemeIndex] = useState(0);

  const nextMeme = () => {
    setMemeIndex((prev) => (prev + 1) % DEV_MEMES.length);
  };

  const currentMeme = DEV_MEMES[memeIndex];

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d] flex items-center gap-1.5">
            <span className="text-[#a855f7]">//</span>
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
            <p className="text-xs text-zinc-400">AI systems velocity</p>
          </div>

          <div className="rounded-xl p-6 border border-white/5 bg-[#09090b] space-y-1.5 text-left">
            <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">State Champion</span>
            <p className="text-3xl font-semibold text-white font-mono tracking-tight">#1 Winner</p>
            <p className="text-xs text-zinc-400">Swecha BuildAI4India</p>
          </div>

          <button
            type="button"
            onClick={nextMeme}
            className="group relative rounded-xl p-6 border border-white/5 bg-[#09090b] hover:border-[#ae040d]/40 space-y-1.5 text-left transition-all duration-200 cursor-pointer overflow-hidden focus:outline-none focus:ring-1 focus:ring-[#ae040d]"
            title="Click to roll next dev meme"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider group-hover:text-[#ae040d] transition-colors">
                {currentMeme.category}
              </span>
              <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 flex items-center gap-1 transition-colors">
                <RefreshCw className="w-2.5 h-2.5 transition-transform duration-300 group-hover:rotate-180" />
                <span>reroll</span>
              </span>
            </div>
            <p className="text-3xl font-semibold text-white font-mono tracking-tight group-hover:scale-105 transition-transform duration-200 origin-left">
              {currentMeme.headline}
            </p>
            <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
              {currentMeme.caption}
            </p>
          </button>
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
