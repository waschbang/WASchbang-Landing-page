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
        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
          <Button 
            className="bg-whatsapp hover:bg-whatsapp-dark text-white rounded-full w-14 h-14 premium-shadow-xl premium-button"
            size="icon"
            aria-label="Chat on WhatsApp"
          >
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
        </a>
      </div>
    </section>
  );
};

export default HeroSection;