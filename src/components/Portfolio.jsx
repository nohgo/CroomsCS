import React from "react";
import "../App.css/";
import { useState } from "react";

function Portfolio() {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className="pageHeaders">
        <h1 id="Portfolio">Portfolio</h1>
      </div>
      <div className="carasol">
        <Button
          isLeft={true}
          onPress={() => count > 1 && setCount(count - 1)}
        />
        <Slides count={count} />
        <Button
          isLeft={false}
          onPress={() => count < 2 && setCount(count + 1)}
        />
      </div>
    </>
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

function Slides({ count }) {
  return (
    <>
      {count == 1 && (
        <img src="src/assets/MIQyt1kde0t.svg" className="centerImage"></img>
      )}
      {count == 2 && (
        <img src="src/assets/react.svg" className="centerImage"></img>
      )}
    </>
  );
}

export default Portfolio;
