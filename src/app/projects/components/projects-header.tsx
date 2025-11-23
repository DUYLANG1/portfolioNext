"use client";

import { motion } from "framer-motion";
import { AnimationLottie } from "@/components/common/animation-lottie";
import { Calendar } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  lottieIcon?: string;
  stats?: {
    count: number;
    label: string;
    dateRange?: string;
  };
}

export function PageHeader({
  title,
  description,
  lottieIcon,
  stats,
}: PageHeaderProps) {
  return (
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
        <span className="bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
          {title}
        </span>
        {lottieIcon && (
          <motion.span
            className="inline-block w-12 h-12"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <AnimationLottie
              src={lottieIcon}
              width={48}
              loop
              className="pointer-events-none select-none"
            />
          </motion.span>
        )}
      </motion.h1>
      <motion.p
        className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {description}
      </motion.p>

      {stats && (
        <motion.div
          className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>
              {stats.count} {stats.label}
            </span>
          </div>
          {stats.dateRange && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{stats.dateRange}</span>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
