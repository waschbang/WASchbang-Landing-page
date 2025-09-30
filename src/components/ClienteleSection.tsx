import Marquee from "react-fast-marquee";
import pdp from "@/assets/pdp.png";
import imagine from "@/assets/Imagine logo.png";
import skillhouse from "@/assets/skillhouse.png";
import schbang from "@/assets/Schbang Logo_Main.png";
import level from "@/assets/levellogo.png";

type ClientLogo = { name: string; src: string; blend?: boolean };

const ClienteleSection = () => {
  const clients: ClientLogo[] = [
    { name: "PDP", src: pdp, blend: true }, // enlarge
    { name: "Imagine", src: imagine, blend: true },
    { name: "SkillHouse", src: skillhouse, blend: true }, // enlarge
    { name: "Schbang", src: schbang },
    { name: "Level SuperMind", src: level },
  ];

  return (
    <section id="clientele" className="py-14 section-gradient overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl premium-heading mb-12">Trusted by</h2>
          {/* <p className="text-neutral-600">Clients we’ve worked with</p> */}
        </div>

        <Marquee speed={40} gradient={false} pauseOnHover={true} autoFill={true} className="py-2">
          {clients.map((item, idx) => {
            const enlarge = item.name === "PDP" || item.name === "SkillHouse";
            return (
              <img
                key={`${item.name}-${idx}`}
                src={item.src}
                alt={`${item.name} logo`}
                className={`${enlarge ? 'h-20 lg:h-24' : 'h-14 lg:h-16'} w-auto object-contain mx-8 ${item.blend ? 'mix-blend-multiply' : ''}`}
                loading="lazy"
              />
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default ClienteleSection;
