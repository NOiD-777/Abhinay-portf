"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/Icons";
import { personal } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4 bg-black relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link href="/" className="flex items-center gap-1 font-semibold text-base text-white">
            <span>Abhinay</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ae040d]" />
          </Link>
          <p className="text-xs text-zinc-500 font-normal">
            {personal.title} · {personal.location}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <Link
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-white/5 bg-[#09090b] text-zinc-400 hover:text-white hover:border-[#ae040d] transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-white/5 bg-[#09090b] text-zinc-400 hover:text-white hover:border-[#ae040d] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link
            href={`mailto:${personal.email}`}
            className="p-2 rounded-lg border border-white/5 bg-[#09090b] text-zinc-400 hover:text-white hover:border-[#ae040d] transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </Link>
          <Link
            href="#top"
            className="p-2 rounded-lg border border-white/5 bg-[#09090b] text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-600 text-center md:text-right font-normal">
          © 2026 Abhinay Musku. Crafted with Next.js &amp; Tailwind.
        </p>
      </div>
    </footer>
  );
}
