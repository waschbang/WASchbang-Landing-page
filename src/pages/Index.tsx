import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import ClienteleSection from "@/components/ClienteleSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import SocialProofSection from "@/components/SocialProofSection";
import WhyWhatsAppSection from "@/components/WhyWhatsAppSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <WhyWhatsAppSection />
      <SolutionsSection />
      <ClienteleSection />
      <PricingSection />
      <ProcessSection />
      <CaseStudiesSection />
      <IntegrationsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;