import walogo from "@/assets/walogo.png";

const Footer = () => {
  const features = ["Forms & Payments", "CTWA Ads", "Multi-Agent Support", "Template Messages", "Automation"];
  const industries = ["E-commerce", "Healthcare", "Education", "Real Estate", "Travel & Tourism"];
  const company = ["About Us", "Careers", "Contact", "Partners", "Press Kit"];
  const legal = ["About", "Products", "Privacy", "Terms", "Help"];

  return (
    <footer id="footer" className="bg-white text-neutral-900 border-t border-neutral-200">
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <div className="pb-8">
          <div className="grid lg:grid-cols-4 gap-8 items-start">
            <div className="rounded-2xl bg-neutral-900 text-white p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Schbang — Engineering conversations that drive business impact.</h3>
              <p className="text-neutral-300 leading-relaxed">
                Official WhatsApp Business Partner | Secure, Compliant, and Customer-Focused
              </p>
              <div className="flex gap-3 flex-nowrap">
                <a href="#footer" className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-whatsapp text-white font-medium premium-transition hover:bg-whatsapp-dark">
                  Contact Us
                </a>
                <a href="#case-studies" className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-white/10 text-neutral-300 border border-white/20 premium-transition hover:bg-white/15">
                  Book Demo
                </a>
              </div>
            </div>

            {/* Right link lists (anchored to right) */}
            <div className="lg:col-span-3">
              <div className="w-full flex justify-end">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div>
                    <div className="font-medium text-neutral-800 mb-3">Features</div>
                    <ul className="space-y-2 text-neutral-600">
                      {features.map((item) => (
                        <li key={item}><a href="#" className="hover:text-neutral-900 premium-transition">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-neutral-800 mb-3">Industries</div>
                    <ul className="space-y-2 text-neutral-600">
                      {industries.map((item) => (
                        <li key={item}><a href="#" className="hover:text-neutral-900 premium-transition">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-neutral-800 mb-3">Company</div>
                    <ul className="space-y-2 text-neutral-600">
                      {company.map((item) => (
                        <li key={item}><a href="#" className="hover:text-neutral-900 premium-transition">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wordmark row with only top border and baseline alignment */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-end justify-between gap-4 text-sm">
          <div className="flex items-end gap-4 select-none">
            <img src={walogo} alt="Schbang logo" className="h-[10vw] md:h-[96px] w-auto" />
            <div className="text-[15vw] md:text-[120px] leading-[0.9] font-extrabold tracking-tight whitespace-nowrap">Schbang</div>
          </div>

          <nav className="flex flex-wrap items-end gap-x-6 gap-y-2 text-neutral-600">
            {legal.map((l) => (
              <a key={l} href="#" className="hover:text-neutral-900 premium-transition">{l}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;