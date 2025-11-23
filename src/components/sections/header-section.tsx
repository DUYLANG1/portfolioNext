"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { AnimationLottie } from "../common/animation-lottie";

export function HeaderSection() {
  return (
    <section
      className="pt-24 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20 px-4 overflow-hidden"
      id="hero"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Lottie Animation - First on mobile, right side on desktop */}
        <div className="order-1 md:order-2 flex justify-center items-center">
          <AnimationLottie src="/assets/lottie/header.json" width="60%" loop />
        </div>

        <div className="order-2 md:order-1">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text-primary relative inline-block">
                DUYLANG
                <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 md:h-2 bg-gradient-primary opacity-30 blur-sm rounded-full"></span>
              </span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light min-h-[80px] md:min-h-[100px]">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Software Developer",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text-secondary font-semibold"
                repeat={Infinity}
              />
              <br />
              <span className="text-base sm:text-lg md:text-xl opacity-80">
                Crafting modern, scalable web experiences.
              </span>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4 pt-2 max-w-2xl mx-auto md:mx-0">
              <Link
                href="#experience"
                className="flex-1 min-w-[140px] px-6 py-3 md:px-8 md:py-4 rounded-2xl btn-primary-enhanced font-bold text-base md:text-lg tracking-wide text-center hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="flex-1 min-w-[140px] px-6 py-3 md:px-8 md:py-4 rounded-2xl glass font-semibold text-base md:text-lg hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-lg border-animated group text-center flex items-center justify-center"
              >
                <span className="relative z-10 group-hover:gradient-text-primary">
                  Contact Me
                </span>
              </Link>
              <a
                href="https://www.topcv.vn/xem-cv/UQZQBgAFClBUUVACA1AEC1AAAVNTCglTUlJbAQ3b8b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-secondary/20 font-semibold text-base md:text-lg hover:bg-secondary/80 transition-all duration-300 hover:scale-105 text-center flex items-center justify-center"
              >
                Get CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
