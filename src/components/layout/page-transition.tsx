"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(true); // Start as ready
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    setIsReady(false);

    // Quick transition - just enough to prevent flash
    const timer = setTimeout(() => {
      setIsReady(true);
      setShowLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (showLoading && !isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
}
