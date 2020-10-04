import React from "react";

import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fbufa5y",
        "template_iqg563y",
        e.target,
        "user_pT2qtagWA5OGDzxoBkYzS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div
      id="contact"
      className="contact container flexbox-container flexbox-column"
    >
      <h3>Contact Me</h3>
      <br></br>

      <form
        className="contact-form flexbox-container flexbox-column"
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input placeholder="Your Name" type="text" name="name" />

        <label>Subject</label>
        <input placeholder="Subject" type="text" name="subject" />

        <label>Email</label>
        <input placeholder="Your Email" type="email" name="email" />

        <label>Message</label>
        <textarea placeholder="Your Message" name="message" />
        <br></br>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
