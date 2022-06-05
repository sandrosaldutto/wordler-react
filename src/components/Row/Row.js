import React from 'react'
import "./Row.scss";

export default function Row({ guess }) {

  if (guess) {
    return (
      <div className="row past">
        {guess.map((letter, i) => (
          <div key={i} className={letter.color}>{letter.key}</div>
        ))}
      </div>
    )
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
  
}

