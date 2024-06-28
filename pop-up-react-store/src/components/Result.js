import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import "./Result.css"

const Result = () => {
  const { state } = useContext(GameContext);
  const resultMessage =
    state.score >= 15 ? "Congratulations! You passed!" : "Sorry, you failed.";

  return (
    <div className="result-container">
      <h1>Result</h1>
      <p>{resultMessage}</p>
      <p>Your score: {state.score}/20</p>
    </div>
  );
};

export default Result;
