import React from "react";
import "./App.css";
import Why from "./Why";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./IF.png" className="logo" alt="IF" />
        <Why />

     

        <div className="footer">
          <a
            href="https://pawlean.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pawlean
          </a>{" "}
          |{" "}
          <a
            href="https://www.youtube.com/playlist?list=PLkR4A7sk9JzZBiZ-BmRpMRF96fWqA1q9I"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch online
          </a>{" "}
          |{" "}
          <a
            href="https://clarknarvas.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CN Productions
          </a>
          <p className="copyright">
            © Pauline P. Narvas, 2018 - 2020
            <br></br>
            <br></br>
            <a
              href="https://twitter.com/inspirefigures"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter <i class="fab fa-twitter-square"></i>
            </a>{" "}
            |{" "}
            <a
              href="https://instagram.com/inspiringfigures"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <i class="fab fa-instagram"></i>
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
