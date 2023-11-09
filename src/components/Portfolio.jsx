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
          <Text count={count} />
        </div>
      </div>
    </div>
  );
}

function Button({ isLeft, onPress }) {
  return (
    <button
      onClick={onPress}
      className={
        isLeft
          ? "slideButton text-center left"
          : "slideButton text-center right"
      }
    >
      {isLeft ? "<" : ">"}
    </button>
  );
}
//! MAKES THE SCREEN JUMP TO THE MIDDLE OF THE PAGE ?
function Slides({ count }) {
  const slides = ["src/assets/MIQyt1kde0t.svg", "src/assets/react.svg"];

  return <img src={slides[(count + 1) % 2]} className="centerImage"></img>;
}

function Text({ count }) {
  const headers = ["Hello", "How are you doing"];
  const bodies = ["THIS IS EXAMPLE TEST", "THIS IS ALSO EXAMPLE TEXT"];
  return (
    <>
      <h1>{headers[(count + 1) % 2]}</h1>
      <p>{bodies[(count + 1) % 2]}</p>
    </>
  );
}

export default Portfolio;
