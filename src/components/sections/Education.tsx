"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { educationList, certifications } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d] flex items-center gap-1.5">
            <span className="text-[#00f0ff]">//</span>
            <span>THE ORIGIN LAB &amp; TROPHIES</span>
          </p>
          <h2 className="font-spiderman text-4xl sm:text-6xl text-white tracking-[0.06em] spider-glitch-hover cursor-default">
            WHERE THE POWERS GOT FORGED
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-prose font-normal leading-relaxed">
            Where the spider-powers got weaponized: Computer Science foundations at MLRIT, leading hundreds of student builders, and bagging state-level championships.
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
                      className={`rounded-xl bg-[#12081f] border border-[#2e0e47]/60 spider-panel overflow-hidden ${
                        isBuildAI ? "sm:col-span-2 p-4 sm:p-5 flex flex-col md:flex-row items-center gap-5" : "p-3.5 flex items-start gap-2.5"
                      }`}
                    >
                      {isBuildAI ? (
                        <>
                          <div className="relative w-full md:w-56 aspect-[865/587] rounded-lg overflow-hidden shrink-0 border border-purple-500/20 group">
                            <Image
                              src="/images/hackathon-swecha-team.webp"
                              alt="BuildAI4India Hackathon Winners"
                              fill
                              className="object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-1.5 left-2 flex items-center gap-1.5 text-[10px] font-mono text-[#00f0ff]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
                              <span>1ST PLACE WINNERS</span>
                            </div>
                          </div>
                          <div className="space-y-2 text-left flex-1">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-4 shrink-0 flex items-center justify-center">
                                <Image src="/logos/swecha.svg" alt="Swecha Telangana" width={32} height={16} className="w-full h-full object-contain" />
                              </div>
                              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                                STATE CHAMPIONSHIP · BIG W
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                              {honor}
                            </p>
                            <p className="text-[11px] text-zinc-400 font-mono">
                              Project: ArtYatra · Autonomous cultural art preservation engine that blew the judges away
                            </p>
                          </div>
                        </>
                      ) : isGDG ? (
                        <>
                          <div className="w-6 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                            <Image src="/logos/gdgc-mark.svg" alt="GDGC" width={24} height={20} className="w-full h-full object-contain" />
                          </div>
                          <span className="text-xs text-zinc-300 leading-relaxed font-normal">
                            {honor}
                          </span>
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
          </motion.div>
        ))}

        {/* Certifications Grid */}
        <div className="space-y-3 text-left">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            VERIFIED CREDENTIALS // BATTLE LICENSES
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert, cIdx) => {
              const isGCP = cert.issuer.toLowerCase().includes("nptel") || cert.name.toLowerCase().includes("google cloud");
              const isSmartInterviews = cert.issuer.toLowerCase().includes("smart interviews");

              return (
                <motion.div
                  key={cIdx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: cIdx * 0.08 }}
                  className="antigravity-card rounded-xl p-5 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    {isGCP ? (
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 p-1.5 shrink-0 flex items-center justify-center">
                        <Image src="/logos/google-cloud-clean.svg" alt="Google Cloud" width={26} height={26} className="w-full h-full object-contain" />
                      </div>
                    ) : isSmartInterviews ? (
                      <div className="w-9 h-9 rounded-lg bg-white border border-white/20 p-1 shrink-0 flex items-center justify-center shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                        <Image src="/logos/smart-interviews.webp" alt="Smart Interviews Official Logo" width={28} height={28} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 p-1.5 shrink-0 flex items-center justify-center font-mono text-[11px] text-[#ae040d] font-bold">
                        &lt;/&gt;
                      </div>
                    )}
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-zinc-400 font-normal">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/5 shrink-0">
                    {cert.badgeText}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
