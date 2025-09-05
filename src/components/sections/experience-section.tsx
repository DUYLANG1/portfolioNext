"use client";
import { motion } from "framer-motion";

import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { AnimationLottie } from "@/components/common/animation-lottie";
import { GlowCard } from "../ui/glow-card";

export function ExperienceSection() {
  return (
    <section className="py-24 px-4" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex flex-col items-center gap-3">
          <span className="flex items-center gap-3">
            <Briefcase className="h-8 w-8 gradient-text-primary" />
            <span className="gradient-text-primary">Experience</span>
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto glow-primary" />
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Animation column */}
        <div className="order-1 md:order-none">
          <AnimationLottie
            src="/assets/lottie/experience.json"
            className="w-full max-w-md md:max-w-lg"
            width={420}
            loop
          />
        </div>
        {/* Cards column */}
        <div className="order-2 md:order-none">
          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <GlowCard>
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6 relative z-10">
                    <p className="text-sm gradient-text-secondary font-semibold mb-2">
                      {exp.period}
                    </p>
                    <h3 className="text-lg font-semibold mb-1 group-hover:gradient-text-primary transition-all duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {exp.company}
                    </p>
                    {exp.current && (
                      <span className="inline-block text-xs px-3 py-1 rounded-full bg-gradient-accent text-primary-foreground font-medium glow-secondary">
                        Current
                      </span>
                    )}
                  </div>
                </motion.div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
