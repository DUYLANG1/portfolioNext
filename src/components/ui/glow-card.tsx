"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface GlowCardProps extends React.ComponentProps<typeof motion.div> {
  hover?: boolean;
}

export const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, hover = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { scale: 1.02 } : undefined}
        transition={{ duration: 0.4 }}
        className={cn(
          "relative rounded-xl border bg-card/60 backdrop-blur-sm shadow-sm transition-all overflow-hidden",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:via-primary/0 before:to-primary/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity",
          className
        )}
        {...props}
      />
    );
  }
);
GlowCard.displayName = "GlowCard";
