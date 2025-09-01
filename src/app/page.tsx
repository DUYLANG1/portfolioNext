import { Navigation } from "@/components/layout/navigation";
// Replaced hero with header + introduction for closer parity to old site
import { HeaderSection } from "@/components/sections/header-section";
import { IntroductionSection } from "@/components/sections/introduction-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <HeaderSection />

        <IntroductionSection />

        <div id="experience">
          <ExperienceSection />
        </div>

        <div id="education">
          <EducationSection />
        </div>

        <div id="skills">
          <SkillsSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <footer className="py-8 px-4 border-t">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>
            © 2025 DUYLANG. Built with Next.js, shadcn/ui, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
