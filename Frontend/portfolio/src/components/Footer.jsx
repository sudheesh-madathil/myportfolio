import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <h3 className="footer-name">Developer</h3>

        <p className="footer-tagline">
          MERN Stack Developer • React Specialist • UI Builder
        </p>

        <div className="footer-socials">
          <a href="https://github.com/sudheesh-madathil" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sudheesh-madathil-22b576259" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:sudheeshmadathil00@gmail.com">Email</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} sudheesh — All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
