import React from "react";
import { useNav } from "../customHooks/useNav";
import "../styles/skills.css";
import {
  FaHtml5,
  FaReact,
  FaJs,
  FaCss3,
  FaNode,
  FaDatabase,
  FaSass,
  FaGithub,
} from "react-icons/fa";

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
        <div className="core-stack ">
          {/* <div className="skills-separator1"> */}
          <span className="desc"> I worked extensively on </span>
          <div className="stack-items">
            <div className="skill-icon react-progress">
              <FaReact /> <span>React </span>
            </div>
            <div className="skill-icon js-progress">
              <FaJs />
              <span>Javascript </span>
            </div>
            <div className="skill-icon html-progress">
              <FaHtml5 />
              <span>HTML </span>
            </div>
            <div className="skill-icon css-progress">
              <FaCss3 />
              <span>CSS </span>
            </div>
            <div className="skill-icon sass-progress">
              <FaSass /> <span>Sass </span>
            </div>
            <div className="skill-icon">
              <FaGithub /> <span>Git </span>
            </div>
          </div>
        </div>

        <div className="tools-stack ">
          <span className="desc"> I worked closely with </span>
          <div className="stack-items">
            <div className="skill-icon">Redux</div>
            <div className="skill-icon">C#</div>
            <div className="skill-icon">SQL</div>
            <div className="skill-icon">Node.JS</div>
            <div className="skill-icon">Rest APIs</div>
            <div className="skill-icon">Docker</div>
          </div>
          {/* <div className="skills-separator2"></div> */}
        </div>

        <div className="skills-stack ">
          <span className="desc"> Skills </span>
          <div className="desc">
            Semantic HTML - Responsive Design - DOM manipulation - UI
            Engineering - OOP - MVC - RESTful APIs - TDD / BDD - Unit Testing -
            Refactoring - Deployment - Relational Databases - Version Control -
            Git Flow - Pair Programming - Wireframing
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
