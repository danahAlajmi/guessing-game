import "./App.css";
import { useState } from "react";
let randomNum = Math.floor(Math.random() * 100) + 1;
function App() {
  const [userGuess, setUserGuess] = useState("");
  const [usercount, setUsercount] = useState(0);
  const [userAllGuessesVal, setUserAllGuessesVal] = useState([]);
  const [randomNumber, setRandomNumber] = useState(randomNum);
  const [disbaled, setDisbaled] = useState(false);
  const [LowhighMsg, setLowOrHighMsg] = useState("");

  const [msg, setMsg] = useState("");

  const handlerValue = (event) => {
    setUserGuess(event.target.value);
  };

  const submitHandler = () => {
    if (Number(randomNumber) === Number(userGuess)) {
      setMsg("Congratulations!");
      setDisbaled(true);
      setLowOrHighMsg("");
    } else if (usercount === 3) {
      setMsg("GAME OVER");
      setDisbaled(true);
      setLowOrHighMsg("");
    } else {
      setMsg("Wrong guess");
      if (randomNum < userGuess) {
        setLowOrHighMsg("your guess is HIGH");
      } else if (randomNum > userGuess) {
        setLowOrHighMsg("your guess is LOW");
      }
    }

    setUsercount(usercount + 1);
    setUserAllGuessesVal([...userAllGuessesVal, userGuess]);
  };
  const restartAgain = () => {
    setDisbaled(false);
    setMsg("");
    setUserAllGuessesVal([]);
    setUsercount(0);
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setUserGuess("");
    setLowOrHighMsg("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Number Guessing game</h1>
        <br />
        <input
          disabled={disbaled}
          value={userGuess}
          type="text"
          onChange={handlerValue}
        />
        <br />
        <button disabled={disbaled} onClick={submitHandler}>
          submit
        </button>
        {disbaled && <button onClick={restartAgain}> Start again</button>}
        <div>
          <p>status:{msg}</p>
          <p>LOW or HIGH: {LowhighMsg}</p>
          <p> Total Round play by user: {usercount}</p>
          <p>
            your guesses:
            {userAllGuessesVal?.map((item, index) => {
              return (
                <span key={index}>
                  {""}
                  {item}, {}
                </span>
              );
            })}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
