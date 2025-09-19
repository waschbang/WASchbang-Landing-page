import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">💬</div>
        <div className="absolute top-20 right-20 text-4xl animate-pulse">📈</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce delay-300">🚀</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-pulse delay-500">⭐</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your 
            <span className="text-brand-accent block">WhatsApp Growth Engine</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Join 500+ successful businesses already using WhatsApp to increase 
            customer engagement by 300% and boost revenue by 4x.
          </p>
          
          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg"
              className="cta-gradient text-white font-bold py-6 px-12 rounded-full text-lg cta-shadow hover:scale-110 smooth-transition"
            >
              🚀 Start Free Consultation
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-6 px-12 rounded-full text-lg smooth-transition"
            >
              🎯 Request Live Demo
            </Button>
          </div>
          
          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Setup in 24 Hours</h3>
              <p className="text-white/80">Get your WhatsApp marketing running tomorrow, not next month</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-semibold text-white mb-2">No Hidden Fees</h3>
              <p className="text-white/80">Transparent pricing with no setup costs or surprise charges</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-2">Guaranteed Results</h3>
              <p className="text-white/80">Average 300% increase in engagement within 90 days</p>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span>500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Official WhatsApp Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🛡️</span>
              <span>100% Compliant</span>
            </div>
          </div>
          
          {/* Urgency Element */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center gap-4 text-white">
              <div className="text-2xl animate-pulse">🔥</div>
              <div>
                <div className="font-semibold">Limited Time: Free Setup Worth $500</div>
                <div className="text-sm text-white/80">Available for the first 50 businesses this month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;