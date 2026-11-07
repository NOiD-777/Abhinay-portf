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
    visible: boolean;
  }>({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    midX: 0,
    midY: 0,
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

      // Start from the top right of the "ABHINAY" name tag on the sticker
      const startX = nameRect.right - svgRect.left - (nameRect.width > 200 ? 35 : 10);
      const startY = nameRect.top - svgRect.top + 8;

      // End directly at the left edge of Abhinay's face in the cutout portrait
      const endX = faceRect.left - svgRect.left + 2;
      const endY = faceRect.top - svgRect.top + 4;

      // Midpoint along the flight path for the comic sticker badge
      const midX = (startX + endX) / 2;
      const midY = Math.min(startY, endY) - 32;

      setCoords({
        startX,
        startY,
        endX,
        endY,
        midX,
        midY,
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

  const { startX, startY, endX, endY, midX, midY } = coords;
  const dx = endX - startX;
  const dy = endY - startY;

  // Compute smooth curved control points with high comic energy
  let cp1X: number, cp1Y: number, cp2X: number, cp2Y: number;
  let arrowAngle: number;

  if (dx > 0) {
    // Desktop layout: Face is to the right of the name tag
    const archHeight = Math.max(35, Math.min(80, dx * 0.22));
    cp1X = startX + dx * 0.35;
    cp1Y = Math.min(startY, endY) - archHeight - 12;
    cp2X = startX + dx * 0.75;
    cp2Y = endY - 18;

    arrowAngle = Math.atan2(endY - cp2Y, endX - cp2X);
  } else {
    // Mobile layout: Portrait is stacked above the name tag
    cp1X = startX + 20;
    cp1Y = startY - Math.abs(dy) * 0.5;
    cp2X = endX - 25;
    cp2Y = endY + Math.abs(dy) * 0.25;

    arrowAngle = Math.atan2(endY - cp2Y, endX - cp2X);
  }

  const pathD = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

  // Arrowhead points (length 18, spread 12)
  const headLength = 18;
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
        strokeWidth="3"
        strokeLinecap="round"
        transform="translate(-2, 1)"
        opacity="0.75"
      />

      {/* Red Shadow Offset Stroke (Spider-Verse Glitch) */}
      <path
        d={pathD}
        fill="none"
        stroke="#ae040d"
        strokeWidth="3.2"
        strokeLinecap="round"
        transform="translate(2, -1)"
        opacity="0.85"
      />

      {/* Main Hand-Drawn Chalk White Stroke */}
      <path
        d={pathD}
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.6"
        strokeLinecap="round"
        filter="url(#spider-arrow-glow)"
      />

      {/* Arrowhead Cyan Offset */}
      <path
        d={`M ${barb1X} ${barb1Y} L ${endX} ${endY} L ${barb2X} ${barb2Y}`}
        fill="none"
        stroke="#00f0ff"
        strokeWidth="3.2"
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
        strokeWidth="3.4"
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
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#spider-arrow-glow)"
      />

      {/* Comic Energy Action Ticks (//) along the curve */}
      <g transform={`translate(${midX}, ${midY + 14})`} opacity="0.9">
        <line x1="-12" y1="0" x2="-6" y2="-8" stroke="#00f0ff" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="-4" y1="2" x2="2" y2="-6" stroke="#ae040d" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="4" y1="4" x2="10" y2="-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

