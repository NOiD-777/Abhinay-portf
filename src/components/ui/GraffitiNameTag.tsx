"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GraffitiNameTag({ className = "" }: { className?: string }) {
  return (
    <div className={`relative select-none ${className}`}>
      {/* Background Graffiti Accents & Stencil Spider (from Into the Spider-Verse) */}
      <div className="absolute -top-10 -left-8 sm:-left-10 w-24 sm:w-28 h-24 sm:h-28 pointer-events-none z-0">
        {/* Spray-painted Circular Spider-Man Stencil Mark */}
        <div className="relative w-full h-full opacity-90 drop-shadow-[0_0_12px_rgba(174,4,13,0.8)] animate-pulse" style={{ animationDuration: "5s" }}>
          <Image
            src="/logos/spiderman-miles.svg"
            alt="Spider Stencil"
            fill
            className="object-contain filter contrast-125"
          />
        </div>
      </div>

      {/* Doodled Street-Art Curved Arrow & Splatters */}
      <div className="absolute -top-7 left-24 sm:left-28 pointer-events-none z-20">
        <svg width="68" height="32" viewBox="0 0 68 32" fill="none" className="text-white">
          {/* Curved Graffiti Arrow */}
          <path
            d="M2 14 C18 4, 38 4, 58 18"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M48 20 L58 18 L55 8"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Action / Energy Accent Lines */}
          <path d="M12 2 L18 6" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
          <path d="M26 0 L30 5" stroke="#ae040d" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Spray Splatter Droplets (Top Right & Edges) */}
      <div className="absolute -top-3 -right-4 sm:-right-6 flex flex-col gap-1 pointer-events-none z-0">
        <span className="w-2.5 h-2.5 rounded-full bg-black border border-white/20 shadow-[0_0_6px_rgba(0,0,0,0.8)]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#ae040d] ml-3" />
        <span className="w-1 h-1 rounded-full bg-black ml-1.5" />
      </div>

      {/* Main "HELLO. I'M" Graffiti Name Tag Sticker */}
      <motion.div
        whileHover={{ rotate: 0, scale: 1.03, y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10 w-fit cursor-default -rotate-3 transition-transform"
      >
        <div className="relative rounded-2xl overflow-hidden bg-white shadow-[0_16px_32px_-8px_rgba(0,0,0,0.9),0_0_25px_rgba(174,4,13,0.35)] border border-white/20">
          {/* Red Header Bar */}
          <div className="bg-[#ae040d] px-5 py-2.5 sm:px-6 sm:py-3 flex items-center justify-between gap-4 border-b-2 border-black/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span className="font-spiderman text-white text-lg sm:text-2xl tracking-[0.16em] uppercase font-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                HELLO. I&apos;M
              </span>
            </div>

            {/* Street Doodles: Spray Can & Urban Tag Icons */}
            <div className="flex items-center gap-2 text-white/90">
              {/* Mini Spray Can Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C10.9 2 10 2.9 10 4V6H7C5.9 6 5 6.9 5 8V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V8C19 6.9 18.1 6 17 6H14V4C14 2.9 13.1 2 12 2ZM12 4C12.55 4 13 4.45 13 5V6H11V5C11 4.45 11.45 4 12 4ZM7 8H17V12H7V8ZM7 14H17V20H7V14Z" />
              </svg>
              {/* Mini Headphone Doodle */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C7.03 3 3 7.03 3 12V19C3 20.66 4.34 22 6 22H8C8.55 22 9 21.55 9 21V15C9 14.45 8.55 14 8 14H5V12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12V14H16C15.45 14 15 14.45 15 15V21C15 21.55 15.45 22 16 22H18C19.66 22 21 20.66 21 19V12C21 7.03 16.97 3 12 3Z" />
              </svg>
            </div>
          </div>

          {/* White Sticker Body with Tagged Name "ABHINAY" in Street Brush Script */}
          <div className="relative px-6 pt-3 pb-4 sm:px-8 sm:pt-4 sm:pb-5 bg-gradient-to-b from-[#ffffff] via-[#f7f7f9] to-[#ececed] flex items-center justify-center min-w-[240px] sm:min-w-[280px]">
            {/* Background Halftone Spray Texture */}
            <div className="absolute inset-0 halftone-dots opacity-15 pointer-events-none" />

            {/* Street Tagged Name */}
            <div className="relative z-10 text-center">
              <span className="font-brush text-4xl sm:text-5xl md:text-6xl text-black font-black tracking-wider block -rotate-2 select-none filter drop-shadow-[2px_3px_0px_rgba(174,4,13,0.35)]">
                ABHINAY
              </span>
            </div>

            {/* Corner Peeling Sticker Notch Effect */}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-zinc-300 border-t border-l border-black/15 shadow-inner" style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} />
          </div>

          {/* Realistic Paint Drips Hanging Below Sticker */}
          <div className="absolute -bottom-3 left-8 w-1 h-3.5 bg-black rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
          <div className="absolute -bottom-2 left-16 w-1 h-2.5 bg-black rounded-full" />
          <div className="absolute -bottom-4 right-14 w-1.5 h-4.5 bg-[#ae040d] rounded-full shadow-[0_2px_4px_rgba(174,4,13,0.5)]" />
          <div className="absolute -bottom-2 right-10 w-1 h-2 bg-black rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}

