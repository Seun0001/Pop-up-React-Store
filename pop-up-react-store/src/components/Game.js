import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/GameContext";
import { useNavigate } from "react-router-dom";
import "./Game.css";

const predefinedNumbers = [2, 98, 4, 10, 6, 1, 52, 88, 24, 36, 41, 100];

const generateRandomNumbers = (correct) => {
  const numbers = [correct];
  while (numbers.length < 4) {
    const random = Math.floor(Math.random() * 100) + 1;
    if (!numbers.includes(random)) {
      numbers.push(random);
    }
  }
  numbers.sort(() => Math.random() - 0.5);
  return numbers;
};

const Game = () => {
  const { state, dispatch } = useContext(GameContext);
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const correct = predefinedNumbers[currentIndex];
    const numbers = generateRandomNumbers(correct);
    dispatch({ type: "SET_NUMBERS", payload: numbers });
    dispatch({ type: "SET_CORRECT", payload: correct });
  }, [currentIndex, dispatch]);

  const handleClick = (number) => {
    setSelected(number);
    dispatch({ type: "INCREMENT_ATTEMPTS" });
    if (number === state.correct) {
      dispatch({ type: "INCREMENT_SCORE" });
    }
    setTimeout(() => {
      if (currentIndex === 19) {
        navigate("/result");
      } else {
        setCurrentIndex(currentIndex + 1);
        setSelected(null);
      }
    }, 1000);
  };

  return (
    <div className="game-container">
      <h1>Pop Up React Store Random Generate Number</h1>
      <p className="round-indicator">
        Pick the correct random number from {currentIndex + 1} - 20
      </p>
      <div className="numbers-container">
        {state.numbers.map((number, index) => (
          <button
            key={index}
            onClick={() => handleClick(number)}
            className="number-button"
            style={{
              backgroundColor:
                selected === null
                  ? "initial"
                  : number === state.correct
                  ? "green"
                  : number === selected
                  ? "red"
                  : "initial",
              color: "black",
            }}
            disabled={selected !== null}
          >
            {number}
          </button>
        ))}
      </div>
      {selected !== null && (
        <p
          className="result-message"
          style={{ color: selected === state.correct ? "green" : "red" }}
        >
          {selected === state.correct ? "Correct answer" : "Wrong answer"}
        </p>
      )}
    </div>
  );
};

export default Game;
