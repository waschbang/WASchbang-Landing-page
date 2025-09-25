import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹4,000",
      period: "mo",
      description: "Entry campaigns, up to 1,000 contacts, basic automation, monthly reporting",
      features: [],
      popular: false,
      cta: "Book Consultation"
    },
    {
      name: "Growth",
      price: "₹12,000",
      period: "mo",
      description: "Multiple campaigns, up to 10,000 contacts, advanced flows, integration support",
      features: [],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Unlimited reach, bespoke journeys, full creative, strategic consultancy",
      features: [],
      popular: false,
      cta: "Talk to Us"
    }
  ];

  return (
    <section id="pricing" className="py-16 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            All packages include onboarding, your brand voice, compliance, and full campaign management. No learning curve. Only results.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 ${
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
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
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

              {plan.description && (
                <p className="text-gray-700 mb-8 text-sm leading-relaxed">{plan.description}</p>
              )}

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
          ))}
        </div>

        {/* No extras below to keep it clean as requested */}
      </div>
    </section>
  );
};

export default PricingSection;