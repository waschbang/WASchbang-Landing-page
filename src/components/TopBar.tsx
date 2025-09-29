import { X } from "lucide-react";
import { useState } from "react";

const TopBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
   <></>
  );
};

export default TopBar;
