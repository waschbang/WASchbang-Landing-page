import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    { question: "How quickly can we launch?", answer: "Most campaigns go live within one week." },
    { question: "Do you create campaign content?", answer: "Yes, all messaging is crafted to fit your brand’s voice perfectly." },
    { question: "Can you integrate with my CRM or website?", answer: "Absolutely, we handle all technical integrations." },
    { question: "Is customer data secure?", answer: "We prioritize robust security and compliance at every stage." },
  ];

  return (
    <section id="faq" className="py-16 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked 
            <span className="text-whatsapp"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our WhatsApp marketing services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-neutral-200"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-whatsapp py-5 no-underline hover:no-underline focus-visible:outline-none">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;