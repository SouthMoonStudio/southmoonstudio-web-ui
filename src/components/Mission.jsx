import React from "react";
import { InViewContext } from "./Slide";
import breakdown from "../util/breakdown";
import "../css/Mission.css";

const Mission = () => {
  return (
    <InViewContext.Consumer>
      {(isVisible) => {
        return isVisible && RenderMission();
      }}
    </InViewContext.Consumer>
  );
};

const missionString = `I need to establish a proper foothold as a developer and create meaningful relationships with various experts in different tech stacks.
I want to collaborate and hone my skills, learn as much as I can along the way. Every day I have to either improve on something I already know, or learn
something new. My mission is to Jam 10 year's worth of Experience and Wisdom in my Brain within 5 Years.The next generation is not getting any younger.
I have to be ready for the day when I have to pass on the torch.`;

const RenderMission = () => {
  return (
    <div id="mission-container">
      <h2>My Mission</h2>
      <p>
        {breakdown(missionString).map((line, index) => (
          <span
            key={index}
            style={{
              "--delay":
                1 +
                breakdown(missionString).length * 0.025 -
                index * 0.025 +
                "s",
            }}
          >
            {line}
          </span>
        ))}
      </p>
      <h4>" Knowledge Paired with Innovation will Shape Tommorrow "</h4>
    </div>
  );
};

export default Mission;
