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
    <div className="page">
      <div id="Portfolio" className="pageHeaders">
        <h1>Portfolio</h1>
      </div>
      <div className="slides">
        <Button isLeft={true} onPress={() => setCount(count - 1)} />
        <Slides count={count} />
        <Button isLeft={false} onPress={() => setCount(count + 1)} />
      </div>
      <div className="main-text">
        <SlideDot isActive={Math.abs(count) % 2 == 1} />
        <SlideDot isActive={Math.abs(count) % 2 == 0} />
        <Text count={count} />
      </div>
    </div>
  );
}

function Button({ isLeft, onPress }) {
  return (
    <img
      onClick={onPress}
      className={isLeft ? "button left" : "button right"}
      src={isLeft ? leftArrow : rightArrow}
    />
  );
}

function Slides({ count }) {
  const slides = [image1, image2];

  return (
    <img
      src={slides[Math.abs(count + 1) % slides.length]}
      className="centerImage"
    />
  );
}

function SlideDot({ isActive }) {
  return <img className="dots" src={isActive ? activeDot : inactiveDot} />;
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
