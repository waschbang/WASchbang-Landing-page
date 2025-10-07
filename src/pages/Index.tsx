import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoOverviewSection from "@/components/BentoOverviewSection";
import { CustomerLifecycleSection } from "@/components/lifecycle";
import PricingPlans from "@/components/PricingPlans";
import OfferingsSection from "@/components/OfferingsSection";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection />
      <BentoOverviewSection />
      <CustomerLifecycleSection />
      <OfferingsSection />
      <CaseStudies />
      <PricingPlans />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;