import "../App.css";
import Nav from "./Nav.jsx";
import MainText from "./MainText.jsx";
import Projects from "./Projects.jsx";
import Roadmap from "./Roadmap.jsx";
import Information from "./Information";

import { useState, useEffect } from "react";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="page">
        <Nav />
        <MainText />
      </div>
      <Projects windowSize={windowSize} />
      <Roadmap windowSize={windowSize} />
      <Information windowSize={windowSize} />
    </>
  );
}

export default App;
