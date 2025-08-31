import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DUYLANG - Full Stack Developer Portfolio",
  description:
    "Portfolio of DUYLANG - ReactJS Developer specializing in modern web development with React, Next.js, Node.js, and TypeScript.",
  keywords: [
    "DUYLANG",
    "Full Stack Developer",
    "ReactJS Developer",
    "Frontend Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "DUYLANG" }],
  creator: "DUYLANG",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "DUYLANG Portfolio",
    title: "DUYLANG - Full Stack Developer Portfolio",
    description:
      "Portfolio of DUYLANG - ReactJS Developer specializing in modern web development.",
    images: [
      {
        url: "/avatar.svg",
        width: 1200,
        height: 630,
        alt: "DUYLANG Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DUYLANG - Full Stack Developer Portfolio",
    description:
      "Portfolio of DUYLANG - ReactJS Developer specializing in modern web development.",
    images: ["/avatar.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
