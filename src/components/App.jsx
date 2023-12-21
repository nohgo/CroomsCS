import "../App.css";
import Nav from "./Nav.jsx";
import MainText from "./MainText.jsx";
import Projects from "./Projects.jsx";
import Roadmap from "./Roadmap.jsx";
import Information from "./Information";

function App() {
  return (
    <>
      <div className="page">
        <Nav />
        <MainText />
      </div>
      <Projects />
      <Roadmap />
      <Information />
    </>
  );
}

export default App;
