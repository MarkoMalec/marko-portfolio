import React, { useEffect } from "react";
import Hero from "../elements/Hero/Hero";
import SkillShowcase from "../elements/SkillShowcase/SkillShowcase";
import ProjectSection from "../elements/ProjectSection/ProjectSection";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="home-wrapper">
          <SkillShowcase />
          <ProjectSection />
      </div>
    </>
  );
};

export default Home;
