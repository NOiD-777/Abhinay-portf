"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d] flex items-center gap-1.5">
            <span className="text-[#00f0ff]">//</span>
            <span>CHRONICLES</span>
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em]">
            The Crucible &amp; Impact
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-normal">
            Where theory meets production: architecting multi-cloud data platforms, sub-second telemetry, and edge silicon intelligence.
          </p>
        </div>

        {/* Timeline Spine */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, expIdx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: expIdx * 0.08 }}
              className="relative text-left space-y-6"
            >
              {/* Timeline Node Dot */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full flex items-center justify-center bg-black border border-white/20"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full bg-[#ae040d]"
                />
              </div>

              {/* Chapter Telemetry + Company Info */}
              <div className="space-y-2 border-b border-white/5 pb-3">
                <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase">
                  {exp.chapter}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    {exp.company.includes("JMAN") ? (
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

              {/* Roles */}
              <div className="space-y-4">
                {exp.roles.map((role, roleIdx) => (
                  <div
                    key={roleIdx}
                    className="spider-panel rounded-xl p-6 border border-white/5 bg-[#09090b] space-y-4"
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
                    <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed border-l-2 border-[#ae040d] pl-3 py-0.5">
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
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
