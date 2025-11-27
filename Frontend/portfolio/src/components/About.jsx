import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-img">
            <img
              src="/dev1.jpg"
              alt="About Me"
            />
          </div>

          <div className="about-text">
            <h3>I'm a MERN Stack Developer</h3>
            <p>
              I am passionate about building high-quality, responsive, and user-friendly websites.
              I love working with JavaScript, React, and Node.js and enjoy turning ideas into real applications.
            </p>

            <p>
              My focus is writing clean, maintainable code and building applications that solve real problems.
            </p>

            <a href="#contact" className="btn btn-primary">Hire Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
