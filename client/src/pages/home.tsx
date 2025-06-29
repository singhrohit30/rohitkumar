import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import WorkSection from "@/components/work-section";
import CertificatesSection from "@/components/certificates-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen portfolio-bg-primary portfolio-text-primary">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
