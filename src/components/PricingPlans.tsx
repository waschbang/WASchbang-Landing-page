import { Button } from "@/components/ui/button";

const PricingPlans = () => {
  const plans = [
    {
      name: "Foundation",
      tagline: "For brands just starting out.",
      price: { oneTime: "2L–2.5L setup", monthly: "50K retainer", adSpend: "—" },
      description: "Baseline setup to launch WhatsApp performance quickly and safely.",
      features: [
        "Campaign setup & onboarding",
        "1–2 journeys + broadcast/month",
        "Compliance & sender setup",
        "Basic analytics dashboard",
      ],
      popular: false,
      cta: "Book Free Consultation",
    },
    {
      name: "Growth",
      tagline: "Our most popular plan for scaling campaigns across journeys.",
      price: { oneTime: "Custom", monthly: "50K retainer", adSpend: "As needed" },
      description: "Multi-campaign execution with advanced journeys and continuous optimization.",
      features: [
        "Advanced segments & automations",
        "Monthly optimization + A/B tests",
        "Playbooks & content ops",
        "Priority support",
      ],
      popular: true,
      cta: "See Campaign Examples",
    },
    {
      name: "Scale",
      tagline: "High-volume campaigns with ad amplification.",
      price: { oneTime: "Custom", monthly: "50K+ retainer", adSpend: "5L+ recommended" },
      description: "Aggressive scaling with high-frequency campaigns and paid amplification.",
      features: [
        "High-frequency sends & journeys",
        "Ad amplification strategy",
        "Dedicated strategist",
        "Custom dashboards & reporting",
      ],
      popular: false,
      cta: "Get Custom Quote in 24H",
    },
    {
      name: "Custom",
      tagline: "Bespoke strategy crafted for your exact needs.",
      price: { oneTime: "Custom", monthly: "Custom", adSpend: "Custom" },
      description:
        "Just need a one‑off, high‑impact campaign? We'll craft, launch, and measure a bespoke WhatsApp experience aligned to your goal.",
      features: [
        "Tailored scope & deliverables",
        "Dedicated execution team",
        "SLA-based support",
        "Flexible billing",
      ],
      popular: false,
      cta: "Get Custom Quote in 24H",
    },
  ];

  return (
    <section id="pricing" className="py-14 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Packages Designed for Growth</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-7">
            All packages include onboarding, brand-aligned content, compliance assurance, and expert campaign management. Simple pricing. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 flex flex-col 
                ${plan.popular ? "border-2 border-whatsapp cta-shadow scale-105" : "whatsapp-shadow"} hover:scale-105 smooth-transition`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-whatsapp text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <div className="text-sm text-neutral-600 mb-3">{plan.tagline}</div>
                <p className="text-gray-600 mb-4">{plan.description}</p>

                <div className="mb-3 grid grid-cols-1 gap-1 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">One-time: </span>
                    <span className="text-gray-800">{plan.price.oneTime}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Monthly: </span>
                    <span className="text-gray-800">{plan.price.monthly}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Ad spend: </span>
                    <span className="text-gray-800">{plan.price.adSpend}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-whatsapp mt-2" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(
                    `Hi Schbang, I'm interested in the ${plan.name} plan. CTA: ${plan.cta}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`w-full py-3 rounded-full font-semibold ${
                      plan.popular
                        ? "cta-gradient text-white cta-shadow"
                        : "border-2 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white"
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
      </div>
    </section>
  );
};

export default PricingPlans;
