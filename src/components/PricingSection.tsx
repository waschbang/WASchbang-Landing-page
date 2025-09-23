import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      period: "month",
      description: "Perfect for small businesses starting with WhatsApp marketing",
      features: [
        "Up to 1,000 messages/month",
        "Basic chatbot automation", 
        "WhatsApp Business API setup",
        "Standard templates",
        "Email support",
        "Basic analytics"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Growth",
      price: "149",
      period: "month", 
      description: "Ideal for growing businesses scaling their WhatsApp presence",
      features: [
        "Up to 10,000 messages/month",
        "Advanced AI chatbots",
        "Multi-agent live chat",
        "Custom templates",
        "Facebook/Instagram integration", 
        "Priority support",
        "Advanced analytics",
        "Lead generation tools"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month",
      description: "For large businesses with advanced WhatsApp marketing needs", 
      features: [
        "Unlimited messages",
        "Custom AI solutions",
        "Dedicated account manager",
        "White-label options",
        "API integrations",
        "24/7 phone support",
        "Custom analytics dashboard",
        "Priority onboarding"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent 
            <span className="text-whatsapp"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            No hidden fees, no setup costs, no long-term contracts. 
            Choose the plan that fits your business needs.
          </p>
          
          {/* Pricing Toggle */}
          <div className="bg-white rounded-full p-1 inline-flex whatsapp-shadow">
            <button className="bg-whatsapp text-white px-6 py-2 rounded-full font-semibold">
              Monthly
            </button>
            <button className="text-gray-600 px-6 py-2 rounded-full font-semibold">
              Yearly (Save 20%)
            </button>
          </div>
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
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-whatsapp mr-3">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

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
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-3xl p-8 whatsapp-shadow max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in All Plans
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-whatsapp mr-3">✓</span>
                <span>No setup or onboarding fees</span>
              </div>
              <div className="flex items-center">
                <span className="text-whatsapp mr-3">✓</span>
                <span>WhatsApp Business API access</span>
              </div>
              <div className="flex items-center">
                <span className="text-whatsapp mr-3">✓</span>
                <span>Compliance management included</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-whatsapp mr-3">✓</span>
                <span>Free migration from other platforms</span>
              </div>
              <div className="flex items-center">
                <span className="text-whatsapp mr-3">✓</span>
                <span>Training and onboarding support</span>
              </div>
              <div className="flex items-center">
                <span className="text-whatsapp mr-3">✓</span>
                <span>Cancel anytime, no long-term contracts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;