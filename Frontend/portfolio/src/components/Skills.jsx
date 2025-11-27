import React, { useEffect } from "react";
import "./Skills.css";
 import VanillaTilt from "vanilla-tilt";
const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Git & GitHub",
    "Tailwind",
    "Responsive Design",
  ];

 

useEffect(() => {
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
  });
}, []);


  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" data-tilt>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
