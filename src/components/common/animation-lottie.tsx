"use client";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface AnimationLottieProps {
  src: string; // public path to JSON
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
  const [data, setData] = useState<object | null>(null);
  useEffect(() => {
    let active = true;
    fetch(src)
      .then((r) => r.json())
      .then((json) => {
        if (active) setData(json);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [src]);
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={className}
      style={{ width }}
    >
      {data && (
        <Lottie animationData={data} loop={loop} style={{ width: "100%" }} />
      )}
    </motion.div>
  );
}
