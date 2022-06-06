import './Modal.scss';

export default function Modal({ isCorrect, turn, answer}) {

    function refreshPage() {
        window.location.reload(false);
      }
    

    return (
      <div className="modal">
       {isCorrect && (
           <div>
               <h1> You Win </h1>
               <p className="answer"> {answer} </p>
               <p>You found the solution in {turn} guesses</p>
               <button onClick={ refreshPage }></button>
           </div>
       )}
        {!isCorrect && (
           <div>
               <h1> You Lose </h1>
               <p className="answer"> {answer} </p>
               <p>Better luck next time</p>
               <button onClick={ refreshPage }></button>
           </div>
       )}
      </div>
    )
  }
  