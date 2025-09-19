import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <SolutionsSection />
      <WhyChooseUsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
