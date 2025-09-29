const SocialProofSection = () => {
  return (
    <section id="social-proof" className="py-12 section-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-neutral-200 text-sm font-medium text-neutral-700 mb-4">
            <span className="w-2 h-2 bg-whatsapp rounded-full" />
            Trusted by ambitious, forward-thinking brands
          </div>
          <h2 className="text-2xl md:text-3xl premium-heading mb-4">
            Creativity and measurable results, backed by Schbang’s award-winning digital expertise
          </h2>
          <p className="text-neutral-700 mb-6 max-w-3xl mx-auto">
            Proven engagement uplift, transparent metrics, and continually growing success stories.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <div className="rounded-2xl bg-white p-5 border border-neutral-200">
              <div className="text-2xl font-semibold text-neutral-900">98%</div>
              <div className="text-sm text-neutral-600">Open rates that soar — far beyond email or SMS</div>
            </div>
            <div className="rounded-2xl bg-white p-5 border border-neutral-200">
              <div className="text-2xl font-semibold text-neutral-900">60%+</div>
              <div className="text-sm text-neutral-600">Engagement on smart campaigns that drive action</div>
            </div>
            <div className="rounded-2xl bg-white p-5 border border-neutral-200">
              <div className="text-2xl font-semibold text-neutral-900">5X</div>
              <div className="text-sm text-neutral-600">More meaningful interactions when WhatsApp is prioritized</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
