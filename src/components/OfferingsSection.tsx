import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ctwaImg from "@/assets/solutionsimg/CTWA.jpg";
import formsImg from "@/assets/solutionsimg/FORMS.jpg";
import paymentsImg from "@/assets/solutionsimg/PAYMENTS.jpg";
import webviewImg from "@/assets/solutionsimg/WEBVIEW.jpg";
import catalogueImg from "@/assets/solutionsimg/CATALOUGE.png";
import aicallImg from "@/assets/solutionsimg/AICALLING.jpg";

interface Offering {
  id: string;
  category: string;
  headline: string;
  body: string;
  cta: string;
  image: string;
}

const OFFERINGS: Offering[] = [
  {
    id: "ai-calling",
    category: "AI Calling",
    headline: "Never lose a customer to a missed call again",
    body: "Missed calls mean lost revenue. Your customers reach competitors when you can't answer. We solve this with AI-powered voice that handles calls 24/7.",
    cta: "Book a call to know more!",
    image: aicallImg,
  },
  {
    id: "gen-ai-bot",
    category: "Gen AI Bot",
    headline: "End the bottleneck of manual customer support",
    body: "Delayed responses frustrate customers and kill conversions. Manual support doesn't scale. We automate routine queries so your team focuses on what matters.",
    cta: "Try the Gen AI Bot",
    image: formsImg,
  },
  {
    id: "b2c-shopping",
    category: "B2C Shopping",
    headline: "Recover revenue lost to cart abandonment",
    body: "Complicated checkouts and app downloads kill sales. Customers abandon carts when buying feels hard. We bring the entire shopping experience into WhatsApp.",
    cta: "Try the B2C Shopping Demo",
    image: catalogueImg,
  },
  {
    id: "b2b-experience",
    category: "B2B Experience",
    headline: "Stop your sales team from chasing dead-end leads",
    body: "Your team wastes hours on prospects who won't buy. Qualified leads go cold during scheduling delays. We automate qualification and booking so you only talk to buyers.",
    cta: "Try the B2B Bot",
    image: paymentsImg,
  },
  {
    id: "ctwa",
    category: "Click-to-WhatsApp (CTWA) Experience",
    headline: "Stop bleeding ad budget on clicks that go nowhere",
    body: "You pay for clicks but lose prospects before conversations start. Most ad traffic disappears without converting. We turn clicks into instant WhatsApp conversations.",
    cta: "Book a Slot to Know More",
    image: ctwaImg,
  },
  {
    id: "web-view",
    category: "Web View Experience",
    headline: "Stop visitors from leaving before you capture their interest",
    body: "Website visitors bounce silently with no way to re-engage them. Static pages don't capture intent. We create interactive WhatsApp experiences that capture leads before they leave.",
    cta: "Book a Slot to Explore",
    image: webviewImg,
  },
  {
    id: "lead-gen",
    category: "Lead Gen Demo",
    headline: "Stop leads from disappearing into your CRM black hole",
    body: "Leads slip through with inconsistent follow-ups. You don't know which channels actually convert. We automate capture, qualification, and nurturing end-to-end.",
    cta: "Try the Lead Gen Demo",
    image: formsImg,
  },
];

const OfferingsSection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section id="offerings" className="py-12 sm:py-16 section-gradient relative overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="premium-heading" style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 3rem)' }}>Explore WhatsApp in Action</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto mt-2 sm:mt-3" style={{ fontSize: 'clamp(0.9rem, 1.2vw + 0.3rem, 1rem)' }}>Auto-rotating overview of our core experiences. Skip the scroll—skim what's possible at a glance.</p>
        </div>

        {/* 1 / 2 / 3 cards per view */}
        <div className="relative overflow-hidden">
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-3 sm:-ml-4">
              {OFFERINGS.map((o, i) => (
                <CarouselItem key={o.id} className="pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <div className="h-full rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white premium-shadow-lg flex flex-col overflow-hidden">
                      <div className="relative" style={{ height: 'clamp(10rem, 15vw + 5rem, 13rem)' }}>
                        <img src={o.image} alt={o.category} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute left-3 sm:left-4 bottom-2 sm:bottom-3 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/90 font-semibold text-neutral-800 border" style={{ fontSize: 'clamp(0.7rem, 1vw + 0.2rem, 0.75rem)' }}>{o.category}</div>
                      </div>
                      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3 flex-1 flex flex-col">
                        <h3 className="font-semibold text-neutral-900" style={{ fontSize: 'clamp(1.1rem, 1.5vw + 0.3rem, 1.5rem)' }}>{o.headline}</h3>
                        <p className="text-neutral-700 leading-relaxed flex-1" style={{ fontSize: 'clamp(0.85rem, 1vw + 0.2rem, 1rem)' }}>{o.body}</p>
                        <div className="pt-1 sm:pt-2">
                          <a href="https://calendly.com/wa-schbang/new-meeting" target="_blank" rel="noopener noreferrer">
                            <Button className="rounded-full px-4 sm:px-5 bg-whatsapp text-white hover:bg-whatsapp-dark" style={{ height: 'clamp(2.25rem, 3vw, 2.5rem)', fontSize: 'clamp(0.85rem, 1vw + 0.2rem, 0.95rem)' }}>{o.cta}</Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex md:-left-6 bg-white/90 z-10 h-8 w-8" />
            <CarouselNext className="hidden md:flex md:-right-6 bg-white/90 z-10 h-8 w-8" />
          </Carousel>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {OFFERINGS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${i === current ? "bg-whatsapp w-8" : "bg-neutral-300 w-4"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
