import React, { useEffect, useState } from "react";
import "./App.css";

const getRandomColor = () => {
  const hexaDigits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  // TODO: create an new array with only 6 values
  const color = new Array(6)
    .fill("")
    // TODO: Pick random values from hexaDigit
    .map(() => hexaDigits[Math.floor(Math.random() * hexaDigits.length)])
    .join("");
  return `#${color}`;
};

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([""]);
  const [outcome, setOutcome] = useState<boolean | undefined>(undefined);

  const pickColor = () => {
    const actualAnswer = getRandomColor();
    setColor(actualAnswer);
    setAnswers(
      [actualAnswer, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    pickColor();
  }, []);

  const answerClickedHandler = (answer: string) => {
    // TODO: Correct guess
    if (answer === color) {
      setOutcome(true);
      pickColor();
    } else {
      // TODO: Wrong guess
      setOutcome(false);
    }
  };

  return (
    <div className="App">
      <div>
        <div className="guess-color" style={{ background: color }}></div>
        {answers.map((answer) => (
          <button key={answer} onClick={() => answerClickedHandler(answer)}>
            {answer}
          </button>
        ))}
        {outcome === true && <div className="correct">Correct!!</div>}
        {outcome === false && <div className="wrong">Wrong answer!!</div>}
      </div>
    </div>
  );
}

export default App;
