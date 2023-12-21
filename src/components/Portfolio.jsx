import React from "react";
import "../App.css/";
import { useState } from "react";

function Portfolio() {
  const [count, setCount] = useState(1);
  const SLIDE_COUNT = 2; //! remember to update headers, bodies, and slides
  return (
    <div className="page">
      <h1 id="Portfolio" className="pageHeaders">
        Portfolio
      </h1>
      <div className="slides">
        <Button isLeft={true} onPress={() => setCount(count - 1)} />
        <Slides count={count} />
        <Button isLeft={false} onPress={() => setCount(count + 1)} />
      </div>
      <div className="main-text">
        <SlideDot isActive={Math.abs(count) % SLIDE_COUNT == 1} />
        <SlideDot isActive={Math.abs(count) % SLIDE_COUNT == 0} />
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
      src={isLeft ? "src/assets/left-arrow.svg" : "src/assets/right-arrow.svg"}
    ></img>
  );
}

function Slides({ count }) {
  const slides = ["src/assets/image1.svg", "src/assets/image2.svg"];

  return (
<<<<<<< Updated upstream
    <img src={slides[Math.abs(count + 1) % 2]} className="centerImage"></img>
=======
    <img
      src={slides[Math.abs(count + 1) % slides.length]}
      className="centerImage"
    />
>>>>>>> Stashed changes
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
      <h1>{headers[Math.abs(count + 1) % headers.length]}</h1>
      <p>{bodies[Math.abs(count + 1) % bodies.length]}</p>
    </>
  );
}

export default Portfolio;
