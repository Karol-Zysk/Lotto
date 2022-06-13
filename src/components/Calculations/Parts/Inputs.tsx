import React, { Dispatch, SetStateAction } from "react";
import { IState } from "../../../utils/userArrayReducer";
import {
  DrawWrapper,
  HitsWrapper,
  Input,
  InputsContainer,
  InputsWrapper,
} from "../Calculations.style";

type Props = {
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
}) => {
  return (
    <InputsContainer>
      <HitsWrapper>
        <div>
          <h2>Wpisz 6 liczb z zakresu 1-49</h2>
          <p>*w innym przypadku wykorzystane zostaną losowe liczby</p>
        </div>
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
        <h1>Ilość Losowań</h1>
        <Input
          value={howManyDraws ? howManyDraws : ""}
          min="1"
          max="20000000"
          type="number"
          onChange={(e) => setHowManyDraws(e.target.value || "")}
        />
      </DrawWrapper>
      <button onClick={handleCalculateResults}>Create Arr</button>
    </InputsContainer>
  );
};

export default Inputs;
