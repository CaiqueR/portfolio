import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Caique Ribeiro | Full Stack Developer",
  description:
    "Full Stack Developer passionate about creating modern web applications with React, Next.js, and TypeScript.",
  authors: [{ name: "Caique Ribeiro" }],
  keywords: [
    "Caique Ribeiro",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
  creator: "Caique Ribeiro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://caiquer.dev",
    title: "Caique Ribeiro | Full Stack Developer",
    description:
      "Full Stack Developer passionate about creating modern web applications with React, Next.js, and TypeScript.",
    siteName: "Caique Ribeiro Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caique Ribeiro | Full Stack Developer",
    description:
      "Full Stack Developer passionate about creating modern web applications with React, Next.js, and TypeScript.",
    creator: "@CaiqueR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
