import React, { Dispatch, SetStateAction } from "react";
import { IState } from "../../../utils/userArrayReducer";
import {
  BtnWrapper2,
  Button2,
  DrawWrapper,
  HitsWrapper,
  Input,
  InputsContainer,
  InputsText,
  InputsWrapper,
  TextWrapper,
} from "../Calculations.style";

type Props = {
  errorMsg: string;
  howManyDraws: string;
  setHowManyDraws: Dispatch<SetStateAction<string>>;
  dispatch: React.Dispatch<{
    type: any;
    payload: string;
  }>;
  userHits: IState;
  handleCalculateResults: React.MouseEventHandler<HTMLButtonElement>;
};

const Inputs: React.FC<Props> = ({
  dispatch,
  setHowManyDraws,
  howManyDraws,
  userHits,
  handleCalculateResults,
  errorMsg,
}) => {
  return (
    <InputsContainer>
      <HitsWrapper>
        <TextWrapper>
          <InputsText>1. Wpisz 6 liczb z zakresu 1-49</InputsText>
        </TextWrapper>
        <InputsWrapper>
          <Input
            value={userHits.hitOne}
            min="1"
            max="49"
            type="number"
            onChange={(event) =>
              dispatch({ type: "SET_HIT_ONE", payload: event.target.value })
            }
          />
          <Input
            value={userHits.hitTwo}
            min="1"
            max="49"
            type="number"
            onChange={(event) =>
              dispatch({ type: "SET_HIT_TWO", payload: event.target.value })
            }
          />
          <Input
            value={userHits.hitThree}
            min="1"
            max="49"
            type="number"
            onChange={(event) =>
              dispatch({ type: "SET_HIT_THREE", payload: event.target.value })
            }
          />
          <Input
            value={userHits.hitFour}
            min="1"
            max="49"
            type="number"
            onChange={(event) =>
              dispatch({ type: "SET_HIT_FOUR", payload: event.target.value })
            }
          />
          <Input
            value={userHits.hitFive}
            min="1"
            max="49"
            type="number"
            onChange={(event) =>
              dispatch({ type: "SET_HIT_FIVE", payload: event.target.value })
            }
          />
          <Input
            value={userHits.hitSix}
            min="1"
            max="49"
            type="number"
            onChange={(event) =>
              dispatch({ type: "SET_HIT_SIX", payload: event.target.value })
            }
          />
        </InputsWrapper>
      </HitsWrapper>
      <DrawWrapper>
        <TextWrapper>
          <InputsText>2. Ustaw ilość losowań</InputsText>
        </TextWrapper>
        <BtnWrapper2>
          <Input
            style={{ width: "8.5rem", alignSelf: "center" }}
            value={howManyDraws ? howManyDraws : ""}
            min="1"
            max="20000000"
            type="number"
            onChange={(e) => setHowManyDraws(e.target.value || "")}
          />

          <Button2 onClick={handleCalculateResults}>Losuj</Button2>
        </BtnWrapper2>
      </DrawWrapper>

      
    </InputsContainer>
  );
};

export default Inputs;
