import React from 'react';
import TimelineTitle from './TimelineTitle.jsx';
import TimelineSubtext from './TimelineSubtext.jsx';
import '../App.css/';

function Roadmap() {
  const reactSub = ["point 1", "point 2", "point 3", "point 4"];
  return (
    <>
      <div className="page">
        <div className="pageHeaders roadmap">
          <h1>Roadmap</h1>
        </div>
        <div className="timeline">
          <TimelineTitle text="React" stage="react" />
          <TimelineSubtext text={reactSub} stage="react-sub" />
          <TimelineTitle text="Game" stage="game" />
          <TimelineSubtext text={reactSub} stage="game-sub" />
          <TimelineTitle text="Fullstack" stage="fullstack" />
          <TimelineSubtext text={reactSub} stage="fullstack-sub" />
          <img src="src/assets/timeline.svg"></img>
        </div>
      </div>
    </>
  );
}

export default Roadmap;