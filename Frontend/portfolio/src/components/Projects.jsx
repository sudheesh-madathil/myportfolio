import React, { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio built with React and custom CSS.",
      img: "/1234.jpg",
      link: "https://github.com/sudheesh-madathil",
    },
    {
      title: "EMI-calculator",
      desc: "Full-stack CRUD project using MongoDB, Express, React, Node.js.",
      img: "/emi.jpg",
      link: "https://github.com/sudheesh-madathil",
    },
    {
      title: "E-Commerce",
      desc: "Fully responsive e-commerce interface with filtering & cart UI.",
      img: "/1122.jpg",
      link: "https://github.com/sudheesh-madathil",
    },




    {
      title: "EMPLOYEE-Management",
      desc: "A modern personal portfolio built with React and custom CSS.",
      img: "/employe.jpg",
      link: "https://github.com/sudheesh-madathil",
    },
    {
      title: "HOTEL-Booking",
      desc: "Full-stack CRUD project using MongoDB, Express, React, Node.js.",
      img: "/hotelbooking.jpg",
      link: "https://github.com/sudheesh-madathil",
    },
    {
      title: "JOB-Portal",
      desc: "Fully responsive e-commerce interface with filtering & cart UI.",
      img: "/job-11.jpg",
      link: "https://github.com/sudheesh-madathil",
    },

  ];

  
  const [startIndex, setStartIndex] = useState(0);

  const showNext = () => {
    setStartIndex((prev) => (prev + 1) % projects.length);
  };

  const showPrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const visibleProjects = [
    projects[startIndex],
    projects[(startIndex + 1) % projects.length],
    projects[(startIndex + 2) % projects.length],
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    // ---- 3D Tilt.js ----
    VanillaTilt.init(cards, {
      max: 20,
      speed: 400,
      scale: 1.05,
      glare: true,
      "max-glare": 0.3,
    });

    // ---- Parallax Background ----
    cards.forEach((card) => {
      const bg = card.querySelector(".parallax-bg");

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let moveX = (x - rect.width / 2) / 25;
        let moveY = (y - rect.height / 2) / 25;

        bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });

      card.addEventListener("mouseleave", () => {
        bg.style.transform = `translate(0px, 0px)`;
      });
    });

    // ---- Reveal Animation ----
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="projects section" id="projects">
      <div className="container">

        <h2 className="section-title">Projects</h2>
    
         {/* Arrows */}
        <button className="arrow left" onClick={showPrev}>
          ❮
        </button>
        <button className="arrow right" onClick={showNext}>
          ❯
        </button>
        <div className="projects-grid">

          
          {visibleProjects.map((project, index) => (
            <div className="project-card" key={index}>
              
              {/* Floating parallax layers */}
              {/* <div className="parallax-bg">
                <span className="circle"></span>
                <span className="triangle"></span>
                <span className="square"></span>
              </div> */}

              <img src={project.img} alt={project.title} />

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <a
                  href={project.link}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
