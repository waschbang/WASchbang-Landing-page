import { useEffect, useRef, useState } from "react";

const CaseStudiesSection = () => {
  const cases = [
    {
      title: "D2C Brand Increases Repeat Purchases",
      result: "4x revenue from WhatsApp in 90 days",
      meta: "Automation, Broadcasts",
      detail:
        "Personalised reorder nudges and replenishment flows. Broadcasts + smart journeys drove repeat buys and higher LTV.",
      bullets: ["Replenishment journeys", "One-click reorders", "RFM-based segments"],
      tags: ["D2C", "Repeat", "Flows"],
    },
    {
      title: "Education Platform Converts Warm Leads",
      result: "32% demo-to-paid via WhatsApp flows",
      meta: "CTWA, Lead Nurture",
      detail:
        "Click-to-WhatsApp ads triggered guided Q&A and auto-booked demos. Post-demo follow-ups closed the loop.",
      bullets: ["Lead scoring", "Demo booking bot", "Nurture sequences"],
      tags: ["Education", "CTWA", "Automation"],
    },
    {
      title: "Retail Chain Drives Store Visits",
      result: "18% coupon redemption in 7 days",
      meta: "Geo Targeting, Offers",
      detail:
        "Geo-targeted coupons with expiry timers and reminders pushed in-store visits and measurable redemptions.",
      bullets: ["Geo-fencing", "Expiry reminders", "POS attribution"],
      tags: ["Retail", "Coupons", "Attribution"],
    },
  ];

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Auto-rotate every 3s unless paused
  useEffect(() => {
    if (paused) return;
    timerRef.current && window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % cases.length);
    }, 3000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, cases.length]);

  return (
    <section id="case-studies" className="py-16 section-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl premium-heading mb-3">Case Studies</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">Proven growth stories—results measured in real engagement.</p>
        </div>

        <div
          className="max-w-6xl mx-auto grid lg:grid-cols-[380px,1fr] gap-6 items-stretch"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left: Tabs */}
          <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden h-full self-stretch grid grid-rows-3">
            {cases.map((c, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`w-full h-full text-left px-6 py-6 flex items-center border-b last:border-b-0 transition-colors ${
                    isActive ? "bg-neutral-50" : "hover:bg-neutral-50"
                  }`}
                >
                  <div className="font-semibold text-neutral-900 leading-snug line-clamp-1 w-full">{c.title}</div>
                </button>
              );
            })}
          </div>

          {/* Right: Detail panel */}
          <div className="relative rounded-3xl border border-neutral-200 bg-white p-6 lg:p-8 overflow-hidden flex flex-col justify-center min-h-[320px]">
            {/* Decorative blobs removed as requested */}

            <div className="text-sm text-neutral-500 mb-2">Case #{active + 1}</div>
            <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">{cases[active].title}</h3>
            <div className="text-neutral-700 mb-4 max-w-2xl">{cases[active].detail}</div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {cases[active].bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-neutral-700 text-sm">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-whatsapp" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-whatsapp/10 text-whatsapp text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-whatsapp" />
                {cases[active].result}
              </span>
              {cases[active].tags.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full border border-neutral-200 text-neutral-700 text-sm">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
