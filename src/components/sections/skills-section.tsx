"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  GitBranch,
  Palette,
  Server,
  Layers,
  FileCode,
  Globe,
  Figma,
  Container,
} from "lucide-react";

const skills = [
  { name: "HTML", icon: FileCode, category: "Frontend" },
  { name: "CSS", icon: Palette, category: "Frontend" },
  { name: "Javascript", icon: Code, category: "Frontend" },
  { name: "Typescript", icon: Code, category: "Frontend" },
  { name: "React", icon: Code, category: "Frontend" },
  { name: "Next JS", icon: Globe, category: "Frontend" },
  { name: "Tailwind", icon: Palette, category: "Frontend" },
  { name: "Bootstrap", icon: Palette, category: "Frontend" },
  { name: "MaterialUI", icon: Layers, category: "Frontend" },
  { name: "Antd", icon: Layers, category: "Frontend" },
  { name: "Express JS", icon: Server, category: "Backend" },
  { name: "Nest JS", icon: Server, category: "Backend" },
  { name: "SQL", icon: Database, category: "Database" },
  { name: "NoSQL", icon: Database, category: "Database" },
  { name: "Git", icon: GitBranch, category: "Tools" },
  { name: "Docker", icon: Container, category: "DevOps" },
  { name: "AWS", icon: Cloud, category: "Cloud" },
  { name: "Firebase", icon: Cloud, category: "Cloud" },
  { name: "Figma", icon: Figma, category: "Design" },
];

const categories = [
  "Frontend",
  "Backend",
  "Database",
  "Cloud",
  "DevOps",
  "Tools",
  "Design",
];

export function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">SKILLS</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category
            );
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="text-sm font-semibold">
                    {category}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {categorySkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + index * 0.05,
                          type: "spring",
                          stiffness: 200,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Card className="h-full hover:shadow-md transition-all duration-300 cursor-pointer group">
                          <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                              <IconComponent className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                              {skill.name}
                            </h3>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating skills animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex animate-pulse">
            <div className="flex gap-4 animate-scroll">
              {skills.concat(skills).map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={`floating-${index}`}
                    className="flex-shrink-0 p-3 rounded-full bg-background/80 backdrop-blur-sm shadow-sm"
                  >
                    <IconComponent className="h-6 w-6 text-muted-foreground" />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
