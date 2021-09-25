import { useState } from "react";

const ScrollButton: React.FC = () => {
  const [isVisible /*, setIsVisible*/] = useState<boolean>(false);

  return (
    <button className={`btn ${isVisible ? "active" : "hidden"}`}>click</button>
  );
};

export default ScrollButton;
