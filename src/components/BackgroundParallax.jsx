import React, { useEffect, useState } from "react";
import "../css/BackgroundParallax.css";

const BackgroundParallax = () => {
  const particleList = generateParticles(20);

  function generateParticles(number) {
    let list = [];
    for (let i = 0; i < number; i++) {
      list.push({
        direction: Math.round(Math.random()) * 2 - 1,
        depth: 0.5 + Math.random() * 0.5,
        left: ` ${Math.random() * 200 - 50}vw`,
        top: `${Math.random() * 200 - 50}vh`,
        speed: `${5 + Math.random() * 10}s`,
      });
    }
    return list;
  }
  return (
    <React.Fragment>
      {particleList.map((particle, index) => (
        <div
          key={index}
          className="particle"
          style={{
            "--speed": particle.speed,
            "--direction": particle.direction,
            "--depth": particle.depth,
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </React.Fragment>
  );
};

export default BackgroundParallax;
