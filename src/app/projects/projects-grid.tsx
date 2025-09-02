"use client";
import { projects } from "@/lib/data";
import { GlowCard } from "@/components/ui/glow-card";
import { Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/layout/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimationLottie } from "@/components/common/animation-lottie";
import {
  useReliableVisibility,
  createReliableAnimationProps,
} from "@/hooks/useReliableVisibility";
import { PROJECT_LOTTIE } from "@/../public/assets/lottie/string/projectlottie";

const projectLottie = JSON.parse(PROJECT_LOTTIE);
const blob = new Blob([JSON.stringify(projectLottie)], {
  type: "application/json",
});
const blobUrl = URL.createObjectURL(blob);
function GitHubIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ProjectsGrid() {
  const isVisible = useReliableVisibility(100);
  const [cardsReady, setCardsReady] = useState(false);

  useEffect(() => {
    // Ensure cards are ready for animation
    const cardsTimer = setTimeout(() => {
      setCardsReady(true);
    }, 200);

    return () => clearTimeout(cardsTimer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...createReliableAnimationProps(isVisible, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
            })}
            className="text-center mb-20"
          >
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              All Projects
              <span className="inline-block w-10 h-10">
                <AnimationLottie
                  src={blobUrl}
                  width={40}
                  loop
                  className="pointer-events-none select-none"
                />
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A curated selection of things I&apos;ve built, experimented with,
              or shipped.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                {...createReliableAnimationProps(isVisible, {
                  initial: { opacity: 0, y: 12 },
                  animate: {
                    opacity: cardsReady ? 1 : 0,
                    y: cardsReady ? 0 : 12,
                  },
                  transition: {
                    duration: 0.5,
                    delay: cardsReady ? i * 0.1 : 0,
                  },
                })}
              >
                <GlowCard className="group relative overflow-hidden border bg-background/60 backdrop-blur-sm flex flex-col h-full">
                  <div className="flex flex-col gap-4 p-5 flex-1">
                    {p.image && (
                      <div className="relative h-40 rounded-md overflow-hidden border bg-muted/40">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.image}
                          alt={p.title}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    )}
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        #{p.id}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {p.description}
                      </p>
                    </div>
                    {p.tags && (
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-medium tracking-wide border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-sm">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium shadow hover:bg-primary/90"
                      >
                        <GitHubIcon className="h-4 w-4" /> Code
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border text-xs font-medium hover:bg-accent hover:text-accent-foreground"
                      >
                        <Globe className="h-4 w-4" /> Demo
                      </a>
                    )}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <footer className="py-8 px-4 border-t mt-24">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground text-sm">
          © 2025 DUYLANG. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
