import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-whatsapp text-white py-3 px-4 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-4 text-sm font-medium">
          <span className="hidden sm:inline">🚀</span>
          <span className="font-bold">EVOLVE'25</span>
          <span className="hidden md:inline">Unlock AI advantage for your business at India's Biggest AI event</span>
          <span className="md:hidden">India's Biggest AI event</span>
          <span>• 28 Oct 2025</span>
          <Button 
            size="sm" 
            className="bg-white text-whatsapp hover:bg-neutral-100 font-semibold px-4 py-1 h-auto rounded-full ml-2"
          >
            Register
          </Button>
        </div>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neutral-200 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;