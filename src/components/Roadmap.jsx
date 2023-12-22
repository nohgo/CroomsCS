import React from "react";
import "../App.css/";
import { timeline } from "../assets";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Roadmap() {
  const [frontendActive, setfrontend] = useState(false);
  const [backendActive, setBackend] = useState(false);
  const [fullActive, setFull] = useState(false);

  const frontendSub = [
    "Learn HTML, CSS, JS",
    "Use react to create portfolio",
    "Learn git for version control",
  ];

  const backendSub = [
    "Continue to work on fundementals",
    "Learn Node and ExpressJS",
    "Integrate with react to make an app",
  ];

  const fullstackSub = [
    "Learn MongoDB for databases",
    "Use MERN to create a fullstack web app",
    "Deploy using webhosting site",
  ];
  return (
    <>
      <div className="page roadmap">
        <h1 id="Roadmap" className="page-header">
          Roadmap
        </h1>
        <div className="timeline">
          <div className="timeline-section">
            <TimelineTitle
              onMouseEnter={() => setfrontend(true)}
              onMouseLeave={() => setfrontend(false)}
              text="Frontend"
              stage="frontend"
            />
            <TimelineTitle
              onMouseEnter={() => setBackend(true)}
              onMouseLeave={() => setBackend(false)}
              text="Backend"
              stage="backend"
            />
            <TimelineTitle
              onMouseEnter={() => setFull(true)}
              onMouseLeave={() => setFull(false)}
              text="Fullstack"
              stage="fullstack"
            />
          </div>
          <img src={timeline} />
          <div className="timeline-section">
            <TimelineSubtext
              elementState={frontendActive}
              text={frontendSub}
              stage="frontend-sub"
            />
            <TimelineSubtext
              elementState={backendActive}
              text={backendSub}
              stage="backend-sub"
            />
            <TimelineSubtext
              elementState={fullActive}
              text={fullstackSub}
              stage="fullstack-sub"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function TimelineSubtext({ text, stage, elementState }) {
  return (
    <div className="timeline-div">
      <CSSTransition in={elementState} timeout={500} classNames="subtext">
        <>
          <ul className={stage}>
            {text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      </CSSTransition>
    </div>
  );
}

function TimelineTitle({ text, stage, onMouseEnter, onMouseLeave }) {
  return (
    <div className="timeline-div">
      <h2
        className={stage}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {text}
      </h2>
    </div>
  );
}

export default Roadmap;
