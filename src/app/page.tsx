import { Navigation } from "@/components/layout/navigation";
import { HeaderSection } from "@/components/sections/header-section";
import { IntroductionSection } from "@/components/sections/introduction-section";
import { CodeProfileSection } from "@/components/sections/code-profile-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { EducationSection } from "@/components/sections/education-section";
import { HobbiesSection } from "@/components/sections/hobbies-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
      <Navigation />

      <main>
        <HeaderSection />
        <CodeProfileSection />
        <IntroductionSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <HobbiesSection />
        <ContactSection />
      </main>
    </div>
  );
}
