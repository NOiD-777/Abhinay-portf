"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/Icons";
import { personal } from "@/data/personal";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      setStatusMessage("Please fill out all fields.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Message sent successfully!");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to send message.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("An unexpected error occurred. Please email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d] flex items-center gap-1.5">
            <span className="text-[#00f0ff]">//</span>
            <span>DIRECT FREQUENCY // TRANSMIT THE SIGNAL</span>
          </p>
          <h2 className="font-spiderman text-4xl sm:text-6xl text-white tracking-[0.06em] spider-glitch-hover cursor-default">
            LEAP OF FAITH // LET&apos;S TALK
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-prose font-normal leading-relaxed">
            Got an insane problem to solve? Need a data pipeline that doesn&apos;t melt under load, or an autonomous GenAI agent with maximum aura? Drop a line. We don&apos;t ghost.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="antigravity-card rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                SECURE COMMS // DIRECT LINK
              </h3>

              <div className="space-y-2 text-sm">
                <Link
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-lg hover:bg-white/5 text-zinc-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#ae040d] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[11px] text-zinc-500 font-mono">Email</span>
                    <span className="font-medium text-xs sm:text-sm">{personal.email}</span>
                  </div>
                </Link>

                <Link
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-lg hover:bg-white/5 text-zinc-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#ae040d] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[11px] text-zinc-500 font-mono">Phone</span>
                    <span className="font-medium text-xs sm:text-sm">{personal.phone}</span>
                  </div>
                </Link>

                <div className="flex items-center gap-3.5 p-3 rounded-lg text-zinc-300">
                  <MapPin className="w-4 h-4 text-[#ae040d] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[11px] text-zinc-500 font-mono">Location</span>
                    <span className="font-medium text-xs sm:text-sm">{personal.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials Card */}
            <div className="antigravity-card rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-semibold text-zinc-400 font-mono uppercase tracking-wider">
                ENCRYPTED CHANNELS
              </h4>
              <div className="flex items-center gap-3">
                <Link
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/5 text-xs font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/5 text-xs font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Clean Form */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="antigravity-card rounded-2xl p-7 sm:p-8 space-y-5"
            >
              <h3 className="font-spiderman text-2xl text-white tracking-[0.08em]">TRANSMIT MISSION BRIEF</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="Ganke Lee, Miles, or what you go by"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111115] border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#ae040d] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="miles@sol3.dimension / your best email"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111115] border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#ae040d] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Tell me about the mission. What are we building? (Keep it 100)"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#111115] border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#ae040d] transition-colors resize-none"
                />
              </div>

              {/* Status Banner */}
              {status === "success" && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}
              {status === "error" && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#ae040d] hover:bg-[#c50512] text-white font-medium text-xs sm:text-sm transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Across Dimensions...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Signal</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
