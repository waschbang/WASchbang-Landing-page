import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-whatsapp-marketing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden premium-gradient pt-16">
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
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl premium-heading mb-6 leading-[1.1] tracking-tight">
                <span className="block text-whatsapp font-bold">5X Your Revenue</span>
                <span className="block text-neutral-900">with the Power of</span>
                <span className="block text-neutral-900 font-bold">WhatsApp</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl lg:text-2xl premium-text max-w-3xl leading-relaxed">
              Broadcast, Automate, Engage, Sell - Do Everything with the Smartest WhatsApp Engagement Platform
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-sm font-medium text-amber-700 mb-4">
              <span className="animate-pulse">⚡</span>
              Powered by Official WhatsApp APIs
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-whatsapp hover:bg-whatsapp-dark text-white premium-button h-14 px-8 rounded-2xl premium-shadow text-lg font-medium"
              >
                Try AiSensy for FREE →
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="premium-button h-14 px-8 rounded-2xl border-2 border-neutral-300 text-neutral-700 hover:border-whatsapp hover:text-whatsapp bg-white premium-shadow text-lg font-medium"
              >
                Join Live Demo →
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
              <div className="w-8 h-8 bg-whatsapp/10 rounded-lg flex items-center justify-center mb-2">
                <span className="text-whatsapp font-bold text-lg">%</span>
              </div>
              <div className="text-sm font-semibold text-neutral-700">98% Open Rate</div>
              <div className="text-xs text-neutral-500 mt-1">Industry Leading</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-whatsapp premium-card p-6 text-white stagger-animation" style={{"--stagger": "4"} as React.CSSProperties}>
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-lg">↗</span>
              </div>
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
          <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 premium-transition">
            <span className="text-white font-bold">W</span>
          </div>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;