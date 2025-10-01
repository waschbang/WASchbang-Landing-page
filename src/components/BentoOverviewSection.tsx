import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BentoOverviewSection = () => {
  const videoSrc = "https://www.youtube.com/embed/Cpvd4yOePWM?autoplay=1&mute=1&playsinline=1&rel=0";

  return (
    <section id="overview" className="py-14 section-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl premium-heading">See Value In Minutes</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-2">Watch a quick explainer, skim key stats, and preview what you get—without scrolling forever.</p>
        </div>

        {/* Bento Grid - Mosaic */}
        <div className="grid gap-5 lg:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-6 auto-rows-[minmax(200px,auto)]">
          {/* Video (center piece) */}
          <Card className="group relative overflow-hidden whatsapp-shadow xl:col-span-3 xl:row-span-2 h-full">
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
              <CardTitle className="text-neutral-900">Proof that it works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="p-4 rounded-2xl border text-center">
                  <div className="text-3xl font-bold text-neutral-900">98%</div>
                  <div className="text-sm text-neutral-600">Open Rates</div>
                </div>
                <div className="p-4 rounded-2xl border text-center">
                  <div className="text-3xl font-bold text-neutral-900">3–5X</div>
                  <div className="text-sm text-neutral-600">ROI</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl border text-center">
                  <div className="text-3xl font-bold text-neutral-900">Official</div>
                  <div className="text-sm text-neutral-600">WA Partner</div>
                </div>
                <div className="p-4 rounded-2xl border text-center">
                  <div className="text-3xl font-bold text-neutral-900">24H</div>
                  <div className="text-sm text-neutral-600">Setup</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Highlights (right tall) */}
          <Card className="bg-white whatsapp-shadow hover:ring-1 hover:ring-neutral-200 transition-all xl:col-span-1 xl:row-span-2">
            <CardHeader>
              <CardTitle className="text-neutral-900">Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-3">
                <li className="p-4 rounded-xl border">Campaign Automation</li>
                <li className="p-4 rounded-xl border">Segmentation</li>
                <li className="p-4 rounded-xl border">Analytics Dashboard</li>
                <li className="p-4 rounded-xl border">Integrations (CRM, Ads, Payments)</li>
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
