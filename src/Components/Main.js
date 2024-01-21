import React, { useEffect, useRef, useState } from "react";
import "./main.css";

function Main() {
  const [today, setToday] = useState();
  const [Month, SetMonth] = useState();
  const [bigCursor, setBigCursor] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
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
      <div className="hero">
        <div className="name-area">
          <h1 onMouseLeave={bigCursorLeft} onMouseEnter={handlebigcursor}>
            yaseen Ahmed
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quas
            unde reprehenderit inventore labore, sequi esse itaque quo at, rem
            quisquam qui non.
          </p>
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
