"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    title: "ReactJS Developer",
    company: "FPT Software",
    period: "November 2024 - Present",
    current: true,
  },
  {
    title: "SAP ABAP Developer",
    company: "FPT Software",
    period: "December 2023 - November 2024",
    current: false,
  },
];

export function ExperienceSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Working Experiences
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <Badge
                        variant={exp.current ? "default" : "secondary"}
                        className="whitespace-nowrap"
                      >
                        {exp.period}
                      </Badge>
                      {exp.current && (
                        <Badge
                          variant="outline"
                          className="text-green-600 border-green-600"
                        >
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
