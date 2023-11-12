import React from "react";
import "../App.css/";
import { useState } from "react";

function Portfolio() {
  const [count, setCount] = useState(1);

  return (
    <div className="page">
      <div className="pageHeaders">
        <h1 id="Portfolio">Portfolio</h1>
      </div>
      <div className="carasol">
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
    </div>
  );
}

function Button({ isLeft, onPress }) {
  return (
    <img
      onClick={onPress}
      className={
        isLeft
          ? "button left"
          : "button right"
      }
      src={isLeft ? "src/assets/left-arrow.svg" : "src/assets/right-arrow.svg"}
    >
    </img>
  );
}
//! MAKES THE SCREEN JUMP TO THE MIDDLE OF THE PAGE ?
function Slides({ count }) {
  const slides = ["src/assets/image1.svg", "src/assets/image2.svg"];

  return (
    <img src={slides[Math.abs(count + 1) % 2]} className="centerImage"></img>
  );
}

function SlideDot({ isActive }) {
  return (
    <img
      className="dots"
      src={isActive ? "src/assets/activeDot.svg" : "src/assets/inactiveDot.svg"}
    ></img>
  );
}

function Text({ count }) {
  const headers = ["Hello", "How are you doing"];
  const bodies = ["THIS IS EXAMPLE TEST", "THIS IS ALSO EXAMPLE TEXT"];
  return (
    <>
      <h1>{headers[Math.abs(count + 1) % 2]}</h1>
      <p>{bodies[Math.abs(count + 1) % 2]}</p>
    </>
  );
}

export default Portfolio;
