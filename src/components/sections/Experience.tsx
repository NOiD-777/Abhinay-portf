"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d]">
            Experience
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em]">
            Career History &amp; Impact
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-normal">
            Building enterprise-scale data infrastructure and deploying production machine learning on edge hardware.
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

              {/* Company Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/5 pb-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {exp.company}
                </h3>
                <span className="text-xs text-zinc-400 font-mono">
                  {exp.location}
                </span>
              </div>

              {/* Roles */}
              <div className="space-y-4">
                {exp.roles.map((role, roleIdx) => (
                  <div
                    key={roleIdx}
                    className="rounded-xl p-6 border border-white/5 bg-[#09090b] space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <h4 className="text-base font-semibold text-zinc-100">
                          {role.title}
                        </h4>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/5 text-zinc-400 border border-white/5">
                          {role.type}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-zinc-400">
                        {role.period}
                      </span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 pt-1 text-sm text-zinc-300 font-normal">
                      {role.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 leading-relaxed">
                          <span className="text-[#ae040d] font-mono text-xs mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
