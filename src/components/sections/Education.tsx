"use client";

import { motion } from "framer-motion";
import { educationList, certifications } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d]">
            Credentials
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em]">
            Education &amp; Certifications
          </h2>
        </div>

        {/* Education Card */}
        {educationList.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl p-7 border border-white/5 bg-[#09090b] space-y-5 text-left"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
              <div>
                <p className="text-xs font-mono text-[#ae040d]">
                  {edu.degree} in {edu.field}
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mt-0.5">
                  {edu.institution}
                </h3>
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
                Leadership &amp; Recognition
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {edu.honors.map((honor, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3.5 rounded-lg bg-[#12081f] border border-[#2e0e47]/60 flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shrink-0 mt-1.5" />
                    <span className="text-xs text-zinc-300 leading-relaxed font-normal">
                      {honor}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Certifications Grid */}
        <div className="space-y-3 text-left">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Verified Certifications
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert, cIdx) => (
              <motion.div
                key={cIdx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: cIdx * 0.08 }}
                className="rounded-xl p-5 border border-white/5 bg-[#09090b] flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-zinc-400 font-normal">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/5 shrink-0">
                  {cert.badgeText}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
