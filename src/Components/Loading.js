import React from "react";
import "./loading.css";

function Loading() {
  return (
    <div className="loading">
      <p>loading...</p>
      <div className="progress">
        <div className="fill"></div>
      </div>
    </div>
  );
}

export default Loading;
