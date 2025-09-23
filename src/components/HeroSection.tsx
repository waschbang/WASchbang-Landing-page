import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-whatsapp-marketing.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden premium-gradient pt-8 pb-4">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6 fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white premium-shadow rounded-full text-sm font-medium text-neutral-700 fade-in-scale">
                <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse"></span>
                Official WhatsApp Business Partner
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl premium-heading mb-5 leading-[1.1] tracking-tight">
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
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-whatsapp hover:bg-whatsapp-dark text-white premium-button h-14 px-8 rounded-2xl premium-shadow text-lg font-medium"
              >
                Try WASchbang for FREE →
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
            <div className="relative z-0 premium-card p-6 max-w-xl ml-auto">
              <img 
                src={heroImage} 
                alt="WhatsApp Marketing Success - Happy business professionals engaging with customers through mobile phones" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 premium-card p-5 z-20 stagger-animation" style={{"--stagger": "3"} as React.CSSProperties}>
              <div className="w-8 h-8 bg-whatsapp/10 rounded-lg flex items-center justify-center mb-2">
                <span className="text-whatsapp font-bold text-lg">%</span>
              </div>
              <div className="text-sm font-semibold text-neutral-700">98% Open Rate</div>
              <div className="text-xs text-neutral-500 mt-1">Industry Leading</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-whatsapp premium-card p-5 text-white z-20 stagger-animation" style={{"--stagger": "4"} as React.CSSProperties}>
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
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          className="bg-whatsapp hover:bg-whatsapp-dark text-white rounded-full w-14 h-14 premium-shadow-xl premium-button"
          size="icon"
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-current text-white"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M19.113 17.41c-.269-.136-1.59-.785-1.837-.873-.247-.093-.428-.136-.61.137-.181.269-.7.868-.86 1.047-.162.181-.319.2-.588.068-.269-.137-1.137-.42-2.165-1.34-.8-.715-1.34-1.6-1.498-1.868-.156-.269-.017-.415.119-.551.124-.124.269-.319.405-.478.137-.162.181-.269.269-.45.087-.181.043-.337-.022-.478-.068-.137-.61-1.478-.835-2.02-.22-.527-.445-.456-.61-.462l-.522-.01c-.181 0-.478.068-.729.337-.252.269-.957.935-.957 2.277 0 1.34.983 2.635 1.12 2.817.137.181 1.935 2.96 4.69 4.144.655.283 1.169.452 1.568.581.659.21 1.259.181 1.733.112.529-.081 1.59-.65 1.813-1.277.224-.63.224-1.169.156-1.277-.068-.106-.247-.168-.516-.303z"/>
            <path d="M27.255 4.742A13.93 13.93 0 0 0 16.053 1.2C8.61 1.2 2.6 7.213 2.6 14.655c0 2.304.603 4.557 1.745 6.545L2 30.8l9.8-2.56a13.842 13.842 0 0 0 6.253 1.516h.003c7.443 0 13.455-6.013 13.455-13.455 0-3.59-1.397-6.967-3.96-9.6zM16.056 27.2h-.003a11.984 11.984 0 0 1-6.1-1.669l-.437-.26-5.813 1.518 1.554-5.665-.284-.462a11.97 11.97 0 0 1-1.823-6.006c0-6.63 5.392-12.02 12.022-12.02 3.218 0 6.241 1.254 8.514 3.527a11.93 11.93 0 0 1 3.508 8.493c0 6.63-5.392 12.014-12.035 12.014z"/>
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;