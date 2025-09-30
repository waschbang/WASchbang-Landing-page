import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import SolutionsSection from "@/components/SolutionsSection";
import ClienteleSection from "@/components/ClienteleSection";
import PricingSection from "@/components/PricingSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { CustomerLifecycleSection } from "@/components/lifecycle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection />
      <VideoSection />
      <ClienteleSection />
      <SolutionsSection />
      <CaseStudiesSection />
      <CustomerLifecycleSection />
      <PricingSection />
      <IntegrationsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;