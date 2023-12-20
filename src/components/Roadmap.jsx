import React from "react";
import "../App.css/";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Roadmap() {
  const [reactActive, setReact] = useState(false);
  const [gameActive, setGame] = useState(false);
  const [fullActive, setFull] = useState(false);

  const reactSub = [
    "Learn HTML, CSS, JS",
    "Use React to create portfolio",
    "Learn git for version control",
  ];

  const gameSub = [
    "Continue to work with fundemental languages",
    "Learn Node and expressJS",
    "Integrate with react to create a full browser based game",
  ];

  const fullstackSub = [
    "Learn MongoDB for database functionality",
    "Use MERN to create a fullstack web app",
    "Deploy app using webhosting site",
  ];
  return (
    <>
      <div className="page">
        <div id="Roadmap" className="pageHeaders roadmap">
          <h1>Roadmap</h1>
        </div>
        <div className="timeline">
          <TimelineTitle
            onMouseEnter={() => setReact(true)}
            onMouseLeave={() => setReact(false)}
            text="React"
            stage="react"
          />
          <TimelineSubtext
            elementState={reactActive}
            text={reactSub}
            stage="react-sub"
          />
          <TimelineTitle
            onMouseEnter={() => setGame(true)}
            onMouseLeave={() => setGame(false)}
            text="Game"
            stage="game"
          />
          <TimelineSubtext
            elementState={gameActive}
            text={gameSub}
            stage="game-sub"
          />
          <TimelineTitle
            onMouseEnter={() => setFull(true)}
            onMouseLeave={() => setFull(false)}
            text="Fullstack"
            stage="fullstack"
          />
          <TimelineSubtext
            elementState={fullActive}
            text={fullstackSub}
            stage="fullstack-sub"
          />
          <img src="public/timeline.svg"></img>
        </div>
      </div>
    </>
  );
}

function TimelineSubtext({ text, stage, elementState }) {
  return (
    <CSSTransition in={elementState} timeout={500} classNames="subtext">
      <>
        <ul className={stage}>
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    </CSSTransition>
  );
}

function TimelineTitle({ text, stage, onMouseEnter, onMouseLeave }) {
  return (
    <h2
      className={stage}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text}
    </h2>
  );
}

export default Roadmap;
