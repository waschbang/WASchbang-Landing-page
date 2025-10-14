import walogo from "@/assets/walogo.png";

const Footer = () => {
  const features = ["Forms & Payments", "CTWA Ads", "Multi-Agent Support", "Template Messages", "Automation"];
  const industries = ["E-commerce", "Healthcare", "Education", "Real Estate", "Travel & Tourism"];
  const company = ["About Us", "Careers", "Contact", "Partners", "Press Kit"];
  const legal = ["About", "Products", "Privacy", "Terms", "Help"];

  return (
    <footer id="footer" className="bg-white text-neutral-900 border-t border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-6 pb-16 sm:pb-10">
        <div className="pb-8">
          <div className="grid lg:grid-cols-4 gap-5 lg:gap-8 items-start">
            <div className="rounded-2xl bg-neutral-900 text-white p-4 sm:p-6 flex flex-col gap-3">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Schbang — Engineering conversations that drive business impact.</h3>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                Official WhatsApp Business Partner | Secure, Compliant, and Customer-Focused
              </p>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                <a href="#footer" className="inline-flex items-center justify-center h-9 sm:h-10 px-3 sm:px-4 rounded-full bg-whatsapp text-white text-sm sm:text-base font-medium premium-transition hover:bg-whatsapp-dark">
                  Contact Us
                </a>
                <a href="https://calendly.com/wa-schbang/new-meeting" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-9 sm:h-10 px-3 sm:px-4 rounded-full bg-white/10 text-neutral-300 border border-white/20 premium-transition hover:bg-white/15 text-sm sm:text-base">
                  Book Demo
                </a>
              </div>
            </div>

            {/* Right link lists (anchored to right) */}
            <div className="lg:col-span-3">
              <div className="w-full flex lg:justify-end">
                {/* Mobile: flexbox two columns filling width; Desktop: 4-column grid incl. Resources */}
                <div className="flex flex-wrap justify-between gap-y-6 lg:grid lg:grid-cols-4 lg:gap-8 lg:items-start text-left">
                  <div className="pr-3 text-left">
                    <div className="text-xl sm:text-2xl font-semibold text-neutral-800 mb-2 sm:mb-3">Features</div>
                    <ul className="space-y-1.5 sm:space-y-2 text-neutral-700 text-sm sm:text-base">
                      {features.map((item) => (
                        <li key={item}><a href="#" className="hover:text-neutral-900 premium-transition">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div className="pl-3 text-left">
                    <div className="text-xl sm:text-2xl font-semibold text-neutral-800 mb-2 sm:mb-3">Industries</div>
                    <ul className="space-y-1.5 sm:space-y-2 text-neutral-700 text-sm sm:text-base">
                      {industries.map((item) => (
                        <li key={item}><a href="#" className="hover:text-neutral-900 premium-transition">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-left">
                    <div className="text-xl sm:text-2xl font-semibold text-neutral-800 mb-2 sm:mb-3">Company</div>
                    <ul className="space-y-1.5 sm:space-y-2 text-neutral-700 text-sm sm:text-base">
                      {company.map((item) => (
                        <li key={item}><a href="#" className="hover:text-neutral-900 premium-transition">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                  {/* Resources (Desktop) */}
                  <div className="hidden lg:block text-left">
                    <div className="text-xl font-semibold text-neutral-800 mb-2">Resources</div>
                    <ul className="space-y-1.5 text-neutral-700 text-base">
                      {legal.map((l) => (
                        <li key={l}><a href="#" className="hover:text-neutral-900 premium-transition">{l}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wordmark row with only top border and baseline alignment */}
        <div className="pt-5 border-t border-neutral-200 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-3 text-sm">
          <div className="flex items-end gap-2.5 sm:gap-4 select-none">
            <img src={walogo} alt="Schbang logo" className="h-[8vw] md:h-[64px] w-auto" />
            <div className="text-[8vw] md:text-[78px] leading-[0.9] font-extrabold tracking-tight whitespace-nowrap">Schbang</div>
          </div>
          {/* Mobile: show legal links inline. Desktop: show compact Resources block on right */}
          <nav className="flex lg:hidden flex-wrap items-center justify-center gap-x-4 gap-y-2 text-neutral-600 text-xs sm:text-sm">
            {legal.map((l) => (
              <a key={l} href="#" className="hover:text-neutral-900 premium-transition">{l}</a>
            ))}
          </nav>
          <div className="hidden lg:block text-right">
            <div className="text-sm font-semibold text-neutral-800 mb-1">Resources</div>
            <div className="flex items-center gap-4 text-neutral-600">
              {legal.map((l) => (
                <a key={l} href="#" className="hover:text-neutral-900 premium-transition text-sm">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;