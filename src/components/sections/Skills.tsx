"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Cloud,
  Code,
  Eye,
  Database,
  Layers,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { TechLogo, TECH_REGISTRY } from "@/components/ui/TechLogos";

const ICON_MAP: Record<string, React.ElementType> = {
  Brain,
  Globe,
  Cloud,
  Code,
  Eye,
  Database,
};

// Key tech logos to showcase in the top continuous armory reel
const SHOWCASE_TECHS = [
  "Gemini API",
  "OpenAI",
  "LangChain",
  "Databricks",
  "PySpark",
  "Delta Lake",
  "Microsoft Azure",
  "AWS (EC2, ECS, Lambda)",
  "Google Cloud (GCP)",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "React.js",
  "Next.js",
  "TypeScript",
  "Angular",
  "Tailwind CSS",
  "OpenCV",
  "TensorFlow",
  "MongoDB Atlas",
  "Git",
  "Power BI",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d] flex items-center gap-1.5">
            <span className="text-[#00f0ff]">//</span>
            <span>SYSTEMS &amp; TOOLING // OFFICIAL ARSENAL</span>
          </p>
          <h2 className="font-spiderman text-4xl sm:text-6xl text-white tracking-[0.06em] spider-glitch-hover cursor-default">
            WHAT&apos;S IN THE ARSENAL
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-prose font-normal leading-relaxed">
            Every technology in my arsenal, backed by production code and battle-tested pipelines. Featuring official vector emblems for every stack from my dossier.
          </p>
        </div>

        {/* Continuous Official Tech Stack Reel */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-black/60 border border-white/10 p-3.5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 pb-2.5 px-2 border-b border-white/5 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
            <span className="text-white font-semibold">VERIFIED PRODUCTION STACKS</span>
            <span className="text-zinc-600">//</span>
            <span className="text-zinc-400">OFFICIAL LOGOS DIRECT FROM DOSSIER</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2.5">
            {SHOWCASE_TECHS.map((tech) => (
              <div
                key={tech}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group/pill cursor-default"
              >
                <TechLogo name={tech} className="w-3.5 h-3.5" useBrandColor />
                <span className="text-xs font-mono text-zinc-300 group-hover/pill:text-white transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Illustrative Ecosystem Blueprint Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#09090b]/80 border border-white/10 text-left relative overflow-hidden">
          <div className="absolute inset-0 halftone-dots opacity-10 pointer-events-none" />

          {/* Pillar 1 */}
          <div className="space-y-1.5 p-3 rounded-xl bg-black/50 border border-[#ef4444]/20 relative z-10">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#ef4444]">
              <span className="font-semibold tracking-wider uppercase">// PILLAR 01</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-pulse" />
            </div>
            <h4 className="text-sm font-semibold text-white">Enterprise Lakehouse Forge</h4>
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                <TechLogo name="Databricks" className="w-3 h-3" useBrandColor />
                <span>Databricks</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                <TechLogo name="PySpark" className="w-3 h-3" useBrandColor />
                <span>PySpark</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                <TechLogo name="Delta Lake" className="w-3 h-3" useBrandColor />
                <span>Delta Lake</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                <TechLogo name="Microsoft Azure" className="w-3 h-3" useBrandColor />
                <span>Azure</span>
              </span>
            </div>
            <div className="text-[10px] font-mono text-zinc-500 pt-1 border-t border-white/5">
              High-throughput ACID pipelines &amp; zero dropped records. Real heavy lifting.
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-1.5 p-3 rounded-xl bg-black/50 border border-[#00f0ff]/20 relative z-10">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#00f0ff]">
              <span className="font-semibold tracking-wider uppercase">// PILLAR 02</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
            </div>
            <h4 className="text-sm font-semibold text-white">Autonomous AI Arsenal</h4>
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                <TechLogo name="Gemini API" className="w-3 h-3" useBrandColor />
                <span>Gemini API</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                <TechLogo name="OpenAI" className="w-3 h-3" useBrandColor />
                <span>OpenAI</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                <TechLogo name="LangChain" className="w-3 h-3" useBrandColor />
                <span>LangChain</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                <TechLogo name="FastAPI" className="w-3 h-3" useBrandColor />
                <span>FastAPI</span>
              </span>
            </div>
            <div className="text-[10px] font-mono text-zinc-500 pt-1 border-t border-white/5">
              Multi-agent reasoning loops &amp; function calling with maximum aura.
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="space-y-1.5 p-3 rounded-xl bg-black/50 border border-[#a855f7]/20 relative z-10">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#a855f7]">
              <span className="font-semibold tracking-wider uppercase">// PILLAR 03</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
            </div>
            <h4 className="text-sm font-semibold text-white">Edge AI &amp; Neural Vision</h4>
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                <TechLogo name="OpenCV" className="w-3 h-3" useBrandColor />
                <span>OpenCV</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                <TechLogo name="Scikit-learn" className="w-3 h-3" useBrandColor />
                <span>Scikit-learn</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                <TechLogo name="Python" className="w-3 h-3" useBrandColor />
                <span>Python</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                <TechLogo name="FastAPI" className="w-3 h-3" useBrandColor />
                <span>FastAPI</span>
              </span>
            </div>
            <div className="text-[10px] font-mono text-zinc-500 pt-1 border-t border-white/5">
              Real-time edge computer vision, biometric streams &amp; low-latency model microservices.
            </div>
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => {
            const IconComponent = ICON_MAP[category.iconName] || Brain;
            const isPurple =
              category.title.includes("Data") ||
              category.title.includes("Cloud") ||
              category.title.includes("Web") ||
              category.title.includes("Databases");

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-2xl p-6 antigravity-card flex flex-col justify-between gap-6 text-left group overflow-hidden ${
                  isPurple
                    ? "hover:border-[#a855f7]/60 hover:shadow-[-2px_0_0_rgba(168,85,247,0.4)]"
                    : "hover:border-[#ae040d]/60 hover:shadow-[-2px_0_0_rgba(0,240,255,0.35),2px_0_0_rgba(174,4,13,0.5)]"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2 rounded-md ${
                        isPurple
                          ? "bg-[#180a26] text-[#c084fc]"
                          : "bg-[#200508] text-[#ae040d]"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-600">
                      0{idx + 1} // {category.skills.length} STACKS
                    </span>
                  </div>

                  <div>
                    <h3 className="font-spiderman text-xl sm:text-2xl text-white tracking-[0.06em]">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges with Official Vector Tech Logos */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="group/skill inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-150 cursor-default shadow-sm hover:shadow-md hover:scale-[1.03]"
                    >
                      <TechLogo name={skill.name} className="w-3.5 h-3.5" useBrandColor />
                      <span className="group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
