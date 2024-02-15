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
      <div className="work-second">hello im work div</div>
    </div>
  );
}

export default Work;
