const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: "🏆",
      title: "Official AiSensy Partner",
      description: "Certified WhatsApp Business API partner with direct access to premium features and priority support."
    },
    {
      icon: "⚡",
      title: "Lightning Fast Setup",
      description: "Get your WhatsApp marketing up and running in 24 hours, not weeks. We handle all the technical complexity."
    },
    {
      icon: "💎",
      title: "No Hidden Fees",
      description: "Transparent pricing with no setup costs, no maintenance fees, and no surprises. Pay only for what you use."
    },
    {
      icon: "🎯",
      title: "Proven Results",
      description: "Our clients see average 300% increase in customer engagement and 4x higher conversion rates."
    },
    {
      icon: "🛡️",
      title: "100% Compliant",
      description: "Stay compliant with WhatsApp policies and international regulations. We handle all compliance requirements."
    },
    {
      icon: "📞",
      title: "24/7 Expert Support",
      description: "Dedicated account manager and round-the-clock technical support to ensure your campaigns never stop."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "EcomStore Pro",
      image: "👩‍💼",
      rating: 5,
      text: "Our WhatsApp marketing revenue increased by 400% in just 3 months. The team's expertise is unmatched!"
    },
    {
      name: "Michael Chen",
      company: "TechSolutions Inc",
      image: "👨‍💻",
      rating: 5,
      text: "Setup was incredibly smooth and support is outstanding. Our customer satisfaction improved dramatically."
    },
    {
      name: "Amanda Rodriguez",
      company: "Local Restaurant Chain",
      image: "👩‍🍳",
      rating: 5,
      text: "WhatsApp campaigns brought back 60% of our inactive customers. ROI exceeded all expectations!"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why 500+ Businesses 
            <span className="text-whatsapp"> Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just a service provider—we're your growth partner committed 
            to your WhatsApp marketing success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 whatsapp-shadow hover:scale-105 smooth-transition"
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 whatsapp-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                    <div className="flex text-yellow-400 mt-1">
                      {"★".repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="bg-white rounded-3xl p-8 whatsapp-shadow max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Awards & Certifications
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">🥇</div>
              <div className="font-semibold text-gray-900">Best WhatsApp Partner</div>
              <div className="text-sm text-gray-600">AiSensy 2024</div>
            </div>
            <div>
              <div className="text-3xl mb-2">⭐</div>
              <div className="font-semibold text-gray-900">5-Star Rating</div>
              <div className="text-sm text-gray-600">500+ Reviews</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🛡️</div>
              <div className="font-semibold text-gray-900">ISO Certified</div>
              <div className="text-sm text-gray-600">Security & Quality</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-semibold text-gray-900">Growth Award</div>
              <div className="text-sm text-gray-600">Top Performer 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;