"use client";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import Image from "next/image";
import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="py-24 px-4" id="experience">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" /> Experience
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full" />
          </motion.div>
          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <GlowCard key={exp.id} className="p-5 relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <p className="text-sm text-primary font-semibold mb-1">
                    {exp.period}
                  </p>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm">{exp.company}</p>
                  {exp.current && (
                    <span className="mt-2 inline-block text-xs px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                      Current
                    </span>
                  )}
                </motion.div>
                <Image
                  src="/assets/blur-23.svg"
                  alt="blur"
                  fill
                  className="object-cover opacity-40 pointer-events-none select-none"
                />
              </GlowCard>
            ))}
          </div>
        </div>
        <div className="sticky top-28 hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/assets/hero.svg"
              alt="Development"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
