import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-wrapper">

          <form className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." rows="5" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          <div className="contact-details">
            <h3>Let's Connect</h3>
            <p>You can also reach me through:</p>

            <ul>
              <li>Email: <span>sudheeshmadathil@gmail.com</span></li>
              <li>Phone: <span>+91 9746693668</span></li>
              <li>Location: <span>Kerala, India</span></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
