"use client";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimationLottieProps {
  src: string;
  width?: string | number;
  loop?: boolean;
  className?: string;
}

export function AnimationLottie({
  src,
  width = "100%",
  loop = true,
  className,
}: AnimationLottieProps) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => setAnimationData(null));
  }, [src]);

  if (!animationData) return null;

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={className}
      style={{ width }}
    >
      <Lottie animationData={animationData} loop={loop} />
    </motion.div>
  );
}
