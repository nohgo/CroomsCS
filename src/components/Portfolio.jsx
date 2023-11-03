import React from "react";
import "../App.css/";

function Portfolio() {
  return (
    <>
      <div className="pageHeaders">
        <h1 id="Portfolio">Portfolio</h1>
      </div>
      <div className="carasol">
        <Button isLeft={true} />
        <Slides />
        <Button isLeft={false} />
      </div>
    </>
  );
}

function Button({ isLeft }) {
  return (
    <>
      <button
        className={
          isLeft
            ? "slideButton text-center left"
            : "slideButton text-center right"
        }
      >
        {isLeft ? "<" : ">"}
      </button>
    </>
  );
}

function Slides() {
  return <img src="src/assets/MIQyt1kde0t.svg" className="centerImage"></img>;
}

export default Portfolio;
