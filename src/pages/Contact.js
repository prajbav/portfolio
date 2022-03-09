import React, { useState } from "react";
import { useNav } from "../customHooks/useNav";
import "./Page.css";
import "../styles/contact.css";
import { send } from "emailjs-com";
import { init } from "@emailjs/browser";

const Response = () => {
  return <p>I will get back to you.</p>;
};

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "prajkta.bavikar@gmail.com",
    to_name: "prajakta.bavikar@gmail.com",
    message: "hey you are amazing",
    reply_to: "prajakta.bavikar@gmail.com",
  });

  const contactRef = useNav("Contact");
  init("user_Xr5EUDkhltEXrfXF4I0tp");

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_portfolio",
      "template_portfolio",
      toSend,
      "user_Xr5EUDkhltEXrfXF4I0tp"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <section ref={contactRef} id="contactContainer">
      {/* <div className="contact-background"> */}
      <div className="contact-form">
        <form>
          <h2>Lets Connect!</h2>
          <div className="form-group">
            <div className="fullname">
              <input
                className="input-firstname"
                type="text"
                required
                name="firstname"
              />
              <input
                className="input-lastname"
                type="text"
                required
                name="lastname"
              />
            </div>
            <input className="input-email" type="email" required name="email" />
            {/* </div> */}
            {/* <div className="form-group"> */}
            <textarea className="text-content" required name="message" />

            <button type="submit" className="btn-submit" onSubmit={onSubmit}>
              Send
            </button>
            {/* <div className="response">{response ? <Response /> : null} </div> */}
          </div>
        </form>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Contact;
