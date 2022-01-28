import "./App.css";
import img from "../src/assets/1.jpeg";

function App() {
  return (
    <div className="App">
      <div id="maria" style={{ maxWidth: "100vw" }}>
        <h1 className="title">Tennis player</h1>
        <div id="back">
          <img src="maria.png" alt="maria"></img>
          <br />
          <img src={img} alt="maria"></img>
        </div>
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/q3LiBvA4trI?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
