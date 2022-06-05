import React from "react";
import useWordler from "../../hooks/useWordler";
import { useEffect } from "react";
import Grid from "../Grid/Grid";

export default function WordlerUI({ answer }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup } = useWordler(answer);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup)

    return () => window.removeEventListener("keyup", handleKeyup)
  }, [handleKeyup])

  useEffect(() => {
      console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
  <>
  <div>current guess - {currentGuess}</div>
  <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
  </>
  )
}
