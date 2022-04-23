import React from "react";
import { InViewContext } from "./Slide";
import breakdown from "../util/breakdown";
import "../css/Vision.css";

const Vision = () => {
  return (
    <InViewContext.Consumer>
      {(isVisible) => {
        return isVisible && RenderVision();
      }}
    </InViewContext.Consumer>
  );
};

const visionString = `For myself it's straightforward; "Change the world one step at a time."
I want to create tools that improve the productivity of the average worker.
I want to optimise the most expensive commodity in this world... time.
Finally, I want to inspire and cultivate a whole generation to approach 
the world with a different perspective. There is greatness in all of us.
I want to harness it, that we can all benefit from it.`;

const RenderVision = () => {
  return (
    <div id="vision-container">
      <h2>My Vision</h2>
      <p>
        {breakdown(visionString).map((line, index) => (
          <span key={index} style={{ "--delay": 1 + index * 0.025 + "s" }}>
            {line}
          </span>
        ))}
      </p>
      <h4>
        " Insert Generic Inspiring Quote Here{" "}
        {<i className="fa fa-android fa-2x" />} "
      </h4>
    </div>
  );
};

export default Vision;
