"use client";
import { useState, useEffect } from "react";

/**
 * Hook to ensure components are always visible regardless of animation state
 * Prevents components from being hidden when switching routes or during re-renders
 */
export function useReliableVisibility(delay: number = 100) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ensure component is always visible after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
}

/**
 * Utility function to create reliable animation props for framer-motion
 * Combines animation with fallback visibility styles
 */
export function createReliableAnimationProps(
  isVisible: boolean,
  animationProps: Record<string, unknown> = {}
) {
  const props = animationProps as { style?: Record<string, unknown> };
  return {
    ...animationProps,
    style: {
      opacity: isVisible ? 1 : undefined,
      visibility: "visible" as const,
      ...props?.style,
    },
  };
}
