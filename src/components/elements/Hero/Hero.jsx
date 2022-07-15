import React from "react";
import Character from "./character.svg";
import Blob from "./animatedblob.svg";
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
              and so far it's going great! My little portfolio here will
              showcase some of my skills throughout the projects I've done in
              the past
            </p>
            <button className="btn-hero">Projects</button>
          </div>
          <div className="hero-character">
            <img src={Character} alt="Illustration of 'me'" />
            <img src={Blob} alt="Animated blob" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
