"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { AnimationLottie } from "@/components/common/animation-lottie";
import { CONTACT_LOTTIE } from "@/../public/assets/lottie/string/contactlottie";
import React from "react";
import { MapPin, Send } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

function GitHubIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Beautiful Mail Icon Component
function MailIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export function ContactSection() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/DUYLANG1",
      icon: GitHubIcon,
      description: "View my projects",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vu-lang-887166224/",
      icon: LinkedInIcon,
      description: "Professional profile",
    },
    {
      name: "Email",
      url: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrkVQNDdhZcMJVshVZQGPGlpNgrsKqblkZVDRqTMDHBGLgNfKQpSXsGTsHrvCQczCNdsXq",
      icon: MailIcon,
      description: "Get in touch",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 md:py-20 lg:py-24 px-4 bg-linear-to-b from-background via-muted/30 to-background scroll-mt-32"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Get In Touch"
            icon={Send}
            description="I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work together!"
            className="lg:mb-20"
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
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
                  <Card className="h-full card-enhanced group">
                    <CardContent className="p-6 text-center space-y-4 relative z-10">
                      <div className="p-3 rounded-full bg-gradient-primary/20 w-fit mx-auto group-hover:glow-primary transition-all duration-300">
                        <IconComponent className="h-6 w-6 gradient-text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:gradient-text-primary transition-all duration-300">
                          {link.name}
                        </h3>
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

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 justify-center">
          <Badge
            variant="outline"
            className="text-base px-6 py-3 bg-gradient-secondary/20 border-primary/30 hover:glow-secondary transition-all duration-300"
          >
            <MapPin className="h-4 w-4 mr-2 gradient-text-accent" />
            <span className="gradient-text-primary font-medium">Vietnam</span>
          </Badge>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-[420px] order-1 md:order-2"
          >
            {/* Render lottie from string by creating a Blob URL once */}
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpccpFVcKfsBmqQGcxNvVwSMsPdLfhHfpzfHpGzvvMxCccrMJBlWMdcvLSWSBrvmRQPrlq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compose Email"
            >
              <DynamicContactLottie />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Convert CONTACT_LOTTIE string to object asynchronously to reuse AnimationLottie
function DynamicContactLottie() {
  const [url, setUrl] = React.useState<string | null>(null);
  React.useEffect(() => {
    try {
      const obj = JSON.parse(CONTACT_LOTTIE);
      const blob = new Blob([JSON.stringify(obj)], {
        type: "application/json",
      });
      const blobUrl = URL.createObjectURL(blob);
      setUrl(blobUrl);
      return () => URL.revokeObjectURL(blobUrl);
    } catch {}
  }, []);
  if (!url) return null;
  return <AnimationLottie src={url} className="mx-auto" />;
}
