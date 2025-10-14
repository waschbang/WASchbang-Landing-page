import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";
import ctwa from "@/assets/solutionsimg/CTWA.jpg";
import pdp from "@/assets/pdp.png";
import imagine from "@/assets/Imagine logo.png";
import skillhouse from "@/assets/skillhouse.png";
import schbang from "@/assets/Schbang Logo_Main.png";
import level from "@/assets/levellogo.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative premium-gradient overflow-x-hidden overflow-y-hidden pt-10 pb-6 sm:pt-32 sm:pb-10 gpu-layer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-136px)] flex items-center relative z-10 overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-10 items-center justify-items-center lg:justify-items-stretch">
          {/* Left: Copy + CTAs */}
          <div className="max-w-full sm:max-w-2xl mx-auto text-center lg:text-left space-y-5 sm:space-y-6 px-0">
            <h1
              data-reveal
              className="reveal is-visible premium-heading leading-tight text-neutral-900 max-w-full mx-auto lg:mx-0"
              style={{ fontSize: 'clamp(2rem, 5.5vw + 0.5rem, 3rem)' }}
            >
              Drive <span className="font-semibold">3–5X Revenue</span> with Smarter <span className="text-whatsapp font-semibold">WhatsApp Campaigns</span>
            </h1>

            <p data-reveal className="reveal is-visible premium-text max-w-full mx-auto lg:mx-0 leading-relaxed text-neutral-800" style={{ fontSize: 'clamp(1.05rem, 1.5vw + 0.5rem, 1.2rem)' }}>
              Schbang crafts strategic, automated WhatsApp marketing designed to generate leads, build loyalty, and scale your brand's success.
            </p>

            {/* Mini flow explainer */}
            {/* <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm text-neutral-700">
              <span className="px-3 py-1 rounded-full bg-white/80 border">Business</span>
              <span className="opacity-70">→</span>
              <span className="px-3 py-1 rounded-full bg-whatsapp text-white">WhatsApp Campaigns</span>
              <span className="opacity-70">→</span>
              <span className="px-3 py-1 rounded-full bg-white/80 border">User Engagement</span>
              <span className="opacity-70">→</span>
              <span className="px-3 py-1 rounded-full bg-white/80 border">Revenue Growth</span>
            </div> */}

            {/* CTAs */}
            <div data-reveal className="reveal is-visible flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full sm:max-w-sm mx-auto lg:mx-0 px-4 sm:px-0">
              {/* <a href="https://wa.me/919999999999?text=Hi%20Schbang%2C%20I%27d%20like%20to%20talk%20to%20an%20expert" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto relative h-12 sm:h-14 px-6 sm:px-8 rounded-2xl text-white font-semibold bg-gradient-to-b from-whatsapp to-emerald-500 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] shadow-md sm:shadow-[0_10px_24px_rgba(16,185,129,0.35)] sm:hover:shadow-[0_18px_40px_rgba(16,185,129,0.5)]"
                  style={{ fontSize: 'clamp(0.95rem, 1.2vw + 0.3rem, 1.125rem)' }}
                >
                  Book a Session
                </Button>
              </a> */}
              <a href="https://calendly.com/wa-schbang/new-meeting" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-[92%] sm:w-auto h-12 sm:h-14 px-5 sm:px-8 rounded-2xl text-white font-medium bg-whatsapp/90 backdrop-blur-md border border-white/30 ring-1 ring-white/20 shadow-sm sm:shadow-[0_10px_28px_rgba(16,185,129,0.35)] hover:bg-whatsapp" style={{ fontSize: 'clamp(1rem, 1.3vw + 0.3rem, 1.125rem)' }}>
                  Try Our WhatsApp Demo Bot
                </Button>
              </a>
            </div>
            {/* <div className="text-sm text-neutral-600">Takes less than 30 sec • No commitment demo</div> */}

            {/* Social proof - marquee (mobile-safe) */}
            <div className="pt-4 overflow-hidden px-4 sm:px-0 gpu-layer mx-auto max-w-[calc(100vw-2rem)] w-full">
              <div className="text-neutral-700 mb-2 text-center sm:text-left" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.3rem, 0.95rem)' }}>Trusted by 50+ brands</div>
              <Marquee speed={40} gradient={false} pauseOnHover={true} autoFill={true} className="py-1 w-full overflow-hidden">
                {[pdp, imagine, skillhouse, schbang, level].map((src, idx) => (
                  <img 
                    key={idx} 
                    src={src} 
                    alt="client logo" 
                    className="w-auto object-contain mx-2 sm:mx-8 mix-blend-normal sm:mix-blend-multiply"
                    style={{ height: idx === 0 || idx === 2 ? 'clamp(4rem, 5vw, 5rem)' : 'clamp(1.75rem, 2vw, 2.25rem)' }}
                  />
                ))}
              </Marquee>
            </div>
          </div>

          {/* Right: CTWA image (hidden on mobile for cleaner layout) */}
          <div className="hidden lg:block relative mx-auto w-full max-w-lg rounded-[2rem] border border-neutral-200 bg-white overflow-hidden premium-shadow">
            <img src={ctwa} alt="Click-to-WhatsApp experience" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button moved to App root via <FloatingWhatsApp /> */}
    </section>
  );
};

export default HeroSection;