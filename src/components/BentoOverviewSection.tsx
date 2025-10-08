import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BentoOverviewSection = () => {
  const videoSrc = "https://www.youtube.com/embed/Cpvd4yOePWM?autoplay=1&mute=1&playsinline=1&rel=0";

  return (
    <section id="overview" className="py-10 sm:py-14 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="premium-heading" style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)' }}>See Value In Minutes</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-2" style={{ fontSize: 'clamp(0.9rem, 1.2vw + 0.3rem, 1rem)' }}>Watch a quick explainer, skim key stats, and preview what you get—without scrolling forever.</p>
        </div>

        {/* Bento Grid - Mosaic */}
        <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-6 auto-rows-[minmax(180px,auto)]">
          {/* Video (center piece) */}
          <Card className="group relative overflow-hidden whatsapp-shadow xl:col-span-3 xl:row-span-2 h-full min-h-[300px] sm:min-h-[350px]">
            <div className="relative h-full bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoSrc}
                title="WhatsApp explainer video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Card>

          {/* Stats (top-left small) */}
          <Card className="relative bg-white whatsapp-shadow hover:ring-1 hover:ring-neutral-200 transition-all xl:col-span-2 xl:row-span-2">
            <CardHeader>
              <CardTitle className="text-neutral-900" style={{ fontSize: 'clamp(1.1rem, 1.5vw + 0.3rem, 1.25rem)' }}>Proof that it works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-center">
                  <div className="font-bold text-neutral-900" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)' }}>98%</div>
                  <div className="text-neutral-600" style={{ fontSize: 'clamp(0.75rem, 1vw + 0.2rem, 0.875rem)' }}>Open Rates</div>
                </div>
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-center">
                  <div className="font-bold text-neutral-900" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)' }}>3–5X</div>
                  <div className="text-neutral-600" style={{ fontSize: 'clamp(0.75rem, 1vw + 0.2rem, 0.875rem)' }}>ROI</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-center">
                  <div className="font-bold text-neutral-900" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}>Official</div>
                  <div className="text-neutral-600" style={{ fontSize: 'clamp(0.75rem, 1vw + 0.2rem, 0.875rem)' }}>WA Partner</div>
                </div>
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-center">
                  <div className="font-bold text-neutral-900" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)' }}>24H</div>
                  <div className="text-neutral-600" style={{ fontSize: 'clamp(0.75rem, 1vw + 0.2rem, 0.875rem)' }}>Setup</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Highlights (right tall) */}
          <Card className="bg-white whatsapp-shadow hover:ring-1 hover:ring-neutral-200 transition-all xl:col-span-1 xl:row-span-2">
            <CardHeader>
              <CardTitle className="text-neutral-900" style={{ fontSize: 'clamp(1.1rem, 1.5vw + 0.3rem, 1.25rem)' }}>Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-2 sm:gap-3">
                <li className="p-3 sm:p-4 rounded-xl border" style={{ fontSize: 'clamp(0.85rem, 1vw + 0.2rem, 0.95rem)' }}>Campaign Automation</li>
                <li className="p-3 sm:p-4 rounded-xl border" style={{ fontSize: 'clamp(0.85rem, 1vw + 0.2rem, 0.95rem)' }}>Segmentation</li>
                <li className="p-3 sm:p-4 rounded-xl border" style={{ fontSize: 'clamp(0.85rem, 1vw + 0.2rem, 0.95rem)' }}>Analytics Dashboard</li>
                <li className="p-3 sm:p-4 rounded-xl border" style={{ fontSize: 'clamp(0.85rem, 1vw + 0.2rem, 0.95rem)' }}>Integrations (CRM, Ads, Payments)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Testimonial removed per request */}
        </div>
      </div>
    </section>
  );
};

export default BentoOverviewSection;
