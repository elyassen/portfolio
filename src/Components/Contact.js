import React, { useState } from "react";
import "./work.css";
import { RightOutlined } from "@ant-design/icons";
import "./contact.css";

function Contact({ contact, setContact }) {
  const handleClick = () => {
    setContact(!contact);
  };
  return (
    <div id="contact" className={`${contact ? "hide-work" : ""} work`}>
      <div className="top-work">
        <RightOutlined className="close-icon-work" onClick={handleClick} />
        <span className="work-heading">Contact</span>
      </div>
      hello im contact
    </div>
  );
}

export default Contact;
