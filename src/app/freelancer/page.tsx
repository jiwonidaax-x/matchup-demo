import Navigation from "@/components/Navigation";
import FreelancerHeroSection from "@/components/FreelancerHeroSection";
import FreelancerFeaturesSection from "@/components/FreelancerFeaturesSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function FreelancerPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FreelancerHeroSection />
      <FreelancerFeaturesSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
