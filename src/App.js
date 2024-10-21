import React, { useState } from "react";
import "./App.css";
import Figure from "./Figure";
import Why from "./Why";

function App() {
  const [inspiringfigures, setInspiringfigures] = useState([]);
  console.log(inspiringfigures);

  if (inspiringfigures.length === 0) {
    fetch("https://wp.pawlean.com/wp-json/wp/v2/posts?categories=50&per_page=100")
      .then(response => {
        return response.json();
      })
      .then(posts => {
        const extract = post => ({
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          link: post.link,
          image: post.jetpack_featured_media_url
        });
        const extracted = posts.map(extract);

        return setInspiringfigures(extracted);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="./IF.png" className="logo" alt="IF" />
        <Why />

        <div className="container">
          {inspiringfigures.map(figure => (
            <Figure
              excerpt={figure.excerpt}
              link={figure.link}
              title={figure.title}
              image={figure.image}
            />
          ))}
        </div>

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
