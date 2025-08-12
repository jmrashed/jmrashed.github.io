import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google";
import type React from "react";
import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Rashed Zaman - Tech Leader & Innovation Driver",
  description:
    "Senior Technology Leader with 10+ years guiding high-performing teams, managing $2M+ budgets, and delivering scalable, AI-powered solutions.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
      <body className="font-sans flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
