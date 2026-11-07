"use client";

import { useEffect, useState, useRef } from "react";

export default function SpiderDoodleArrow() {
  const [coords, setCoords] = useState<{
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    midX: number;
    midY: number;
    isMobile: boolean;
    visible: boolean;
  }>({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    midX: 0,
    midY: 0,
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
      const nameRect = nameTagEl.getBoundingClientRect();
      const faceRect = faceTargetEl.getBoundingClientRect();
      const isMobile = svgRect.width < 1024;

      // End directly at the target anchor on Abhinay's head
      const endX = faceRect.left - svgRect.left + faceRect.width / 2;
      const endY = faceRect.top - svgRect.top + faceRect.height / 2;

      let startX: number;
      let startY: number;

      if (isMobile) {
        // Mobile layout: Name Tag sits directly above Abhinay's portrait.
        // Arrow starts from the bottom-right of the "ABHINAY" text on the sticker,
        // making a short, compact doodle swoosh (~60-80px) pointing right into his hair.
        startX = nameRect.right - svgRect.left - 24;
        startY = nameRect.bottom - svgRect.top - 4;
      } else {
        // Desktop layout: Name tag is in the left column.
        // Start from top-right of the "ABHINAY" name tag on the sticker.
        startX = nameRect.right - svgRect.left - (nameRect.width > 200 ? 35 : 10);
        startY = nameRect.top - svgRect.top + 8;
      }

      // Midpoint along the flight path for the comic energy action lines
      const midX = isMobile ? (startX + endX) / 2 + 10 : (startX + endX) / 2;
      const midY = isMobile ? (startY + endY) / 2 : Math.min(startY, endY) - 32;

      setCoords({
        startX,
        startY,
        endX,
        endY,
        midX,
        midY,
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

  const { startX, startY, endX, endY, midX, midY, isMobile } = coords;
  const dx = endX - startX;
  const dy = endY - startY;

  // Compute smooth curved control points with high comic energy
  let cp1X: number, cp1Y: number, cp2X: number, cp2Y: number;
  let arrowAngle: number;

  if (isMobile) {
    // Mobile layout: Short, crisp downward swoosh (~60-85px) pointing right to Abhinay's hair
    cp1X = startX + (dx < 0 ? 12 : -12);
    cp1Y = startY + dy * 0.35;
    cp2X = endX + (dx < 0 ? 16 : -16);
    cp2Y = endY - Math.min(22, Math.max(12, dy * 0.3));

    arrowAngle = Math.atan2(endY - cp2Y, endX - cp2X);
  } else {
    // Desktop layout: Face is to the right of the name tag
    const archHeight = Math.max(35, Math.min(80, dx * 0.22));
    cp1X = startX + dx * 0.35;
    cp1Y = Math.min(startY, endY) - archHeight - 12;
    cp2X = startX + dx * 0.75;
    cp2Y = endY - 18;

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
        {/* Glow filter for Spider-Verse chromatic effect */}
        <filter id="spider-arrow-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="-2" dy="0" stdDeviation="1.5" floodColor="#00f0ff" floodOpacity="0.8" />
          <feDropShadow dx="2" dy="1" stdDeviation="1.5" floodColor="#ae040d" floodOpacity="0.8" />
        </filter>
      </defs>

      {/* Cyan Shadow Offset Stroke (Spider-Verse Glitch) */}
      <path
        d={pathD}
        fill="none"
        stroke="#00f0ff"
        strokeWidth={isMobile ? "2.6" : "3.0"}
        strokeLinecap="round"
        transform="translate(-2, 1)"
        opacity="0.75"
      />

      {/* Red Shadow Offset Stroke (Spider-Verse Glitch) */}
      <path
        d={pathD}
        fill="none"
        stroke="#ae040d"
        strokeWidth={isMobile ? "2.8" : "3.2"}
        strokeLinecap="round"
        transform="translate(2, -1)"
        opacity="0.85"
      />

      {/* Main Hand-Drawn Chalk White Stroke */}
      <path
        d={pathD}
        fill="none"
        stroke="#ffffff"
        strokeWidth={isMobile ? "3.2" : "3.6"}
        strokeLinecap="round"
        filter="url(#spider-arrow-glow)"
      />

      {/* Arrowhead Cyan Offset */}
      <path
        d={`M ${barb1X} ${barb1Y} L ${endX} ${endY} L ${barb2X} ${barb2Y}`}
        fill="none"
        stroke="#00f0ff"
        strokeWidth={isMobile ? "2.6" : "3.2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-2, 1)"
        opacity="0.75"
      />

      {/* Arrowhead Red Offset */}
      <path
        d={`M ${barb1X} ${barb1Y} L ${endX} ${endY} L ${barb2X} ${barb2Y}`}
        fill="none"
        stroke="#ae040d"
        strokeWidth={isMobile ? "2.8" : "3.4"}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2, -1)"
        opacity="0.85"
      />

      {/* Arrowhead Main White Tip */}
      <path
        d={`M ${barb1X} ${barb1Y} L ${endX} ${endY} L ${barb2X} ${barb2Y}`}
        fill="none"
        stroke="#ffffff"
        strokeWidth={isMobile ? "3.2" : "3.8"}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#spider-arrow-glow)"
      />

      {/* Comic Energy Action Ticks (//) along the curve */}
      <g
        transform={`translate(${midX}, ${midY + (isMobile ? 0 : 14)}) ${isMobile ? "scale(0.85)" : ""}`}
        opacity="0.9"
      >
        <line x1="-12" y1="0" x2="-6" y2="-8" stroke="#00f0ff" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="-4" y1="2" x2="2" y2="-6" stroke="#ae040d" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="4" y1="4" x2="10" y2="-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

