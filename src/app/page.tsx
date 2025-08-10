import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DigitalCardSection from "@/components/DigitalCardSection";
import JobPostingSection from "@/components/JobPostingSection";
import ExpertFindingSection from "@/components/ExpertFindingSection";
import ProjectManagementSection from "@/components/ProjectManagementSection";
import ProjectContractSection from "@/components/ProjectContractSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <DigitalCardSection />
      <JobPostingSection />
      <ExpertFindingSection />
      <ProjectManagementSection />
      <ProjectContractSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
