export const setNumbers = (numbers) => ({
  type: "SET_NUMBERS",
  payload: numbers,
});

export const setCorrect = (correct) => ({
  type: "SET_CORRECT",
  payload: correct,
});

export const incrementScore = () => ({
  type: "INCREMENT_SCORE",
});

export const incrementAttempts = () => ({
  type: "INCREMENT_ATTEMPTS",
});
