const BenefitsSection = () => {
  const benefits = [
    {
      icon: "📊",
      stat: "98%",
      title: "Open Rates",
      description: "WhatsApp messages have the highest open rates compared to email (20%) and SMS (98%)"
    },
    {
      icon: "🎯",
      stat: "45-60%",
      title: "Click-Through Rate",
      description: "Achieve industry-leading CTR that's 5x higher than traditional email marketing"
    },
    {
      icon: "⚡",
      stat: "3x",
      title: "Faster Response",
      description: "Customers respond 3x faster on WhatsApp than any other communication channel"
    },
    {
      icon: "💰",
      stat: "4x",
      title: "Higher ROI",
      description: "Generate 4x more revenue per message compared to traditional marketing channels"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why WhatsApp Marketing 
            <span className="text-whatsapp"> Outperforms Everything</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WhatsApp isn't just messaging—it's the most powerful direct marketing channel 
            that delivers real results for businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center whatsapp-shadow hover:scale-105 smooth-transition"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <div className="text-4xl font-bold text-whatsapp mb-2">{benefit.stat}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Stats Row */}
        <div className="mt-16 bg-white rounded-3xl p-8 whatsapp-shadow max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-whatsapp mb-2">2.8B+</div>
              <div className="text-gray-600">WhatsApp Users Worldwide</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-whatsapp mb-2">90%</div>
              <div className="text-gray-600">Messages Read Within 3 Minutes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-whatsapp mb-2">5x</div>
              <div className="text-gray-600">Higher Engagement Than Email</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;