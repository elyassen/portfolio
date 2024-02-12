import React, { useState } from "react";
import "./work.css";
import { RightOutlined } from "@ant-design/icons";

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
      hello im about
    </div>
  );
}

export default Work;
