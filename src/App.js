import './App.scss';
import Instructions from './components/Instructions/Instructions';
import Logo from "./components/Logo/Logo"
import WordForm from './components/WordForm/WordForm';
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Logo/>
      <Instructions/>
      <BrowserRouter>
        <Route path="/" exact component={WordForm}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
