import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Case Study | Abhinay Musku`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Abhinay Musku`,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-black text-[#ededed] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-12 text-left">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-[#09090b] border border-white/5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-[#121215] text-zinc-400 border border-white/5">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-[#ff4d58] bg-[#ae040d]/10 border border-[#ae040d]/30">
                Featured System
              </span>
            )}
          </div>

          <h1 className="font-spiderman text-4xl sm:text-6xl text-white tracking-[0.06em]">
            {project.title}
          </h1>

          <p className="text-base text-[#ae040d] font-mono">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-prose font-normal">
            {project.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#111115] hover:bg-[#18181f] text-white font-medium text-xs border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#ae040d] hover:bg-[#c50512] text-white font-medium text-xs transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Application</span>
              </Link>
            )}
          </div>
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Key Metrics &amp; Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 border border-white/5 bg-[#09090b] space-y-1"
                >
                  <p className="text-sm font-medium text-white font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ae040d]" />
                    <span>{metric}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deep Dive & Architecture */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            System Overview &amp; Architecture
          </h2>
          <div className="rounded-2xl p-7 border border-white/5 bg-[#09090b] space-y-6 text-zinc-300 text-base leading-relaxed font-normal">
            <p className="whitespace-pre-line">{project.longDescription}</p>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Technologies &amp; Frameworks
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-xs font-mono text-zinc-300 bg-[#111115] border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Next Project Footer Card */}
        <div className="pt-8 border-t border-white/10">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="rounded-xl p-5 border border-white/5 bg-[#09090b] hover:border-[#ae040d]/40 flex items-center justify-between group transition-colors"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                Next Project
              </span>
              <h3 className="font-spiderman text-2xl text-white group-hover:text-[#ff3b47] transition-colors tracking-[0.06em]">
                {nextProject.title}
              </h3>
              <p className="text-xs text-zinc-400">{nextProject.subtitle}</p>
            </div>
            <span className="p-2.5 rounded-lg bg-white/5 text-zinc-400 group-hover:text-white transition-colors">
              →
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
