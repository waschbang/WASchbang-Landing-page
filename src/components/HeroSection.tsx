import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative premium-gradient overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 min-h-[calc(100vh-104px)] md:min-h-[calc(100vh-112px)] flex items-center relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 mx-auto bg-white premium-shadow rounded-full text-sm font-medium text-neutral-700">
            <span className="w-2 h-2 bg-whatsapp rounded-full" />
            We Turn Conversations Into Results — by Schbang
          </div>

          <h1 data-reveal className="reveal is-visible text-3xl md:text-5xl premium-heading leading-tight text-neutral-900">
            Unlock <span className="text-whatsapp font-semibold">5X Engagement</span> & Up To 98% Open Rates with Expert WhatsApp Campaigns
          </h1>

          <p data-reveal className="reveal is-visible text-lg md:text-xl premium-text max-w-3xl mx-auto leading-relaxed text-neutral-800">
            We design, automate, and run WhatsApp marketing that delivers leads, loyalty, and real business growth—powered by Schbang’s creative and strategic excellence.
          </p>

          <div data-reveal className="reveal is-visible flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/919999999999?text=Hi%20Schbang%2C%20I%27d%20like%20to%20talk%20to%20an%20expert" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-whatsapp hover:bg-whatsapp-dark text-white premium-button h-14 px-8 rounded-2xl premium-shadow text-lg font-medium">
                Talk to an Expert
              </Button>
            </a>
            <a href="https://wa.me/919999999999?text=Hi%20Schbang%2C%20I%27d%20like%20to%20book%20a%20demo" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="premium-button h-14 px-8 rounded-2xl border-2 border-neutral-300 text-neutral-700 hover:border-whatsapp hover:text-whatsapp bg-white premium-shadow text-lg font-medium">
                Book a Demo
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/919999999999?text=Hi%20Schbang%2C%20I%27d%20like%20to%20chat" target="_blank" rel="noopener noreferrer">
          <Button
            className="bg-whatsapp hover:bg-whatsapp-dark text-white rounded-full w-14 h-14 premium-shadow-xl premium-button"
            size="icon"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden>
              <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.1 1.6 5.89L0 24l6.28-1.64A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22a9.94 9.94 0 0 1-5.07-1.39l-.36-.21-3.73.97.99-3.63-.24-.37A9.94 9.94 0 0 1 2 12C2 6.49 6.49 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.51-4.49 10-10 10Zm5.63-7.64c-.31-.16-1.82-.9-2.1-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.2-.18.2-.36.23-.67.08-.31-.16-1.29-.48-2.46-1.53-.91-.8-1.53-1.79-1.71-2.1-.18-.31 0-.48.13-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5l-.58-.01c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.47 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.1 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.08-.13-.28-.2-.58-.36Z" />
            </svg>
          </Button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;