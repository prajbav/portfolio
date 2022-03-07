import React from "react";
import { About, Contact, Skills, Projects } from "./";

const Main = () => (
  <main>
    {/* <Home /> */}
    <About />
    <div className="sep"> </div>
    {/* <div className="separator1"> </div> */}
    <Skills />
    <div className="sep"> </div>
    {/* <div className="separator2"> </div> */}
    <Projects />
    <div className="sep"> </div>
    {/* <div className="separator1"> </div> */}
    <Contact />
  </main>
);

export default Main;
