import { Navigation } from "@/components/layout/navigation";
import { HeaderSection } from "@/components/sections/header-section";
import { IntroductionSection } from "@/components/sections/introduction-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { HobbiesSection } from "@/components/sections/hobbies-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      <main>
        <HeaderSection />
        <IntroductionSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <HobbiesSection />
        <ContactSection />
      </main>

      <footer className="py-12 px-4 border-t border-primary/20 bg-gradient-to-r from-muted/30 via-background to-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full glow-primary mb-4" />
            <p className="text-muted-foreground mb-2">
              © 2025{" "}
              <span className="gradient-text-primary font-semibold">
                DUYLANG
              </span>
            </p>
            <p className="text-sm text-muted-foreground/80">
              Built with{" "}
              <span className="gradient-text-secondary">Next.js</span>,{" "}
              <span className="gradient-text-accent">shadcn/ui</span>, and{" "}
              <span className="gradient-text-primary">Tailwind CSS</span>
            </p>
          </div>
          <div className="text-xs text-muted-foreground/60">
            Crafted with passion for beautiful, accessible web experiences
          </div>
        </div>
      </footer>
    </div>
  );
}
