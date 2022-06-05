import { Component } from "react";
import "./WordForm.scss";
import getData from "../../components/utils/api";
import cta from "../../assets/cta.svg";
import { useEffect, useState } from "react"

// function randomWord(array) {
//   const random = Math.floor(Math.random() * array.length);
//   return array[random];
// }

function WordForm () {

  const [word, setWord] = useState(null)

  useEffect (() => {
    fetch("https://wordler-server.herokuapp.com/words")
    .then(res => res.json())
    .then(words => {
      const randomWord = words[Math.floor(Math.random() * words.length)]
      setWord(randomWord.question)
    })
  }, [setWord])

  return (
    <section className="form">
        {word && <h3 className="form__scrambled-word"> { word }</h3>}
        {/* <form className="form__container">
          <div className="form__input-container">
            <p className="form__instructions">Unscramble the word above.</p>
            <div className="form__inputs">
              <input
                placeholder="W"
                name="input1"
                className={
                  "form__input " +
                  (this.state.letter1
                    ? "form__input--true"
                    : "form__input--false")
                }
              ></input>
              <input
                placeholder="X"
                name="input2"
                className={
                  "form__input " +
                  (this.state.letter2
                    ? "form__input--true"
                    : "form__input--false")
                }
              ></input>
              <input
                placeholder="Z"
                name="input3"
                className={
                  "form__input " +
                  (this.state.letter3
                    ? "form__input--true"
                    : "form__input--false")
                }
              ></input>
              <input
                placeholder="Y"
                name="input4"
                className={
                  "form__input " +
                  (this.state.letter4
                    ? "form__input--true"
                    : "form__input--false")
                }
              ></input>
              <input
                placeholder="V"
                name="input5"
                className={
                  "form__input " +
                  (this.state.letter5
                    ? "form__input--true"
                    : "form__input--false")
                }
              ></input>
            </div>
          </div>
          <div className="form__button-container">
            <button onClick={this.handleSkip} className="form__skip">
              Skip
            </button>
            <button type="submit" className="form__submit">
              Submit
            </button>
          </div>
        </form> */}
      </section>
  );
}

export default WordForm

// class WordInput extends Component {
//   state = {
//     words: "",
//     currentWord: "",
//     question: "",
//     letter1: false,
//     letter2: false,
//     letter3: false,
//     letter4: false,
//     letter5: false,
//     correct: false,
//   };
//   componentDidMount() {
//     getData.getWords().then((res) => {
//       let currentWordObject = randomWord(res.data);
//       this.setState({
//         words: res.data,
//         currentWord: currentWordObject.answer,
//         question: currentWordObject.question,
//       });
//     });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     if (this.state.currentWord.charAt(0) === e.target.input1.value) {
//       this.setState({
//         letter1: true,
//       });
//     } else {
//       return;
//     }
//     if (this.state.currentWord.charAt(1) === e.target.input2.value) {
//       this.setState({
//         letter2: true,
//       });
//     } else {
//       return;
//     }
//     if (this.state.currentWord.charAt(2) === e.target.input3.value) {
//       this.setState({
//         letter3: true,
//       });
//     } else {
//       return;
//     }
//     if (this.state.currentWord.charAt(3) === e.target.input4.value) {
//       this.setState({
//         letter4: true,
//       });
//     } else {
//       return;
//     }
//     if (this.state.currentWord.charAt(4) === e.target.input5.value) {
//       this.setState({
//         letter5: true,
//       });
//     } else {
//       return;
//     }
    
//     this.showCTA();

//     e.target.input1.value = "";
//     e.target.input2.value = "";
//     e.target.input3.value = "";
//     e.target.input4.value = "";
//     e.target.input5.value = "";

//     let currentWordObject = randomWord(this.state.words);
//     this.setState({
//       currentWord: currentWordObject.answer,
//       question: currentWordObject.question,
//       letter1: false,
//       letter2: false,
//       letter3: false,
//       letter4: false,
//       letter5: false,
//     });
//   };

//   showCTA = () => {
//     this.setState({
//       correct: true,
//     });
//     setTimeout(() => {
//       this.setState({
//         correct: false,
//       });
//     }, 2000);
//   };

//   handleSkip = (e) => {
//     let currentWordObject = randomWord(this.state.words);
//     this.setState({
//       currentWord: currentWordObject.answer,
//       question: currentWordObject.question,
//       letter1: false,
//       letter2: false,
//       letter3: false,
//       letter4: false,
//       letter5: false,
//     });
//   };

//   render() {
//     if (!this.state.words) {
//       return <>loading...</>;
//     }
//     return (
//       <section className="form">
//         {this.state.correct ? (
//           <img className="form__cta" src={cta} alt="cta"></img>
//         ) : (
//           ""
//         )}
//         <h3 className="form__scrambled-word">{this.state.question}</h3>
//         <form className="form__container" onSubmit={this.handleSubmit}>
//           <div className="form__input-container">
//             <p className="form__instructions">Unscramble the word above.</p>
//             <div className="form__inputs">
//               <input
//                 placeholder="W"
//                 name="input1"
//                 className={
//                   "form__input " +
//                   (this.state.letter1
//                     ? "form__input--true"
//                     : "form__input--false")
//                 }
//               ></input>
//               <input
//                 placeholder="X"
//                 name="input2"
//                 className={
//                   "form__input " +
//                   (this.state.letter2
//                     ? "form__input--true"
//                     : "form__input--false")
//                 }
//               ></input>
//               <input
//                 placeholder="Z"
//                 name="input3"
//                 className={
//                   "form__input " +
//                   (this.state.letter3
//                     ? "form__input--true"
//                     : "form__input--false")
//                 }
//               ></input>
//               <input
//                 placeholder="Y"
//                 name="input4"
//                 className={
//                   "form__input " +
//                   (this.state.letter4
//                     ? "form__input--true"
//                     : "form__input--false")
//                 }
//               ></input>
//               <input
//                 placeholder="V"
//                 name="input5"
//                 className={
//                   "form__input " +
//                   (this.state.letter5
//                     ? "form__input--true"
//                     : "form__input--false")
//                 }
//               ></input>
//             </div>
//           </div>
//           <div className="form__button-container">
//             <button onClick={this.handleSkip} className="form__skip">
//               Skip
//             </button>
//             <button type="submit" className="form__submit">
//               Submit
//             </button>
//           </div>
//         </form>
//       </section>
//     );
//   }
// }
// export default WordInput;
