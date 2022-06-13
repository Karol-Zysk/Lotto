type WinsState = {
  threes: number;
  fours: number;
  fives: number;
  sixes: number;
  draws: number;
};

export const WinsReducer = (
  state: WinsState,
  action: { type: any; payload: number }
) => {
  switch (action.type) {
    case "SET_THREES":
      return {
        ...state,
        threes: state.threes + action.payload,
      };
    case "SET_FOURS":
      return {
        ...state,
        fours: state.fours + action.payload,
      };
    case "SET_FIVES":
      return {
        ...state,
        fives: state.fives + action.payload,
      };
    case "SET_SIXES":
      return {
        ...state,
        sixes: state.sixes + action.payload,
      };
    case "SET_DRAWS":
      return {
        ...state,
        draws: state.draws + action.payload,
      };
    case "CLEAR_DRAWS":
      return {
        ...innitialWinState,
      };

    default:
      return state;
  }
};

export const innitialWinState = {
  threes: 0,
  fours: 0,
  fives: 0,
  sixes: 0,
  draws: 0,
};
