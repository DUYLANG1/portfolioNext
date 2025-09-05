"use client";
import { projects } from "@/lib/data";
import { GlowCard } from "@/components/ui/glow-card";
import { ExternalLink, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/layout/navigation";
import { AnimationLottie } from "@/components/common/animation-lottie";
import { motion } from "framer-motion";

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
  return (
    <div className="min-h-screen relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(120,119,198,0.02)_50%,transparent_100%)] pointer-events-none" />

      <Navigation />
      <main className="relative pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl font-bold mb-6 flex items-center justify-center gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                All Projects
              </span>
              <motion.span
                className="inline-block w-12 h-12"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <AnimationLottie
                  src={blobUrl}
                  width={48}
                  loop
                  className="pointer-events-none select-none"
                />
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A curated selection of things I&apos;ve built, experimented with,
              and shipped. Each project represents a journey of learning and
              creativity.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>{projects.length} Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2024 - Present</span>
              </div>
            </motion.div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={`project-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <GlowCard className="p-0 overflow-hidden h-full flex flex-col bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                  {/* Image Section with Overlay */}
                  {p.image && (
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                      <img
                        src={p.image}
                        alt={p.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Floating Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <Badge
                          variant="secondary"
                          className="bg-background/90 backdrop-blur-sm border-border/50 shadow-lg"
                        >
                          #{p.id}
                        </Badge>
                      </div>
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                        {p.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground flex-1 mb-6 leading-relaxed">
                      {p.description}
                    </p>

                    {/* Tech Stack */}
                    {p.tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {p.tags.map((t, index) => (
                          <motion.span
                            key={t}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                            className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {p.github && (
                        <motion.a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          <GitHubIcon className="h-4 w-4" />
                          <span>Code</span>
                        </motion.a>
                      )}
                      {p.demo && (
                        <motion.a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-background/50 backdrop-blur-sm text-sm font-medium hover:bg-muted/80 transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className="h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <motion.footer
        className="py-12 px-4 border-t border-border/50 mt-32 bg-muted/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-muted-foreground text-sm mb-4">
            © 2025 DUYLANG. All rights reserved.
          </div>
          <div className="text-xs text-muted-foreground/70">
            Built with Next.js, Tailwind CSS, and lots of ☕
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
