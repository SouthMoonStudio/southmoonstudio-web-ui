import React from "react";
import { InViewContext } from "./Slide";
import axiosicon from "../media/AxiosIcon.svg";
import csharpicon from "../media/CSharpIcon.svg";
import giticon from "../media/GitIcon.svg";
import html5icon from "../media/Html5Icon.svg";
import javaicon from "../media/JavaIcon.svg";
import javascripticon from "../media/JavascriptIcon.svg";
import mysqlicon from "../media/MySQLIcon.svg";
import reacticon from "../media/ReactIcon.svg";
import "../css/Skills.css";

const Skills = () => {
  return (
    <InViewContext.Consumer>
      {(isVisible) => {
        return isVisible && RenderSkills();
      }}
    </InViewContext.Consumer>
  );
};

const skillList = [
  { src: axiosicon, label: "Axios" },
  { src: csharpicon, label: "C#(Sharp)" },
  { src: giticon, label: "Git" },
  { src: html5icon, label: "Html5" },
  { src: javaicon, label: "Java" },
  { src: javascripticon, label: "Javascript" },
  { src: mysqlicon, label: "MySQL" },
  { src: reacticon, label: "ReactJS" },
];

const RenderSkills = () => {
  return (
    <React.Fragment>
      <h1 id="skill-header">My Skills</h1>
      <div id="skills-container">
        {skillList.map((skill, index) => (
          <div
            key={index}
            className="skill-item-parent"
            style={{
              "--index": index,
            }}
          >
            <div className="skill-item skill-item-transition">
              <img src={skill.src} alt={skill.label} />
              <h3>{skill.label}</h3>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Skills;
