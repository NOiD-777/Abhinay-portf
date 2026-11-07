import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Cursor from "@/components/ui/Cursor";

const spiderFont = localFont({
  src: "../../public/fonts/spiderman.woff2",
  variable: "--font-spiderman",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
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
  title: "Abhinay Musku — Full-Stack & AI Engineer",
  description:
    "Data Engineer @ JMAN Group. Architecting enterprise data pipelines and production Generative AI applications.",
  authors: [{ name: "Abhinay Musku", url: "https://github.com/NOiD-777" }],
  openGraph: {
    title: "Abhinay Musku — Full-Stack & AI Engineer",
    description:
      "Data Engineer @ JMAN Group. Architecting enterprise data pipelines and production Generative AI applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinay Musku — Full-Stack & AI Engineer",
    description:
      "Data Engineer @ JMAN Group. Architecting enterprise data pipelines and production Generative AI applications.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${spiderFont.variable} ${bebasNeue.variable} dark`}
    >
      <body className="bg-black text-[#ededed] font-sans antialiased selection:bg-[#ae040d]/40 selection:text-white">
        <ScrollProgress />
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
