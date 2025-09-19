import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-whatsapp-marketing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Unlock High-Converting
              <span className="block text-brand-accent">WhatsApp Marketing</span>
              for Your Business
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Transform your customer engagement with official WhatsApp Business API. 
              Achieve 98% open rates and 45-60% click-through rates with our proven marketing solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="cta-gradient text-white font-semibold py-4 px-8 rounded-full cta-shadow hover:scale-105 smooth-transition"
              >
                📞 Book Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 py-4 px-8 rounded-full smooth-transition"
              >
                🎯 Request Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Official WhatsApp Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>No Setup Fees</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="WhatsApp Marketing Success - Happy business professionals engaging with customers through mobile phones" 
                className="w-full h-auto rounded-3xl whatsapp-shadow"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 whatsapp-shadow animate-bounce">
              <div className="text-2xl">💬</div>
              <div className="text-sm font-semibold text-gray-700">98% Open Rate</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-whatsapp rounded-2xl p-4 text-white whatsapp-shadow animate-pulse">
              <div className="text-2xl">📈</div>
              <div className="text-sm font-semibold">60% CTR</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          className="bg-whatsapp hover:bg-whatsapp-dark text-white rounded-full w-16 h-16 shadow-2xl animate-pulse"
          size="icon"
        >
          <span className="text-2xl">💬</span>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;