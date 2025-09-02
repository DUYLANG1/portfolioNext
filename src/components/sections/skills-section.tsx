"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AnimationLottie } from "../common/animation-lottie";

// Map skill names to actual file names present in /public/assets/skillsSvg
const skillFiles: Record<string, string> = {
  HTML: "html.svg",
  CSS: "css.svg",
  Javascript: "javascript.svg",
  Typescript: "typescript.svg",
  React: "react.svg",
  "Next JS": "nextJS.svg",
  "Express JS": "expressjs.svg",
  "Nest JS": "nestjs.svg",
  SQL: "mysql.svg",
  NoSQL: "mongoDB.svg",
  Git: "git.svg",
  Bootstrap: "bootstrap.svg",
  Tailwind: "tailwind.svg",
  MaterialUI: "materialui.svg",
  Antd: "antd.svg",
  Docker: "docker.svg",
  AWS: "aws.svg",
  Firebase: "firebase.svg",
  Figma: "figma.svg",
};
const skillsData = Object.keys(skillFiles);
const icon = (n: string) => `/assets/skillsSvg/${skillFiles[n]}`;

export function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-muted/30 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
            SKILLS
          </h2>
          <AnimationLottie
            src="/assets/lottie/skills.json"
            className="w-full max-w-xl mx-auto"
            width="10%"
            loop
          />
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="mb-16 overflow-hidden">
          <div className="flex animate-scroll gap-6">
            {[...skillsData, ...skillsData].map((s, i) => (
              <Card
                key={i}
                className="min-w-[140px] hover:shadow-md transition-all duration-300 border bg-background/60 backdrop-blur-sm"
              >
                <CardContent className="p-4 flex flex-col items-center gap-3">
                  <img src={icon(s)} alt={s} className="w-10 h-10" />
                  <span className="text-xs font-medium">
                    {s.replace(/JS$/, " JS")}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fades for marquee */}
        <div className="pointer-events-none select-none">
          <div className="absolute left-0 top-[var(--skills-offset,0)] w-24 h-40 gradient-blur" />
          <div className="absolute right-0 top-[var(--skills-offset,0)] w-24 h-40 gradient-blur scale-x-[-1]" />
        </div>
      </div>
    </section>
  );
}
