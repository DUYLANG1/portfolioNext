"use client";

import { CodeProfile } from "./code-profile";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

import { AnimationLottie } from "../common/animation-lottie";

export function HeaderSection() {
  return (
    <section className="pt-36 pb-20 px-4" id="hero">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I&apos;m <span className="text-primary">DUYLANG</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Software Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-primary font-semibold"
                repeat={Infinity}
              />
              <br /> with a passion for building modern, scalable web
              applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#experience"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded-xl border border-primary/20 hover:border-primary hover:bg-primary/5 font-semibold transition-colors"
              >
                Contact Me
              </Link>
              <a
                href="/assets/CV/VuDuyLang_CV.pdf"
                download
                className="px-6 py-3 rounded-xl border border-primary/20 hover:border-primary hover:bg-primary/5 font-semibold transition-colors"
              >
                Download CV
              </a>
            </div>
            <div className="relative w-40 h-40 md:hidden">
              <Image
                src="/avatar.svg"
                alt="Avatar"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <AnimationLottie src="/assets/lottie/header.json" width="60%" loop />
        </div>
        <div className="space-y-6">
          <CodeProfile />
        </div>
      </div>
    </section>
  );
}
