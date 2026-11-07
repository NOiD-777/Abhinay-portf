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
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-xl transition-all duration-200 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border border-white/10 shadow-lg"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Typographic Wordmark with Solid Red Dot */}
        <Link
          href="/"
          className="group flex items-center gap-1 font-semibold text-lg tracking-tight text-white focus:outline-none"
        >
          <span>Abhinay</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ae040d]" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-150 relative group py-1 tracking-wide"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ae040d] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white rounded-lg bg-[#121215] border border-white/10 hover:border-[#ae040d] hover:text-[#ff3b47] transition-colors"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-md text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="md:hidden fixed inset-x-4 top-20 rounded-xl bg-[#09090b] p-6 border border-white/10 z-50 flex flex-col gap-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-white py-2 border-b border-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <Link
                  href={personal.github}
                  target="_blank"
                  className="p-2 rounded-md text-zinc-400 hover:text-white bg-white/5"
                >
                  <Github className="w-4 h-4" />
                </Link>
                <Link
                  href={personal.linkedin}
                  target="_blank"
                  className="p-2 rounded-md text-zinc-400 hover:text-white bg-white/5"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href={`mailto:${personal.email}`}
                  className="p-2 rounded-md text-zinc-400 hover:text-white bg-white/5"
                >
                  <Mail className="w-4 h-4" />
                </Link>
              </div>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-xs font-medium text-white rounded-lg bg-[#ae040d]"
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
