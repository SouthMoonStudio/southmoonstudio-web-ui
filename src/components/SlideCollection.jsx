import React from "react";
import SlideWrapper from "./SlideWrapper";
import Slide from "./Slide";
import Introduction from "./Introduction";
import About from "./About";
import Vision from "./Vision";
import Mission from "./Mission";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";

const slideData = [
  { id: "introduction", children: <Introduction /> },
  { id: "about", children: <About /> },
  { id: "vision", children: <Vision /> },
  { id: "mission", children: <Mission /> },
  { id: "skills", children: <Skills /> },
  { id: "experience", children: <Experience /> },
  { id: "contact", children: <Contact /> },
];

const SlideCollection = () => {
  return (
    <SlideWrapper>
      {slideData.map((slide, index) => (
        <Slide key={index} id={slide.id}>
          {slide.children}
        </Slide>
      ))}
    </SlideWrapper>
  );
};

export default SlideCollection;
