"use client";

import React from "react";
import {
  SiGooglegemini,
  SiLangchain,
  SiHuggingface,
  SiDatabricks,
  SiApachespark,
  SiGooglecloud,
  SiPython,
  SiFastapi,
  SiOpenjdk,
  SiC,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiScikitlearn,
  SiOpencv,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiGooglecolab,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { TbBrandCSharp, TbBrandCss3, TbApi } from "react-icons/tb";
import { Brain, Sparkles, Database } from "lucide-react";

/** Official Delta Lake SVG */
export function DeltaLakeLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2L2 19.5H22L12 2Z" fill="#00ADEF" fillOpacity="0.2" stroke="#00ADEF" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 7L6 17.5H18L12 7Z" fill="#00ADEF"/>
    </svg>
  );
}

/** Official Power BI SVG */
export function PowerBILogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="12" width="4" height="9" rx="1" fill="#F2C811"/>
      <rect x="10" y="7" width="4" height="14" rx="1" fill="#F2C811"/>
      <rect x="17" y="3" width="4" height="18" rx="1" fill="#F2C811"/>
    </svg>
  );
}

/** Official Matplotlib SVG */
export function MatplotlibLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="12" r="10" stroke="#11557C" strokeWidth="2" fill="#11557C" fillOpacity="0.15"/>
      <path d="M4 16C7 11 10 17 13 13C16 9 18 14 20 8" stroke="#11557C" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="13" cy="13" r="2" fill="#F2A900"/>
    </svg>
  );
}

export interface TechMeta {
  icon: React.ElementType;
  brandColor: string;
}

export const TECH_REGISTRY: Record<string, TechMeta> = {
  // Generative AI & LLMs
  "gemini api": { icon: SiGooglegemini, brandColor: "#1BA1E3" },
  "google gemini api": { icon: SiGooglegemini, brandColor: "#1BA1E3" },
  "openai": { icon: RiOpenaiFill, brandColor: "#10A37F" },
  "langchain": { icon: SiLangchain, brandColor: "#2EC4B6" },
  "langchain & langgraph": { icon: SiLangchain, brandColor: "#2EC4B6" },
  "hugging face": { icon: SiHuggingface, brandColor: "#FFD21E" },
  "hugging face transformers": { icon: SiHuggingface, brandColor: "#FFD21E" },
  "prompt engineering": { icon: Brain, brandColor: "#ae040d" },
  "rag architectures": { icon: Brain, brandColor: "#00f0ff" },
  "rag & vector search": { icon: Brain, brandColor: "#00f0ff" },
  "ai agents": { icon: Sparkles, brandColor: "#a855f7" },
  "agentic tool calling": { icon: Sparkles, brandColor: "#a855f7" },

  // Cloud & Big Data
  "databricks": { icon: SiDatabricks, brandColor: "#FF3621" },
  "pyspark": { icon: SiApachespark, brandColor: "#E25A1C" },
  "apache spark": { icon: SiApachespark, brandColor: "#E25A1C" },
  "delta lake": { icon: DeltaLakeLogo, brandColor: "#00ADEF" },
  "microsoft azure": { icon: VscAzure, brandColor: "#0089D6" },
  "azure": { icon: VscAzure, brandColor: "#0089D6" },
  "azure devops": { icon: VscAzure, brandColor: "#0089D6" },
  "aws": { icon: FaAws, brandColor: "#FF9900" },
  "aws (ec2, ecs, lambda)": { icon: FaAws, brandColor: "#FF9900" },
  "google cloud": { icon: SiGooglecloud, brandColor: "#4285F4" },
  "google cloud (gcp)": { icon: SiGooglecloud, brandColor: "#4285F4" },
  "gcp": { icon: SiGooglecloud, brandColor: "#4285F4" },

  // Languages & Backend
  "python": { icon: SiPython, brandColor: "#3776AB" },
  "sql": { icon: Database, brandColor: "#00758F" },
  "postgresql": { icon: SiPostgresql, brandColor: "#4169E1" },
  "fastapi": { icon: SiFastapi, brandColor: "#009688" },
  "java": { icon: SiOpenjdk, brandColor: "#ED8B00" },
  "c#": { icon: TbBrandCSharp, brandColor: "#239120" },
  "c": { icon: SiC, brandColor: "#A8B9CC" },
  "restful apis": { icon: TbApi, brandColor: "#00f0ff" },
  "microservices": { icon: TbApi, brandColor: "#00f0ff" },

  // Web & Interactive Interfaces
  "react": { icon: SiReact, brandColor: "#61DAFB" },
  "react.js": { icon: SiReact, brandColor: "#61DAFB" },
  "next.js": { icon: SiNextdotjs, brandColor: "#FFFFFF" },
  "typescript": { icon: SiTypescript, brandColor: "#3178C6" },
  "javascript": { icon: SiJavascript, brandColor: "#F7DF1E" },
  "angular": { icon: SiAngular, brandColor: "#DD0031" },
  "node.js": { icon: SiNodedotjs, brandColor: "#5FA04E" },
  "express.js": { icon: SiExpress, brandColor: "#FFFFFF" },
  "tailwind css": { icon: SiTailwindcss, brandColor: "#06B6D4" },
  "html5": { icon: SiHtml5, brandColor: "#E34F26" },
  "css3": { icon: TbBrandCss3, brandColor: "#1572B6" },

  // Machine Learning & Vision
  "scikit-learn": { icon: SiScikitlearn, brandColor: "#F7931E" },
  "opencv": { icon: SiOpencv, brandColor: "#5C3EE8" },
  "tensorflow": { icon: SiTensorflow, brandColor: "#FF6F00" },
  "keras": { icon: SiKeras, brandColor: "#D00000" },
  "pandas": { icon: SiPandas, brandColor: "#150458" },
  "numpy": { icon: SiNumpy, brandColor: "#013243" },
  "matplotlib": { icon: MatplotlibLogo, brandColor: "#11557C" },
  "nltk": { icon: Brain, brandColor: "#3b82f6" },

  // Databases & Dev Tools
  "mongodb": { icon: SiMongodb, brandColor: "#47A248" },
  "mongodb atlas": { icon: SiMongodb, brandColor: "#47A248" },
  "git": { icon: SiGit, brandColor: "#F05032" },
  "github": { icon: SiGithub, brandColor: "#FFFFFF" },
  "postman": { icon: SiPostman, brandColor: "#FF6C37" },
  "vite": { icon: SiVite, brandColor: "#646CFF" },
  "google colab": { icon: SiGooglecolab, brandColor: "#F9AB00" },
  "power bi": { icon: PowerBILogo, brandColor: "#F2C811" },
};

export function TechLogo({
  name,
  className = "w-4 h-4",
  useBrandColor = false,
}: {
  name: string;
  className?: string;
  useBrandColor?: boolean;
}) {
  const key = name.toLowerCase().trim();
  const meta = TECH_REGISTRY[key];

  if (!meta) {
    return <span className="w-1.5 h-1.5 rounded-full bg-[#ae040d]" />;
  }

  const IconComponent = meta.icon;

  return (
    <span
      className="inline-flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/skill:scale-110"
      style={useBrandColor ? { color: meta.brandColor } : undefined}
    >
      <IconComponent className={className} />
    </span>
  );
}
