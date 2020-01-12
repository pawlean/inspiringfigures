import React, { useState } from "react";
import "./App.css";

function Why() {
  const [show, setShow] = useState(false);

  return (
    <p>
      The people that you should{" "}
      <span onClick={() => setShow(!show)}>
        <em>really</em> know about
      </span>
      {show && (
        <div className="Why">
          Have you ever met someone, get talking and leave feeling refreshed,
          pumped and motivated? Inspired by the story <em>"Hidden Figures"</em>{" "}
          - Inspiring Figures highlights the people around the world that give
          me that exact feeling. You should get to know them!
        </div>
      )}
    </p>
  );
}

export default Why;
