import React from "react";
import { InViewContext } from "./Slide";
import "../css/Experience.css";

const Experience = () => {
  return (
    <InViewContext.Consumer>
      {(isVisible) => {
        return isVisible && RenderExperience();
      }}
    </InViewContext.Consumer>
  );
};

const RenderExperience = () => {
  return (
    <div id="experience-container">
      <h2>Experience</h2>
      <h3>Coming Soon</h3>
    </div>
  );
};

export default Experience;
