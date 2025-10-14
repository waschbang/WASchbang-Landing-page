import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import skillhouseLogo from "@/assets/skillhouse.png";
import imagineLogo from "@/assets/Imagine logo.png";
import pdpLogo from "@/assets/pdp.png";
import schbangLogo from "@/assets/Schbang Logo_Main.png";

const CaseStudiesSection = () => {
  const cases = [
    {
      title: "BeerBiceps SkillHouse",
      result: "11,000+ leads in 14 days • 2,200 paid enrollments • 92% reminder open rates",
      meta: "Creator-led Edtech",
      detail:
        "Creator-led edtech by Ranveer Allahbadia (BeerBiceps), offering skill-based courses to upskill young India. We powered their launch with AI-driven conversations, CTWA ads, automated reminders, and upsell journeys.",
      logo: skillhouseLogo,
      alt: "SkillHouse logo",
      bullets: [
        "AI-driven conversations",
        "CTWA ads for acquisition",
        "Automated reminders & upsell journeys",
      ],
      tags: ["Edtech", "Creator", "CTWA"],
    },
    {
      title: "Papa Don’t Preach",
      result: "6,000 bridal appointment interests • ₹1.8–2.5L average order",
      meta: "Luxury Fashion",
      detail:
        "Luxury fashion label by Shubhika Sharma. We built a guided WhatsApp store that matched shoppers with products based on occasion and style.",
      logo: pdpLogo,
      alt: "Papa Don't Preach logo",
      bullets: [
        "Guided WhatsApp store",
        "Product matching by occasion & style",
        "High-value order journeys",
      ],
      tags: ["Luxury", "Commerce", "Guided Store"],
    },
    {
      title: "Imagine",
      result: "83% campaign conversion • 800+ users completed the game",
      meta: "Retail • Apple Premium Partner",
      detail:
        "One of India’s largest Apple Premium Partners. We ran a 7-day gamified WhatsApp campaign, turning daily trivia into in-store incentives for iPhone 17 buyers.",
      logo: imagineLogo,
      alt: "Imagine logo",
      bullets: [
        "7-day gamified campaign",
        "Daily trivia with incentives",
        "Store footfall for iPhone 17",
      ],
      tags: ["Retail", "Gamified", "iPhone 17"],
    },
    {
      title: "Schbang CSAT",
      result: "Real-time insights enabling continuous improvement",
      meta: "Internal CSAT Tool",
      detail:
        "Internal WhatsApp-based CSAT tool capturing quick client feedback. We designed a 2-minute form that makes feedback effortless and actionable.",
      logo: schbangLogo,
      alt: "Schbang logo",
      bullets: [
        "2-minute WhatsApp form",
        "Effortless feedback capture",
        "Actionable, real-time insights",
      ],
      tags: ["Internal", "CSAT", "Automation"],
    },
  ];

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0); // 0..100 for active tab fill

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

  // Animate progress bar for the active tab
  useEffect(() => {
    setProgress(0);
    if (paused) return;
    let start: number | null = null;
    let raf: number;
    const duration = 3000; // match auto-rotate
    const tick = (t: number) => {
      if (start === null) start = t;
      const elapsed = Math.min(duration, t - start);
      setProgress(Math.round((elapsed / duration) * 100));
      if (elapsed < duration && !paused) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, paused]);

  return (
    <section id="case-studies" className="pt-10 sm:pt-12 md:pt-16 pb-12 sm:pb-16 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="premium-heading mb-2 sm:mb-3" style={{ fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 1.875rem)' }}>Work We're Proud Of</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.9rem, 1.2vw + 0.3rem, 1rem)' }}>Real brands. Real impact. Conversations that drive measurable results.</p>
        </div>

        <div
          className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(280px,380px),1fr] gap-4 sm:gap-6 items-stretch"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left: Tabs */}
          <div
            className="rounded-xl sm:rounded-2xl border border-neutral-200 bg-white overflow-hidden h-full self-stretch grid min-h-[450px] sm:min-h-[520px] md:min-h-[560px]"
            style={{ gridTemplateRows: `repeat(${cases.length}, minmax(0, 1fr))` }}
          >
            {cases.map((c, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`relative w-full h-full text-left pl-4 sm:pl-6 pr-4 sm:pr-6 py-4 sm:py-6 flex items-center border-b border-neutral-200 last:border-b-0 transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-whatsapp/10 to-transparent"
                      : "hover:bg-neutral-50"
                  } ${
                    idx === 0 ? "rounded-t-xl sm:rounded-t-2xl" : idx === cases.length - 1 ? "rounded-b-xl sm:rounded-b-2xl" : ""
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp/40`}
                >
                  {/* Fixed accent bar to avoid width shift */}
                  <span className={`absolute left-0 top-0 h-full w-1 sm:w-1.5 rounded-l-xl sm:rounded-l-2xl ${isActive ? "bg-whatsapp" : "bg-transparent"}`} />
                  <div className={`font-semibold leading-snug line-clamp-1 w-full ${isActive ? "text-neutral-900" : "text-neutral-700"}`} style={{ fontSize: 'clamp(0.9rem, 1.2vw + 0.2rem, 1rem)' }}>{c.title}</div>
                  {isActive && (
                    <div className="pointer-events-none absolute left-2 right-2 bottom-1 h-1">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-whatsapp to-emerald-400"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Detail panel */}
          <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl border border-neutral-200 bg-white p-4 sm:p-6 lg:p-8 overflow-hidden flex flex-col justify-center min-h-[450px] sm:min-h-[520px] md:min-h-[560px]">
            {/* Decorative blobs removed as requested */}

            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div className="text-neutral-500" style={{ fontSize: 'clamp(0.8rem, 1vw + 0.2rem, 0.875rem)' }}>Case #{active + 1}</div>
              {"logo" in cases[active] && (
                <img
                  src={(cases[active] as any).logo}
                  alt={(cases[active] as any).alt}
                  className="w-auto object-contain ml-auto opacity-100 filter drop-shadow"
                  style={{ height: 'clamp(3.5rem, 5vw, 5rem)' }}
                />
              )}
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2" style={{ fontSize: 'clamp(1.25rem, 2vw + 0.3rem, 1.5rem)' }}>{cases[active].title}</h3>
            <div className="text-neutral-700 mb-3 sm:mb-4 max-w-2xl" style={{ fontSize: 'clamp(0.9rem, 1.2vw + 0.2rem, 1rem)' }}>{cases[active].detail}</div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 sm:mb-4">
              {cases[active].bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-neutral-700" style={{ fontSize: 'clamp(0.85rem, 1vw + 0.2rem, 0.875rem)' }}>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-whatsapp flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-whatsapp/10 text-whatsapp font-medium" style={{ fontSize: 'clamp(0.75rem, 1vw + 0.2rem, 0.875rem)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-whatsapp flex-shrink-0" />
                <span className="line-clamp-2">{cases[active].result}</span>
              </span>
              {cases[active].tags.map((t) => (
                <span key={t} className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-neutral-200 text-neutral-700" style={{ fontSize: 'clamp(0.75rem, 1vw + 0.2rem, 0.875rem)' }}>{t}</span>
              ))}
            </div>

            {/* CTA */}
            {/* <div className="mt-4 sm:mt-6">
              <a href="#get-started">
                <Button className="rounded-full px-5 sm:px-6 bg-whatsapp text-white hover:bg-whatsapp-dark" style={{ height: 'clamp(2.5rem, 3.5vw, 2.75rem)', fontSize: 'clamp(0.9rem, 1.2vw + 0.2rem, 1rem)' }}>
                  See how we did it
                </Button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
