"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AnimationLottie } from "../common/animation-lottie";
import Marquee from "react-fast-marquee";

// Map skill names to actual file names present in /public/assets/skillsSvg
const skillFiles: Record<string, string> = {
  HTML: "html.svg",
  CSS: "css.svg",
  Javascript: "javascript.svg",
  Typescript: "typescript.svg",
  React: "react.svg",
  "Next JS": "nextjs.svg",
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
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <AnimationLottie
            src="/assets/lottie/skills.json"
            className="w-full max-w-xs md:max-w-xl mx-auto"
            width="10%"
            loop
          />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-wider gradient-text-primary">
            SKILLS
          </h2>

          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full glow-primary" />
        </motion.div>

        <Marquee
          speed={100}
          gradient={true}
          gradientColor="hsl(var(--muted))"
          gradientWidth={50}
          pauseOnHover={true}
          className="mb-12 md:mb-16"
        >
          {skillsData.map((s, i) => (
            <Card
              key={i}
              className="mx-3 md:mx-4 min-w-[140px] md:min-w-[160px] card-enhanced group border-none bg-background/40"
            >
              <CardContent className="p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4">
                <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center p-2 rounded-xl bg-background/50 group-hover:bg-background/80 transition-colors duration-300">
                  <img
                    src={icon(s)}
                    alt={`${s} logo`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs md:text-sm font-bold tracking-wide group-hover:gradient-text-primary transition-all duration-300">
                  {s.replace(/JS$/, " JS")}
                </span>
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
