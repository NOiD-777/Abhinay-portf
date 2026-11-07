"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/Icons";
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
        className={`relative w-full max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 overflow-hidden ${
          scrolled
            ? "bg-black/85 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.2)]"
            : "bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-xl border border-white/10 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)]"
        }`}
      >
        {/* Typographic Wordmark with Spider Emblem */}
        <Link
          href="/"
          className="group relative z-10 flex items-center gap-2 text-white focus:outline-none spider-glitch-hover"
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#ae040d]/20 border border-[#ae040d]/40 text-[#ae040d] shadow-[0_0_12px_rgba(174,4,13,0.3)] group-hover:scale-105 group-hover:border-[#ae040d]/60 transition-all duration-200">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-tight text-[#ae040d] select-none transition-transform duration-200 group-hover:scale-125 group-hover:text-white leading-none">
              ;)
            </span>
          </div>
          <span className="font-spiderman text-base sm:text-lg tracking-[0.16em] text-white">ABHINAY MUSKU</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ae040d] shadow-[0_0_8px_#ae040d]" />
          <span className="ml-1 hidden lg:inline-block px-2 py-0.5 rounded-lg text-[10px] font-mono tracking-widest text-zinc-300 bg-white/[0.05] border border-white/10">
            SOL-3
          </span>
        </Link>

        {/* Desktop Nav Links in Glass Pill Carrier */}
        <div className="hidden md:flex items-center gap-1 relative z-10 p-1 rounded-xl bg-white/[0.03] border border-white/10">
          {NAV_ITEMS.map((item) => {
            const isItemHovered = activeHoverItem === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setActiveHoverItem(item.label)}
                className="relative px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors duration-200 tracking-wide rounded-lg group"
              >
                {/* Active Pill on Hover */}
                {isItemHovered && (
                  <motion.div
                    layoutId="liquid-nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="absolute inset-0 rounded-lg bg-white/10 border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                </span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-[#ae040d] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full" />
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2.5 relative z-10">
          <Link
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white rounded-xl bg-[#ae040d] hover:bg-[#c50512] border border-white/20 shadow-[0_4px_16px_rgba(174,4,13,0.4)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Hit My Line</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-10 p-2 rounded-xl text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-4 top-20 rounded-2xl bg-[#09090b]/95 backdrop-blur-2xl p-6 border border-white/15 z-50 flex flex-col gap-5 shadow-2xl"
          >
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
                className="px-4 py-2.5 text-xs font-semibold text-white rounded-xl bg-[#ae040d] hover:bg-[#c50512] border border-white/20 shadow-[0_4px_16px_rgba(174,4,13,0.4)]"
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
