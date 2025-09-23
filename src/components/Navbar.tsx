import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "Pricing", href: "#pricing" },
    { name: "Product", href: "#solutions", hasDropdown: true },
    { name: "Features", href: "#benefits", hasDropdown: true },
    { name: "Industries", href: "#", hasDropdown: true },
    { name: "Resources", href: "#faq", hasDropdown: true },
    { name: "Integrations", href: "#", hasDropdown: true },
    { name: "Mobile App", href: "#", hasDropdown: true },
    { name: "Partner", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-whatsapp rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-neutral-900">AiSensy</span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-1 text-neutral-700 hover:text-neutral-900 font-medium premium-transition text-sm"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="w-3 h-3 text-neutral-500" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Menu</span>
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <div className="w-6 h-0.5 bg-neutral-600"></div>
                <div className="w-6 h-0.5 bg-neutral-600"></div>
                <div className="w-6 h-0.5 bg-neutral-600"></div>
              </div>
            </Button>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-neutral-600">
              <span className="w-4 h-4 rounded-full bg-neutral-200 flex items-center justify-center text-xs">🌐</span>
              <span>Eng</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                className="bg-whatsapp hover:bg-whatsapp-dark text-white font-medium rounded-lg px-6 h-10"
              >
                Start for FREE
              </Button>
              <Button 
                variant="outline"
                className="border-neutral-300 text-neutral-700 hover:border-neutral-400 font-medium rounded-lg px-6 h-10"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;