import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bebas_Neue, Road_Rage, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";

const spiderFont = localFont({
  src: "../../public/fonts/Spider-Man-TFonts1.woff2",
  variable: "--font-spiderman",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const roadRage = Road_Rage({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brush",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhinay Musku — Autonomous AI & Data Engineer",
  description:
    "Data & AI Engineer @ JMAN Group. Architecting autonomous GenAI agents, enterprise lakehouse pipelines, and edge computer vision systems.",
  authors: [{ name: "Abhinay Musku", url: "https://github.com/NOiD-777" }],
  openGraph: {
    title: "Abhinay Musku — Autonomous AI & Data Engineer",
    description:
      "Data & AI Engineer @ JMAN Group. Architecting autonomous GenAI agents, enterprise lakehouse pipelines, and edge computer vision systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinay Musku — Autonomous AI & Data Engineer",
    description:
      "Data & AI Engineer @ JMAN Group. Architecting autonomous GenAI agents, enterprise lakehouse pipelines, and edge computer vision systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spiderFont.variable} ${bebasNeue.variable} ${roadRage.variable} dark`}
    >
      <body className="bg-black text-[#ededed] font-sans antialiased selection:bg-[#ae040d]/40 selection:text-white">
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
