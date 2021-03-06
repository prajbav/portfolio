import React from "react";
import { useNav } from "../customHooks/useNav";
import cardmatch from "../rsc/card-match-mac.png";
import tweetquote from "../rsc/tweet-quote-mac.png";
import mealapp from "../rsc/meal-app-mac.png";
import "../styles/project.css";

const Projects = () => {
  const projectsRef = useNav("Projects");

  return (
    <section
      ref={projectsRef}
      id="projectsContainer"
      className="project-section"
    >
      <div className="projects-list">
        {/* <div className="separator2"> These are some of my latest projects</div> */}
        <div className="project">
          <img className="project-screen" alt="" src={cardmatch} />

          <div className="project-description">
            <span>
              A simple card flip and match memory game specially for kids
            </span>
            <div className="desription-tags">
              <a
                target="_blank"
                href="https://prajbav.github.io/memorygame/"
                rel="noreferrer"
                className="btn"
              >
                Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/prajbav/memorygame"
                rel="noreferrer"
                className="btn"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <img className="project-screen" alt="" src={tweetquote} />
          <div className="project-description">
            <span>
              App to fetch and tweet some quotes to make your day better{" "}
            </span>
            <div className="desription-tags">
              <a
                target="_blank"
                href="https://prajbav.github.io/quote-generator/"
                rel="noreferrer"
                className="btn"
              >
                Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/prajbav/quote-generator"
                rel="noreferrer"
                className="btn"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <img className="project-screen" alt="" src={mealapp} />
          <div className="project-description">
            <span>Feel free to order your meals now! </span>
            <div className="desription-tags">
              <a
                target="_blank"
                href="https://prajbav.github.io/mealapp/"
                rel="noreferrer"
                className="btn"
              >
                Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/prajbav/mealapp"
                rel="noreferrer"
                className="btn"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
