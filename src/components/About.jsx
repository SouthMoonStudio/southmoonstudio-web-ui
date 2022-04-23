import React from "react";
import { InViewContext } from "./Slide";
import ProfileImage from "../media/ProfileImage.png";
import "../css/About.css";

const About = () => {
  return (
    <InViewContext.Consumer>
      {(isVisible) => {
        return isVisible && RenderAbout();
      }}
    </InViewContext.Consumer>
  );
};

const RenderAbout = () => {
  return (
    <div id="about-container">
      <img id="profileimage" src={ProfileImage} alt="Profile Image" />
      <div id="brief">
        <h2>Who am I?</h2>
        <p>
          Hello there, I'm new to these parts. Being a former professional Chef,
          I used to cook glorious meals for foreign guests visiting Kruger
          National Park in Southern Africa. With the onset of the Pandemic in
          2020, I grabbed the opportunity to enter the world of IT. Currently I
          am a support engineer working mostly with VoIP and Networking. My
          thirst for knowledge stays unsatiated. With copious amounts of coffee
          in my system, and the ever unsratchable parts of my brain, I plan to
          become a powerhouse of a developer. My Journey has started.
        </p>
      </div>
    </div>
  );
};

export default About;
