import './Modal.scss';

export default function Modal({ isCorrect, turn, answer}) {
    return (
      <div className="modal">
       {isCorrect && (
           <div>
               <h1> You Win </h1>
               <p className="answer"> {answer} </p>
               <p>You found the solution in {turn} guesses</p>
           </div>
       )}
        {!isCorrect && (
           <div>
               <h1> You Lose </h1>
               <p className="answer"> {answer} </p>
               <p>Better luck next time</p>
           </div>
       )}
      </div>
    )
  }
  