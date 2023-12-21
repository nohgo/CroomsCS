import React from "react";
import "../App.css/";
import { x, openButton, formLink } from "../assets";

import { useState } from "react";

function Contact() {
  return (
    <div className="page contact">
      <h1 className="pageHeaders" id="Contact">
        Contact
      </h1>
      <span>
        <h2 className="info">
          Meetings every{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>Thursday</span> in{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>1-204</span>
        </h2>
        <div className="formImgs">
          <img className="formLink" src={formLink} />
          <a
            href="https://www.google.com/url?q=https://forms.gle/DwibY5VxS4v2qSTW6&sa=D&source=editors&ust=1702928659336260&usg=AOvVaw1ZN0Mx45dXG2QdYj-cxDWJ"
            target="_blank"
          >
            <button className="openButton">
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
        className="questionButton"
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

//! set the background to be like a grey rectangle with rounded corners
// big x in the corner that closes the popup
// text with emails and stuff
// maybe a form to fill out with name, email, and question
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
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              name="email"
              type="email"
              class="form-control"
              placeholder="Enter email"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Message</label>
            <textarea
              name="message"
              type="message"
              rows="5"
              class="form-control"
              placeholder="Message"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;