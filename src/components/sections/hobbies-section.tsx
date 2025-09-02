"use client";
import { motion } from "framer-motion";
import { BookOpen, Dumbbell, Globe2, Sparkles } from "lucide-react";
import { AnimationLottie } from "../common/animation-lottie";

const hobbies = [
  {
    icon: BookOpen,
    title: "Reading Books",
    desc: "Exploring technology, psychology & personal growth titles.",
  },
  {
    icon: Dumbbell,
    title: "Exercizing",
    desc: "Staying active to keep mind sharp and energy high.",
  },
  {
    icon: Globe2,
    title: "Travelling",
    desc: "Discovering culture, food and perspectives from new places.",
  },
];

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Hobbies & Interests
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Apart from coding, some other activities that I love to do!
        </p>
        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
      </motion.div>
      <div className="max-w-5xl mx-auto flex">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl border bg-background/60 backdrop-blur-sm hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-primary/0 to-primary/10" />
              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <hobby.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">{hobby.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hobby.desc}
                </p>
              </div>
              <div className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
            </motion.div>
          ))}
        </div>
        <AnimationLottie
          src="/assets/lottie/hobbies.json"
          className="w-full max-w-xl mx-auto"
          width="60%"
          loop
        />
      </div>
    </section>
  );
}
