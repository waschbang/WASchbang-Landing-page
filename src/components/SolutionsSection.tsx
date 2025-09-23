import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Run AI powered Ads that Click to WhatsApp",
      description: "Run Ads on Facebook & Instagram that land on WhatsApp. 5X Your lead generations & 2-3X Conversions Instantly!",
      details: "Run Ads from WASchbang, get quality leads with AI & conversions API, smartly segregate your leads and build Chatbot Flows to automate everything!",
      icon: "🎯",
      color: "from-blue-50 to-blue-100",
      border: "border-blue-200"
    },
    {
      title: "Build WhatsApp Forms",
      description: "Capture Leads & collect useful information Directly in WhatsApp Chats with WhatsApp Forms.",
      details: "From feedback to gathering user insights, collect it all on WhatsApp.",
      icon: "📝",
      color: "from-green-50 to-green-100", 
      border: "border-green-200"
    },
    {
      title: "Collect Payments on WhatsApp",
      description: "Collect Payments now on WhatsApp seamlessly with WhatsApp Pay and other modes of payment (Razorpay, Payu etc) and grow your revenue.",
      details: "Secure payment processing directly within WhatsApp conversations.",
      icon: "💳",
      color: "from-purple-50 to-purple-100",
      border: "border-purple-200"
    },
    {
      title: "Multiple Human Live Chat",
      description: "Have multiple team members to drive Live Chat Support on the Same WhatsApp Business Number.",
      details: "Filter Chats according to tags, campaigns and attributes for Smart Agent Chat Routing.",
      icon: "👥",
      color: "from-orange-50 to-orange-100",
      border: "border-orange-200"
    },
    {
      title: "Real-Time Analytics",
      description: "Track your campaign results in real-time.",
      details: "Monitor Read, Replied & Clicked rates for each campaign and retarget smartly for higher conversions!",
      icon: "📊",
      color: "from-indigo-50 to-indigo-100",
      border: "border-indigo-200"
    },
    {
      title: "Build no-code Chatbot in minutes",
      description: "Build your Own Chatbot Flows your Way! Easy-to-use Chatbot & Catalog Flow builder to build your conversational journeys",
      details: "No technical knowledge required - drag and drop interface for chatbot creation.",
      icon: "🤖",
      color: "from-pink-50 to-pink-100",
      border: "border-pink-200"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-neutral-50">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-whatsapp/10 rounded-full text-sm font-medium text-whatsapp mb-6">
              <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse"></span>
              Complete WhatsApp Solutions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl premium-heading mb-6 max-w-4xl mx-auto leading-tight">
              Everything You Need to Scale Your 
              <span className="text-whatsapp block">WhatsApp Business</span>
            </h2>
            <p className="text-lg md:text-xl premium-text max-w-3xl mx-auto leading-relaxed">
              From setup to advanced automation, we provide all the tools you need to succeed with WhatsApp marketing
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {solutions.map((solution, index) => (
              <div key={index} className={`p-6 lg:p-8 bg-gradient-to-br ${solution.color} rounded-3xl ${solution.border} border hover:shadow-xl premium-transition group`}>
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/80 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 premium-transition">
                  <span className="text-2xl lg:text-3xl">{solution.icon}</span>
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-3 lg:mb-4 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-neutral-700 mb-3 lg:mb-4 leading-relaxed text-sm lg:text-base">
                  {solution.description}
                </p>
                <p className="text-xs lg:text-sm text-neutral-600 leading-relaxed mb-4 lg:mb-6">
                  {solution.details}
                </p>
                <div className="mt-auto">
                  <Button variant="outline" size="sm" className="text-whatsapp border-whatsapp hover:bg-whatsapp hover:text-white text-sm">
                    Explore →
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-3xl p-8 lg:p-10 premium-shadow border border-neutral-100 max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                Ready to Transform Your Customer Communication?
              </h3>
              <p className="text-neutral-600 mb-6 lg:mb-8 text-lg max-w-2xl mx-auto">
                Join 500+ businesses already using our WhatsApp marketing solutions to grow their revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-whatsapp hover:bg-whatsapp-dark text-white font-medium py-3 px-8 rounded-2xl text-lg">
                  Get Started Today
                </Button>
                <Button variant="outline" className="border-2 border-whatsapp text-whatsapp font-medium py-3 px-8 rounded-2xl hover:bg-whatsapp hover:text-white text-lg">
                  Chat With Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;