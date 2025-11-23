"use client";
import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GlowCard } from "@/components/ui/glow-card";
import { GraduationCap } from "lucide-react";
import { AnimationLottie } from "@/components/common/animation-lottie";

export function EducationSection() {
  return (
    <section
      className="py-12 md:py-20 lg:py-24 px-4 bg-muted/30"
      id="education"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-16 flex flex-col items-center max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 flex justify-center">
          <div className="flex items-center gap-3">
            <GraduationCap className="hidden md:block h-6 w-6 md:h-8 md:w-8 gradient-text-primary" />
            <div className="flex flex-col items-center">
              <span className="gradient-text-primary">Education</span>
              <div className="w-24 h-1 bg-gradient-primary rounded-full glow-primary mt-2" />
            </div>
          </div>
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Animation column - First on mobile, left on desktop */}
        <div className="order-1 md:order-1 flex justify-center">
          <AnimationLottie
            src={"/assets/lottie/education.json"}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            width="63%"
          />
        </div>
        {/* Cards column - Second on mobile, right on desktop */}
        <div className="order-2 md:order-2">
          <div className="flex flex-col gap-4 md:gap-6">
            {education.map((ed, i) => (
              <GlowCard
                key={ed.id}
                className="p-5 md:p-6 relative overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs md:text-sm gradient-text-primary font-semibold mb-2">
                    {ed.period}
                  </p>
                  <h3 className="text-base md:text-lg font-semibold leading-snug mb-1 group-hover:gradient-text-primary transition-all duration-300">
                    {ed.degree}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {ed.school}
                  </p>
                  {ed.focus && (
                    <p className="text-xs text-muted-foreground/80">
                      <span className="gradient-text-accent font-medium">
                        Focus:
                      </span>{" "}
                      {ed.focus}
                    </p>
                  )}
                </motion.div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
