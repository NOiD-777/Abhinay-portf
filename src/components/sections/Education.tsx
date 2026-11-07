"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { educationList } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d] flex items-center gap-1.5">
            <span className="text-[#a855f7]">//</span>
            <span>THE ORIGIN LAB &amp; TROPHIES</span>
          </p>
          <h2 className="font-spiderman text-4xl sm:text-6xl text-white tracking-[0.06em] spider-glitch-hover cursor-default">
            WHERE THE POWERS GOT FORGED
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-prose font-normal leading-relaxed">
            Where the core instincts got forged: Computer Science foundations at MLRIT, leading hundreds of student builders, and bagging state-level championships.
          </p>
        </div>

        {/* Education Card */}
        {educationList.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="antigravity-card rounded-2xl p-7 sm:p-8 space-y-5 text-left"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-1 shrink-0 flex items-center justify-center">
                  <Image
                    src="/logos/mlrit.svg"
                    alt="MLRIT Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#ae040d]">
                    {edu.degree} in {edu.field}
                  </p>
                  <h3 className="font-spiderman text-2xl sm:text-3xl text-white tracking-[0.06em] mt-0.5">
                    {edu.institution}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col sm:items-end">
                <span className="text-sm font-semibold text-white font-mono">
                  CGPA: {edu.gpa}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  {edu.period} · {edu.location}
                </span>
              </div>
            </div>

            {/* Honors & Highlights */}
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                LEADERSHIP &amp; TROPHY CASE
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {edu.honors.map((honor, hIdx) => {
                  const isGDG = honor.toLowerCase().includes("gdgc") || honor.toLowerCase().includes("gdg") || honor.toLowerCase().includes("google developer");
                  const isBuildAI = honor.toLowerCase().includes("buildai4india") || honor.toLowerCase().includes("hackathon");

                  return (
                    <div
                      key={hIdx}
                      className="rounded-xl p-4 bg-[#12081f] border border-[#2e0e47]/60 spider-panel flex items-start gap-3.5 group"
                    >
                      {isBuildAI ? (
                        <>
                          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 p-1.5 shrink-0 flex items-center justify-center shadow-[0_2px_12px_rgba(168,85,247,0.15)] group-hover:scale-105 transition-transform">
                            <Image
                              src="/logos/swecha.svg"
                              alt="Swecha Telangana"
                              width={32}
                              height={16}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="space-y-1 text-left flex-1">
                            <div className="flex items-center justify-between gap-1.5">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 font-semibold">
                                1ST PLACE · STATE WINNER
                              </span>
                              <span className="text-[10px] font-mono text-zinc-400">2025</span>
                            </div>
                            <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                              BuildAI4India Hackathon Winner
                            </h4>
                            <p className="text-[11px] text-zinc-400 leading-snug">
                              Swecha Telangana · 1st Place for Project ArtYatra, an autonomous AI cultural art preservation engine.
                            </p>
                          </div>
                        </>
                      ) : isGDG ? (
                        <>
                          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 p-1.5 shrink-0 flex items-center justify-center shadow-[0_2px_12px_rgba(168,85,247,0.15)] group-hover:scale-105 transition-transform">
                            <Image
                              src="/logos/gdgc-mark.svg"
                              alt="GDGC"
                              width={28}
                              height={28}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="space-y-1 text-left flex-1">
                            <div className="flex items-center justify-between gap-1.5">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-[#c084fc] px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 font-semibold">
                                GDGC LEAD · MLRIT
                              </span>
                              <span className="text-[10px] font-mono text-zinc-400">2024–25</span>
                            </div>
                            <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                              Technical Lead · GDGC MLRIT
                            </h4>
                            <p className="text-[11px] text-zinc-400 leading-snug">
                              Google Developer Groups on Campus · Mentored student builders and architected AI/ML workshops.
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shrink-0 mt-1.5" />
                          <span className="text-xs text-zinc-300 leading-relaxed font-normal">
                            {honor}
                          </span>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Verified Industry Certifications // Battle Licenses directly in Origin Card */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-mono uppercase tracking-wider text-[#a855f7] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
                  <span>VERIFIED LICENSES // SMART INTERVIEWS &amp; NPTEL</span>
                </p>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">VERIFIED CREDENTIALS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Smart Interviews Card */}
                <div className="rounded-xl p-4 bg-[#12081f] border border-purple-500/30 hover:border-purple-500/60 transition-colors flex items-start gap-3.5 group spider-panel">
                  <div className="w-10 h-10 rounded-lg bg-white border border-white/20 p-1 shrink-0 flex items-center justify-center shadow-[0_2px_12px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform">
                    <Image src="/logos/smart-interviews.webp" alt="Smart Interviews" width={32} height={32} className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-1 text-left flex-1">
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#c084fc] px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 font-semibold">
                        SILVER RANK · DSA
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">2025</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                      Smart Coder DSA Certification (Silver)
                    </h4>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      Smart Interviews · Advanced Data Structures, Asymptotic Analysis &amp; Competitive Coding.
                    </p>
                  </div>
                </div>

                {/* NPTEL & Google Cloud Card */}
                <div className="rounded-xl p-4 bg-[#12081f] border border-purple-500/30 hover:border-purple-500/60 transition-colors flex items-start gap-3.5 group spider-panel">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 p-1.5 shrink-0 flex items-center justify-center shadow-[0_2px_12px_rgba(168,85,247,0.15)] group-hover:scale-105 transition-transform">
                    <Image src="/logos/google-cloud-clean.svg" alt="Google Cloud" width={28} height={28} className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-1 text-left flex-1">
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 font-semibold">
                        NPTEL · IIT KHARAGPUR
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">2024</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                      Google Cloud Computing Foundations
                    </h4>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      NPTEL &amp; SWAYAM · Cloud Architecture Foundations, Distributed Compute &amp; Storage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
