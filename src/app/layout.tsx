import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeScript } from "@/components/ThemeToggle";
import { LangScript } from "@/components/LangToggle";
import { RevealScript } from "@/components/IntroReveal";
import { SiteNav } from "@/components/SiteNav";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Gonzalo Rosano",
  description:
    "Frontend developer: React, Next.js, Astro, Tauri + Rust. Open to full-time and freelance.",
  openGraph: {
    type: "website",
    siteName: "Gonzalo Rosano",
    title: "Gonzalo Rosano - Frontend developer",
    description: "React, Next.js, Astro, Tauri + Rust. Open to full-time and freelance.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <LangScript />
        <RevealScript />
      </head>
      <body className="min-h-full flex flex-col pb-24 lg:pb-0">
        <SmoothScroll />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
