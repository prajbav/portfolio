import React from "react";
import { useNav } from "../customHooks/useNav";
import "./Page.css";
import "../styles/About.css";
import photo from "../rsc/brooklyn_praji.jpeg";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const styles = {
  inlineChild: {
    display: "inline-block",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
const About = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const aboutRef = useNav("About");

  return (
    <section ref={aboutRef} id="aboutContainer">
      <div className="info">
        <img className="about-photo" alt="my" src={photo} />

        <div className="about-details" style={styles.nameStyle}>
          <p>Hello, I am Prajakta Bavikar from New Jersey.</p>
          <p>
            I am a front end developer, focuesd on building functional and
            interactive front end components. I like using React and
            Javascript,and I also have experience of back end technologies.
          </p>
          <p>I keep doing side projects to keep learning new skills. </p>
        </div>
      </div>
      <div className="social">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/prajaktabavikar/"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/prajbav" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="mailto:prajakta.bavikar@gmail.com"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default About;
