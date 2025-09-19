import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is WhatsApp Business API and how is it different from WhatsApp Business?",
      answer: "WhatsApp Business API is the enterprise solution that allows businesses to send messages at scale, create chatbots, and integrate with other systems. Unlike the free WhatsApp Business app (limited to 1 device), the API supports multiple agents, automation, and unlimited messaging capabilities."
    },
    {
      question: "How quickly can I get started with WhatsApp marketing?",
      answer: "We can have your WhatsApp Business API set up within 24-48 hours. This includes account verification, template approval, and basic automation setup. Our team handles all technical aspects so you can focus on your marketing strategy."
    },
    {
      question: "Do you provide training on how to use WhatsApp for marketing?",
      answer: "Yes! Every client receives comprehensive onboarding including best practices training, template creation guidance, compliance education, and ongoing support. We also provide video tutorials and documentation to help your team succeed."
    },
    {
      question: "What are WhatsApp message templates and why do I need them?",
      answer: "Message templates are pre-approved message formats required by WhatsApp for business communications. They ensure compliance and deliverability. We help create and get approval for templates that fit your business needs, from welcome messages to order confirmations."
    },
    {
      question: "Can I integrate WhatsApp with my existing CRM or e-commerce platform?",
      answer: "Absolutely! We provide API integrations with popular platforms like Shopify, WooCommerce, Salesforce, HubSpot, and more. Custom integrations are also available for Enterprise clients to ensure seamless workflow integration."
    },
    {
      question: "How do you ensure compliance with WhatsApp's policies?",
      answer: "We stay up-to-date with all WhatsApp Business Policy changes and ensure your account remains compliant. This includes proper opt-in procedures, message frequency limits, content guidelines, and template management. We handle all compliance monitoring."
    },
    {
      question: "What kind of support do you provide?",
      answer: "All plans include email support with guaranteed response times. Growth and Enterprise plans include priority support with phone and chat options. Enterprise clients get a dedicated account manager for personalized assistance."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, there are no long-term contracts or cancellation fees. You can upgrade, downgrade, or cancel your subscription at any time. We believe in earning your business through great service, not binding contracts."
    },
    {
      question: "Do you offer white-label solutions?",
      answer: "Yes, Enterprise clients can access white-label options to offer WhatsApp marketing services under their own brand. This includes custom branding, dedicated infrastructure, and reseller support programs."
    },
    {
      question: "How do you measure the success of WhatsApp marketing campaigns?",
      answer: "We provide detailed analytics including delivery rates, open rates, click-through rates, conversion tracking, and ROI calculations. You'll have access to real-time dashboards and scheduled reports to monitor campaign performance."
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked 
            <span className="text-whatsapp"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about WhatsApp marketing and our services. 
            Can't find what you're looking for? Chat with our experts!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 whatsapp-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-whatsapp py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 whatsapp-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our WhatsApp marketing experts are here to help you get started 
              and answer any specific questions about your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta-gradient text-white font-semibold py-3 px-8 rounded-full cta-shadow hover:scale-105 smooth-transition">
                💬 Chat With Expert
              </button>
              <button className="border-2 border-whatsapp text-whatsapp font-semibold py-3 px-8 rounded-full hover:bg-whatsapp hover:text-white smooth-transition">
                📞 Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;