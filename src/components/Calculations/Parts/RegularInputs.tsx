import React from "react";
import { Input, InputsWrapper } from "../Calculations.style";

type InputsProps = {
  userHitsArr: [];
  dispatch: React.Dispatch<{
    type: any;
    payload: string;
  }>;
};

const inputValues = [
  "SET_HIT_ONE",
  "SET_HIT_TWO",
  "SET_HIT_THREE",
  "SET_HIT_FOUR",
  "SET_HIT_FIVE",
  "SET_HIT_SIX",
];

const RegularInputs: React.FC<InputsProps> = ({ userHitsArr, dispatch }) => {

  return (
    <InputsWrapper>
      {userHitsArr.map((hit, index) => {

        return (
          <Input
            value={hit}
            min="1"
            max="49"
            type="number"
            onChange={(event) =>
              dispatch({
                type: inputValues[index],
                payload: event.target.value,
              })
            }
          />
        );
      })}
    </InputsWrapper>
  );
};

export default RegularInputs;
