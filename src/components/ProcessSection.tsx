const ProcessSection = () => {
  const steps = [
    { title: "In-depth Discovery", detail: "Understand your brand, audience, and goals" },
    { title: "Custom Design", detail: "Tailor campaigns and creative that resonate" },
    { title: "Launch & Manage", detail: "Hands-off execution with ongoing performance monitoring" },
    { title: "Continuous Optimization", detail: "Data-driven refinements for sustained success" },
  ];

  return (
    <section id="process" className="py-16 section-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl premium-heading mb-3">Our Process</h2>
          <p className="text-neutral-700 max-w-3xl mx-auto">A clear, collaborative workflow built for momentum.</p>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <li key={s.title} className="relative bg-white border border-neutral-200 rounded-2xl p-6">
              <div className="absolute -top-3 left-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-whatsapp text-white text-sm font-semibold">
                {i + 1}
              </div>
              <div className="font-semibold text-neutral-900 mb-1 pt-2">{s.title}</div>
              <div className="text-sm text-neutral-700">{s.detail}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
