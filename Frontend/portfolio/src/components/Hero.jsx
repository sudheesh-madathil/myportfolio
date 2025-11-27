import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Hello, I'm <span className="highlight">Sudheesh</span></h1>
          <h2>Frontend Developer • MERN Stack</h2>
          <p>
            I build modern, responsive and clean UI web applications.  
            Passionate about React, Node.js, and creating smooth user experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="../../src/assets/developer.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
