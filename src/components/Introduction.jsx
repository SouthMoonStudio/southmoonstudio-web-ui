import React from "react";
import { InViewContext } from "./Slide";
import "../css/Introduction.css";

const Introduction = () => {
  return (
    <InViewContext.Consumer>
      {(isVisible) => {
        return isVisible && RenderIntroduction();
      }}
    </InViewContext.Consumer>
  );
};

const RenderIntroduction = () => {
  return (
    <div id="introduction-container">
      <h1>Hello</h1>
      <h2>my name is John Alfred Grobbelaar</h2>
    </div>
  );
};

export default Introduction;
