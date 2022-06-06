import React from "react";
import useWordler from "../../hooks/useWordler";
import { useEffect, useState } from "react";
import Grid from "../Grid/Grid";
import Modal from "../Modal/Modal"

export default function WordlerUI({ answer }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup } = useWordler(answer);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener("keyup", handleKeyup)
      console.log("you win")
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000)
      console.log("out of guesses ")
      window.removeEventListener("keyup", handleKeyup)
    }

    return () => window.removeEventListener("keyup", handleKeyup)
  }, [handleKeyup, isCorrect, turn])


  return (
  <>
  {/* <div>current guess - {currentGuess}</div> */}
  <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
  {showModal && <Modal isCorrect={isCorrect} turn={turn} answer={answer}/>}
  </>
  )
}
