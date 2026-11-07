"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Only enable Lenis on client with pointer capability
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      return; // Use native momentum scrolling on mobile for optimal performance
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    if (typeof window !== "undefined") {
      (window as any).lenis = lenis;
    }

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (typeof window !== "undefined") {
        delete (window as any).lenis;
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

