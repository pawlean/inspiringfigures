import React, { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [inspiringfigures, setInspiringfigures] = useState([]);
  console.log(inspiringfigures);

  
    if (inspiringfigures.length === 0) {

      fetch('https://pawlean.com/wp-json/wp/v2/posts?categories=50')
      .then((response) => {
        return response.json();
      })
      .then((posts) => {
  
        const extract = post => ({
          excerpt: post.excerpt.rendered,
          link: post.link,
          image: post.jetpack_featured_media_url,
        });
        const extracted = posts.map(extract);
        
        return setInspiringfigures(extracted);
      })
    }
    


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        
          <div className="figure">
          <img src="https://raw.githubusercontent.com/pawlean/inspiring-figures/master/app/public/img/Ishan.jpg" alt="Ishan Beri" className="Profile" onClick={() => setShow(!show)}/>

          {
            show && <div className="info">
              (inspiringfigures) 
            </div>
          }
          
         
            
          </div>

        </div>
        <p>
          Inspiring Figures
        </p>
        
      </header>
    </div>
  );
}

export default App;
