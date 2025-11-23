"use client";
import { motion } from "framer-motion";

import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { AnimationLottie } from "@/components/common/animation-lottie";
import { GlowCard } from "../ui/glow-card";

import { SectionHeader } from "../ui/section-header";

export function ExperienceSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionHeader
          title="Experience"
          icon={Briefcase}
          className="max-w-3xl mx-auto"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Animation column */}
        <AnimationLottie
          src="/assets/lottie/experience.json"
          className="hidden md:block w-full max-w-sm md:max-w-md lg:max-w-lg"
          width={420}
          loop
        />
        {/* Cards column */}
        <div className="flex flex-col gap-4 md:gap-6">
          {experiences.map((exp, i) => (
            <GlowCard key={exp.id}>
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-5 md:p-6 relative z-10">
                  <p className="text-xs md:text-sm gradient-text-secondary font-semibold mb-2">
                    {exp.period}
                  </p>
                  <h3 className="text-base md:text-lg font-semibold mb-1 group-hover:gradient-text-primary transition-all duration-300">
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
    </section>
  );
}
