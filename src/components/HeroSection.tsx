import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import ctwa from "@/assets/solutionsimg/CTWA.jpg";
import pdp from "@/assets/pdp.png";
import imagine from "@/assets/Imagine logo.png";
import skillhouse from "@/assets/skillhouse.png";
import schbang from "@/assets/Schbang Logo_Main.png";
import level from "@/assets/levellogo.png";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const waHref = `https://wa.me/919999999999?text=${encodeURIComponent(
    `Hi Schbang, I'm interested in WhatsApp campaigns. My work email: ${email || "[email]"}.`
  )}`;

  return (
    <section id="hero" className="relative premium-gradient overflow-hidden pt-24 pb-10">
      <div className="container mx-auto px-6 lg:px-12 min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-136px)] flex items-center relative z-10">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy + CTAs */}
          <div className="max-w-2xl mx-auto text-center lg:text-left space-y-6">


            <h1 data-reveal className="reveal is-visible text-3xl md:text-5xl premium-heading leading-tight text-neutral-900">
              Drive <span className=" font-semibold">3–5X Revenue</span> with Smarter <span className="text-whatsapp font-semibold">WhatsApp Campaigns</span>
            </h1>

            <p data-reveal className="reveal is-visible text-lg md:text-xl premium-text max-w-3xl mx-auto lg:mx-0 leading-relaxed text-neutral-800">
              Schbang crafts strategic, automated WhatsApp marketing designed to generate leads, build loyalty, and scale your brand’s success.
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
            <div data-reveal className="reveal is-visible flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="https://wa.me/919999999999?text=Hi%20Schbang%2C%20I%27d%20like%20to%20talk%20to%20an%20expert" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="relative h-14 px-8 rounded-2xl text-white text-lg font-semibold bg-gradient-to-b from-whatsapp to-emerald-500 shadow-[0_10px_24px_rgba(16,185,129,0.35)] hover:shadow-[0_18px_40px_rgba(16,185,129,0.5)] ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:bg-emerald-300/30 after:blur-xl after:opacity-0 hover:after:opacity-100"
                >
                  Book a Session
                </Button>
              </a>
              <a href="https://wa.me/919999999999?text=Hi%20Schbang%2C%20I%27d%20like%20to%20book%20a%20demo" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 rounded-2xl text-white text-lg font-medium bg-whatsapp/85 backdrop-blur-md border border-white/30 ring-1 ring-white/20 shadow-[0_10px_28px_rgba(16,185,129,0.35)] hover:bg-whatsapp/95 hover:shadow-[0_16px_44px_rgba(16,185,129,0.45)]">
                  Try Our WhatsApp Demo Bot
                </Button>
              </a>
            </div>
            {/* <div className="text-sm text-neutral-600">Takes less than 30 sec • No commitment demo</div> */}

            {/* Tiny email form */}
            <div id="get-started" className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl bg-white premium-shadow"
              />
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="shrink-0">
                <Button className="h-12 px-6 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800">
                  Get Started
                </Button>
              </a>
            </div>

            {/* Social proof - marquee */}
            <div className="pt-4">
              <div className="text-neutral-700 text-sm mb-2">Trusted by 200+ brands</div>
              <Marquee speed={40} gradient={false} pauseOnHover={true} autoFill={true} className="py-1">
                {[pdp, imagine, skillhouse, schbang, level].map((src, idx) => (
                  <img key={idx} src={src} alt="client logo" className="h-8 sm:h-10 w-auto object-contain mx-8 mix-blend-multiply" />
                ))}
              </Marquee>
            </div>
          </div>

          {/* Right: CTWA image */}
          <div className="relative mx-auto w-full max-w-lg rounded-[2rem] border border-neutral-200 bg-white overflow-hidden premium-shadow">
            <img src={ctwa} alt="Click-to-WhatsApp experience" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button: green circle with white glyph (icon-only) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919999999999?text=Hi%20Schbang%2C%20I%27d%20like%20to%20chat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="block"
        >
          <div className="w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp-dark transition-transform hover:scale-105 shadow-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor" aria-hidden>
              <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.1 1.6 5.89L0 24l6.28-1.64A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22a9.94 9.94 0 0 1-5.07-1.39l-.36-.21-3.73.97.99-3.63-.24-.37A9.94 9.94 0 0 1 2 12C2 6.49 6.49 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.51-4.49 10-10 10Zm5.63-7.64c-.31-.16-1.82-.9-2.1-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.2-.18.2-.36.23-.67.08-.31-.16-1.29-.48-2.46-1.53-.91-.8-1.53-1.79-1.71-2.1-.18-.31 0-.48.13-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5l-.58-.01c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.47 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.1 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.08-.13-.28-.2-.58-.36Z" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;