import "./WordForm.scss";
import { useEffect, useState } from "react"
import WordlerUI from "../WordlerUI/WordlerUI"

function WordForm () {
  const [question, setQuestion] = useState(null)
  const [answer, setAnswer] = useState(null)

  useEffect (() => {
    fetch("https://wordler-server.herokuapp.com/words")
    .then(res => res.json())
    .then(words => {
      const randomWord = words[Math.floor(Math.random() * words.length)]
      setAnswer(randomWord.answer)
      setQuestion( randomWord.question)
    })
  }, [setAnswer, setQuestion])

  return (
    <section className="form">
        {question && <h3 className="form__scrambled-word"> { question }</h3>}
        <h3 className="form__instructions">Unscramble the word above.</h3>

        {answer && <WordlerUI answer={ answer }/>}
      </section>
  );
}

export default WordForm

