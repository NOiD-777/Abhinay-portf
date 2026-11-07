"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useSpring(0, { stiffness: 450, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 28 });
  const trailingX = useSpring(0, { stiffness: 200, damping: 22 });
  const trailingY = useSpring(0, { stiffness: 200, damping: 22 });

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      trailingX.set(e.clientX);
      trailingY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("button") ||
            target.closest("a") ||
            target.closest("input") ||
            target.closest("textarea") ||
            target.getAttribute("role") === "button"
        );
        setIsPointer(isInteractive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, trailingX, trailingY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center dot in intense crimson */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#ae040d] pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(174,4,13,1)]"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
      {/* Trailing ring with Spider-Sense chromatic aberration on interactive hover */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
          isPointer
            ? "w-10 h-10 bg-[#ae040d]/15 border border-[#ae040d] shadow-[-2px_0_0_rgba(0,240,255,0.75),2px_0_0_rgba(225,6,0,0.85)] scale-110"
            : "w-7 h-7 border border-[#ae040d]/40"
        }`}
        style={{
          x: trailingX,
          y: trailingY,
        }}
      />
    </>
  );
}
