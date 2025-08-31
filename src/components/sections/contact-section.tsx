"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/DUYLANG1",
      icon: Github,
      description: "View my projects",
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin,
      description: "Professional profile",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: Mail,
      description: "Get in touch",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations.
            Feel free to reach out if you&apos;d like to work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{link.name}</h3>
                        <p className="text-muted-foreground text-sm">
                          {link.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge variant="outline" className="text-base px-6 py-3">
            <MapPin className="h-4 w-4 mr-2" />
            Vietnam
          </Badge>
        </motion.div>
      </div>
    </section>
  );
}
