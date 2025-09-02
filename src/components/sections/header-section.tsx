"use client";
import { motion } from "framer-motion";
import { CodeProfile } from "./code-profile";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import {
  useReliableVisibility,
  createReliableAnimationProps,
} from "@/hooks/useReliableVisibility";
import { AnimationLottie } from "../common/animation-lottie";

// Improved Typewriter Effect Component
function TypewriterText() {
  const phrases = useMemo(
    () => ["MERN Stack Developer", "Software Developer"],
    []
  );
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState(phrases[0]); // Always start with first phrase
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(true); // Start paused
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const isVisible = useReliableVisibility(50); // Use the hook for reliable visibility

  useEffect(() => {
    // Start animation after component has mounted and displayed initial text
    const animationDelay = setTimeout(() => {
      setShouldAnimate(true);
      setIsPaused(false);
    }, 2000); // Show initial text for 2 seconds before starting animation

    return () => clearTimeout(animationDelay);
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    const currentPhrase = phrases[currentPhraseIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500);

      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentPhrase.length) {
            setCurrentText(currentPhrase.slice(0, currentText.length + 1));
          } else {
            setIsPaused(true);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentPhraseIndex,
    phrases,
    isPaused,
    shouldAnimate,
  ]);

  return (
    <span
      className="inline-flex items-center"
      style={{ opacity: isVisible ? 1 : undefined }} // Fallback visibility
    >
      <span className="text-primary font-semibold">{currentText}</span>
      <span className="ml-1 w-0.5 h-6 bg-primary animate-pulse" />
    </span>
  );
}

function CvButton({
  variant = "primary",
}: {
  variant?: "primary" | "outline";
}) {
  const base =
    "px-6 py-3 rounded-xl text-sm font-semibold shadow-lg transition-all duration-300 inline-flex items-center gap-2 relative overflow-hidden group transform hover:scale-105 active:scale-95";

  if (variant === "outline") {
    return (
      <a
        href="/assets/CV/VuDuyLang_CV.pdf"
        download
        className={`${base} border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary hover:bg-primary/5 hover:shadow-primary/20 hover:shadow-2xl text-foreground`}
      >
        <span className="relative z-10">Download CV</span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
    );
  }
  return (
    <a
      href="/assets/CV/VuDuyLang_CV.pdf"
      download
      className={`${base} bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:via-primary hover:to-primary shadow-primary/25 hover:shadow-primary/40 hover:shadow-2xl`}
    >
      <span className="relative z-10">Download CV</span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
}

export function HeaderSection() {
  const isVisible = useReliableVisibility(100);

  return (
    <section className="pt-36 pb-20 px-4" id="hero">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            {...createReliableAnimationProps(isVisible, {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
            })}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I&apos;m <span className="text-primary">DUYLANG</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              <TypewriterText /> with a passion for building modern, scalable
              web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#experience"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 relative overflow-hidden group transform hover:scale-105 active:scale-95 hover:from-primary/90 hover:via-primary hover:to-primary"
              >
                <span className="relative z-10">Experience</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded-xl border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary hover:bg-primary/5 hover:shadow-primary/20 hover:shadow-2xl text-foreground text-sm font-semibold shadow-lg transition-all duration-300 inline-flex items-center gap-2 relative overflow-hidden group transform hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <CvButton variant="outline" />
            </div>
            <div className="relative w-40 h-40 md:hidden">
              <Image
                src="/avatar.svg"
                alt="Avatar"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
          <div className="items-start text-start">
            <AnimationLottie
              src="/assets/lottie/header.json"
              className="w-full max-w-xl mx-auto"
              width="60%"
              loop
            />
          </div>
        </div>
        <div className="space-y-6">
          <CodeProfile />
        </div>
      </div>
    </section>
  );
}
