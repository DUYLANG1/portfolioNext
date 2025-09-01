"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[70] overflow-hidden bg-transparent pointer-events-none">
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="h-full bg-gradient-to-r from-primary via-primary/60 to-primary"
      />
    </div>
  );
}
