import React from "react";
import "../App.css/";

function Portfolio() {
  return (
    <>
      <div className="pageHeaders">
        <h1 id="Portfolio">Portfolio</h1>
      </div>
      <Button isLeft={true} />
      <Button isLeft={false} />
    </>
  );
}

function Button({isLeft}) {
  return (
    <>
      <div className={isLeft ? "left" : "right"}>
        <button className="slideButton text-center">{isLeft ? "<" : ">"}</button>
      </div>
    </>
  );
}

function Slides() {
  return (
    <img></img>
  );
}

export default Portfolio;
