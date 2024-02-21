import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Main from "./Components/Main";
import Loading from "./Components/Loading";
import { BrowserRouter, Router } from "react-router-dom";

function App() {
  const [loading, setLoadig] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadig(false);
    }, 1800);
  }, []);
  return (
    <BrowserRouter>
      <>
        {loading ? (
          <Loading />
        ) : (
          <div className="App">
            <Main />
            <Header />
          </div>
        )}
      </>
    </BrowserRouter>
  );
}
export default App;
