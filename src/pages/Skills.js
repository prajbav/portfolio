import React from "react";
import { useNav } from "../customHooks/useNav";
import "../styles/skills.css";

const styles = {
  nameStyle: {
    color: "aliceblue",
  },
  inlineChild: {
    display: "inline-block",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "aliceblue",
  },
};
const devIconStyle = {
  fill: "thistle",
  width: "150px",
};
const list = [
  "a front end developer",
  "currently looking for job opportunities",
];
const Skills = () => {
  const skillsRef = useNav("Skills");

  return (
    <section ref={skillsRef} id="skillsContainer">
      {/* <div className="clipback"> </div> */}

      <div className="tech">
        <div className="skills-stack skills-separator1">
          {/* <div className="skills-separator1"> */}
          <span> I worked extensively on </span>
          <div className="skill-icon">
            <div className="react-progress"> React</div>
          </div>
          <div className="skill-icon">Javascript</div>
          <div className="skill-icon">HTML</div>
          <div className="skill-icon">CSS</div>
          <div className="skill-icon">SASS</div>
          <div className="skill-icon">backbone</div>
        </div>

        <div className="tools-stack ">
          <span> I worked closely with </span>
          <div className="skill-icon">C#</div>
          <div className="skill-icon">SQL</div>
          <div className="skill-icon">Git</div>
          <div className="skill-icon">Node.JS</div>
          <div className="skill-icon">Rest APIs</div>
          <div className="skill-icon">Docker</div>
          {/* <div className="skills-separator2"></div> */}
        </div>
      </div>
    </section>
  );
};
export default Skills;
