import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (<div className="pt-4"></div>
 
 
  );
};

export default AnnouncementBar;