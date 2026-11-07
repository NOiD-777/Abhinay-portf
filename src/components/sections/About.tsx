"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Database, Cpu, Code2, MapPin, GraduationCap, Users } from "lucide-react";
import { personal } from "@/data/personal";

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d]">
            About
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em]">
            Background &amp; Engineering Focus
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Portrait Photo Frame */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center gap-6"
          >
            <div className="relative w-72 sm:w-80 aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#09090b]">
              <Image
                src="/profile.webp"
                alt="Abhinay Musku"
                width={600}
                height={600}
                className="w-full h-full object-cover object-center grayscale contrast-115 hover:grayscale-0 transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-white font-medium text-sm">Abhinay Musku</p>
                <p className="text-xs text-zinc-400 font-mono">Data Engineer · JMAN Group</p>
              </div>
            </div>

            {/* Quick Metadata */}
            <div className="w-full max-w-sm flex flex-col gap-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border border-white/5 bg-[#09090b]">
                <MapPin className="w-4 h-4 text-[#ae040d] shrink-0" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border border-white/5 bg-[#09090b]">
                <GraduationCap className="w-4 h-4 text-[#ae040d] shrink-0" />
                <span>B.E. in Information Technology · MLRIT</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border border-white/5 bg-[#09090b]">
                <Users className="w-4 h-4 text-[#ae040d] shrink-0" />
                <span>GDG on Campus · Technical Lead</span>
              </div>
            </div>
          </motion.div>

          {/* Bio & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-8 text-left"
          >
            {/* Story Paragraphs */}
            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              {personal.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-xl border border-white/5 bg-[#09090b] flex flex-col gap-3">
                <div className="p-2 rounded-md bg-[#ae040d]/10 text-[#ae040d] w-fit">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-white text-sm">Enterprise Data</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Scalable Databricks &amp; PySpark pipelines ingesting multi-cloud financial streams into Delta Lake.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/5 bg-[#09090b] flex flex-col gap-3">
                <div className="p-2 rounded-md bg-[#ae040d]/10 text-[#ae040d] w-fit">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-white text-sm">GenAI &amp; Agents</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Production LLM applications with Gemini API, LangChain, RAG architectures, and agent protocols.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/5 bg-[#09090b] flex flex-col gap-3">
                <div className="p-2 rounded-md bg-[#ae040d]/10 text-[#ae040d] w-fit">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-white text-sm">Full-Stack Scale</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Responsive React/Next.js and Angular apps backed by high-throughput FastAPI and Node.js microservices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
