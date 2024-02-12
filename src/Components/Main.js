import React, { useEffect, useRef, useState } from "react";
import "./main.css";

function Main() {
  const [today, setToday] = useState();
  const [Month, SetMonth] = useState();
  const [bigCursor, setBigCursor] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [red, setRed] = useState(true);
  const [checkavailble, setCheck] = useState(false);
  const cursor = useRef(null);
  useEffect(() => {
    const date = new Date();
    setToday(date.getDate());

    const month = date.toLocaleString("default", { month: "short" });
    SetMonth(month);
  }, []);
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
  const handlebigcursor = () => {
    setBigCursor(true);
  };
  const bigCursorLeft = () => {
    setBigCursor(false);
  };
  return (
    <div
      className="main"
      onMouseMove={handlemouse}
      onMouseLeave={mouseLeft}
      onMouseEnter={mouseEnter}
    >
      <div className="header-main">
        <h2 className="portfolio-heading">PORTFOLIO</h2>

        <span className="astrik">*</span>
      </div>

      <div className="name-area">
        <div className="name">Hi there! I'm Yaseen</div>
        <div
          onMouseEnter={() => setBigCursor(true)}
          onMouseLeave={() => setBigCursor(false)}
          className="full-stack-heading"
        >
          <h1>Full Stack Developer</h1>
        </div>
        <div className="description">
          A passionate full-stack developer on a mission to craft exceptional
          digital experiences that make a difference. I've dedicated myself to
          mastering the art of web development and honing my skills in both
          front-end and back-end technologies.
        </div>
      </div>

      <div
        ref={cursor}
        id={`${bigCursor ? "big-cursor" : ""}`}
        className={`${showCursor ? "cursor" : ""}`}
      ></div>
    </div>
  );
}

export default Main;
