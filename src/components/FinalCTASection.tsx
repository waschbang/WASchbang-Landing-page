import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 premium-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-whatsapp/5 to-brand-accent/5"></div>
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-whatsapp rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-brand-accent rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-whatsapp rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-brand-accent rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8 fade-in-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white premium-shadow rounded-full text-sm font-medium text-whatsapp">
              <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse"></span>
              Ready to Transform Your Business?
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl premium-heading leading-[1.1] tracking-tight">
              Let's Build Your 
              <span className="text-whatsapp block">WhatsApp Growth Engine</span>
            </h2>
            
            <p className="text-xl md:text-2xl premium-text max-w-3xl mx-auto leading-relaxed">
              Join 500+ successful businesses already using WhatsApp to increase 
              customer engagement by 300% and boost revenue by 4x.
            </p>
          </div>
          
          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center my-12 fade-in-scale">
            <Button 
              size="lg"
              className="cta-gradient text-white premium-button h-16 px-12 rounded-2xl text-xl font-semibold cta-shadow"
            >
              Start Free Consultation
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="premium-button h-16 px-12 rounded-2xl border-2 border-neutral-200 text-neutral-700 hover:border-whatsapp hover:text-whatsapp bg-white premium-shadow text-xl font-semibold"
            >
              Request Live Demo
            </Button>
          </div>
          
          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "⚡", title: "Setup in 24 Hours", desc: "Get your WhatsApp marketing running tomorrow, not next month" },
              { icon: "💰", title: "No Hidden Fees", desc: "Transparent pricing with no setup costs or surprise charges" },
              { icon: "🎯", title: "Guaranteed Results", desc: "Average 300% increase in engagement within 90 days" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="premium-card p-8 stagger-animation"
                style={{"--stagger": index + 1} as React.CSSProperties}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold premium-heading mb-3">{item.title}</h3>
                <p className="premium-text leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-12 premium-text">
            <div className="flex items-center gap-3">
              <span className="text-yellow-500 text-2xl">⭐⭐⭐⭐⭐</span>
              <span className="font-medium">500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-whatsapp rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="font-medium">Official WhatsApp Partner</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-500 text-xl">🛡️</span>
              <span className="font-medium">100% Compliant</span>
            </div>
          </div>
          
          {/* Urgency Element */}
          <div className="premium-card p-8 border border-whatsapp/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4">
              <div className="text-3xl animate-pulse">🔥</div>
              <div className="text-center">
                <div className="font-semibold premium-heading text-lg">Limited Time: Free Setup Worth $500</div>
                <div className="text-sm premium-text mt-1">Available for the first 50 businesses this month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;