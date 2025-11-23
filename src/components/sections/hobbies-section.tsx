"use client";
import { motion } from "framer-motion";
import { BookOpen, Dumbbell, Globe2 } from "lucide-react";
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
    <section id="hobbies" className="py-12 md:py-20 lg:py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Hobbies & Interests
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-4">
          Apart from coding, some other activities that I love to do!
        </p>
        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
      </motion.div>
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-12">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl flex-1">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-5 md:p-6 rounded-2xl border bg-background hover:shadow-lg transition-all duration-500 min-h-[220px] md:h-64 group hover:-rotate-1 hover:bg-primary/5 hover:border-primary/30 ${
                i === 0 ? "lg:mt-0" : i === 1 ? "lg:mt-12" : "lg:mt-24"
              }`}
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-12">
                  <hobby.icon className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-base md:text-lg group-hover:text-primary transition-colors duration-300">
                  {hobby.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {hobby.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center shrink-0">
          <AnimationLottie
            src="/assets/lottie/hobbies.json"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            width="60%"
            loop
          />
        </div>
      </div>
    </section>
  );
}
