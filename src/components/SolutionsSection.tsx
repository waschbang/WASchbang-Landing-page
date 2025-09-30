import { useEffect, useRef, useState } from "react";
import ctwaImg from "@/assets/solutionsimg/CTWA.jpg";
import formsImg from "@/assets/solutionsimg/FORMS.jpg";
import paymentsImg from "@/assets/solutionsimg/PAYMENTS.jpg";
import webviewImg from "@/assets/solutionsimg/WEBVIEW.jpg";
import catalogueImg from "@/assets/solutionsimg/CATALOUGE.png";
import aicallImg from "@/assets/solutionsimg/AICALLING.jpg";

type Solution = {
  title: string;
  description: string;
  image: string;
  features: string[];
};

const SOLUTIONS: Solution[] = [
  {
    title: "AI Calling",
    description:
      "Streamline customer calls with AI-powered voice interactions. Explore what AI calling can do.",
    image: aicallImg,
    features: [
      "Respond to queries instantly, 24/7",
      "Schedule calls or follow-ups automatically",
      "Provide product, service, or update information",
      "Escalate complex queries to human agents",
      "CTA: Book a call to know more!",
    ],
  },
  {
    title: "Gen AI Bot",
    description:
      "Intelligent conversation automation that adapts to your audience.",
    image: formsImg,
    features: [
      "Handle FAQs and routine queries",
      "Personalize responses from profile/history",
      "Human-like onboarding, support, nurturing",
      "Integrate with systems for real-time data",
      "CTA: Try the Gen AI Bot",
    ],
  },
  {
    title: "B2C Shopping",
    description:
      "Deliver personalized shopping experiences directly on WhatsApp.",
    image: catalogueImg,
    features: [
      "Browse products and catalogues in a guided flow",
      "Receive tailored recommendations",
      "Complete orders and payments inside WhatsApp",
      "Track updates, offers, and loyalty rewards",
      "CTA: Try the B2C Shopping Demo",
    ],
  },
  {
    title: "B2B Experience",
    description:
      "Simplify complex business sales journeys with automation.",
    image: paymentsImg,
    features: [
      "Capture and qualify leads instantly",
      "Auto-schedule demos or meetings",
      "Share personalized proposals or documents",
      "Nurture prospects to boost conversions",
      "CTA: Try the B2B Bot",
    ],
  },
  {
    title: "Click-to-WhatsApp (CTWA) Experience",
    description:
      "Turn clicks into conversations and engagement instantly.",
    image: ctwaImg,
    features: [
      "Start pre-filled chats from sites, ads, or emails",
      "Connect users to automation or team instantly",
      "Track performance to measure engagement",
      "Seamless transitions to support",
      "CTA: Book a Slot to Know More",
    ],
  },
  {
    title: "Web View Experience",
    description:
      "Interactive WhatsApp experiences embedded in web pages.",
    image: webviewImg,
    features: [
      "Showcase products/services richly",
      "Collect feedback, surveys, or leads",
      "Handoff to support or transactions",
      "Keep engagement high with interactive content",
      "CTA: Book a Slot to Explore",
    ],
  },
  {
    title: "Lead Gen Demo",
    description:
      "Automate lead capture, qualification, and nurturing through WhatsApp.",
    image: formsImg,
    features: [
      "Collect contact and business details",
      "Segment leads to focus on value",
      "Personalized follow-ups that feel human",
      "Real-time insights to optimize conversions",
      "CTA: Try the Lead Gen Demo",
    ],
  },
];

const SolutionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // if out of view, ignore
      if (rect.bottom < 0 || rect.top > vh) return;

      const scrolled = Math.max(0, -rect.top);
      const total = Math.max(1, rect.height - vh);
      const progress = Math.min(1, scrolled / total);
      const idx = Math.min(SOLUTIONS.length - 1, Math.floor(progress * SOLUTIONS.length));
      if (idx !== active) setActive(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  const current = SOLUTIONS[active];
  // Derive CTA and feature list without CTA marker
  const cta = current.features.find((f) => f.startsWith("CTA:"));
  const featureItems = current.features.filter((f) => !f.startsWith("CTA:"));

  const scrollToIndex = (index: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = Math.max(1, el.offsetHeight - vh);
    const clamped = Math.min(SOLUTIONS.length - 1, Math.max(0, index));
    const targetWithinSection = (clamped / SOLUTIONS.length) * total;
    const absoluteTop = window.scrollY + rect.top + targetWithinSection;
    window.scrollTo({ top: absoluteTop, behavior: "smooth" });
  };

  return (
    <section id="features" className="section-gradient">
      {/* Make the whole section taller so we can scroll through states */}
      <div ref={sectionRef} className="min-h-[700vh]">
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-center mb-8">
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-whatsapp/10 rounded-full text-sm font-medium text-whatsapp">
                <span className="w-2 h-2 bg-whatsapp rounded-full" />
                Explore WhatsApp in Action
              </div> */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl premium-heading mt-4">
                Explore WhatsApp in Action
              </h2>
              <p className="text-neutral-600 max-w-3xl mx-auto mt-3">Explore our interactive demos and see how strategic WhatsApp campaigns can transform customer engagement. Click a card to dive in.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Content side */}
              <div key={`content-${active}`} className="space-y-6 fade-in-up">
                <div className="text-sm text-neutral-500">{active + 1} of {SOLUTIONS.length}</div>
                <h3 className="text-3xl lg:text-4xl font-semibold text-neutral-900">{current.title}</h3>
                <p className="text-neutral-700 text-lg leading-relaxed">{current.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featureItems.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-neutral-800">
                      <span className="inline-block w-2 h-2 rounded-full bg-whatsapp" />
                      <span className="text-sm font-medium">{f}</span>
                    </li>
                  ))}
                </ul>

                {cta && (
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-whatsapp text-white font-medium premium-transition hover:bg-whatsapp-dark shadow-sm"
                    >
                      {cta.replace("CTA:", "").trim()}
                    </a>
                  </div>
                )}

                {/* Progress dots */}
                <div className="flex gap-2 pt-2">
                  {SOLUTIONS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to solution ${i + 1}`}
                      onClick={() => scrollToIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp/60 ${i === active ? "bg-whatsapp w-8" : "bg-neutral-300 w-4"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Image side */}
              <div className="relative">
                <div key={`image-${active}`} className="relative rounded-2xl overflow-hidden premium-shadow-lg border border-neutral-200 fade-in-scale">
                  <img src={current.image} alt={current.title} className="w-full h-[420px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                {/* Floating index badge */}
                <div className="absolute -bottom-4 -right-4 bg-whatsapp/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center border border-whatsapp/20">
                  <span className="text-xl font-bold text-whatsapp">{String(active + 1).padStart(2, "0")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;