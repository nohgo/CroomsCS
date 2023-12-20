import "../App.css";
import Nav from "./Nav.jsx";
import MainText from "./MainText.jsx";
import Portfolio from "./Portfolio.jsx";
import Roadmap from "./Roadmap.jsx";
import Contact from "./Contact";

function App() {
  return (
    <>
      <div>
        <Nav />
        <MainText />
        <Portfolio />
        <Roadmap />
      </div>
      <Contact />
    </>
  );
}

export default App;
