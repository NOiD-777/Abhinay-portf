"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
      {/* Atmospheric Michelangelo Hands Background Silhouette */}
      <div className="absolute -right-20 top-20 w-[500px] lg:w-[700px] h-[350px] lg:h-[450px] opacity-[0.06] pointer-events-none select-none blur-[0.5px]">
        <Image
          src="/images/creation-of-adam-transparent.png"
          alt=""
          fill
          className="object-contain filter invert contrast-200"
        />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ae040d] flex items-center gap-1.5">
            <span className="text-[#00f0ff]">//</span>
            <span>NEXT CHAPTER: LEAP OF FAITH</span>
          </p>
          <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-wider spider-glitch-hover cursor-default">
            CALL THE SPIDER-SIGNAL
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-prose font-normal leading-relaxed">
            Every story needs a bold next act. When your team needs enterprise data platforms or autonomous AI systems, let&apos;s build what&apos;s next.
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
            <div className="rounded-2xl p-6 border border-white/5 bg-[#09090b] space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                Direct Communication
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
            <div className="rounded-2xl p-6 border border-white/5 bg-[#09090b] space-y-3">
              <h4 className="text-xs font-semibold text-zinc-400 font-mono uppercase tracking-wider">
                Networks
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

            {/* Creation of Adam Motif — The Spark of Connection */}
            <div className="relative rounded-2xl p-6 border border-white/10 bg-[#09090b] overflow-hidden group spider-panel shadow-[-2px_0_0_rgba(0,240,255,0.25),2px_0_0_rgba(174,4,13,0.4)]">
              {/* Halftone subtle background */}
              <div className="absolute inset-0 halftone-dots opacity-20 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#00f0ff] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ae040d] animate-pulse" />
                  <span>THE SPARK OF CONNECTION</span>
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  CREATION OF ADAM
                </span>
              </div>

              {/* Reaching Hands with Synaptic Energy Spark */}
              <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-black/80 flex items-center justify-center border border-white/5">
                <Image
                  src="/images/creation-of-adam-connect.webp"
                  alt="Creation of Adam — Human Agency & AI"
                  width={1140}
                  height={820}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(174,4,13,0.45)] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Animated Quantum Spark at the exact fingertip contact point (48%, 45.2%) */}
                <div className="absolute left-[48%] top-[45.2%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="absolute -inset-2 rounded-full bg-[#00f0ff]/40 blur-sm animate-ping" />
                  <span className="absolute -inset-4 rounded-full bg-[#ae040d]/30 blur-md animate-pulse" />
                  <span className="relative block w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#00f0ff,0_0_20px_#ae040d]" />
                </div>
              </div>

              <div className="relative z-10 mt-3.5 space-y-1">
                <h4 className="font-bebas text-lg sm:text-xl text-white tracking-wide">
                  WHERE HUMAN INTUITION SPARKS ARTIFICIAL INTELLIGENCE
                </h4>
                <p className="text-xs text-zinc-300 font-normal leading-relaxed">
                  Engineering enterprise data lakehouses and autonomous agent workflows. Reach across the dimension — let&apos;s build what&apos;s next.
                </p>
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
              className="rounded-2xl p-7 sm:p-8 border border-white/5 bg-[#09090b] space-y-5"
            >
              <h3 className="font-bebas text-2xl text-white tracking-wide">SEND A MESSAGE</h3>

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
                    placeholder="Jane Doe"
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
                    placeholder="jane@example.com"
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
                  placeholder="Tell me about your project, idea, or role..."
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
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
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
