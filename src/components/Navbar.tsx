import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import walogo from "@/assets/walogo.png";

const Navbar = () => {
  const navItems = [
    // { name: "Why WhatsApp", href: "#why-whatsapp" },
    // { name: "Solutions", href: "#features" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Clients", href: "#clientele" },
    // { name: "Integrations", href: "#integrations" },
    { name: "Pricing", href: "#pricing" },
    // { name: "Process", href: "#process" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[90%] lg:w-[50%] max-w-5xl bg-white/80 backdrop-blur-md rounded-full shadow border border-neutral-200 transition-all duration-300">
      <div className="px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" className="flex items-center gap-2">
              <img src={walogo} alt="Schbang logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-neutral-900 leading-none">Schbang</span>
            </a>
          </div>

          {/* Navigation Items (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-neutral-900 font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <span className="sr-only">Menu</span>
                  <div className="w-6 h-6 flex flex-col justify-center gap-1">
                    <div className="w-6 h-0.5 bg-neutral-600"></div>
                    <div className="w-6 h-0.5 bg-neutral-600"></div>
                    <div className="w-6 h-0.5 bg-neutral-600"></div>
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <img src={walogo} alt="Schbang logo" className="h-8 w-auto" />
                    <span className="text-lg font-bold text-neutral-900 leading-none">Schbang</span>
                  </div>

                  <div className="w-full flex flex-col gap-3">
                    {navItems.map((item) => (
                      <a key={item.name} href={item.href} className="text-neutral-800 font-medium py-2">
                        {item.name}
                      </a>
                    ))}
                  </div>

                  <div className="h-px bg-neutral-200 my-6" />

                  <div className="flex flex-col gap-3">
                    <a href="#get-started">
                      <Button className="bg-whatsapp hover:bg-whatsapp-dark text-white font-medium rounded-lg px-6 h-11">
                        Try Demo Bot
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#get-started">
              <Button className="bg-whatsapp hover:bg-whatsapp-dark text-white font-medium rounded-[100px] px-6 h-10">
                Try Demo Bot
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;