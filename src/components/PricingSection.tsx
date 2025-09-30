import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Foundation",
      price: "2L–2.5L fixed costs + 50K retainer ",
      period: "",
      description: "Baseline setup for brands getting started with WhatsApp performance.",
      breakdown: [
        "Fixed: ₹2,00,000 – ₹2,50,000",
        "Retainer: ₹50,000 (if applicable)",
      ],
      features: [
        // space for future bullets if needed
      ],
      popular: false,
      cta: "Book Consultation"
    },
    {
      name: "Growth",
      price: "Fixed costs + 50K retainer",
      period: "",
      description: "Multi-campaign execution with advanced journeys and continuous optimization.",
      breakdown: [
        "Fixed: ₹XX",
        "Retainer: ₹50,000",
      ],
      features: [],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Scale",
      price: "Fixed costs + 50K retainer + 5L ad spend",
      period: "",
      description: "Aggressive scaling with high-frequency campaigns and paid amplification.",
      breakdown: [
        "Fixed: ₹XX",
        "Retainer: ₹50,000",
        "Ad Spend: ₹5,00,000",
      ],
      features: [],
      popular: false,
      cta: "Talk to Us"
    },
    {
      name: "Custom",
      price: "Custom",
      period: "",
      description: "Just need a one-off, high‑impact campaign? We’ll craft, launch, and measure a bespoke WhatsApp experience aligned to your goal.",
      breakdown: [
        "Campaign-only engagement",
        "Outcome-led pricing",
      ],
      features: [],
      popular: false,
      cta: "Plan a Campaign"
    }
  ];

  return (
    <section id="pricing" className="py-16 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Packages Designed for Growth</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            All packages include onboarding, brand-aligned content, compliance assurance, and expert campaign management. Simple pricing. No surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 flex flex-col ${
                plan.popular 
                  ? 'border-2 border-whatsapp cta-shadow scale-105' 
                  : 'whatsapp-shadow'
              } hover:scale-105 smooth-transition`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-whatsapp text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-3">
                  {plan.price === "Custom" ? (
                    <span className="text-4xl font-bold text-gray-900">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && <span className="text-gray-600">/{plan.period}</span>}
                    </>
                  )}
                </div>
              </div>

              {/* Cost breakdown chips */}
              {Array.isArray((plan as any).breakdown) && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {(plan as any).breakdown.map((line: string) => (
                    <span key={line} className="px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-700 text-sm">
                      {line}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA pinned to bottom */}
              <div className="mt-auto">
                <a 
                  href={`https://wa.me/919999999999?text=Hi%20Schbang%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    className={`w-full py-3 rounded-full font-semibold ${
                      plan.popular
                        ? 'cta-gradient text-white cta-shadow'
                        : 'border-2 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white'
                    } smooth-transition`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No extras below to keep it clean as requested */}
      </div>
    </section>
  );
};

export default PricingSection;