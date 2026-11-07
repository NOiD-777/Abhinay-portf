"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#770007] via-[#ae040d] to-[#d60815] origin-left z-50 shadow-[0_0_16px_rgba(174,4,13,0.8)]"
      style={{ scaleX }}
    />
  );
}
