"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function SpiderDoodleArrow() {
  const [coords, setCoords] = useState<{
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    isMobile: boolean;
    visible: boolean;
  }>({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    isMobile: false,
    visible: false,
  });

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const updateCoords = () => {
      const nameTagEl = document.getElementById("hero-name-tag");
      const faceTargetEl = document.getElementById("hero-face-target");
      const svgEl = svgRef.current;

      if (!nameTagEl || !faceTargetEl || !svgEl) return;

      const svgRect = svgEl.getBoundingClientRect();
      const faceRect = faceTargetEl.getBoundingClientRect();
      const isMobile = svgRect.width < 1024;

      // End directly at the target anchor on the outer perimeter of Abhinay's head
      const endX = faceRect.left - svgRect.left + faceRect.width / 2;
      const endY = faceRect.top - svgRect.top + faceRect.height / 2;

      // Start cleanly outside the name tag card so it doesn't overlap the "Y" in ABHINAY
      const cardEl = nameTagEl.closest(".rounded-2xl") || nameTagEl;
      const cardRect = cardEl.getBoundingClientRect();

      let startX: number;
      let startY: number;

      if (isMobile) {
        // Mobile layout: Name Tag sits directly above Abhinay's portrait.
        // Arrow starts cleanly below the bottom-right of the sticker card.
        startX = cardRect.right - svgRect.left - 20;
        startY = cardRect.bottom - svgRect.top + 6;
      } else {
        // Desktop layout: Start cleanly outside the right edge of the card (later along the path).
        startX = cardRect.right - svgRect.left + 12;
        startY = cardRect.top - svgRect.top + cardRect.height * 0.42;
      }

      setCoords({
        startX,
        startY,
        endX,
        endY,
        isMobile,
        visible: true,
      });
    };

    updateCoords();
    const t1 = setTimeout(updateCoords, 100);
    const t2 = setTimeout(updateCoords, 400);
    const t3 = setTimeout(updateCoords, 1000);

    window.addEventListener("resize", updateCoords);
    window.addEventListener("scroll", updateCoords, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("resize", updateCoords);
      window.removeEventListener("scroll", updateCoords);
    };
  }, []);

  if (!coords.visible) {
    return (
      <svg
        ref={svgRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible opacity-0"
      />
    );
  }

  const { startX, startY, endX, endY, isMobile } = coords;
  const dx = endX - startX;
  const dy = endY - startY;

  // Compute smooth curved control points with high comic energy
  let cp1X: number, cp1Y: number, cp2X: number, cp2Y: number;
  let arrowAngle: number;

  if (isMobile) {
    // Mobile layout: Short, crisp downward swoosh pointing directly to top of Abhinay's head
    cp1X = startX + (dx < 0 ? -8 : 8);
    cp1Y = startY + dy * 0.35;
    cp2X = endX + (dx < 0 ? 14 : -14);
    cp2Y = endY - Math.min(20, Math.max(12, dy * 0.28));

    arrowAngle = Math.atan2(endY - cp2Y, endX - cp2X);
  } else {
    // Desktop layout: Face is to the right of the name tag
    const archHeight = Math.max(30, Math.min(75, dx * 0.22));
    cp1X = startX + dx * 0.3;
    cp1Y = Math.min(startY, endY) - archHeight - 10;
    cp2X = startX + dx * 0.75;
    cp2Y = endY - 14;

    arrowAngle = Math.atan2(endY - cp2Y, endX - cp2X);
  }

  const pathD = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

  // Arrowhead points: compact on mobile, bolder on desktop
  const headLength = isMobile ? 12 : 18;
  const headAngleOffset = Math.PI / 6; // 30 degrees
  const barb1X = endX - headLength * Math.cos(arrowAngle - headAngleOffset);
  const barb1Y = endY - headLength * Math.sin(arrowAngle - headAngleOffset);
  const barb2X = endX - headLength * Math.cos(arrowAngle + headAngleOffset);
  const barb2Y = endY - headLength * Math.sin(arrowAngle + headAngleOffset);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible"
    >
      <defs>
        {/* Glow filter with purple & red shadow accents */}
        <filter id="spider-arrow-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="-2" dy="0" stdDeviation="1.5" floodColor="#a855f7" floodOpacity="0.8" />
          <feDropShadow dx="2" dy="1" stdDeviation="1.5" floodColor="#ae040d" floodOpacity="0.8" />
        </filter>
      </defs>

      {/* Purple Shadow Offset Stroke */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.75 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        d={pathD}
        fill="none"
        stroke="#a855f7"
        strokeWidth={isMobile ? "2.6" : "3.0"}
        strokeLinecap="round"
        transform="translate(-2, 1)"
      />

      {/* Red Shadow Offset Stroke */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.85 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        d={pathD}
        fill="none"
        stroke="#ae040d"
        strokeWidth={isMobile ? "2.8" : "3.2"}
        strokeLinecap="round"
        transform="translate(2, -1)"
      />

      {/* Main Hand-Drawn Chalk White Stroke */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        d={pathD}
        fill="none"
        stroke="#ffffff"
        strokeWidth={isMobile ? "3.2" : "3.6"}
        strokeLinecap="round"
        filter="url(#spider-arrow-glow)"
      />

      {/* Arrowhead Purple Offset */}
      <motion.path
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.75, scale: 1 }}
        transition={{ duration: 0.25, delay: 0.85 }}
        d={`M ${barb1X} ${barb1Y} L ${endX} ${endY} L ${barb2X} ${barb2Y}`}
        fill="none"
        stroke="#a855f7"
        strokeWidth={isMobile ? "2.6" : "3.2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-2, 1)"
      />

      {/* Arrowhead Red Offset */}
      <motion.path
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 0.25, delay: 0.85 }}
        d={`M ${barb1X} ${barb1Y} L ${endX} ${endY} L ${barb2X} ${barb2Y}`}
        fill="none"
        stroke="#ae040d"
        strokeWidth={isMobile ? "2.8" : "3.4"}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2, -1)"
      />

      {/* Arrowhead Main White Tip */}
      <motion.path
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, delay: 0.85 }}
        d={`M ${barb1X} ${barb1Y} L ${endX} ${endY} L ${barb2X} ${barb2Y}`}
        fill="none"
        stroke="#ffffff"
        strokeWidth={isMobile ? "3.2" : "3.8"}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#spider-arrow-glow)"
      />
    </svg>
  );
}

