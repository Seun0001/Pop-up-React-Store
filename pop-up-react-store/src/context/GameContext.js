import React, { createContext, useReducer } from "react";

const initialState = {
  numbers: [],
  correct: null,
  score: 0,
  attempts: 0,
};

const GameContext = createContext(initialState);

const gameReducer = (state, action) => {
  switch (action.type) {
    case "SET_NUMBERS":
      return { ...state, numbers: action.payload };
    case "SET_CORRECT":
      return { ...state, correct: action.payload };
    case "INCREMENT_SCORE":
      return { ...state, score: state.score + 1 };
    case "INCREMENT_ATTEMPTS":
      return { ...state, attempts: state.attempts + 1 };
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
};

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
