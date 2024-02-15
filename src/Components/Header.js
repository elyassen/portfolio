import React, { useState } from "react";
import "./header.css";
import {
  CloseOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

function Header() {
  const [about, setAbout] = useState(false);
  const [work, setWork] = useState(false);
  const [contact, setContact] = useState(false);
  const [navIcon, setNavIcon] = useState(true);
  const [navCross, setNavCross] = useState(false);

  const handlework = () => {
    setWork(true);
    setAbout(false);
    setContact(false);
  };

  const handleAbout = () => {
    setAbout(true);
    setContact(false);
    setWork(false);
  };
  const handleContact = () => {
    setAbout(false);
    setContact(true);
    setWork(false);
  };

  return (
    <div className="header">
      <div className="wrapper-header">
        <div className="top-header">
          <span
            id="span"
            className={`${work ? "active-work" : ""}`}
            onClick={handlework}
          >
            Work
          </span>
          <span
            id="span"
            className={`${about ? "active-work" : ""}`}
            onClick={handleAbout}
          >
            About
          </span>
          <span id="span" onClick={handleContact}>
            Contact
          </span>
        </div>
        <div className="bottom-section">
          <GithubOutlined id="span" />
          <LinkedinOutlined id="span" />
        </div>
      </div>
      {/* <div onClick={() => setNavIcon(!navIcon)} className="menu">
        {navIcon ? <MenuOutlined id="icons" /> : <CloseOutlined id="icons" />}
      </div> */}
      <div
        className={navCross ? "nav-twoline" : "nav-cross-div"}
        onClick={() => {
          setNavIcon(!navIcon);
          setNavCross(!navCross);
        }}
      >
        <div className={`${!navCross ? "line-1" : "line-1-cross"}`}></div>
        <div className={`${!navCross ? "line-2-1" : "line-2-1-cross"}`}></div>

        <div className={`${!navCross ? "line-2" : "line-2-cross"}`}></div>
      </div>
      {!navIcon && (
        <div className="sidebar-nav">
          <div className="small-wrapper-header">
            <span className="span-tag-moblie work-span" onClick={handlework}>
              Work
            </span>
            <span className="span-tag-moblie about-span" onClick={handleAbout}>
              About
            </span>
            <span
              className="span-tag-moblie contact-span"
              onClick={handleContact}
            >
              Contact
            </span>
            <div className="small-bottom">
              <GithubOutlined />
              <LinkedinOutlined />
            </div>
            <div className="available">
              <div className="green"></div>
              AVAILABLE FOR FREELANCE WORK
            </div>
          </div>
        </div>
      )}
      {work && (
        <div className="work-div">
          <Work work={work} setwork={setWork} />
        </div>
      )}
      {about && (
        <div className="about-div">
          <About about={about} setAbout={setAbout} />
        </div>
      )}
      {contact && (
        <div>
          <Contact contact={contact} setContact={setContact} />
        </div>
      )}
    </div>
  );
}

export default Header;
