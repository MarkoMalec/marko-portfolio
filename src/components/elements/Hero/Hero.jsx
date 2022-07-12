import React from "react";
import Character from "./character.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="container-main">
        <div className="hero-inner-flex">
          <div className="hero-title">
            <h1>
              Hi, I'm <span>Marko</span>
            </h1>
            <p>
              Figuring out what I'm doing exactly is a big part of my journey
              and so far it's going great!
            </p>
            <p>
              My little portfolio here will showcase some of my skills
              throughout the projects I've done in the past
            </p>
            <button>Projects</button>
          </div>
          <div className="hero-character">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFD77E"
                d="M34,-68.3C36.1,-57.7,24.4,-32.5,22.9,-18.7C21.4,-4.9,30,-2.4,30.8,0.4C31.5,3.3,24.4,6.6,25.9,20.5C27.5,34.3,37.7,58.7,34.8,61C32,63.4,16,43.8,0.9,42.3C-14.2,40.7,-28.4,57.3,-42.8,61.5C-57.2,65.8,-71.7,57.8,-72.6,45.5C-73.4,33.2,-60.5,16.6,-59.8,0.4C-59.1,-15.8,-70.6,-31.6,-64,-33.9C-57.3,-36.2,-32.7,-25,-19,-29C-5.3,-33,-2.7,-52,6.6,-63.6C15.9,-75.1,31.9,-79,34,-68.3Z"
                transform="translate(100 100)"
              />
            </svg>
            <img src={Character} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
