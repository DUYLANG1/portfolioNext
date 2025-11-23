"use client";

import { motion } from "framer-motion";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="py-12 px-4 border-t border-primary/20 bg-linear-to-r from-muted/30 via-background to-muted/30"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full glow-primary mb-4" />
          <p className="text-muted-foreground mb-2">
            © {currentYear}{" "}
            <span className="gradient-text-primary font-semibold">DUYLANG</span>
          </p>
          <p className="text-sm text-muted-foreground/80">
            Built with <span className="gradient-text-secondary">Next.js</span>,{" "}
            <span className="gradient-text-accent">shadcn/ui</span>, and{" "}
            <span className="gradient-text-primary">Tailwind CSS</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground/60"
        >
          Crafted with passion for beautiful, accessible web experiences
        </motion.div>
      </div>
    </footer>
  );
}
