import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["WhatsApp Business API", "AI Chatbots", "Broadcast Campaigns", "Live Chat", "Analytics"]
    },
    {
      title: "Features",
      links: ["Forms & Payments", "CTWA Ads", "Multi-Agent Support", "Template Messages", "Automation"]
    },
    {
      title: "Industries",
      links: ["E-commerce", "Healthcare", "Education", "Real Estate", "Travel & Tourism"]
    },
    {
      title: "Resources",
      links: ["Documentation", "API Reference", "Case Studies", "Blog", "Webinars"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Contact", "Partners", "Press Kit"]
    }
  ];

  return (
    <footer className="bg-neutral-900 text-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid lg:grid-cols-6 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-whatsapp rounded-lg flex items-center justify-center">
                  <span className="font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold">AiSensy</span>
              </div>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Official WhatsApp Business API provider helping businesses achieve higher engagement and conversion rates through intelligent messaging solutions.
              </p>
              <div className="flex gap-4">
                <Button size="sm" className="bg-whatsapp hover:bg-whatsapp-dark">
                  Start for FREE
                </Button>
                <Button variant="outline" size="sm" className="border-neutral-600 text-neutral-300 hover:bg-neutral-800">
                  Book Demo
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-neutral-400 hover:text-white premium-transition text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-neutral-800 pt-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold mb-4">Trusted by 500+ Businesses Globally</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-sm bg-neutral-800 px-4 py-2 rounded">Official WhatsApp Partner</div>
                <div className="text-sm bg-neutral-800 px-4 py-2 rounded">ISO 27001 Certified</div>
                <div className="text-sm bg-neutral-800 px-4 py-2 rounded">GDPR Compliant</div>
                <div className="text-sm bg-neutral-800 px-4 py-2 rounded">99.9% Uptime</div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2024 AiSensy. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-white premium-transition">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-white premium-transition">Terms of Service</a>
              <a href="#" className="text-neutral-400 hover:text-white premium-transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;