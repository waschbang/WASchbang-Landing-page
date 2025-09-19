const SolutionsSection = () => {
  const solutions = [
    {
      icon: "🔗",
      title: "Official API Setup",
      description: "Get verified WhatsApp Business API through AiSensy partnership. Full compliance and instant credibility.",
      features: ["Verified green checkmark", "Business profile setup", "Compliance management", "Technical integration"]
    },
    {
      icon: "📢",
      title: "Broadcast Campaigns",
      description: "Send targeted messages to thousands of customers instantly with personalized content and timing.",
      features: ["Bulk messaging", "Template management", "Personalization", "Scheduling tools"]
    },
    {
      icon: "🤖",
      title: "AI Chatbots & Automation",
      description: "24/7 customer support with intelligent chatbots that qualify leads and handle common queries automatically.",
      features: ["Smart responses", "Lead qualification", "Order tracking", "FAQ automation"]
    },
    {
      icon: "🎯",
      title: "Facebook/Instagram Lead Generation",
      description: "Convert social media traffic directly to WhatsApp conversations with Click-to-WhatsApp ads.",
      features: ["Ad integration", "Lead capture", "Instant connection", "Cross-platform sync"]
    },
    {
      icon: "👥",
      title: "Multi-Agent Live Chat",
      description: "Team collaboration with conversation routing, tagging, and real-time customer support management.",
      features: ["Team dashboard", "Conversation routing", "Performance tracking", "Collaboration tools"]
    },
    {
      icon: "📈",
      title: "Real-Time Analytics",
      description: "Track every message, conversion, and customer journey with detailed reports and actionable insights.",
      features: ["Message analytics", "Conversion tracking", "ROI reports", "Customer insights"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete WhatsApp Marketing 
            <span className="text-whatsapp"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, automate, and scale your WhatsApp marketing 
            from setup to advanced analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 whatsapp-shadow hover:scale-105 smooth-transition"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
              
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <span className="text-whatsapp mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 whatsapp-shadow max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Customer Communication?
            </h3>
            <p className="text-gray-600 mb-6">
              Join 500+ businesses already using our WhatsApp marketing solutions to grow their revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta-gradient text-white font-semibold py-3 px-8 rounded-full cta-shadow hover:scale-105 smooth-transition">
                🚀 Get Started Today
              </button>
              <button className="border-2 border-whatsapp text-whatsapp font-semibold py-3 px-8 rounded-full hover:bg-whatsapp hover:text-white smooth-transition">
                💬 Chat With Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;