import React from "react";
import "./index.css";
import Search from "./search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Weather App</h1>
          <Search />
        </header>
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/JohnNesha">JohnNesha Graves</a> and is on{" "}
          <a href="https://github.com/JohnNesha/weather-react">Github</a> and
          hosted on <a href="https://react-weatherjg.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
