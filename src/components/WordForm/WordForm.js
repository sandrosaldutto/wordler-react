import { Component } from "react";
import "./WordForm.scss";
import getData from "../../components/utils/api"

class WordInput extends Component {
  state = {
    words: null,
  }

  componentDidMount() {
    getData
      .getWords()
      .then((res) => {
        this.setState({
          words: res.data
        })
      })};
  
  render(){
    if (!this.state.words) {
      return <>loading...</>
    }

  return (
    <section className="form">
      <h3 className="form__scrambled-word">{this.state.words[0].question}</h3>
      <form className="form__container">
        <div className="form__input-container">
          <input className="form__input"></input>
          <input className="form__input"></input>
          <input className="form__input"></input>
          <input className="form__input"></input>
          <input className="form__input"></input>
        </div>
        <div className="form__button-container">
        <button className="form__submit">Submit</button>
        <button className="form__next">Next</button>
        </div>
      </form>
    </section>
  );
}
}

export default WordInput;
