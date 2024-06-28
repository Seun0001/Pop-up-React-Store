const initialState = {
  score: 0,
  attempts: 0,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_SCORE":
      return { ...state, score: state.score + 1 };
    case "INCREMENT_ATTEMPTS":
      return { ...state, attempts: state.attempts + 1 };
    default:
      return state;
  }
};

export default gameReducer;
