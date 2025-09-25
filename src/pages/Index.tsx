import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import PricingSection from "@/components/PricingSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ClienteleSection from "@/components/ClienteleSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <ClienteleSection />
      <PricingSection />
      <CaseStudiesSection />
      <IntegrationsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;