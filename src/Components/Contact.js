import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import tel from "../images2/tel.webp";
import mail from "../images2/mail.webp";
import map from "../images2/map.webp";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z4vmciu",
        "template_l8b2uud",
        form.current,
        "FXY7JBIQr-rES2SGD"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h1>Contact Us</h1>
      <section className="contact-section">
        <div className="child-1">
          <div className="contact-info">
            <p>
              Let's connect and discuss how Global VoV Trading Private Limited
              can fulfill your medical and surgical product needs. Reach out to
              us today via phone or email. We look forward to being your trusted
              partner in healthcare.
            </p>

            <div className="tel-info">
              <img src={tel} />
              <a href="tel:9999999999">+91 - 9999999999</a>
            </div>
            <div className="email-info">
              <img src={mail} />
              <a href="mailto:abc@gmail.com">demomail@gmail.com</a>
            </div>
            <div className="maps">
              <img src={map} />
              <a href="">Some Location on Maps</a>
            </div>
          </div>
        </div>
        <div className="child-2">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Full Name"
            />

            <input
              type="email"
              name="user_email"
              required
              placeholder="Email"
            />

            <input
              type="phone"
              name="user_phone"
              required
              placeholder="Phone"
            />

            <textarea
              rows="8"
              columns="7"
              name="message"
              placeholder="Message"
              required
            ></textarea>

            <button type="submit" value="Send">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
