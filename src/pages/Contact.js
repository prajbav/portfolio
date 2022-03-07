import React from "react";
import { useNav } from "../customHooks/useNav";
import "./Page.css";
import "../styles/contact.css";
const Response = () => {
  return <p>I will get back to you.</p>;
};

const Contact = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const contactRef = useNav("Contact");

  return (
    <section ref={contactRef} id="contactContainer">
      {/* <div className="contact-background"> */}
      <div className="contact-form">
        <form action="">
          <div className="form-group">
            <h2>Lets Connect!</h2>
            <span>Full Name</span>
            <br />
            <input
              className="input-fullname"
              type="text"
              required
              name="fullname"
            />
            <br />
            <span>Email</span>
            <br />
            <input className="input-email" type="text" required name="email" />
            <br />
          </div>
          <div className="form-group">
            <span>Message</span>
            <br />
            <textarea className="" required name="message" />
            <br />
            <button type="submit" />
            {/* <div className="response">{response ? <Response /> : null} </div> */}
          </div>
        </form>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Contact;
