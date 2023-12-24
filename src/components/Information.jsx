import React, { useState } from "react";
import "../App.css/";
import { x, openButton, formLink, formLinkAlt } from "../assets";

function Information({ windowSize }) {
  return (
    <div className="page information">
      <h1 className="page-header" id="Information">
        Information
      </h1>
      <span className="info-items">
        <h2 className="info">
          Meetings every{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>Thursday</span> in{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>1-204</span>
        </h2>
        <div className="form-images">
          <img
            className="form-link"
            src={windowSize.width > windowSize.height ? formLink : formLinkAlt}
          />
          <a
            href="https://www.google.com/url?q=https://forms.gle/DwibY5VxS4v2qSTW6&sa=D&source=editors&ust=1702928659336260&usg=AOvVaw1ZN0Mx45dXG2QdYj-cxDWJ"
            target="_blank"
          >
            <button className="open-button">
              <img src={openButton} />
            </button>
          </a>
        </div>
      </span>
      <Questions />
    </div>
  );
}

function Questions() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <button
        className="question-button"
        onClick={() => {
          setIsPopupOpen(true);
        }}
      >
        Have a Question?
      </button>
      {isPopupOpen && <Popup setIsPopupOpen={setIsPopupOpen} />}
    </>
  );
}

function Popup({ setIsPopupOpen }) {
  return (
    <>
      <div className="blur"></div>
      <div className="popup">
        <h1>Contact us</h1>
        <button
          onClick={() => {
            setIsPopupOpen(false);
          }}
          className="x"
        >
          <img src={x} />
        </button>
        <form action="https://formsubmit.co/nohgoering@gmail.com" method="POST">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Message</label>
            <textarea
              name="message"
              type="message"
              rows="9"
              className="form-control"
              placeholder="Message"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Information;
