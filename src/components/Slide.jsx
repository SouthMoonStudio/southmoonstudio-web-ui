import React, { createContext } from "react";
import { useInView } from "react-hook-inview";
import "../css/Slide.css";

export const InViewContext = createContext("");

const Slide = (props) => {
  const [ref, isVisible] = useInView({ threshold: 0.5 });
  return (
    <div className="slide-container" ref={ref} id={props.id}>
      <InViewContext.Provider value={isVisible}>
        {props.children}
      </InViewContext.Provider>
    </div>
  );
};

export default Slide;
