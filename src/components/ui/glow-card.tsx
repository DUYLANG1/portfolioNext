"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface GlowCardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, hover = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "relative rounded-xl card-enhanced group overflow-hidden",
          "before:absolute before:inset-0 before:bg-linear-to-r before:from-primary/20 before:via-accent/10 before:to-secondary/20 before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-500",
          "after:absolute after:inset-0 after:bg-linear-to-br after:from-transparent after:via-primary/5 after:to-transparent after:opacity-0 group-hover:after:opacity-100 after:transition-all after:duration-300",
          className
        )}
        {...props}
      />
    );
  }
);
GlowCard.displayName = "GlowCard";
