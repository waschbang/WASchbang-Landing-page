import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import WhyWhatsAppSection from "@/components/WhyWhatsAppSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <WhyWhatsAppSection />
      <SolutionsSection />
      <WhyChooseUsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
