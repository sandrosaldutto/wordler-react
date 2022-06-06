import { useState } from 'react'

const useWordler = (answer) => {
  const [turn, setTurn] = useState(0) 
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedKeys, setUsedKeys] = useState({})

  
  const formatGuess = () => {
    let answerArray = [...answer]
    let formattedGuess = [...currentGuess].map((letter) => {
      return {key: letter, color: 'grey'}
    })

    // find any green letters
    formattedGuess.forEach((letter, i) => {
      if (answer[i] === letter.key) {
        formattedGuess[i].color = 'green'
        answerArray[i] = null
      }
    })
    
    return formattedGuess
  }


  const addNewGuess = (formattedGuess) => {
    if (currentGuess === answer) {
      setIsCorrect(true)
    }
    setGuesses(prevGuesses => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })
    setHistory(prevHistory => {
      return [...prevHistory, currentGuess]
    })
    setTurn(prevTurn => {
      return prevTurn + 1
    })
    setUsedKeys((prevUsedKeys) => {
      let newKeys = {...prevUsedKeys}

      formattedGuess.forEach((letter) => {
        const currentColor = newKeys[letter.key]

        if(letter.color === "green") {
          newKeys[letter.key] = "green"
          return
        }

        if(letter.color === "grey" && currentColor !== "green") {
          newKeys[letter.key] = "grey"
          return
        }
      })
      return newKeys
    })
    setCurrentGuess('')
  }

  
  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {
      if (turn > 5) {
        console.log('you used all your guesses!')
        return
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log('you already tried that word.')
        return
      }
      // check word is 5 chars
      if (currentGuess.length !== 5) {
        console.log('word must be 5 chars.')
        return
      }
      const formatted = formatGuess()
      addNewGuess(formatted)
    }
    if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1))
      return
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prev => prev + key)
      }
    }
  }

  return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup}
}

export default useWordler
