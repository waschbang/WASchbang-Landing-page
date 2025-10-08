import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import walogo from "@/assets/walogo.png";

const Navbar = () => {
  const navItems = [
    // { name: "Overview", href: "#overview" },
    { name: "Lifecycle", href: "#lifecycle" },
    { name: "Pricing", href: "#pricing" },
    { name: "Offerings", href: "#offerings" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] lg:w-[65%] xl:w-[55%] max-w-6xl bg-white/70 backdrop-blur-md rounded-full shadow border border-neutral-200 transition-all duration-300">
      <div className="px-3 sm:px-4">
        <div className="flex items-center justify-between" style={{ height: 'clamp(3rem, 4vw + 1rem, 3.5rem)' }}>
          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" className="flex items-center gap-2">
              <img src={walogo} alt="Schbang logo" className="w-auto" style={{ height: 'clamp(1.75rem, 2.5vw, 2rem)' }} />
              <span className="font-bold text-neutral-900 leading-none" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.3rem, 1.25rem)' }}>Schbang</span>
            </a>
          </div>

          {/* Navigation Items (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-neutral-900 font-medium whitespace-nowrap"
                style={{ fontSize: 'clamp(0.8rem, 1vw + 0.2rem, 0.875rem)' }}
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
              <Button className="bg-whatsapp hover:bg-whatsapp-dark text-white font-medium rounded-[100px] px-4 xl:px-6" style={{ height: 'clamp(2.25rem, 3vw, 2.5rem)', fontSize: 'clamp(0.8rem, 1vw + 0.2rem, 0.875rem)' }}>
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