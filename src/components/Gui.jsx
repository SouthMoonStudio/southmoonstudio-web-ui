import React from "react";
import "../css/Gui.css";

const iconData = [
  {
    class: "fa fa-github fa-2x",
    label: "Github",
    ref: "https://github.com/SouthMoonStudio/southmoonstudio-web-ui",
  },
  {
    class: "fa fa-facebook fa-2x",
    label: "Facebook",
    ref: "https://facebook.com/john.grobbelaar",
  },
  {
    class: "fa fa-twitter fa-2x",
    label: "Twitter",
    ref: "https://twitter.com/squareworx",
  },
  {
    class: "fa fa-linkedin fa-2x",
    label: "Linkedin",
    ref: "https://www.linkedin.com/in/john-grobbelaar-6656a7237/",
  },
];

const handleClick = (reference) => {
  window.open(reference);
};

const Gui = () => {
  return (
    <React.Fragment>
      <div id="social-media">
        {iconData.map((icon, index) => (
          <div key={index} onClick={() => handleClick(icon.ref)}>
            <i className={icon.class} />
            <p>{icon.label}</p>
          </div>
        ))}
      </div>
      <div id="scroll-indicator">
        <h3>Scroll</h3>
        <i className="fa fa-chevron-down fa-1x" />
      </div>
    </React.Fragment>
  );
};

export default Gui;
