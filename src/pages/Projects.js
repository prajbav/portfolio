import React from "react";
import { useNav } from "../customHooks/useNav";
import cardmatch from "../rsc/card-match.png";
import tweetquote from "../rsc/tweet-quote.png";
import mealapp from "../rsc/meal-app.png";
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
            <div className="technologies-used"> </div>
          </div>
        </div>

        <div className="project">
          <img className="project-screen" alt="" src={tweetquote} />
          <div className="project-description">
            <span>
              App to fetch and tweet some quotes to make your day better{" "}
            </span>
            <div className="technologies-used"> </div>
          </div>
        </div>

        <div className="project">
          <img className="project-screen" alt="" src={mealapp} />
          <div className="project-description">
            <span>Feel free to order your meals now! </span>
            <div className="technologies-used"> </div>
          </div>
        </div>
        <div className="project">
          <img className="project-screen" alt="" src={cardmatch} />

          <div className="project-description">
            <span>Card Match </span>
            <div className="technologies-used"> </div>
          </div>
        </div>
        <div className="project">
          <img className="project-screen" alt="" src={tweetquote} />
          <div className="project-description">
            <span>Tweet Quotes </span>
            <div className="technologies-used"> </div>
          </div>
        </div>
        <div className="project">
          <img className="project-screen" alt="" src={mealapp} />
          <div className="project-description">
            <span>Coming soon </span>
            <div className="technologies-used"> </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
