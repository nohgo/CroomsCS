import React from "react";
import "../App.css/";
import {
  activeDot,
  inactiveDot,
  leftArrow,
  rightArrow,
  image1,
  image2,
} from "../assets";
import { useState } from "react";

function Portfolio() {
  const [count, setCount] = useState(1);

  return (
    //! I wantt to have space between the slides and the text but group buttons with slides
    <div className="page">
      <h1 id="Portfolio" className="page-header">
        Portfolio
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
  const slides = [image1, image2];

  return (
    <img
      src={slides[Math.abs(count + 1) % slides.length]}
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

export default Portfolio;
