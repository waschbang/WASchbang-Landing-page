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
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-whatsapp/10 rounded-full text-sm font-medium text-whatsapp mb-6">
              <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse"></span>
              Why Choose WhatsApp for Business?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl premium-heading mb-6 max-w-4xl mx-auto leading-tight">
              Experience Unmatched 
              <span className="text-whatsapp block">Engagement Rates</span>
            </h2>
            <p className="text-lg md:text-xl premium-text max-w-3xl mx-auto leading-relaxed">
              The world's most popular messaging platform with performance that outshines every other channel
            </p>
          </div>

          {/* Main Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            <div className="text-center p-6 lg:p-8 bg-white rounded-3xl premium-shadow border border-neutral-100 hover:shadow-xl premium-transition group">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-whatsapp mb-2 group-hover:scale-110 premium-transition">98%</div>
              <div className="text-neutral-700 font-medium mb-1">Open Rates</div>
              <div className="text-sm text-neutral-500">vs 20% for email</div>
            </div>
            <div className="text-center p-6 lg:p-8 bg-white rounded-3xl premium-shadow border border-neutral-100 hover:shadow-xl premium-transition group">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-whatsapp mb-2 group-hover:scale-110 premium-transition">45-60%</div>
              <div className="text-neutral-700 font-medium mb-1">Click Rates</div>
              <div className="text-sm text-neutral-500">Industry leading</div>
            </div>
            <div className="text-center p-6 lg:p-8 bg-white rounded-3xl premium-shadow border border-neutral-100 hover:shadow-xl premium-transition group">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-whatsapp mb-2 group-hover:scale-110 premium-transition">2.6B+</div>
              <div className="text-neutral-700 font-medium mb-1">Active Users</div>
              <div className="text-sm text-neutral-500">Worldwide reach</div>
            </div>
            <div className="text-center p-6 lg:p-8 bg-white rounded-3xl premium-shadow border border-neutral-100 hover:shadow-xl premium-transition group">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-whatsapp mb-2 group-hover:scale-110 premium-transition">7%</div>
              <div className="text-neutral-700 font-medium mb-1">Engagement Rate</div>
              <div className="text-sm text-neutral-500">vs 1.9% for email</div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-whatsapp/5 to-whatsapp/10 rounded-3xl border border-whatsapp/20 hover:shadow-lg premium-transition">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-whatsapp/10 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <span className="text-xl lg:text-2xl">📢</span>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-3">8+ Powerful Messaging Categories</h3>
              <p className="text-neutral-600 leading-relaxed text-sm lg:text-base">Send Promotions, Offers, Coupon codes, Carousels and More - Risk-Free!</p>
            </div>
            
            <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border border-blue-200 hover:shadow-lg premium-transition">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <span className="text-xl lg:text-2xl">💬</span>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-3">Add CTAs. Drive 3x Conversions</h3>
              <p className="text-neutral-600 leading-relaxed text-sm lg:text-base">Turn conversations into conversions with eye-catching CTA and Quick Reply buttons</p>
            </div>
            
            <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl border border-purple-200 hover:shadow-lg premium-transition">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <span className="text-xl lg:text-2xl">⏰</span>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-3">Schedule your WhatsApp messages</h3>
              <p className="text-neutral-600 leading-relaxed text-sm lg:text-base">Streamline your work, Schedule Broadcasts 2 months ahead of time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;