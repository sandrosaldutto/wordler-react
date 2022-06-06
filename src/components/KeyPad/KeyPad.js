import './KeyPad.scss';
import { useState, useEffect } from "react"

export default function Keypad( { usedKeys, handleKeyup } ) {

    const [letters, setLetters] = useState(null)

    const handleKeyClick = (key, e) => {
        e.preventDefault()
        console.log(key)
        handleKeyup({key: key})
    }


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
          <button onClick={(e) => handleKeyClick(letter.key, e)} key={letter.key} className={color} >{letter.key}</button>
        )
      })}
      </div> 
    )
  }
  