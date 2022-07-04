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
  Label,
  Option,
  SystemSelect,
  TextWrapper,
} from "../Calculations.style";
import RegularInputs from "./RegularInputs";
import SystemInputs from "./SystemInputs";

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
};

const Inputs: React.FC<Props> = ({
  dispatch,
  setHowManyDraws,
  howManyDraws,
  userHits,
  handleCalculateResults,
  system,
  setSystem,
}) => {
  //hits object to array
  const userHitsArr: any = Object.values(userHits);


  return (
    <InputsContainer>
      <HitsWrapper>
        <TextWrapper>
          <InputsText>1. Wpisz 6 liczb z zakresu 1-49</InputsText>
        </TextWrapper>
        <Label htmlFor="SYSTEM">Wybierz system</Label>
        <SystemSelect
          onChange={(e) => {
            setSystem(parseInt(e.target.value));

          }}
          name="systemSelect"
          id="system"
          form="System"
        >
          <Option value={6}>Bez Systemu</Option>
          <Option value={7}>System 7</Option>
          <Option value={8}>System 8</Option>
          <Option value={9}>System 9</Option>
          <Option value={10}>System 10</Option>
          <Option value={11}>System 11</Option>
          <Option value={12}>System 12</Option>
        </SystemSelect>
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
