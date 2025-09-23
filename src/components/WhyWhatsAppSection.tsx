import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhyWhatsAppSection = () => {
  const features = [
    {
      title: "Actionable Notifications",
      description: "Send personalized messages that drive immediate action with high engagement rates",
      icon: "🔔"
    },
    {
      title: "Customer Support",
      description: "Provide instant, 24/7 customer support through WhatsApp's familiar interface",
      icon: "💬"
    },
    {
      title: "Forms & Payments",
      description: "Collect customer information and process payments directly within WhatsApp conversations",
      icon: "💳"
    },
    {
      title: "CTWA Integration",
      description: "Click-to-WhatsApp Ads that convert social media traffic into direct conversations",
      icon: "📱"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-whatsapp/10 rounded-full text-sm font-medium text-whatsapp mb-6">
              Latest Features Launch
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl premium-heading mb-8">
              Get Started with Forms, Payments & CTWA
            </h2>
            <p className="text-xl premium-text mb-6 max-w-3xl mx-auto">
              WASchbang launches latest WhatsApp and AI Features at blazing fast speed
            </p>
            
            <div className="bg-white rounded-2xl p-8 premium-shadow-lg border border-neutral-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Request Demo</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-whatsapp/20 focus:border-whatsapp"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-whatsapp/20 focus:border-whatsapp"
                />
                <textarea 
                  placeholder="Tell us about your business needs..." 
                  rows={3}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-whatsapp/20 focus:border-whatsapp"
                />
                <Button className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-medium py-3 rounded-lg">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Why WhatsApp */}
          <div className="mb-12">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl premium-heading mb-6">
                Why WhatsApp?
              </h3>
              <p className="text-xl premium-text max-w-3xl mx-auto">
                WhatsApp is the One Platform that brings together Actionable Notifications & Customer Support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-lg premium-transition bg-white border-neutral-100">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default WhyWhatsAppSection;