//@ts-ignore
import Random from "random-number-arrays";

export type IState = {
  hitOne: string;
  hitTwo: string;
  hitThree: string;
  hitFour: string;
  hitFive: string;
  hitSix: string;
  hitSeven: string;
  hitEight: string;
  hitNine: string;
  hitTen: string;
  hitEleven: string;
  hitTwelve: string;
};

export const userHitsReducer = (
  state: IState,
  action: { type: any; payload: string }
) => {
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
    case "SET_HIT_SEVEN":
      return {
        ...state,
        hitSeven: action.payload,
      };
    case "SET_HIT_EIGHT":
      return {
        ...state,
        hitEight: action.payload,
      };
    case "SET_HIT_NINE":
      return {
        ...state,
        hitNine: action.payload,
      };
    case "SET_HIT_TEN":
      return {
        ...state,
        hitTen: action.payload,
      };
    case "SET_HIT_ELEVEN":
      return {
        ...state,
        hitEleven: action.payload,
      };
    case "SET_HIT_TWELVE":
      return {
        ...state,
        hitTwelve: action.payload,
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
  hitSeven: innitialArray[6],
  hitEight: innitialArray[7],
  hitNine: innitialArray[8],
  hitTen: innitialArray[9],
  hitEleven: innitialArray[10],
  hitTwelve: innitialArray[11],
};
