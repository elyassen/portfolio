import React, { useEffect, useRef, useState } from "react";
import "./main.css";
import { CloseOutlined, DownCircleOutlined } from "@ant-design/icons";

function Main() {
  const techArr = [
    "Redux",
    "Axios",
    "Material-UI",
    "SQL",
    "Java",
    "HTML",
    "React Router",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  const [count, setCount] = useState(0);
  const [Tech, setTech] = useState(techArr[count]);
  useEffect(() => {
    const intervel = setInterval(() => {
      setCount(count + 1);
      if (count === techArr.length - 1) {
        setCount(0);
      }
      console.log("text");
      setTech(techArr[count]);
    }, 1000);
    return () => clearInterval(intervel);
  }, [count]);
  const [bigCursor, setBigCursor] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [skill, setSkill] = useState(false);
  const html = 90;
  const css = 97;
  const js = 96;
  const react = 90;
  const redux = 90;
  const responsiveDesign = 95;
  const node = 85;
  const expressjs = 90;
  const mongoDb = 85;
  const sql = 75;
  const java = 80;
  const springBoot = 70;
  const cursor = useRef(null);
  // useEffect(() => {
  //   const date = new Date();
  //   setToday(date.getDate());

  //   const month = date.toLocaleString("default", { month: "short" });
  //   SetMonth(month);
  // }, []);
  const handlemouse = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  };
  const mouseLeft = () => {
    setShowCursor(false);
  };
  const mouseEnter = () => {
    setShowCursor(true);
  };

  const htmlLevel = {
    background: " #e0e0e0",
    height: "100%",
    width: `${html}%`,

    transition: "width 2s ease-in-out",
    transitionDelay: "1s",
  };
  const cssLevel = {
    background: "#e0e0e0",
    height: "100%",
    width: `${css}%`,

    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const jsLevel = {
    background: "#e0e0e0",
    height: "100%",
    width: `${js}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const reactLevel = {
    background: "#e0e0e0",
    height: "100%",
    width: `${react}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const reduxLevel = {
    background: "#e0e0e0",
    height: "100%",
    width: `${redux}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const responsiveLevel = {
    background: "#e0e0e0",
    height: "100%",
    width: `${responsiveDesign}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const nodeLevel = {
    background: "#e0e0e0",
    height: "100%",
    width: `${node}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const expressLevel = {
    background: "pink",
    height: "100%",
    width: `${expressjs}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const mongoDblevel = {
    background: "pink",
    height: "100%",
    width: `${mongoDb}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const sqllevel = {
    background: "pink",
    height: "100%",
    width: `${sql}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const javaLevel = {
    background: "pink",
    height: "100%",
    width: `${java}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const springlevel = {
    background: "pink",
    height: "100%",
    width: `${springBoot}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  return (
    <div
      className="main"
      onMouseMove={handlemouse}
      onMouseLeave={mouseLeft}
      onMouseEnter={mouseEnter}
    >
      <div className="header-main">
        <div className="portfolio-wrapper">
          <h2 className="portfolio-heading">Yaseen</h2>
          <h2 className="portfolio-heading-2">Ahmed</h2>
        </div>

        <span className="astrik">*</span>
      </div>

      <div className="name-area">
        <div className="name">Hi there! I'm Yaseen </div>
        <div
          onMouseEnter={() => setBigCursor(true)}
          onMouseLeave={() => setBigCursor(false)}
          className="full-stack-heading"
        >
          <h1>Full Stack Developer.</h1>
        </div>
        <div className="description">
          A passionate developer on a mission to craft exceptional digital
          experiences that make a difference.
        </div>

        <div className={`explore-skills ${!skill ? "" : "explore-out"}`}>
          <p className="explore-text">
            I've gained ample experience working with diverse technologies as a
            developer. I've built and managed multiple projects using these
            technologies, and I'm keen on continuous learning.
          </p>
          <div className="explore-resume-wrapper">
            <button onClick={() => setSkill(true)} className="explore-btn">
              Areas of Expertise
            </button>
            <a
              href={require("./static/YaseenResume.pdf")}
              target="_blank"
              download=""
            >
              <button className="explore-btn">Resume</button>
            </a>
          </div>
        </div>

        {skill && (
          <div className="skills-main">
            <div className="close" onClick={() => setSkill(false)}>
              {/* kddkkd */}
              <CloseOutlined />
              {/* <span className="close-1"></span> */}
            </div>
            <DownCircleOutlined
              className="close-ss"
              onClick={() => setSkill(false)}
            />
            <div className="skill-left">
              <div className="skill">
                <h4 className="skill-text">HTML</h4>
                <div className="skill-level">
                  <div style={htmlLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">CSS</h4>
                <div className="skill-level">
                  <div style={cssLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">Javascript</h4>
                <div className="skill-level">
                  <div style={jsLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">React Js</h4>
                <div className="skill-level">
                  <div style={reactLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">Redux</h4>
                <div className="skill-level">
                  <div style={reduxLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">Responsive Design</h4>
                <div className="skill-level">
                  <div style={responsiveLevel}></div>
                </div>
              </div>
            </div>
            <div className="skill-right">
              <div className="skill">
                <h4 className="skill-text">Node Js</h4>
                <div className="skill-level">
                  <div style={nodeLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">Express JS</h4>
                <div className="skill-level">
                  <div style={expressLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">MongoDb</h4>
                <div className="skill-level">
                  <div style={mongoDblevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">SQL</h4>
                <div className="skill-level">
                  <div style={sqllevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">Java</h4>
                <div className="skill-level">
                  <div style={javaLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">Spring Boot</h4>
                <div className="skill-level">
                  <div style={springlevel}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <div className="last-div">
          <p>Hyderabad based developer can work with following</p>

          <h1>{Tech}</h1>
        </div> */}

        {/* <div className="explore">Explore</div> */}
      </div>

      <div
        ref={cursor}
        id={`${bigCursor ? "big-cursor" : ""}`}
        className={`${showCursor ? "cursor" : ""}`}
      ></div>

      {/* <div className="background-animation"></div> */}
    </div>
  );
}

export default Main;
