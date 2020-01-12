import React, { useState } from "react";
import "./App.css";

function Figure(props) {
  const [show, setShow] = useState(false);
  const paraparaparagraph = {__html: props.excerpt};

  return (
    <div className="figure">
      <img
        src={props.image}
        alt="inspiring figure"
        className="Profile"
        onClick={() => setShow(!show)}
      />

      {show && (
        <div className="info">
          <h2>{props.title}</h2>
          <p dangerouslySetInnerHTML={paraparaparagraph}/>
          <br></br>
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="figure-button"
          >
            READ MORE
          </a>
        </div>
      )}
    </div>
  );
}

export default Figure;
