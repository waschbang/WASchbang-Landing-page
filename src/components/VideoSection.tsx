const VideoSection = () => {
  // Use YouTube embed URL for the provided video
  const src = "https://www.youtube.com/embed/Cpvd4yOePWM";

  return (
    <section id="product-video" className="py-10 section-gradient">
      <div className="container mx-auto px-6 lg:px-12">
      
        {/* Responsive 16:9 video frame */}
        <div className="relative w-full rounded-2xl overflow-hidden premium-shadow-lg border border-neutral-200 bg-white">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={src}
              title="Product demo video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
