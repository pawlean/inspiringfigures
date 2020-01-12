import React, { useState } from "react";
import "./App.css";
import Figure from "./Figure";

function App() {
  const [inspiringfigures, setInspiringfigures] = useState([]);
  console.log(inspiringfigures);

  if (inspiringfigures.length === 0) {
    fetch("https://pawlean.com/wp-json/wp/v2/posts?categories=50&per_page=100")
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

        <p>Inspiring Figures</p>
      </header>
    </div>
  );
}

export default App;
