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
               <p className="modal__guesses">You found the solution in {turn} guesses.</p>
               <button className="modal__next" onClick={ refreshPage }>Next Word</button>
           </div>
       )}
        {!isCorrect && (
           <div>
               <h1> You Lose </h1>
               <p className="answer"> {answer} </p>
               <p>Better luck next time.</p>
               <button className="modal__next" onClick={ refreshPage }>Next Word</button>
           </div>
       )}
      </div>
    )
  }
  