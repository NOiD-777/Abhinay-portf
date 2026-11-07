"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, SpiderIcon } from "@/components/ui/Icons";
import { personal } from "@/data/personal";

const NAV_ITEMS = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeHoverItem, setActiveHoverItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        ref={navRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveHoverItem(null);
        }}
        className={`relative w-full max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 overflow-hidden ${
          scrolled
            ? "bg-black/55 backdrop-blur-2xl backdrop-saturate-[190%] border border-white/15 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85),0_0_20px_rgba(0,240,255,0.06),inset_0_1px_1.5px_0_rgba(255,255,255,0.35),inset_0_-1px_1px_0_rgba(0,0,0,0.5)]"
            : "bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-xl backdrop-saturate-[160%] border border-white/10 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_1.5px_0_rgba(255,255,255,0.25)]"
        }`}
      >
        {/* Liquid Glass Fluid Refraction Caustic Glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out"
          style={{
            background: isHovered
              ? `radial-gradient(420px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.12) 0%, rgba(0, 240, 255, 0.08) 30%, rgba(174, 4, 13, 0.06) 60%, transparent 80%)`
              : `radial-gradient(550px circle at 50% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(0, 240, 255, 0.04) 40%, transparent 75%)`,
            opacity: scrolled ? 1 : 0.85,
          }}
        />

        {/* Liquid Surface Tension Specular Top Edge (Hairline Refraction) */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none opacity-90"
          style={{
            background: isHovered
              ? `radial-gradient(320px circle at ${mousePosition.x}% 0%, rgba(255,255,255,0.95) 0%, rgba(0,240,255,0.7) 40%, rgba(255,255,255,0.25) 80%, transparent 100%)`
              : "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.15) 80%, transparent 95%)",
          }}
        />

        {/* Bottom Refractive Liquid Rim */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
        />

        {/* Typographic Wordmark with Liquid Spider Emblem */}
        <Link
          href="/"
          className="group relative z-10 flex items-center gap-2 text-white focus:outline-none spider-glitch-hover"
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#ae040d]/25 to-black/60 border border-[#ae040d]/40 text-[#ae040d] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.25),0_0_15px_rgba(174,4,13,0.3)] group-hover:scale-105 transition-all duration-200">
            <SpiderIcon className="w-4 h-4 text-[#ae040d] transition-transform duration-200 group-hover:scale-125" />
          </div>
          <span className="font-spiderman text-base sm:text-lg tracking-[0.16em] text-white">ABHINAY MUSKU</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ae040d] shadow-[0_0_8px_#ae040d]" />
          <span className="ml-1 hidden lg:inline-block px-2 py-0.5 rounded-lg text-[10px] font-mono tracking-widest text-zinc-300 bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]">
            SOL-3
          </span>
        </Link>

        {/* Desktop Nav Links in Liquid Pill Carrier */}
        <div className="hidden md:flex items-center gap-1 relative z-10 p-1 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isItemHovered = activeHoverItem === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setActiveHoverItem(item.label)}
                className="relative px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors duration-200 tracking-wide rounded-lg group"
              >
                {/* Liquid Glass Droplet Pill on Hover */}
                {isItemHovered && (
                  <motion.div
                    layoutId="liquid-nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.35),0_4px_12px_rgba(0,0,0,0.3)]"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                </span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-gradient-to-r from-[#00f0ff] via-[#ae040d] to-[#ff0055] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full" />
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions with Liquid Glass Buttons */}
        <div className="hidden md:flex items-center gap-2.5 relative z-10">
          <Link
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/25 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)] transition-all duration-200 hover:scale-105"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/25 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)] transition-all duration-200 hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-[#ae040d]/90 to-[#780309]/95 hover:from-[#c50512] hover:to-[#96040d] border border-white/25 hover:border-white/40 shadow-[0_4px_16px_rgba(174,4,13,0.45),inset_0_1px_1px_0_rgba(255,255,255,0.4)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
          >
            {/* Shimmer reflection traveling across button on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
            <span className="relative z-10">Hit My Line</span>
            <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button in Liquid Glass Pill */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-10 p-2 rounded-xl text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer with Deep Liquid Glass Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-4 top-20 rounded-2xl bg-black/75 backdrop-blur-3xl backdrop-saturate-[200%] p-6 border border-white/15 z-50 flex flex-col gap-5 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.9),inset_0_1px_1.5px_0_rgba(255,255,255,0.35)] overflow-hidden"
          >
            {/* Liquid Glare Highlight inside drawer */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-40 bg-gradient-to-b from-[#00f0ff]/10 via-[#ae040d]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col gap-2 relative z-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-white py-2.5 px-3 rounded-xl hover:bg-white/[0.06] transition-colors border-b border-white/5 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] font-mono text-zinc-500">//</span>
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-2">
                <Link
                  href={personal.github}
                  target="_blank"
                  className="p-2.5 rounded-xl text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10"
                >
                  <Github className="w-4 h-4" />
                </Link>
                <Link
                  href={personal.linkedin}
                  target="_blank"
                  className="p-2.5 rounded-xl text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-xl text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10"
                >
                  <Mail className="w-4 h-4" />
                </Link>
              </div>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-[#ae040d] to-[#80030a] border border-white/25 shadow-[0_4px_16px_rgba(174,4,13,0.4)]"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
