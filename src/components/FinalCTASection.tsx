import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section id="get-started" className="py-16 section-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl premium-heading mb-4">
            Transform WhatsApp into your brand’s most powerful engagement channel.
          </h2>
          <p className="text-neutral-700 mb-8">
            Let’s discuss your goals or launch a demo campaign today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://wa.me/919999999999?text=Hi%20Schbang%2C%20I%27d%20like%20a%20complimentary%20strategy%20session" target="_blank" rel="noopener noreferrer">
              <Button className="bg-whatsapp hover:bg-whatsapp-dark text-white rounded-2xl h-12 px-6 font-medium">
                Get Your Complimentary Strategy Session
              </Button>
            </a>
            <a href="https://wa.me/919999999999?text=Hi%20Schbang%2C%20I%27d%20like%20to%20chat%20with%20your%20experts" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-2xl h-12 px-6 border-2 border-neutral-300 text-neutral-700 hover:border-whatsapp hover:text-whatsapp bg-white">
                Chat With Our Experts
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
