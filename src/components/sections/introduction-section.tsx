"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export function IntroductionSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-1 hidden md:block"
        >
          <div className="relative w-48 h-48 cursor-pointer">
            <Image
              src="/avatar.svg"
              alt="Avatar"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="prose dark:prose-invert md:col-span-3 max-w-none"
        >
          <h2 className="text-3xl font-semibold">
            <span className="text-primary">About</span> Me
          </h2>
          <p>
            I have a strong passion for learning and exploring various fields,
            especially programming. I enjoy creating modern web applications and
            continuously improving my skills in JavaScript frameworks.
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
      </div>
    </section>
  );
}
