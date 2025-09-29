const WhyWhatsAppSection = () => {
  const bullets = [
    { title: "Open rates that soar", detail: "98% on average — far beyond email or SMS" },
    { title: "Clicks that convert", detail: "Over 60% engagement on smart campaigns" },
    { title: "Reach everywhere", detail: "Connect with 2.6B active users where conversations happen" },
    { title: "Stronger engagement", detail: "5X more meaningful interactions when WhatsApp is prioritized" },
    { title: "Always-on connection", detail: "One ping, instant response – on their time, their terms" },
  ];

  const extras = [
    "WhatsApp boasts over 2.7B active users globally in 2025, with businesses witnessing 5X higher engagement vs. traditional channels.",
    "Personalized WhatsApp campaigns can drive up to 3X the ROI for customer engagement and conversions.",
    "Leading brands use WhatsApp Business API for automated customer journeys, boosting sales and satisfaction.",
  ];

  return (
    <section id="why-whatsapp" className="py-16 section-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl premium-heading mb-3">Why WhatsApp?</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">Meet customers where they already engage — and see the metrics to prove it.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {bullets.map((b) => (
              <div key={b.title} className="rounded-2xl border border-neutral-200 bg-white p-5 flex items-start gap-3">
                <span className="inline-block mt-1 w-2 h-2 rounded-full bg-whatsapp"></span>
                <div>
                  <div className="font-semibold text-neutral-900">{b.title}</div>
                  <div className="text-sm text-neutral-700">{b.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {extras.map((e, i) => (
              <div key={i} className="rounded-xl bg-white/70 border border-neutral-200 p-4 text-neutral-700">{e}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWhatsAppSection;
