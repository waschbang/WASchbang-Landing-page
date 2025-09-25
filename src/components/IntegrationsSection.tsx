import Marquee from "react-fast-marquee";
import aisensy from "@/assets/aisensylogo.png";
import pabbly from "@/assets/pabbly.svg";
import hubspot from "@/assets/hubspot.svg";
import razorpay from "@/assets/razorpay-icon.svg";
import aws from "@/assets/awslogo.svg";

type Logo = { alt: string; src: string };

const IntegrationsSection = () => {
  const logos: Logo[] = [
    { alt: "Aisensy", src: aisensy },
    { alt: "Pabbly", src: pabbly },
    { alt: "Hubspot", src: hubspot },
    { alt: "Razorpay", src: razorpay },
    { alt: "AWS", src: aws },
  ];

  const track = [...logos, ...logos];

  return (
    <section id="integrations" className="py-14 section-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl premium-heading pb-4">Partners</h2>
        </div>

        <Marquee speed={38} gradient={false} pauseOnHover={true} autoFill={true} className="py-2">
          {logos.map((it, idx) => (
            <img
              key={`${it.alt}-${idx}`}
              src={it.src}
              alt={`${it.alt} logo`}
              className="h-14 lg:h-16 w-auto object-contain mx-8"
              loading="lazy"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default IntegrationsSection;
