"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AFFILIATIONS = [
  {
    name: "JMAN Group",
    role: "Data Engineer",
    type: "Current Employer",
    logo: "/logos/jman-logo.svg",
  },
  {
    name: "Google Developer Groups",
    role: "Technical Lead",
    type: "Leadership",
    logo: "/logos/gdg-mark.svg",
  },
  {
    name: "MLRIT",
    role: "B.E. Information Technology",
    type: "Alma Mater",
    logo: "/logos/mlrit.svg",
  },
  {
    name: "Databricks",
    role: "Lakehouse & PySpark",
    type: "Core Tech",
    logo: "/logos/databricks.svg",
  },
  {
    name: "Google Cloud",
    role: "Cloud & Vertex AI",
    type: "Cloud Platform",
    logo: "/logos/google-cloud-clean.svg",
  },
  {
    name: "Microsoft Azure",
    role: "Enterprise Data Stack",
    type: "Cloud Infrastructure",
    logo: "/logos/azure-clean.svg",
  },
];

export default function Ecosystem() {
  return (
    <section className="border-y border-white/5 bg-[#060608] py-8 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5 text-left">
          <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ae040d] animate-pulse" />
            <span className="text-[#00f0ff]">// MULTIVERSE GUILDS:</span>
            <span>Allied Organizations &amp; Production Platforms</span>
          </p>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
            EARTH-1610 VERIFIED TELEMETRY
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
          {AFFILIATIONS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="spider-panel rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2.5 group"
            >
              <div className="w-20 h-10 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1.5 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={72}
                  height={32}
                  className="w-full h-full object-contain filter contrast-110"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors tracking-tight">
                  {item.name}
                </p>
                <p className="text-[10px] text-zinc-500 font-mono mt-0.5 truncate max-w-[120px]">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

