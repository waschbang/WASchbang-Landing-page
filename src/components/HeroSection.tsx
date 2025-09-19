import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-whatsapp-marketing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden premium-gradient">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8 fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white premium-shadow rounded-full text-sm font-medium text-neutral-700 fade-in-scale">
                <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse"></span>
                Official WhatsApp Business Partner
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl premium-heading mb-6 leading-[1.1] tracking-tight">
                Unlock High-Converting
                <span className="block text-whatsapp">WhatsApp Marketing</span>
                <span className="text-neutral-600 text-4xl md:text-5xl lg:text-6xl block mt-2">for Your Business</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl premium-text max-w-2xl leading-relaxed">
              Transform your customer engagement with official WhatsApp Business API. 
              Achieve 98% open rates and 45-60% click-through rates with our proven marketing solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="cta-gradient text-white premium-button h-14 px-8 rounded-2xl cta-shadow text-lg font-medium"
              >
                Book Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="premium-button h-14 px-8 rounded-2xl border-2 border-neutral-200 text-neutral-700 hover:border-whatsapp hover:text-whatsapp bg-white premium-shadow text-lg font-medium"
              >
                Request Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-whatsapp rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-neutral-600 font-medium">Official WhatsApp Partner</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-whatsapp rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-neutral-600 font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-whatsapp rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-neutral-600 font-medium">No Setup Fees</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative fade-in-scale" style={{"--stagger": "2"} as React.CSSProperties}>
            <div className="relative z-10 premium-card p-8">
              <img 
                src={heroImage} 
                alt="WhatsApp Marketing Success - Happy business professionals engaging with customers through mobile phones" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 premium-card p-6 stagger-animation" style={{"--stagger": "3"} as React.CSSProperties}>
              <div className="text-3xl mb-2">💬</div>
              <div className="text-sm font-semibold text-neutral-700">98% Open Rate</div>
              <div className="text-xs text-neutral-500 mt-1">Industry Leading</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-whatsapp premium-card p-6 text-white stagger-animation" style={{"--stagger": "4"} as React.CSSProperties}>
              <div className="text-3xl mb-2">📈</div>
              <div className="text-sm font-semibold">60% CTR</div>
              <div className="text-xs text-whatsapp-light mt-1">Conversion Rate</div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-whatsapp/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          className="bg-whatsapp hover:bg-whatsapp-dark text-white rounded-2xl w-16 h-16 premium-shadow-xl premium-button group"
          size="icon"
        >
          <span className="text-2xl group-hover:scale-110 premium-transition">💬</span>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;