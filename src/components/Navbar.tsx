import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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

  const dropdowns: Record<string, { title: string; href: string; desc?: string }[]> = {
    Product: [
      { title: "WhatsApp Business API", href: "#" },
      { title: "AI Chatbots", href: "#" },
      { title: "Broadcast Campaigns", href: "#" },
      { title: "Live Chat", href: "#" },
      { title: "Analytics", href: "#" },
    ],
    Features: [
      { title: "Forms & Payments", href: "#" },
      { title: "CTWA Ads", href: "#" },
      { title: "Multi-Agent Support", href: "#" },
      { title: "Template Messages", href: "#" },
      { title: "Automation", href: "#" },
    ],
    Industries: [
      { title: "E-commerce", href: "#" },
      { title: "Healthcare", href: "#" },
      { title: "Education", href: "#" },
      { title: "Real Estate", href: "#" },
      { title: "Travel & Tourism", href: "#" },
    ],
    Resources: [
      { title: "Documentation", href: "#" },
      { title: "API Reference", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Webinars", href: "#" },
    ],
    Integrations: [
      { title: "Shopify", href: "#" },
      { title: "WooCommerce", href: "#" },
      { title: "HubSpot", href: "#" },
      { title: "Salesforce", href: "#" },
    ],
    "Mobile App": [
      { title: "iOS App", href: "#" },
      { title: "Android App", href: "#" },
    ],
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-whatsapp rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-neutral-900">WASchbang</span>
            </div>
          </div>

          {/* Navigation Items (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <Popover>
                    <PopoverTrigger className="flex items-center gap-1 text-neutral-700 hover:text-neutral-900 font-medium text-sm">
                      {item.name}
                      <ChevronDown className="w-3 h-3 text-neutral-500" />
                    </PopoverTrigger>
                    <PopoverContent align="start" side="bottom" className="p-2 w-64">
                      <div className="flex flex-col">
                        {(dropdowns[item.name] || []).map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.href}
                            className="rounded-md px-3 py-2 hover:bg-neutral-50 text-sm text-neutral-800 premium-transition"
                          >
                            {sub.title}
                          </a>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <a href={item.href} className="text-neutral-700 hover:text-neutral-900 font-medium text-sm">
                    {item.name}
                  </a>
                )}
              </div>
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
                    <div className="w-8 h-8 bg-whatsapp rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">W</span>
                    </div>
                    <span className="text-lg font-bold text-neutral-900">WASchbang</span>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {navItems.map((item) => (
                      item.hasDropdown ? (
                        <AccordionItem key={item.name} value={item.name}>
                          <AccordionTrigger className="text-neutral-800 font-medium">
                            {item.name}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-2 pl-2">
                              {(dropdowns[item.name] || []).map((sub) => (
                                <a
                                  key={sub.title}
                                  href={sub.href}
                                  className="text-sm text-neutral-700 hover:text-neutral-900 py-1"
                                >
                                  {sub.title}
                                </a>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <div key={item.name} className="py-2">
                          <a href={item.href} className="text-neutral-800 font-medium">
                            {item.name}
                          </a>
                        </div>
                      )
                    ))}
                  </Accordion>

                  <div className="h-px bg-neutral-200 my-6" />

                  <div className="flex flex-col gap-3">
                    <Button 
                      className="bg-whatsapp hover:bg-whatsapp-dark text-white font-medium rounded-lg px-6 h-11"
                    >
                      Contact
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              className="bg-whatsapp hover:bg-whatsapp-dark text-white font-medium rounded-lg px-6 h-10"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;