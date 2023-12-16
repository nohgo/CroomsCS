import React from "react";
import "../App.css";

function Nav() {
  return (
    <div className="navbar">
      <Logo />
      <NavButtons />
    </div>
  );
}

function NavButtons() {
  return (
    <div className="nav-buttons">
      <a href="#Portfolio">Portfolio</a> <a href="#Roadmap">Roadmap</a>{" "}
      <a href="#">Contact</a>{" "}
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="151"
      height="38"
      viewBox="0 0 151 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo"
    >
      <path
        d="M12.544 28.84V22.344H17.304V28.56C17.304 34.776 14.336 37.856 8.736 37.856C2.968 37.856 0 34.496 0 28.448V9.296C0 3.08 2.968 0 8.568 0C14.224 0 17.304 3.08 17.304 9.24V13.664H12.544V9.24C12.544 6.328 11.256 4.704 8.736 4.704C6.272 4.704 4.984 6.272 4.984 9.184V28.84C4.984 31.696 6.104 33.208 8.736 33.208C11.256 33.208 12.544 31.808 12.544 28.84Z"
        fill="white"
      />
      <path
        d="M36.6398 9.688V28.56C36.6398 34.776 33.5037 37.856 27.9037 37.856C22.1357 37.856 18.9998 34.496 18.9998 28.448V9.576C18.9998 3.528 22.2477 0 27.8477 0C33.4478 0 36.6398 3.64 36.6398 9.688ZM31.7118 28.84V9.24C31.7118 6.328 30.3118 4.704 27.7917 4.704C25.3838 4.704 23.9837 6.272 23.9837 9.184V28.784C23.9837 31.696 25.3277 33.208 27.8477 33.208C30.3118 33.208 31.7118 31.808 31.7118 28.84Z"
        fill="white"
      />
      <path
        d="M64.6568 37.52H60.1768V16.968C60.1768 14.672 60.2328 11.984 60.3448 8.904H60.1208L53.8488 37.52H49.2008L42.9288 8.904H42.7048C42.8168 11.984 42.8728 14.672 42.8728 16.968V37.52H38.3928V0.335999H46.0088L51.4968 27.608H51.7208L57.2088 0.335999H64.6568V37.52Z"
        fill="white"
      />
      <path
        d="M76.9453 22.736H71.6253V37.52H66.5853V0.335999H76.9453C82.0973 0.335999 84.0013 3.08 84.0013 7.784V15.288C84.0013 19.992 82.0973 22.736 76.9453 22.736ZM71.6253 4.872V18.368H75.9373C78.2893 18.368 79.2413 16.968 79.2413 14.504V8.344C79.2413 6.104 78.2893 4.872 75.9373 4.872H71.6253Z"
        fill="white"
      />
      <path
        d="M99.9836 0.335999H104.912L97.9676 18.2L105.136 37.52H99.9836L94.9996 23.632H94.7756L89.7356 37.52H84.6956L91.8636 18.704L84.9196 0.335999H89.9596L94.8316 13.552H95.0556L99.9836 0.335999Z"
        fill="#CF2C2C"
      />
      <path
        d="M123.709 11.312H119.005V9.184C119.005 6.44 117.829 4.704 115.029 4.704C112.341 4.704 111.109 6.384 111.109 8.568V10.024C111.109 11.648 111.557 12.6 113.293 14C115.813 15.96 119.621 17.976 121.693 19.824C123.429 21.336 124.381 23.128 124.381 26.544V28.84C124.381 34.664 121.637 37.856 115.141 37.856C108.645 37.856 105.957 34.608 105.957 28.504V26.376H110.717V28.56C110.717 31.584 112.005 33.208 115.029 33.208C117.661 33.208 119.117 31.92 119.117 28.952V27.272C119.117 24.976 118.557 24.024 116.709 22.568C114.133 20.44 111.277 19.04 108.981 16.8C107.133 14.896 106.125 12.936 106.125 9.968V8.344C106.125 3.416 108.813 0 114.973 0C121.749 0 123.709 4.088 123.709 9.688V11.312Z"
        fill="white"
      />
      <path
        d="M138.605 28.84V22.344H143.365V28.56C143.365 34.776 140.397 37.856 134.797 37.856C129.029 37.856 126.061 34.496 126.061 28.448V9.296C126.061 3.08 129.029 0 134.629 0C140.285 0 143.365 3.08 143.365 9.24V13.664H138.605V9.24C138.605 6.328 137.317 4.704 134.797 4.704C132.333 4.704 131.045 6.272 131.045 9.184V28.84C131.045 31.696 132.165 33.208 134.797 33.208C137.317 33.208 138.605 31.808 138.605 28.84Z"
        fill="white"
      />
      <path d="M150.325 37.52H145.285V0.335999H150.325V37.52Z" fill="white" />
    </svg>
  );
}
export default Nav;
