import React, { useState } from "react";
import "./work.css";
import { RightOutlined } from "@ant-design/icons";

function Work({ work, setwork }) {
  console.log(work);
  const handleClick = () => {
    setwork(!work);
  };
  return (
    <div className={`${work ? "hide-work" : ""} work`}>
      <div className="top-work">
        <RightOutlined className="close-icon-work" onClick={handleClick} />
        <span className="work-heading">Work</span>
      </div>
      <div className="work-second">
        <div className="project-1 project">
          <div className="project-img">
            <img
              className="mobile"
              src={require("./static/mobile-ott.png")}
              alt=""
            />
            <div className="text-project">OTT PLAY</div>
          </div>
          <div className="project-info">
            OTTApp, powered by React Redux, offers seamless streaming with a
            responsive UI. Clean design and personalized recommendations ensure
            a top-tier viewing experience.
          </div>
        </div>
        <div className="project-1 project">
          <div className="project-img">
            <img
              className="mobile"
              src={require("./static/mobile-ott.png")}
              alt=""
            />
            <div className="text-project">OTT PLAY</div>
          </div>
          <div className="project-info">
            OTTApp, powered by React Redux, offers seamless streaming with a
            responsive UI. Clean design and personalized recommendations ensure
            a top-tier viewing experience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
