import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { EducationTimeline } from "./components/EducationTimeline";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAFF] via-[#DDF2FF] to-[#F5F5FF]">
      <HeroSection />
      <AboutSection />
      <EducationTimeline />
      <SkillsSection />
      <ProjectsSection />
  <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
