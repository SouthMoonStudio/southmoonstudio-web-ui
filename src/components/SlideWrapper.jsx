import React from "react";
import "../css/SlideWrapper.css";

const SlideWrapper = (props) => {
  return <div className="slide-wrapper">{props.children}</div>;
};

export default SlideWrapper;
