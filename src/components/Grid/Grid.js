import Row from '../Row/Row';
import './Grid.scss';

export default function Grid({ guesses, currentGuess, turn }) {
    return (
      <div>
        {guesses.map((g, i) => {
          return <Row key={i}  guess={g}/> 
        })}
      </div>
    )
  }
  