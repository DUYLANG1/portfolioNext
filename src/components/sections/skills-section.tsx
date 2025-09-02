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
    <section className="py-20 px-4 bg-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
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

        <Marquee
          speed={150}
          gradient={true}
          gradientColor="hsl(var(--muted))"
          gradientWidth={100}
          pauseOnHover={true}
          className="mb-16"
        >
          {skillsData.map((s, i) => (
            <Card
              key={i}
              className="mx-3 min-w-[140px] hover:shadow-md transition-shadow border bg-background"
            >
              <CardContent className="p-4 flex flex-col items-center gap-3">
                <img
                  src={icon(s)}
                  alt={`${s} logo`}
                  className="w-10 h-10"
                  loading="lazy"
                />
                <span className="text-xs font-medium">
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
