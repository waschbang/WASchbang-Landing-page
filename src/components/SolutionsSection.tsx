import { useRef } from "react";

const SolutionsSection = () => {
  const features = [
    { id: "forms", title: "Forms", description: "Collect leads and data inside WhatsApp with frictionless forms.", points: ["Multi-step inputs", "Validation & tags", "Auto-assign to CRM"], color: "bg-emerald-50" },
    { id: "payments", title: "Payments", description: "Accept payments via WhatsApp (WhatsApp Pay, Razorpay, etc.).", points: ["Payment links", "Subscriptions", "COD confirmations"], color: "bg-amber-50" },
    { id: "ctwa-ads", title: "CTWA Ads", description: "Click-to-WhatsApp ads that convert traffic into conversations.", points: ["Ad-to-chat journeys", "Quick replies", "Lead syncing"], color: "bg-sky-50" },
    { id: "live-chat", title: "Live Chat", description: "Multi-agent support on one WhatsApp number with smart routing.", points: ["Agent inbox", "Routing rules", "SLAs & notes"], color: "bg-purple-50" },
    { id: "analytics", title: "Analytics", description: "Real-time metrics to optimize replies, clicks, and conversions.", points: ["Opens & CTR", "Funnel stats", "Source attribution"], color: "bg-lime-50" },
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth || 360) + 24; // width + gap
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="features" className="py-16 lg:py-20 section-gradient">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-whatsapp/10 rounded-full text-sm font-medium text-whatsapp mb-6">
              <span className="w-2 h-2 bg-whatsapp rounded-full"></span>
              Our WhatsApp Marketing Solutions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl premium-heading mb-6 max-w-4xl mx-auto leading-tight">
              Messages, Flows, and Tools That Drive Action
            </h2>
            <p className="text-lg md:text-xl premium-text max-w-3xl mx-auto leading-relaxed">
              End-to-end campaign management, intelligent automation, precision targeting, high-converting messages, and clear reporting.
            </p>
          </div>

          {/* Swiper-like carousel */}
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-neutral-500">Swipe to explore</div>
              <div className="flex gap-2">
                <button onClick={() => scrollByCard(-1)} className="h-9 w-9 rounded-full border border-neutral-300 bg-white hover:border-whatsapp premium-transition">‹</button>
                <button onClick={() => scrollByCard(1)} className="h-9 w-9 rounded-full border border-neutral-300 bg-white hover:border-whatsapp premium-transition">›</button>
              </div>
            </div>
            <div
              ref={trackRef}
              className="overflow-x-auto hide-scrollbar snap-x snap-mandatory"
            >
              <div className="flex gap-6 pr-6">
                {features.map((f) => (
                  <article
                    key={f.id}
                    id={f.id}
                    data-card
                    className="snap-start min-w-[320px] sm:min-w-[360px] md:min-w-[420px] bg-white border border-neutral-200 rounded-[36px] p-0 overflow-hidden premium-shadow hover:shadow-xl transition-all"
                  >
                    <div className={`${f.color} h-40 sm:h-48 w-full`} />
                    <div className="p-6">
                      <h3 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-1">{f.title}</h3>
                      <p className="text-neutral-700 mb-4 text-sm">{f.description}</p>
                      <ul className="space-y-2">
                        {f.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-2 text-neutral-700 text-sm">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-whatsapp" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;