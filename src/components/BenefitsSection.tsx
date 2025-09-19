const BenefitsSection = () => {
  const benefits = [
    {
      stat: "98%",
      label: "Open Rate",
      description: "Industry-leading message delivery and engagement rates",
      icon: "📱",
      comparison: "vs 20% for email"
    },
    {
      stat: "60%",
      label: "Click Rate",
      description: "Superior click-through rates drive real business results",
      icon: "🎯",
      comparison: "vs 3% for email"
    },
    {
      stat: "45x",
      label: "Faster Response",
      description: "Instant communication leads to quicker conversions",
      icon: "⚡",
      comparison: "than traditional methods"
    },
    {
      stat: "300%",
      label: "More Engagement",
      description: "Higher customer interaction and satisfaction rates",
      icon: "💬",
      comparison: "vs social media"
    }
  ];

  return (
    <section className="py-24 lg:py-32 premium-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-whatsapp/10 rounded-full text-sm font-medium text-whatsapp mb-6">
              <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse"></span>
              Why WhatsApp Marketing Works
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl premium-heading mb-6 max-w-4xl mx-auto leading-tight">
              Outperform Every Other 
              <span className="text-whatsapp block">Marketing Channel</span>
            </h2>
            <p className="text-xl premium-text max-w-3xl mx-auto leading-relaxed">
              WhatsApp isn't just another messaging platform—it's the most effective way to reach and convert your customers with unprecedented engagement rates.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="premium-card p-8 text-center group hover:scale-[1.02] stagger-animation"
                style={{"--stagger": index + 1} as React.CSSProperties}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 premium-transition">{benefit.icon}</div>
                <div className="text-4xl lg:text-5xl font-bold text-whatsapp mb-2">{benefit.stat}</div>
                <div className="text-lg font-semibold premium-heading mb-3">{benefit.label}</div>
                <p className="text-sm premium-text mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-xs text-neutral-500 font-medium">{benefit.comparison}</div>
              </div>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="mt-20 premium-card p-12 text-center">
            <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-whatsapp mb-2">2.7B+</div>
                <div className="text-sm premium-text">Global WhatsApp Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-whatsapp mb-2">5.5B</div>
                <div className="text-sm premium-text">Messages Sent Daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-whatsapp mb-2">90%</div>
                <div className="text-sm premium-text">Messages Read Within 3 Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;