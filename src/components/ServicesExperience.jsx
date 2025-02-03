import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-code",
      title: "Programmer",
      desc: "A 2-star coder on CodeChef with a 1550+ LeetCode rating, solved 400+ DSA problems across platforms like LeetCode and GFG, demonstrating expertise in algorithmic problem-solving and data structures.",
      active: false,
    },
    {
      icon: "fa-paint-brush",
      title: "Fullstack Developer",
      desc: "I'm a full-stack web developer skilled in MERN technology, having worked on 10+ projects. I focus on building both the front and back end of websites, ensuring they are easy to use and efficient for any purpose.",
      active: true,
    },
    {
      icon: "fa-chess",
      title: "Chess Player",
      desc: "I am a passionate chess player and the college chess captain. With three gold medals in college competitions and a 1700+ rapid rating on Chess.com, I excel in strategic gameplay and leadership.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
       {/*<div className="experiences" id="experiences">
          <div className="experience">
            <h3>1+</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>10+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>02</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>50+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>10</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
}

export default ServicesExperience;
