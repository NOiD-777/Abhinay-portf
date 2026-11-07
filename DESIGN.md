---
name: Abhinay Musku Portfolio Design System
description: Authoritative dark brutalist visual system for an enterprise Data & AI Engineer
colors:
  primary: "#ae040d"
  primary-hover: "#c50512"
  secondary: "#2a0845"
  secondary-dark: "#12071f"
  secondary-border: "rgba(147, 51, 234, 0.25)"
  background: "#000000"
  surface: "#09090b"
  surface-hover: "#0e0717"
  border: "rgba(255, 255, 255, 0.08)"
  border-subtle: "rgba(255, 255, 255, 0.05)"
  text-primary: "#ffffff"
  text-secondary: "#d4d4d8"
  text-muted: "#a1a1aa"
  text-dim: "#52525b"
  multiverse-cyan: "#00f0ff"
  spider-crimson: "#ff0055"
  purple-selection: "rgba(59, 7, 100, 0.55)"
  scrollbar-thumb: "#1c1c22"
typography:
  display:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  mono:
    fontFamily: "var(--font-geist-mono), ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
  caption:
    fontFamily: "var(--font-geist-mono), ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.05em"
  micro:
    fontFamily: "var(--font-geist-mono), ui-monospace, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  xs: "3px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "#111115"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "28px"
---

# Design System

<!-- impeccable:design-schema 1 -->

## Overview

A high-contrast, editorial dark design system tailored for Abhinay Musku's technical portfolio. The visual world fuses classical Renaissance artistry (Michelangelo's *Creation of Adam* blood-crimson motif) with restrained, precision-engineered dark brutalism. It explicitly rejects generic "AI slop" (low-contrast gray text, multicolored gradient soup, pastel cards, typewriter gimmicks) in favor of deep pitch-black voids, crisp Geist typography, and intentional dual-accent hierarchy: blood crimson for AI/Systems and deep royal obsidian purple for Cloud/Data.

## Colors

- **Pure Black (`#000000`):** The foundational infinite canvas. Every section boundary emerges from and recedes into true pitch black.
- **Blood Crimson (`#ae040d` / `#c50512` / `#770007`):** The primary focal accent. Applied to the wordmark dot, primary CTAs, AI/LLM system indicators, and the Michelangelo *Creation of Adam* hands motif.
- **Dark Royal Obsidian Purple (`#2a0845` / `#12071f` / `#3b0764`):** The secondary architectural accent. Reserved for Data/Cloud engineering badges, Databricks/PySpark tags, technical leadership pills, and hover surface depth.
- **Solid Dark Surfaces (`#09090b`):** Architectural flat card grounds that provide tangible hierarchy without blurry glassmorphism.
- **Precision Text Hierarchy:** Pure white (`#ffffff`) for titles, high-clarity zinc (`#d4d4d8`) for body prose, and muted zinc (`#a1a1aa` / `#71717a`) for metadata.

## Typography

The typography is built entirely on Vercel's **Geist** and **Geist Mono** to communicate industrial authority, crisp readability, and standard web excellence.

- **Hero Display:** 48px to 72px, weight 600, tight tracking (`-0.035em`), leading `1.05`.
- **Section Headers:** 32px to 48px, weight 600, tracking (`-0.03em`).
- **Eyebrow Tags:** 11px to 12px, Geist Mono, uppercase, tracking `0.1em`, colored in crimson (`#ae040d`).
- **Body Prose:** 15px to 18px, weight 400, leading `1.6`, high contrast (`#d4d4d8`).
- **Code & Telemetry:** 11px to 13px, Geist Mono, weight 500.

## Layout

- **Grid Architecture:** 12-column responsive layout with max content width constrained to `max-w-6xl` (1152px) for editorial balance.
- **Vertical Rhythm:** Deliberate sectional spacing (`py-28`) with razor-thin hairline borders (`border-t border-white/5`).
- **Mobile First Navigation:** Full-screen minimal drawer on mobile viewports; fixed, floating minimalist bar on desktop with 1-click smooth jump links.

## Elevation & Depth

- **Zero Blurry Gradients:** Depth is established through tonal layering, solid borders (`1px solid rgba(255, 255, 255, 0.08)`), and intentional drop shadows.
- **Silhouette Depth:** The Hero cutout portrait is grounded with dual directional shadows: blood crimson (`rgba(174, 4, 13, 0.25)`) and dark obsidian purple (`rgba(59, 7, 100, 0.35)`).
- **Hover States:** Cards elevate by `-2px` with a transition to deep obsidian violet (`#0e0717`) and crisp border brightening (`rgba(147, 51, 234, 0.35)` or `rgba(174, 4, 13, 0.45)`).

## Shapes

- **Border Radii:**
  - Standard Cards: `16px` (`rounded-2xl`)
  - Badges & Buttons: `8px` (`rounded-lg`)
  - Status Indicators: Perfect circles (`rounded-full`)
- **Hairline Borders:** Crisp 1px borders prevent visual clutter while creating sharp distinction from the `#000000` canvas.

## Components

- **Navbar Wordmark:** Clean typographic wordmark `Abhinay.` with a solid red dot. No monogram emblems.
- **Primary Action Buttons:** Solid `#ae040d` with crisp hover to `#c50512`. No rainbow gradients.
- **Secondary Action Buttons:** Solid `#111115` with hairline `border-white/10` and white hover state.
- **Case Study Cards:** Full-context layout highlighting Category, Title, Subtitle, Verified Repository links, Benchmark Metrics pills, and Tech Stack badges.
- **Hero Cutout Anchor:** Transparent, studio-grade cutout of Abhinay's portrait with feathered bottom alpha channel blending into `#000000`.

## Do's and Don'ts

### Do:
- Keep the background strictly pure `#000000` pitch black.
- Use Geist and Geist Mono exclusively.
- Use solid architectural card surfaces with sharp 1px borders.
- Preserve the dual accent identity: Crimson for AI/Systems, Dark Royal Purple for Data/Cloud/Leadership.
- Ensure every metric or claim links to verifiable evidence or code.

### Don't:
- Don't use rainbow, holographic, or generic multi-color gradients.
- Don't add monogram logos or gimmicky geometric icons.
- Don't add an automated chatbot (per explicit user instruction).
- Don't add typewriter loops or multi-role cycling gimmicks in headlines.
- Don't use low-contrast gray-on-gray text that harms readability.
