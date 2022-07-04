import React, { Dispatch, SetStateAction } from "react";
import { IState, systemTypes } from "../../../../type";
import {
  BtnWrapper2,
  Button2,
  DrawWrapper,
  HitsWrapper,
  Input,
  InputsContainer,
  InputsText,
  TextWrapper,
} from "../Calculations.style";
import RegularInputs from "./RegularInputs";
import SystemInputs from "./SystemInputs";
import SystemSelect from "./SystemSelect";

type Props = {
  howManyDraws: string;
  setHowManyDraws: Dispatch<SetStateAction<string>>;
  dispatch: React.Dispatch<{
    type: any;
    payload: string;
  }>;
  userHits: IState;
  handleCalculateResults: React.MouseEventHandler<HTMLButtonElement>;
  system: systemTypes;
  setSystem: React.Dispatch<React.SetStateAction<systemTypes>>;
  price: number;
};

const Inputs: React.FC<Props> = ({
  dispatch,
  setHowManyDraws,
  howManyDraws,
  userHits,
  handleCalculateResults,
  system,
  setSystem,
  price,
}) => {
  //hits object to array
  const userHitsArr: any = Object.values(userHits);

  return (
    <InputsContainer>
      <HitsWrapper>
        <TextWrapper>
          <InputsText>1. Wpisz 6 liczb z zakresu 1-49</InputsText>
        </TextWrapper>
        <SystemSelect price={price} setSystem={setSystem} />
        <RegularInputs
          userHitsArr={userHitsArr.slice(0, 6)}
          dispatch={dispatch}
        />
        <SystemInputs
          system={system}
          userHitsArr={userHitsArr.slice(6, system)}
          dispatch={dispatch}
        />
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
