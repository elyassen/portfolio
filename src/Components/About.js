import React, { useState } from "react";
import "./work.css";
import { RightOutlined } from "@ant-design/icons";
import "./about.css";

function Work({ about, setAbout }) {
  const handleClick = () => {
    setAbout(!about);
  };
  return (
    <div id="about" className={`${about ? "hide-work" : ""} work`}>
      <div className="top-work">
        <RightOutlined className="close-icon-work" onClick={handleClick} />
        <span className="work-heading">About</span>
      </div>
      <div className="about-second">
        <p className="about-first-section">
          As a recent <span className="spna-summary">computer science</span>{" "}
          graduate currently pursuing a{" "}
          <span className="spna-summary">
            Master's in Computer Applications
          </span>
          , I bring a passion for technology and a strong foundation in computer
          science principles. With a solid academic background and hands-on
          experience in full-stack development, I am equipped with the skills
          and knowledge to tackle complex challenges in the field.
        </p>

        <div className="education">
          <div className="education-1">
            <div className="edu-first">
              <h1 className="edu-text">
                University Post Graduate College, Secundrabad
              </h1>
              <h1 className="edu-text">MCA</h1>
              <p className="edu-text-last">Expected to graadutate in 2025</p>
            </div>
            <div className="edu-last">
              <h1 className="edu-text">Siddhartha Junior College</h1>
              <h1 className="edu-text">Intermediate</h1>
              <p className="edu-text-last">70%</p>
            </div>
          </div>
          <div className="line">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="education-2">
            <div className="edu-middle">
              <h1 className="edu-text">
                Sree Anantha Padmanabha Arts, Science And Commerce College
              </h1>
              <h1 className="edu-text">Bachelors</h1>
              <p className="edu-text-last">CGPA(7.62)</p>
            </div>
          </div>
          <h1 className="edu-back">Education</h1>
        </div>
        <p className="about-first-section-2">
          Throughout my academic journey and professional experiences, I have
          honed my abilities in both frontend and backend development,
          demonstrating proficiency in a wide range of technologies and
          frameworks. From crafting dynamic and user-friendly interfaces using
          HTML, CSS, and JavaScript, to building scalable server-side solutions
          with frameworks like Node.js, Express.js, and MongoDB, I have gained
          valuable insights into the intricacies of full-stack development.
        </p>
      </div>
    </div>
  );
}

export default Work;
