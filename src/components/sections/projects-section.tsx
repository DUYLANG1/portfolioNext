"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { Globe, FolderGit2 } from "lucide-react";
import Image from "next/image";
import { GitHubIcon } from "@/components/common/social-icons";

export function ProjectsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader title="Projects" icon={FolderGit2} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border rounded-lg bg-background p-5 flex flex-col h-full hover:shadow-lg transition-shadow"
            >
              {project.image && (
                <div className="relative h-36 rounded-md overflow-hidden border bg-muted mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              <div className="flex-1 flex flex-col">
                <Badge variant="secondary" className="mb-2 w-fit">
                  #{project.id}
                </Badge>
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground flex-1 mb-4">
                  {project.description}
                </p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded bg-primary/10 text-primary text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded bg-primary text-primary-foreground text-xs hover:bg-primary/90 transition-colors"
                    >
                      <GitHubIcon className="h-4 w-4" /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded border text-xs hover:bg-muted transition-colors"
                    >
                      <Globe className="h-4 w-4" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
