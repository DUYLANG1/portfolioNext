"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function IntroductionSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto flex gap-32 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="prose dark:prose-invert"
        >
          <h2 className="text-3xl font-semibold">
            <span className="text-primary">About</span> Me
          </h2>
          <p>
            I have a strong passion for learning and exploring various fields,
            especially programming.
          </p>
          <p>
            Fluent in <strong>JavaScript / TypeScript</strong> and experienced
            with <strong>React</strong>, <strong>Next.js</strong>,
            <strong> Express</strong>, <strong>NestJS</strong> and cloud
            services like <strong>AWS</strong> and <strong>Firebase</strong>.
          </p>
          <p>
            I love crafting engaging UI, optimizing performance, and building
            products that solve real problems.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <div className="relative w-48 h-48 cursor-pointer">
            <Image
              src="/assets/avatar.svg"
              alt="Avatar"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
