import { useState } from "react";

const useWordler = (answer) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    console.log("formating the guess", currentGuess);

    let answerArray = [...answer];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });

    formattedGuess.forEach((letter, i) => {
      if (answer[i] === letter.key) {
        formattedGuess[i].color = "green";
        answerArray[i] = null;
      }
    });

    return formattedGuess;
  };

  const addNewGuess = () => {};

  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      if (history.includes(currentGuess)) {
        console.log("you alreadsy tried that word");
        return;
      }

      if (currentGuess.length !== 5) {
        console.log("word must be 5 char long");
        return;
      }

      const formatted = formatGuess();
      console.log(formatted);
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordler;
