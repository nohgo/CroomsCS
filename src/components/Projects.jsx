import React, { useRef, useState, useEffect } from "react";
import "../App.css/";
import {
  activeDot,
  inactiveDot,
  leftArrow,
  rightArrow,
  image1,
  image2,
  alt1,
  alt2,
} from "../assets";

function Projects() {
  const [count, setCount] = useState(1);

  return (
    <div className="page">
      <h1 id="Projects" className="page-header">
        Projects
      </h1>
      <div className="full-body">
        <div className="slides">
          <Button isLeft={true} onPress={() => setCount(count - 1)} />
          <Slides count={count} />
          <Button isLeft={false} onPress={() => setCount(count + 1)} />
        </div>
        <span className="dots">
          <SlideDot isActive={Math.abs(count) % 2 == 1} />
          <SlideDot isActive={Math.abs(count) % 2 == 0} />
        </span>
        <div className="main-text">
          <Text count={count} />
        </div>
      </div>
    </div>
  );
}

function Button({ isLeft, onPress }) {
  return (
    <button onClick={onPress} className="arrow">
      {" "}
      <img src={isLeft ? leftArrow : rightArrow} />
    </button>
  );
}

function Slides({ count }) {
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

  let slides = [image1, image2];
  let slidesAlt = [alt1, alt2];

  return (
    <img
      src={
        windowSize.width > windowSize.height
          ? slides[Math.abs(count + 1) % slides.length]
          : slidesAlt[Math.abs(count + 1) % slides.length]
      }
      className="center-image"
    />
  );
}

function SlideDot({ isActive }) {
  return <img src={isActive ? activeDot : inactiveDot} />;
}

function Text({ count }) {
  const headers = ["Portfolio", "TechFest"];
  const bodies = [
    "Developed a simple portfolio website using React for front-end, Git for version control, and GitHub Pages to host the website",
    "Going to develop a website for the annual TechFest event using React for front-end, Node.js/Express.js for back-end, MongoDB for databases, and Git for version control",
  ];
  return (
    <>
      <h1>{headers[Math.abs(count + 1) % 2]}</h1>
      <p>{bodies[Math.abs(count + 1) % 2]}</p>
    </>
  );
}

export default Projects;
