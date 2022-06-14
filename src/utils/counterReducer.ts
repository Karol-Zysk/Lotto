export type CounterState = {
  threesCount: number;
  foursCount: number;
  fivesCount: number;
  sixesCount: number;
  drawsCount: number;
};

export const CounterReducer = (
  state: CounterState,
  action: { type: any; payload: number }
) => {
  switch (action.type) {
    case "COUNT_THREES":
      return {
        ...state,
        threesCount: action.payload,
      };
    case "COUNT_FOURS":
      return {
        ...state,
        foursCount: action.payload,
      };
    case "COUNT_FIVES":
      return {
        ...state,
        fivesCount: action.payload,
      };
    case "COUNT_SIXES":
      return {
        ...state,
        sixesCount: action.payload,
      };
    case "COUNT_DRAWS":
      return {
        ...state,
        drawsCount: action.payload,
      };
    case "CLEAR_DRAWS":
      return {
        ...innitialCounterState,
      };

    default:
      return state;
  }
};

export const innitialCounterState = {
  threesCount: 0,
  foursCount: 0,
  fivesCount: 0,
  sixesCount: 0,
  drawsCount: 0,
};
