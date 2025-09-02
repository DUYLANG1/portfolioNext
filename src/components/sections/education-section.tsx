"use client";
import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GlowCard } from "@/components/ui/glow-card";
import { GraduationCap } from "lucide-react";
import { AnimationLottie } from "@/components/common/animation-lottie";

export function EducationSection() {
  return (
    <section className="py-24 px-4 bg-muted/30" id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex flex-col items-center gap-3">
          <span className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" /> Education
          </span>
        </h2>
        <div className="w-24 h-1 bg-primary rounded-full mx-auto" />
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Animation column */}
        <div className="order-1 md:order-none flex justify-center">
          <AnimationLottie
            src={"/assets/lottie/education.json"}
            className="w-full max-w-md md:max-w-lg"
            width="63%"
          />
        </div>
        {/* Cards column */}
        <div className="order-2 md:order-none">
          <div className="flex flex-col gap-6">
            {education.map((ed, i) => (
              <GlowCard key={ed.id} className="p-6 relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm text-primary font-semibold mb-1">
                    {ed.period}
                  </p>
                  <h3 className="text-lg font-semibold leading-snug">
                    {ed.degree}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {ed.school}
                  </p>
                  {ed.focus && (
                    <p className="text-xs text-muted-foreground/80">
                      Focus: {ed.focus}
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
