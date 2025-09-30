import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

interface LifecycleStage {
  id: number;
  name: string;
  position: { x: number; y: number };
  items: string[];
  delay: number;
}

const lifecycleStages: LifecycleStage[] = [
  {
    id: 1,
    name: "DISCOVERY",
    position: { x: 0, y: 20 },
    items: ["Discover new product", "Receive seasonal promotion"],
    delay: 0
  },
  {
    id: 2,
    name: "CONSIDERATION",
    position: { x: 50, y: 10 },
    items: ["Revisit wishlist", "Ask about product"],
    delay: 0.2
  },
  {
    id: 3,
    name: "AWARENESS",
    position: { x: 95, y: 30 },
    items: ["Review loyalty offers", "Compare products"],
    delay: 0.4
  },
  {
    id: 4,
    name: "PURCHASE",
    position: { x: 70, y: 65 },
    items: ["Buy product", "Browse catalog"],
    delay: 0.6
  },
  {
    id: 5,
    name: "POST-PURCHASE",
    position: { x: 35, y: 65 },
    items: ["Send support query", "Track order"],
    delay: 0.8
  },
  {
    id: 6,
    name: "RE-ENGAGEMENT",
    position: { x: -10, y:60 },
    items: ["Automated follow-ups recover 30% lost revenue opportunities", "Personalized messaging drives higher conversion rates"],
    delay: 1.0
  }
];

export const CustomerLifecycleSection = () => {
  const [visibleStages, setVisibleStages] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress through the section
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      // Only calculate when section is in viewport
      if (sectionBottom < 0 || sectionTop > viewportHeight) {
        return;
      }
      
      // Calculate how far we've scrolled through the section
      const scrolledDistance = Math.max(0, -sectionTop);
      const totalScrollDistance = sectionHeight - viewportHeight;
      const progress = Math.min(1, Math.max(0, scrolledDistance / totalScrollDistance));
      
      setScrollProgress(progress);
      
      // Determine which stages should be visible
      const stagesToShow = Math.floor(progress * lifecycleStages.length * 1.2);
      const newVisibleStages = lifecycleStages
        .slice(0, Math.min(lifecycleStages.length, stagesToShow + 1))
        .map(stage => stage.id);
      
      setVisibleStages(newVisibleStages);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="min-h-[240vh] sm:min-h-[280vh] lg:min-h-[300vh] bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold text-emerald-300 leading-tight"
              >
                Drive value across the customer lifecycle
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between sm:justify-start sm:space-x-8 gap-6">
                  <div className="text-center">
                    <div className="text-base sm:text-xl font-bold">Each</div>
                    <div className="text-base sm:text-xl font-bold">touchpoint</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold">=</div>
                  <div className="text-center">
                    <div className="text-base sm:text-xl font-bold">Revenue</div>
                    <div className="text-base sm:text-xl font-bold">opportunity</div>
                  </div>
                </div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-base sm:text-lg leading-relaxed text-emerald-100/90"
                >
                  At each stage, Business Messaging plays a pivotal role, 
                  unblocking cost savings and new revenue opportunities while 
                  emphasizing retention.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Infinity Loop Diagram */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] w-full">
            {/* Infinity Loop Path */}
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleStages.length > 0 ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 300"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#34d399" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 200 150 C 200 70 360 70 360 150 C 360 230 200 230 200 150 C 200 70 40 70 40 150 C 40 230 200 230 200 150"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                strokeDasharray="10,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: scrollProgress }}
                transition={{ duration: 0.5 }}
              />
            </motion.svg>

            {/* Lifecycle Stages */}
            <AnimatePresence>
              {lifecycleStages.map((stage) => (
                visibleStages.includes(stage.id) && (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: stage.delay,
                      ease: "easeOut" 
                    }}
                    className="absolute"
                    style={{
                      left: `${stage.position.x}%`,
                      top: `${stage.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Stage Label */}
                    <motion.div
                      initial={{ opacity: 0, rotateY: 90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      transition={{ delay: stage.delay + 0.2 }}
                      className="mb-3 sm:mb-4"
                    >
                      <div className="bg-emerald-200/20 backdrop-blur-sm border border-emerald-300/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-center">
                        <span className="text-xs sm:text-sm font-bold text-emerald-100 whitespace-nowrap">
                          {stage.name}
                        </span>
                      </div>
                    </motion.div>

                    {/* Items Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: stage.delay + 0.4 }}
                    >
                      <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl p-3 sm:p-4 max-w-[180px] sm:max-w-[200px]">
                        <ul className="space-y-1.5 sm:space-y-2">
                          {stage.items.map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: stage.delay + 0.6 + index * 0.1 }}
                              className="flex items-start space-x-2 text-xs sm:text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </Card>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>

            {/* Center Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: visibleStages.length >= 3 ? 1 : 0,
                scale: visibleStages.length >= 3 ? 1 : 0
              }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CustomerLifecycleSection;
