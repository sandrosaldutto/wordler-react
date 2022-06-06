import './KeyPad.scss';
import { useState, useEffect } from "react"

export default function Keyppad( { usedKeys } ) {

    const [letters, setLetters] = useState(null)

    useEffect (() => {
        fetch("https://wordler-server.herokuapp.com/letters")
            .then(res => res.json() 
            .then(letters => {
                setLetters(letters)
            }))
    }, [])

    return (
      <div className="keypad">
        {letters && letters.map(letter => {
            const color = usedKeys[letter.key]
        return (
          <div key={letter.key} className={color}>{letter.key}</div>
        )
      })}
      </div>
    )
  }
  