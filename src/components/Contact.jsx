import React from "react";
import "../App.css/";
import { useState } from "react";

function Contact() {
  return (
    <div id="Contact" className="page contact">
      <div className="pageHeaders">
        <h1>Contact</h1>
      </div>
      <div className="info">
        <span>
          <h2>
            Meetings every{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>Thursday</span>{" "}
            in <span style={{ color: "red", fontWeight: "bold" }}>1-204</span>
          </h2>
          <div className="formImgs">
            <img className="formLink" src="src/assets/formLink.svg" />
            <a
              href="https://www.google.com/url?q=https://forms.gle/DwibY5VxS4v2qSTW6&sa=D&source=editors&ust=1702928659336260&usg=AOvVaw1ZN0Mx45dXG2QdYj-cxDWJ"
              target="_blank"
            >
              <button className="openButton">
                <img src="src/assets/openButton.svg" />
              </button>
            </a>
          </div>
        </span>
        <Questions />
      </div>
    </div>
  );
}

function Questions() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="contactInfo">
      <button
        onClick={() => {
          setIsPopupOpen(true);
        }}
      >
        Have a Question?
      </button>
      {isPopupOpen && <Popup />}
    </div>
  );
}

function Popup({ setIsPopupOpen }) {
  return <div>Contact</div>;
}

export default Contact;
