"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-card shadow-[0_8px_32px_rgba(0,0,0,0.85)] border-[#ae040d]/25 bg-black/85"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Typographic Wordmark with Crimson Dot */}
        <Link
          href="/"
          className="group flex items-center gap-1 font-bold text-xl tracking-tight text-white focus:outline-none"
        >
          <span>Abhinay</span>
          <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-[#d60815] to-[#770007] shadow-[0_0_12px_rgba(174,4,13,1)] transition-transform duration-300 group-hover:scale-150" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#d60815] to-[#770007] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-zinc-400 hover:text-[#d60815] hover:bg-white/5 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-zinc-400 hover:text-[#d60815] hover:bg-white/5 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link
            href="/#contact"
            className="relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-[#770007]/50 to-[#ae040d]/40 border border-[#ae040d]/40 hover:border-[#d60815] hover:shadow-[0_0_24px_rgba(174,4,13,0.45)] transition-all duration-300"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-4 top-20 rounded-2xl glass-card p-6 shadow-2xl border-[#ae040d]/30 bg-black/95 z-50 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-white py-2 border-b border-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <Link
                  href={personal.github}
                  target="_blank"
                  className="p-2.5 rounded-lg text-zinc-400 hover:text-white bg-white/5"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href={personal.linkedin}
                  target="_blank"
                  className="p-2.5 rounded-lg text-zinc-400 hover:text-white bg-white/5"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-lg text-zinc-400 hover:text-white bg-white/5"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-[#ae040d] to-[#770007]"
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
