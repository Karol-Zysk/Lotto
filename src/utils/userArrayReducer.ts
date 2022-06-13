//@ts-ignore
import Random from "random-number-arrays";

export type IState = {
  hitOne: string;
  hitTwo: string;
  hitThree: string;
  hitFour: string;
  hitFive: string;
  hitSix: string;
};

export const userHitsReducer = (state: IState, action: { type: any; payload: string }) => {
  switch (action.type) {
    case "SET_HIT_ONE":
      return {
        ...state,
        hitOne: action.payload,
      };
    case "SET_HIT_TWO":

      return {
        ...state,
        hitTwo: action.payload,
      };
    case "SET_HIT_THREE":
      return {
        ...state,
        hitThree: action.payload,
      };
    case "SET_HIT_FOUR":
      return {
        ...state,
        hitFour: action.payload,
      };
    case "SET_HIT_FIVE":
      return {
        ...state,
        hitFive: action.payload,
      };
    case "SET_HIT_SIX":
      return {
        ...state,
        hitSix: action.payload,
      };
    default:
      return state;
  }
};

//setting initial random array options
export const InitialArrOptions = {
  min: 1,
  max: 49,
  type: "array",
  arraySize: 6,
  unique: true,
};

//random user Array to compare with
export const innitialArray = Random(InitialArrOptions);

export const innitialArrayState = {
  hitOne: innitialArray[0],
  hitTwo: innitialArray[1],
  hitThree: innitialArray[2],
  hitFour: innitialArray[3],
  hitFive: innitialArray[4],
  hitSix: innitialArray[5],
};
